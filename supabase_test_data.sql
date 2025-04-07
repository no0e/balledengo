-- Ajout des utilisateurs
INSERT INTO users (email, password_hash, first_name, last_name, role, is_verified, phone_number)
VALUES 
  ('admin@sportspot.fr', 'hashed_password_123', 'Admin', 'System', 'admin', true, '0123456789'),
  ('owner1@sportspot.fr', 'hashed_password_456', 'Jean', 'Dupont', 'owner', true, '0123456788'),
  ('owner2@sportspot.fr', 'hashed_password_789', 'Marie', 'Martin', 'owner', true, '0123456787'),
  ('player1@sportspot.fr', 'hashed_password_101', 'Pierre', 'Bernard', 'player', true, '0123456786'),
  ('player2@sportspot.fr', 'hashed_password_102', 'Sophie', 'Petit', 'player', true, '0123456785');

-- Ajout des sports
INSERT INTO sports (name, description, icon_url)
VALUES 
  ('Football', 'Sport collectif joué avec un ballon rond', 'https://cdn-icons-png.flaticon.com/512/53/53283.png'),
  ('Basketball', 'Sport collectif joué avec un ballon orange', 'https://cdn-icons-png.flaticon.com/512/2168/2168281.png'),
  ('Tennis', 'Sport de raquette joué sur un court', 'https://cdn-icons-png.flaticon.com/512/2168/2168281.png'),
  ('Volleyball', 'Sport collectif joué avec un ballon', 'https://cdn-icons-png.flaticon.com/512/2168/2168281.png'),
  ('Padel', 'Sport de raquette similaire au tennis', 'https://cdn-icons-png.flaticon.com/512/2168/2168281.png');

-- Ajout des lieux (en utilisant les IDs des propriétaires créés)
INSERT INTO locations (owner_id, name, address, city, postal_code, country, description, phone_number, website, status, latitude, longitude)
VALUES 
  (2, 'Terrain de football municipal', '123 rue des Sports', 'Paris', '75001', 'France', 'Terrain de football en gazon synthétique, éclairé', '01 23 45 67 89', 'https://www.paris.fr', 'active', 48.8566, 2.3522),
  (2, 'Complexe sportif du centre', '45 avenue des Athlètes', 'Lyon', '69001', 'France', 'Complexe multi-sports avec terrains de football, basketball et volleyball', '04 56 78 90 12', 'https://www.lyon.fr', 'active', 45.7578, 4.8320),
  (3, 'Tennis Club de la ville', '78 boulevard des Champions', 'Marseille', '13001', 'France', 'Club de tennis avec 6 courts en terre battue et 2 courts en dur', '04 91 23 45 67', 'https://www.marseille.fr', 'active', 43.2965, 5.3698),
  (3, 'Terrain de padel privé', '12 rue des Jeux', 'Bordeaux', '33000', 'France', 'Terrain de padel couvert avec éclairage', '05 56 78 90 12', 'https://www.bordeaux.fr', 'active', 44.8378, -0.5792);

-- Ajout des images pour les lieux
INSERT INTO location_images (location_id, image_url, is_primary)
VALUES 
  (1, 'https://example.com/images/football1.jpg', true),
  (1, 'https://example.com/images/football2.jpg', false),
  (2, 'https://example.com/images/complex1.jpg', true),
  (3, 'https://example.com/images/tennis1.jpg', true),
  (4, 'https://example.com/images/padel1.jpg', true);

-- Ajout des zones de sport
INSERT INTO sport_zones (location_id, name, total_area, indoor, surface_type, max_capacity)
VALUES 
  (1, 'Terrain principal', 800, false, 'synthétique', 22),
  (1, 'Terrain annexe', 400, false, 'synthétique', 14),
  (2, 'Terrain de football', 800, false, 'synthétique', 22),
  (2, 'Terrain de basketball', 420, true, 'parquet', 10),
  (3, 'Court 1', 260.75, false, 'terre battue', 4),
  (3, 'Court 2', 260.75, false, 'terre battue', 4),
  (4, 'Terrain de padel', 200, true, 'synthétique', 4);

-- Ajout des configurations de sport pour les zones
INSERT INTO zone_sport_configurations (zone_id, sport_id, court_type, court_length, court_width, max_courts_possible, default_courts, price_per_hour)
VALUES 
  (1, 1, 'full', 100, 50, 1, 1, 120),
  (2, 1, 'full', 50, 30, 1, 1, 80),
  (3, 1, 'full', 100, 50, 1, 1, 120),
  (4, 2, 'full', 28, 15, 1, 1, 60),
  (5, 3, 'full', 23.77, 10.97, 1, 1, 30),
  (6, 3, 'full', 23.77, 10.97, 1, 1, 30),
  (7, 5, 'full', 20, 10, 1, 1, 40);

-- Ajout des courts
INSERT INTO courts (config_id, court_number, current_sport_id, status)
VALUES 
  (1, 'F1', 1, 'available'),
  (2, 'F2', 1, 'available'),
  (3, 'F3', 1, 'available'),
  (4, 'B1', 2, 'available'),
  (5, 'T1', 3, 'available'),
  (6, 'T2', 3, 'available'),
  (7, 'P1', 5, 'available');

-- Ajout de quelques réservations
INSERT INTO bookings (court_id, user_id, start_datetime, end_datetime, total_price, status, payment_status)
VALUES 
  (1, 4, NOW() + INTERVAL '1 day', NOW() + INTERVAL '1 day' + INTERVAL '1 hour', 120, 'confirmed', 'completed'),
  (5, 5, NOW() + INTERVAL '2 days', NOW() + INTERVAL '2 days' + INTERVAL '2 hours', 60, 'confirmed', 'completed');

-- Ajout des paiements pour les réservations
INSERT INTO payments (booking_id, user_id, amount, currency, payment_method, status)
VALUES 
  (1, 4, 120, 'EUR', 'card', 'completed'),
  (2, 5, 60, 'EUR', 'card', 'completed');

-- Ajout des avis
INSERT INTO reviews (booking_id, reviewer_id, location_id, rating, comment)
VALUES 
  (1, 4, 1, 4.5, 'Excellent terrain, bien entretenu'),
  (2, 5, 3, 5, 'Courts de tennis parfaits, personnel accueillant');

-- Ajout de quelques messages
INSERT INTO messages (sender_id, receiver_id, booking_id, content)
VALUES 
  (4, 2, 1, 'Bonjour, est-il possible d''avoir des ballons sur place ?'),
  (2, 4, 1, 'Oui, nous fournissons les ballons gratuitement.');

-- Ajout de notifications
INSERT INTO notifications (user_id, type, content)
VALUES 
  (4, 'booking', 'Votre réservation pour demain a été confirmée'),
  (5, 'review', 'Merci d''avoir laissé un avis !'); 