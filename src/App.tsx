import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ListField from './pages/ListField';
import HowItWorks from './pages/HowItWorks';
import FieldDetail from './pages/FieldDetail';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/find-field" element={<Navigate to="/" replace />} />
              <Route path="/list-field" element={<ListField />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/field/:id" element={<FieldDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
