import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import ChannelSection from './components/Channel';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen text-white antialiased selection:bg-[#22C55E]/35 selection:text-white overflow-x-hidden">
      {/* Thin futuristic accent line at the very top of view */}
      <div className="fixed top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#22C55E]/40 to-transparent z-50"></div>
      
      {/* Main Layout Modules */}
      <Header />
      
      <main className="relative">
        {/* Sections in correct hierarchical flow according to original IA */}
        <Hero />
        <About />
        <Courses />
        <ChannelSection />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
