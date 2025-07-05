import React from 'react';

const Hero = () => (
  <section className="relative bg-gradient-to-br from-primary via-purple to-accent py-24 md:py-32 flex items-center justify-center min-h-[60vh] overflow-hidden">
    {/* Animated, blurred gradient blobs */}
    <div className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-primary/60 via-purple/40 to-accent/40 rounded-full blur-3xl opacity-70 animate-blob1 -z-10 parallax-blob" />
    <div className="absolute top-1/2 right-0 w-80 h-80 bg-gradient-to-tr from-accent/40 via-primary/30 to-purple/30 rounded-full blur-3xl opacity-60 animate-blob2 -z-10 parallax-blob" />
    <style>{`
      @keyframes blob1 { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(30px) scale(1.1);} }
      @keyframes blob2 { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(-20px) scale(1.05);} }
      .animate-blob1 { animation: blob1 12s ease-in-out infinite; }
      .animate-blob2 { animation: blob2 14s ease-in-out infinite; }
      @keyframes floatHero { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-12px);} }
      .animate-floatHero { animation: floatHero 4s ease-in-out infinite; }
      .glow-btn:hover { box-shadow: 0 0 32px 8px rgba(236,72,153,0.18), 0 2px 8px 0 rgba(0,0,0,0.08); }
    `}</style>
    <div className="max-w-3xl mx-auto px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg animate-floatHero">Your Partner for Modern Web Development</h1>
      <p className="text-xl md:text-2xl text-purple-100 mb-10 font-medium">At LIORA, we turn your digital vision into reality delivering stunning, high-performance websites and web apps tailored to your business goals.</p>
      <p className="text-5xl md:text-4xl font-extrabold text-white mb-8 font-semibold">Reliable. Scalable. Built to perform.</p>
    </div>
    {/* Decorative SVG wave at the bottom */}
    <svg className="absolute bottom-0 left-0 w-full h-16 md:h-24 -z-10" viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0,40 C360,120 1080,0 1440,80 L1440,100 L0,100 Z" fill="url(#hero-wave)" />
      <defs>
        <linearGradient id="hero-wave" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#18181b" />
          <stop offset="0.5" stopColor="#a21caf" />
          <stop offset="1" stopColor="#ec4899" />
        </linearGradient>
      </defs>
    </svg>
  </section>
);

export default Hero; 