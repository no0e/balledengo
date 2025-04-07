import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export default function SupabaseTest() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState<string | null>(null);
  const [tables, setTables] = useState<any[]>([]);
  const [tableCount, setTableCount] = useState<number>(0);

  useEffect(() => {
    async function checkConnection() {
      try {
        console.log("Test de connexion à Supabase...");
        
        // Récupérer la liste des tables
        const { data: tablesData, error: tablesError } = await supabase
          .from('locations')
          .select('*')
          .limit(10);

        if (tablesError) {
          console.error("Erreur lors de la requête:", tablesError);
          throw tablesError;
        }

        console.log("Données reçues:", tablesData);
        
        if (!tablesData || tablesData.length === 0) {
          console.warn("Aucune donnée trouvée dans la table 'locations'");
        } else {
          console.log(`Nombre d'enregistrements trouvés: ${tablesData.length}`);
        }

        setTables(tablesData || []);
        setTableCount(tablesData?.length || 0);
        setStatus('success');
      } catch (err) {
        console.error('Erreur de connexion:', err);
        setError(err instanceof Error ? err.message : 'Erreur inconnue');
        setStatus('error');
      }
    }

    checkConnection();
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Test de connexion Supabase</h2>
      {status === 'loading' && (
        <p className="text-gray-600">Chargement...</p>
      )}
      {status === 'success' && (
        <div>
          <p className="text-green-600 mb-4">✅ Connexion réussie à Supabase</p>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Données de la table 'locations':</h3>
            <p className="text-gray-600 mb-2">
              {tableCount === 0 
                ? "Aucune donnée trouvée. Vérifiez que la table contient des enregistrements." 
                : `${tableCount} enregistrement(s) trouvé(s).`}
            </p>
            {tableCount > 0 && (
              <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-60">
                {JSON.stringify(tables, null, 2)}
              </pre>
            )}
          </div>
        </div>
      )}
      {status === 'error' && (
        <div>
          <p className="text-red-600">❌ Erreur de connexion</p>
          <p className="text-sm text-gray-600 mt-2">{error}</p>
          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded">
            <h3 className="font-semibold text-yellow-800 mb-2">Suggestions de dépannage:</h3>
            <ul className="list-disc pl-5 text-sm text-yellow-700">
              <li>Vérifiez que les variables d'environnement sont correctement configurées</li>
              <li>Assurez-vous que la table 'locations' existe dans votre base de données</li>
              <li>Vérifiez les permissions d'accès à la table</li>
              <li>Consultez la console du navigateur pour plus de détails sur l'erreur</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
} 