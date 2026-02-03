import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import Contact from './components/Contact';
import WhatsAppBtn from './components/WhatsAppBtn';
import Footer from './components/Footer';

// A wrapper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Home Page Component (Aggregates sections)
const Home = () => (
  <>
    <Hero />
    <Services />
    <Process />
    <Portfolio />
    <Contact />
  </>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#020617] text-white font-sans selection:bg-brand-pink selection:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<><div className="pt-20"><Services /><Process /></div></>} />
          <Route path="/portfolio" element={<><div className="pt-20"><Portfolio /></div></>} />
          <Route path="/about" element={<><div className="pt-32 pb-20 text-center max-w-3xl mx-auto px-6"><h1 className="text-5xl font-serif font-bold mb-6">Our Story</h1><p className="text-xl text-gray-400 leading-relaxed">Art of Customization started in a small garage in Kothrud with a single heat press machine. Today, we are Pune's go-to studio for premium personalization. We believe every object has a story, and we help you tell it through color, texture, and design.</p></div><Process /><Contact /></>} />
          <Route path="/contact" element={<><div className="pt-20"><Contact /></div></>} />
        </Routes>
        <Footer />
        <WhatsAppBtn />
      </div>
    </Router>
  );
};

export default App;
