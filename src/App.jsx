import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import MainPage from './components/MainPage';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <NavBar />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/contact" element={<HomePage />} />
        </Routes>
      </div>
      <Contact />
    </Router>
  );
}

export default App;