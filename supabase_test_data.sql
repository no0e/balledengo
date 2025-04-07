-- Ajout de sports
INSERT INTO sports (sport_id, name, description, icon_url)
VALUES 
  (1, 'Football', 'Sport collectif joué avec un ballon rond', 'https://cdn-icons-png.flaticon.com/512/53/53283.png'),
  (2, 'Basketball', 'Sport collectif joué avec un ballon orange', 'https://cdn-icons-png.flaticon.com/512/2168/2168281.png'),
  (3, 'Tennis', 'Sport de raquette joué sur un court', 'https://cdn-icons-png.flaticon.com/512/2168/2168281.png'),
  (4, 'Volleyball', 'Sport collectif joué avec un ballon', 'https://cdn-icons-png.flaticon.com/512/2168/2168281.png'),
  (5, 'Padel', 'Sport de raquette similaire au tennis', 'https://cdn-icons-png.flaticon.com/512/2168/2168281.png')
ON CONFLICT (sport_id) DO NOTHING;

-- Ajout de lieux
INSERT INTO locations (location_id, name, address, city, description, status, phone_number, website)
VALUES 
  (1, 'Terrain de football municipal', '123 rue des Sports', 'Paris', 'Terrain de football en gazon synthétique, éclairé', 'active', '01 23 45 67 89', 'https://www.paris.fr'),
  (2, 'Complexe sportif du centre', '45 avenue des Athlètes', 'Lyon', 'Complexe multi-sports avec terrains de football, basketball et volleyball', 'active', '04 56 78 90 12', 'https://www.lyon.fr'),
  (3, 'Tennis Club de la ville', '78 boulevard des Champions', 'Marseille', 'Club de tennis avec 6 courts en terre battue et 2 courts en dur', 'active', '04 91 23 45 67', 'https://www.marseille.fr'),
  (4, 'Terrain de padel privé', '12 rue des Jeux', 'Bordeaux', 'Terrain de padel couvert avec éclairage', 'active', '05 56 78 90 12', 'https://www.bordeaux.fr'),
  (5, 'Salle de sport polyvalente', '34 rue de l''Effort', 'Lille', 'Salle de sport avec terrains de basketball et volleyball', 'active', '03 20 12 34 56', 'https://www.lille.fr'),
  (6, 'Terrain de football 5', '56 avenue du Sport', 'Toulouse', 'Terrain de football 5 en gazon synthétique', 'active', '05 61 23 45 67', 'https://www.toulouse.fr'),
  (7, 'Complexe de tennis', '90 rue des Raquettes', 'Nantes', 'Complexe avec 8 courts de tennis', 'active', '02 40 12 34 56', 'https://www.nantes.fr'),
  (8, 'Terrain de volleyball en plein air', '23 rue du Filet', 'Strasbourg', 'Terrain de volleyball en sable', 'active', '03 88 12 34 56', 'https://www.strasbourg.eu'),
  (9, 'Terrain de basketball extérieur', '67 boulevard des Paniers', 'Nice', 'Terrain de basketball en plein air avec éclairage', 'active', '04 93 12 34 56', 'https://www.nice.fr'),
  (10, 'Terrain de football en herbe', '89 rue du Gazon', 'Rennes', 'Terrain de football en herbe naturelle', 'active', '02 99 12 34 56', 'https://www.rennes.fr')
ON CONFLICT (location_id) DO NOTHING;

-- Ajout de zones de sport
INSERT INTO sport_zones (zone_id, location_id, name, description, capacity, surface_type, is_indoor, has_lighting)
VALUES 
  (1, 1, 'Terrain principal', 'Terrain de football 11', 22, 'synthétique', false, true),
  (2, 1, 'Terrain annexe', 'Terrain de football 7', 14, 'synthétique', false, true),
  (3, 2, 'Terrain de football', 'Terrain de football 11', 22, 'synthétique', false, true),
  (4, 2, 'Terrain de basketball', 'Terrain de basketball intérieur', 10, 'parquet', true, true),
  (5, 2, 'Terrain de volleyball', 'Terrain de volleyball intérieur', 12, 'parquet', true, true),
  (6, 3, 'Court 1', 'Court de tennis en terre battue', 4, 'terre battue', false, false),
  (7, 3, 'Court 2', 'Court de tennis en terre battue', 4, 'terre battue', false, false),
  (8, 3, 'Court 3', 'Court de tennis en dur', 4, 'dur', false, true),
  (9, 4, 'Terrain de padel', 'Terrain de padel couvert', 4, 'synthétique', true, true),
  (10, 5, 'Terrain de basketball', 'Terrain de basketball intérieur', 10, 'parquet', true, true),
  (11, 5, 'Terrain de volleyball', 'Terrain de volleyball intérieur', 12, 'parquet', true, true),
  (12, 6, 'Terrain de football 5', 'Terrain de football 5', 10, 'synthétique', false, true),
  (13, 7, 'Court 1', 'Court de tennis', 4, 'dur', false, true),
  (14, 7, 'Court 2', 'Court de tennis', 4, 'dur', false, true),
  (15, 8, 'Terrain de volleyball', 'Terrain de volleyball en sable', 12, 'sable', false, false),
  (16, 9, 'Terrain de basketball', 'Terrain de basketball extérieur', 10, 'asphalte', false, true),
  (17, 10, 'Terrain de football', 'Terrain de football 11', 22, 'herbe', false, false)
ON CONFLICT (zone_id) DO NOTHING;

-- Ajout de configurations de sport pour les zones
INSERT INTO zone_sport_configurations (config_id, zone_id, sport_id, price_per_hour)
VALUES 
  (1, 1, 1, 120),
  (2, 2, 1, 80),
  (3, 3, 1, 120),
  (4, 4, 2, 60),
  (5, 5, 4, 50),
  (6, 6, 3, 30),
  (7, 7, 3, 30),
  (8, 8, 3, 35),
  (9, 9, 5, 40),
  (10, 10, 2, 60),
  (11, 11, 4, 50),
  (12, 12, 1, 70),
  (13, 13, 3, 25),
  (14, 14, 3, 25),
  (15, 15, 4, 40),
  (16, 16, 2, 45),
  (17, 17, 1, 100)
ON CONFLICT (config_id) DO NOTHING; 