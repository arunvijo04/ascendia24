import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './components/Nav'; 
import Hero from './components/Hero';
import About from './components/About';
import Event from './components/Event';
import Speakers from './components/Speakers'; 
import Timeline from './components/Timeline';
import CommunityPartners from './components/CommunityPartners';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <About />
    <Event />
    <Speakers />
    <Timeline />
    <CommunityPartners />
    <FAQ />
    <Contact />
  </React.StrictMode>
);
