# Guide d'importation des données de test dans Supabase

Ce guide vous explique comment importer les données de test dans votre base de données Supabase pour que votre application affiche correctement les terrains et les annonces.

## Étapes à suivre

### 1. Accéder à l'éditeur SQL de Supabase

1. Connectez-vous à votre compte Supabase : https://app.supabase.com/
2. Sélectionnez votre projet
3. Dans le menu de gauche, cliquez sur "SQL Editor"
4. Cliquez sur "New Query" pour créer une nouvelle requête

### 2. Importer le script SQL

1. Copiez le contenu du fichier `supabase_test_data.sql` que nous avons créé
2. Collez-le dans l'éditeur SQL de Supabase
3. Cliquez sur "Run" pour exécuter le script

### 3. Vérifier l'importation des données

1. Dans le menu de gauche, cliquez sur "Table Editor"
2. Vérifiez que les tables suivantes contiennent des données :
   - `sports` : devrait contenir 5 sports différents
   - `locations` : devrait contenir 10 lieux différents
   - `sport_zones` : devrait contenir 17 zones de sport
   - `zone_sport_configurations` : devrait contenir 17 configurations

### 4. Rafraîchir votre application

1. Retournez à votre application
2. Rafraîchissez la page
3. Vous devriez maintenant voir les terrains et les annonces s'afficher

## Structure des données

Le script SQL ajoute les données suivantes :

- **Sports** : Football, Basketball, Tennis, Volleyball, Padel
- **Lieux** : 10 terrains différents dans différentes villes de France
- **Zones de sport** : Différents types de terrains (football, basketball, tennis, etc.)
- **Configurations** : Prix par heure pour chaque zone de sport

## Résolution des problèmes

Si vous rencontrez des erreurs lors de l'exécution du script SQL, vérifiez les points suivants :

1. **Structure des tables** : Assurez-vous que les tables ont la même structure que celle attendue par le script
2. **Clés primaires** : Vérifiez que les clés primaires correspondent à celles définies dans le script
3. **Contraintes** : Assurez-vous qu'il n'y a pas de contraintes qui empêchent l'insertion des données

## Personnalisation des données

Vous pouvez modifier le script SQL pour ajouter vos propres données ou modifier les données existantes. Assurez-vous de respecter la structure des tables et les contraintes définies dans votre base de données. 