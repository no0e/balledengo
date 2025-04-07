const Support = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Support</h1>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Centre d'aide</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium mb-2">Comment réserver un terrain ?</h3>
              <p className="text-gray-700">
                Pour réserver un terrain, connectez-vous à votre compte, recherchez un terrain disponible, 
                sélectionnez la date et l'horaire souhaités, puis confirmez votre réservation.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium mb-2">Comment créer une annonce ?</h3>
              <p className="text-gray-700">
                Pour créer une annonce, accédez à votre profil, cliquez sur "Créer une annonce" et remplissez 
                le formulaire avec les informations de votre terrain.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Comment modifier une réservation ?</h3>
              <p className="text-gray-700">
                Vous pouvez modifier ou annuler une réservation depuis votre profil, dans la section "Mes réservations".
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contactez-nous</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Par email</h3>
              <p className="text-gray-700 mb-4">
                Notre équipe de support est disponible par email à l'adresse :<br />
                <a href="mailto:support@sportspot.com" className="text-green-600 hover:text-green-700">
                  support@sportspot.com
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Par téléphone</h3>
              <p className="text-gray-700 mb-4">
                Du lundi au vendredi, de 9h à 18h :<br />
                <a href="tel:+33123456789" className="text-green-600 hover:text-green-700">
                  +33 1 23 45 67 89
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4">FAQ</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium mb-2">Quels sont les modes de paiement acceptés ?</h3>
              <p className="text-gray-700">
                Nous acceptons les paiements par carte bancaire, PayPal et virement bancaire.
              </p>
            </div>
            <div className="border-b pb-4">
              <h3 className="text-lg font-medium mb-2">Comment fonctionne l'assurance ?</h3>
              <p className="text-gray-700">
                Toutes les réservations sont couvertes par notre assurance responsabilité civile.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Puis-je annuler une réservation ?</h3>
              <p className="text-gray-700">
                Oui, vous pouvez annuler une réservation jusqu'à 24h avant la date prévue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support; 