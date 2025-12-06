import React from 'react';
import './styles/index.css';
import Hero from './components/Hero';
import Features from './components/Features';
import VideoSection from './components/VideoSection';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <Benefits />
      <VideoSection />
      <FAQ />
      <Footer />
  );
}

export default App;
