# Guide d'importation des données de test dans Supabase

Ce guide explique comment importer les données de test dans votre base de données Supabase pour SportSpot.

## Structure de la base de données

La base de données comprend les tables suivantes :
- `users` : Utilisateurs (joueurs, propriétaires, administrateurs)
- `sports` : Types de sports disponibles
- `locations` : Établissements sportifs
- `sport_zones` : Zones sportives dans les établissements
- `zone_sport_configurations` : Configuration des sports possibles sur chaque zone
- `courts` : Terrains spécifiques
- `bookings` : Réservations
- `payments` : Paiements
- `reviews` : Avis des utilisateurs
- Et d'autres tables pour la gestion des messages, notifications, etc.

## Importation des données

1. Connectez-vous à votre projet Supabase
2. Allez dans la section "SQL Editor"
3. Copiez le contenu du fichier `supabase_test_data.sql`
4. Collez-le dans l'éditeur SQL
5. Exécutez le script

## Vérification de l'importation

Après l'importation, vous devriez avoir :
- 5 utilisateurs (1 admin, 2 propriétaires, 2 joueurs)
- 5 sports différents
- 4 établissements sportifs
- 7 zones sportives
- 7 courts
- Des réservations et avis de test

## Données de test

### Utilisateurs
- Admin : admin@sportspot.fr
- Propriétaires : owner1@sportspot.fr, owner2@sportspot.fr
- Joueurs : player1@sportspot.fr, player2@sportspot.fr

### Sports
- Football
- Basketball
- Tennis
- Volleyball
- Padel

### Établissements
1. Terrain de football municipal (Paris)
2. Complexe sportif du centre (Lyon)
3. Tennis Club de la ville (Marseille)
4. Terrain de padel privé (Bordeaux)

## Dépannage

Si vous rencontrez des erreurs lors de l'importation :

1. Vérifiez que toutes les tables sont créées avec la bonne structure
2. Assurez-vous que les contraintes d'énumération sont correctement définies
3. Vérifiez les contraintes de clés étrangères
4. En cas d'erreur spécifique, consultez les logs Supabase

## Rafraîchissement de l'application

Après l'importation des données :

1. Rafraîchissez votre application
2. Connectez-vous avec l'un des comptes de test
3. Vérifiez que les établissements et les terrains apparaissent correctement
4. Testez une réservation pour vous assurer que tout fonctionne

Pour toute question ou problème, consultez la documentation ou contactez l'équipe de développement. 