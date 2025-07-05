import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const socials = [
  { icon: <FaFacebookF />, href: 'https://facebook.com/' },
  { icon: <FaTwitter />, href: 'https://twitter.com/' },
  { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/company/liora-designs/?viewAsMember=true' },
  { icon: <FaInstagram />, href: 'https://www.instagram.com/liora_designs51/?utm_source=ig_web_button_share_sheet' },
];

const Footer = () => (
  <footer className="relative bg-gradient-to-r from-primary-dark via-primary to-accent-dark text-white pt-16 pb-8 mt-12 overflow-hidden">
    {/* Animated, blurred gradient blobs */}
    <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-gold/20 via-accent/20 to-blue-400/20 rounded-full blur-3xl opacity-60 animate-blob1 -z-10 parallax-blob" />
    <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-primary/30 via-accent/20 to-blue-400/20 rounded-full blur-3xl opacity-50 animate-blob2 -z-10 parallax-blob" />
    <style>{`
      @keyframes blob1 { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(30px) scale(1.1);} }
      @keyframes blob2 { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(-20px) scale(1.05);} }
      .animate-blob1 { animation: blob1 14s ease-in-out infinite; }
      .animate-blob2 { animation: blob2 16s ease-in-out infinite; }
      .glow-social:hover { box-shadow: 0 0 18px 4px rgba(251,191,36,0.18), 0 2px 8px 0 rgba(0,0,0,0.10); color: #FFD700 !important; }
      .glow-subscribe:hover { box-shadow: 0 0 18px 4px rgba(251,191,36,0.18), 0 2px 8px 0 rgba(0,0,0,0.10); transform: scale(1.06); }
    `}</style>
    {/* Decorative SVG wave at the top */}
    <svg className="absolute -top-8 left-0 w-full h-12 md:h-16 -z-10" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0,40 C360,0 1080,80 1440,20 L1440,0 L0,0 Z" fill="url(#footer-wave)" />
      <defs>
        <linearGradient id="footer-wave" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e0e7ff" />
          <stop offset="1" stopColor="#bae6fd" />
        </linearGradient>
      </defs>
    </svg>
    <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 items-start">
      <div className="mb-8 md:mb-0">
        <h3 className="font-bold text-lg mb-2 font-heading">Visit Our Office</h3>
        <p className="text-blue-100"> 15/A, lehari Bldg,Gr.floor, 4th Khetwadi Lane, Mumbai - 400004</p>
      </div>
      <div className="mb-8 md:mb-0">
        <h3 className="font-bold text-lg mb-2 font-heading">Contact</h3>
        <p className="text-blue-100">Email: <a href="mailto:lioradesigns51@gmail.com" className="underline">lioradesigns51@gmail.com</a></p>
        <p className="text-blue-100">Phone: <a href="tel:+9193728 15568" className="underline">+91-93728 15568</a></p>
      </div>
      <div className="mb-8 md:mb-0">
        <h3 className="font-bold text-lg mb-2 font-heading">Connect with us!</h3>
        
        <div className="flex gap-4 mt-4">
          {socials.map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold text-2xl transition-all glow-social" aria-label="Social link">
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="text-center mt-12 text-sm text-blue-200">© {new Date().getFullYear()} Liora Designs -- All Rights Reserved</div>
  </footer>
);

export default Footer; 