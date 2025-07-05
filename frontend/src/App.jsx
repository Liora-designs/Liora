import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ConsultationFormSection from './components/ConsultationFormSection';
import Reviews from './pages/Reviews';
import FinancialServices from './pages/FinancialServices';
import AboutUs from './pages/AboutUs';
import Blogs from './pages/Blogs';
import HomeFeatureGrid from './components/HomeFeatureGrid';
import HomeFinanceGrid from './components/HomeFinanceGrid';
import WhatsAppButton from './components/WhatsAppButton';
import SectionDivider from './components/SectionDivider';
import Pricing from './pages/Pricing';

function Home() {
  return (
    <>
      <Hero />
      <SectionDivider color="#e0e7ef" />
      <HomeFeatureGrid />
      <SectionDivider color="#f4f6fb" flip />
      <HomeFinanceGrid />
      <SectionDivider color="#e0e7ef" />
      <FAQ />
    </>
  );
}

// GitHub Pages routing fix
function GitHubPagesRedirect() {
  const location = useLocation();
  
  useEffect(() => {
    // Check if we're on GitHub Pages and need to redirect
    if (location.search.includes('?/')) {
      const path = location.search.replace('?/', '').replace(/~and~/g, '&');
      window.history.replaceState(null, '', path);
    }
  }, [location]);

  return null;
}

export default function App() {
  // Parallax effect for blobs
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.querySelectorAll('.parallax-blob').forEach((el, i) => {
        // Each blob moves at a slightly different speed
        const speed = 0.08 + i * 0.04;
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <GitHubPagesRedirect />
      <WhatsAppButton />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/study-abroad" element={<Navigate to="/reviews" replace />} />
        <Route path="/financial-services" element={<FinancialServices />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      <Footer />
    </Router>
  );
}
