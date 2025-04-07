import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

const SupabaseTest = () => {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
  const [error, setError] = useState<string | null>(null);
  const [envVars, setEnvVars] = useState({
    url: import.meta.env.VITE_SUPABASE_URL,
    key: import.meta.env.VITE_SUPABASE_ANON_KEY ? '✅ Présent' : '❌ Manquant'
  });

  useEffect(() => {
    const testConnection = async () => {
      try {
        console.log('Tentative de connexion à Supabase...');
        console.log('URL:', import.meta.env.VITE_SUPABASE_URL);
        console.log('Clé présente:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);
        
        // Test simple de la connexion
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Erreur Supabase:', error);
          throw error;
        }
        
        console.log('Connexion réussie!');
        setStatus('success');
      } catch (err) {
        console.error('Erreur détaillée:', err);
        setStatus('error');
        setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      }
    };

    testConnection();
  }, []);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Test de connexion Supabase</h2>
      
      <div className="mb-4">
        <h3 className="font-medium mb-2">Variables d'environnement :</h3>
        <ul className="text-sm">
          <li>URL: {envVars.url ? '✅ Présent' : '❌ Manquant'}</li>
          <li>Clé: {envVars.key}</li>
        </ul>
      </div>
      
      {status === 'loading' && (
        <p className="text-gray-600">Test de la connexion en cours...</p>
      )}
      
      {status === 'success' && (
        <div className="text-green-600">
          <p>✅ Connexion à Supabase réussie !</p>
        </div>
      )}
      
      {status === 'error' && (
        <div className="text-red-600">
          <p>❌ Erreur de connexion : {error}</p>
        </div>
      )}
    </div>
  );
};

export default SupabaseTest; 