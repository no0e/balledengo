const Legal = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Mentions légales</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Informations légales</h2>
          <p className="text-gray-700 mb-4">
            SportSpot est une plateforme de mise en relation entre propriétaires de terrains sportifs et utilisateurs.
          </p>
          <p className="text-gray-700 mb-4">
            Société : SportSpot SAS<br />
            Capital social : 10 000 €<br />
            RCS : Paris B 123 456 789<br />
            Siège social : 123 Rue du Sport, 75015 Paris<br />
            Téléphone : +33 1 23 45 67 89<br />
            Email : contact@sportspot.com
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Conditions d'utilisation</h2>
          <p className="text-gray-700 mb-4">
            En utilisant notre plateforme, vous acceptez les présentes conditions d'utilisation. SportSpot se réserve 
            le droit de modifier ces conditions à tout moment.
          </p>
          <p className="text-gray-700 mb-4">
            Les utilisateurs s'engagent à fournir des informations exactes et à respecter les règles de bonne conduite 
            lors de l'utilisation de la plateforme.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Protection des données</h2>
          <p className="text-gray-700 mb-4">
            Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au Règlement Général sur 
            la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression 
            des données vous concernant.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
          <p className="text-gray-700 mb-4">
            L'ensemble des éléments constituant le site SportSpot (textes, images, vidéos, logos, etc.) sont protégés 
            par les lois en vigueur sur la propriété intellectuelle.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Legal; 