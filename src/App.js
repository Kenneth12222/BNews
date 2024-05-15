import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import BlogDetail from './components/BlogDetail';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/blog" element={<BlogDetail />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
