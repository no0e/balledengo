import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Search from './pages/Search';
import CreateListing from './pages/CreateListing';
import Profile from './pages/Profile';
import ListingDetails from './pages/ListingDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Legal from './pages/Legal';
import Support from './pages/Support';
import Social from './pages/Social';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/create-listing" element={<CreateListing />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/listing/:id" element={<ListingDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/support" element={<Support />} />
            <Route path="/social" element={<Social />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 