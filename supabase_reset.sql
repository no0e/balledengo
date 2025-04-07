-- Suppression des tables existantes
DROP TABLE IF EXISTS reviews CASCADE;
DROP TABLE IF EXISTS messages CASCADE;
DROP TABLE IF EXISTS notifications CASCADE;
DROP TABLE IF EXISTS payments CASCADE;
DROP TABLE IF EXISTS bookings CASCADE;
DROP TABLE IF EXISTS courts CASCADE;
DROP TABLE IF EXISTS zone_sport_configurations CASCADE;
DROP TABLE IF EXISTS sport_zones CASCADE;
DROP TABLE IF EXISTS location_images CASCADE;
DROP TABLE IF EXISTS locations CASCADE;
DROP TABLE IF EXISTS sports CASCADE;
DROP TABLE IF EXISTS user_social_profiles CASCADE;
DROP TABLE IF EXISTS users CASCADE;

-- Suppression des types énumérés
DROP TYPE IF EXISTS user_role CASCADE;
DROP TYPE IF EXISTS location_status CASCADE;
DROP TYPE IF EXISTS court_type CASCADE;
DROP TYPE IF EXISTS court_status CASCADE;
DROP TYPE IF EXISTS booking_status CASCADE;
DROP TYPE IF EXISTS payment_status CASCADE;
DROP TYPE IF EXISTS notification_type CASCADE;

-- Création des types énumérés
CREATE TYPE user_role AS ENUM ('player', 'owner', 'admin');
CREATE TYPE location_status AS ENUM ('active', 'inactive', 'maintenance');
CREATE TYPE court_type AS ENUM ('full', 'half', 'quarter');
CREATE TYPE court_status AS ENUM ('available', 'maintenance', 'booked');
CREATE TYPE booking_status AS ENUM ('pending', 'confirmed', 'cancelled', 'completed');
CREATE TYPE payment_status AS ENUM ('pending', 'completed', 'failed', 'refunded');
CREATE TYPE notification_type AS ENUM ('booking', 'message', 'review', 'system');

-- Tables de gestion des utilisateurs et des sports
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    profile_picture_url VARCHAR(500),
    phone_number VARCHAR(20),
    role user_role DEFAULT 'player',
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_login TIMESTAMP,
    is_verified BOOLEAN DEFAULT FALSE,
    language_preference VARCHAR(10),
    social_links JSONB
);

CREATE TABLE user_social_profiles (
    profile_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    platform VARCHAR(50),
    platform_user_id VARCHAR(255),
    access_token TEXT
);

CREATE TABLE sports (
    sport_id SERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    icon_url VARCHAR(500)
);

-- Tables de gestion des lieux et zones
CREATE TABLE locations (
    location_id SERIAL PRIMARY KEY,
    owner_id INTEGER REFERENCES users(user_id),
    name VARCHAR(255) NOT NULL,
    address VARCHAR(500) NOT NULL,
    latitude DECIMAL(10, 8),
    longitude DECIMAL(11, 8),
    city VARCHAR(100),
    postal_code VARCHAR(20),
    country VARCHAR(100),
    description TEXT,
    phone_number VARCHAR(20),
    website VARCHAR(255),
    status location_status DEFAULT 'active'
);

CREATE TABLE location_images (
    image_id SERIAL PRIMARY KEY,
    location_id INTEGER REFERENCES locations(location_id),
    image_url VARCHAR(500) NOT NULL,
    is_primary BOOLEAN DEFAULT FALSE,
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE sport_zones (
    zone_id SERIAL PRIMARY KEY,
    location_id INTEGER REFERENCES locations(location_id),
    name VARCHAR(100),
    total_area DECIMAL(10,2),
    indoor BOOLEAN DEFAULT FALSE,
    surface_type VARCHAR(100),
    max_capacity INTEGER
);

CREATE TABLE zone_sport_configurations (
    config_id SERIAL PRIMARY KEY,
    zone_id INTEGER REFERENCES sport_zones(zone_id),
    sport_id INTEGER REFERENCES sports(sport_id),
    court_type court_type DEFAULT 'full',
    court_length DECIMAL(6,2),
    court_width DECIMAL(6,2),
    max_courts_possible INTEGER,
    default_courts INTEGER,
    price_per_hour DECIMAL(10,2)
);

CREATE TABLE courts (
    court_id SERIAL PRIMARY KEY,
    config_id INTEGER REFERENCES zone_sport_configurations(config_id),
    court_number VARCHAR(50),
    current_sport_id INTEGER REFERENCES sports(sport_id),
    status court_status DEFAULT 'available',
    specific_setup_details JSONB
);

-- Tables de réservation et paiement
CREATE TABLE bookings (
    booking_id SERIAL PRIMARY KEY,
    court_id INTEGER REFERENCES courts(court_id),
    user_id INTEGER REFERENCES users(user_id),
    start_datetime TIMESTAMP NOT NULL,
    end_datetime TIMESTAMP NOT NULL,
    total_price DECIMAL(10,2),
    status booking_status DEFAULT 'pending',
    payment_status payment_status DEFAULT 'pending',
    payment_transaction_id VARCHAR(255),
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE payments (
    payment_id SERIAL PRIMARY KEY,
    booking_id INTEGER REFERENCES bookings(booking_id),
    user_id INTEGER REFERENCES users(user_id),
    amount DECIMAL(10,2),
    currency VARCHAR(10),
    payment_method VARCHAR(50),
    payment_gateway VARCHAR(50),
    transaction_id VARCHAR(255),
    status payment_status,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tables sociales et de feedback
CREATE TABLE reviews (
    review_id SERIAL PRIMARY KEY,
    booking_id INTEGER REFERENCES bookings(booking_id),
    reviewer_id INTEGER REFERENCES users(user_id),
    location_id INTEGER REFERENCES locations(location_id),
    rating DECIMAL(3,2) CHECK (rating BETWEEN 0 AND 5),
    comment TEXT,
    review_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_verified BOOLEAN DEFAULT FALSE
);

CREATE TABLE messages (
    message_id SERIAL PRIMARY KEY,
    sender_id INTEGER REFERENCES users(user_id),
    receiver_id INTEGER REFERENCES users(user_id),
    booking_id INTEGER REFERENCES bookings(booking_id),
    content TEXT,
    sent_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_read BOOLEAN DEFAULT FALSE
);

CREATE TABLE notifications (
    notification_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    type notification_type NOT NULL,
    content TEXT,
    related_id INTEGER,
    is_read BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index pour optimisation des requêtes
CREATE INDEX idx_location_geo ON locations(latitude, longitude);
CREATE INDEX idx_zone_location ON sport_zones(location_id);
CREATE INDEX idx_court_config ON courts(config_id);
CREATE INDEX idx_booking_court ON bookings(court_id);
CREATE INDEX idx_booking_status ON bookings(status);
CREATE INDEX idx_user_email ON users(email);

-- Vue pour configuration des zones
CREATE VIEW available_zone_configurations AS
SELECT 
    l.name AS location_name,
    sz.name AS zone_name,
    s.name AS sport_name,
    zsc.max_courts_possible,
    zsc.default_courts,
    zsc.price_per_hour
FROM locations l
JOIN sport_zones sz ON l.location_id = sz.location_id
JOIN zone_sport_configurations zsc ON sz.zone_id = zsc.zone_id
JOIN sports s ON zsc.sport_id = s.sport_id; 