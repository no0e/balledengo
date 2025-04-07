import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-green-600">Balle dengo</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/search" className="text-gray-600 hover:text-green-600 px-3 py-2">
              Rechercher
            </Link>
            <Link to="/create-listing" className="text-gray-600 hover:text-green-600 px-3 py-2">
              Créer une annonce
            </Link>
            <Link to="/profile" className="text-gray-600 hover:text-green-600 px-3 py-2">
              Mon profil
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 