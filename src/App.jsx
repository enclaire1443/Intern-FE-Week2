import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import Contact from './components/Contact'; // Import the Contact component

function App() {
  return (
    <Router>
      <NavBar /> {/* The Navbar will be included on all pages */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MainPage" element={<MainPage />} />
      </Routes>
      <Contact />
    </Router>
  );
}

export default App;