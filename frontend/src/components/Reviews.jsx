import React, { useState } from 'react';
import { FaUserGraduate, FaUniversity, FaPassport, FaRegFileAlt, FaMoneyCheckAlt, FaPlaneDeparture, FaHome, FaBriefcase } from 'react-icons/fa';
import SectionDivider from './SectionDivider';

const features = [
  {
    icon: <FaUserGraduate className="text-2xl text-primary group-hover:text-gold transition-all animate-bounceIcon" />,
    title: 'Responsive E-Commerce Platform',
  },
  {
    icon: <FaUniversity className="text-2xl text-accent group-hover:text-gold transition-all animate-bounceIcon" />,
    title: 'Custom Business Website',
  },
  {
    icon: <FaPassport className="text-2xl text-gold group-hover:text-primary transition-all animate-bounceIcon" />,
    title: 'SaaS Dashboard UI/UX',
  },
  {
    icon: <FaRegFileAlt className="text-2xl text-primary-dark group-hover:text-gold transition-all animate-bounceIcon" />,
    title: 'Portfolio & Personal Branding',
  },
  {
    icon: <FaMoneyCheckAlt className="text-2xl text-accent-dark group-hover:text-gold transition-all animate-bounceIcon" />,
    title: 'API Integrations',
  },
  {
    icon: <FaPlaneDeparture className="text-2xl text-gold-dark group-hover:text-primary transition-all animate-bounceIcon" />,
    title: 'Performance Optimization',
  },
];

const reviews = [
  {
    name: 'Amit S.',
    text: 'LIORA delivered our e-commerce site on time and exceeded our expectations. The team was responsive and creative throughout the project.'
  },
  {
    name: 'Priya D.',
    text: 'Our business website looks amazing and loads fast. The LIORA team made the process smooth and stress-free.'
  },
  {
    name: 'Rahul M.',
    text: 'The custom dashboard they built for us is intuitive and powerful. Highly recommend LIORA for web development!'
  }
];

const ProjectsAndReviewsSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary via-purple to-accent py-20 animate-fadeIn overflow-hidden">
      {/* Animated, blurred gradient blobs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-primary/30 via-accent/20 to-gold/20 rounded-full blur-3xl opacity-60 animate-blob1 -z-10 parallax-blob" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-tr from-accent/30 via-primary/20 to-blue-400/20 rounded-full blur-3xl opacity-50 animate-blob2 -z-10 parallax-blob" />
      <style>{`
        @keyframes blob1 { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(30px) scale(1.1);} }
        @keyframes blob2 { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(-20px) scale(1.05);} }
        .animate-blob1 { animation: blob1 12s ease-in-out infinite; }
        .animate-blob2 { animation: blob2 14s ease-in-out infinite; }
        @keyframes floatHeading { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }
        .animate-floatHeading { animation: floatHeading 3.5s ease-in-out infinite; }
        @keyframes fadeSlideIn { 0%{opacity:0;transform:translateY(30px);} 100%{opacity:1;transform:translateY(0);} }
        .animate-fadeSlideIn { animation: fadeSlideIn 0.8s cubic-bezier(.4,0,.2,1) both; }
        .glow-btn:hover { box-shadow: 0 0 32px 8px rgba(59,130,246,0.18), 0 2px 8px 0 rgba(0,0,0,0.08); }
      `}</style>
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-primary font-heading mb-6 animate-floatHeading">Projects & Reviews</h2>
          <p className="text-lg text-primary-dark mb-8 font-medium">Explore some of our recent web development projects and see what our clients have to say about working with LIORA.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((f, i) => (
              <div key={f.title} className="group bg-white/70 backdrop-blur-lg rounded-xl shadow-glass p-4 flex items-center gap-3 animate-pop border border-blue-100" style={{ animationDelay: `${i * 60}ms` }}>
                {f.icon}
                <span className="font-semibold text-blue-900 group-hover:text-gold transition-all">{f.title}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/90 rounded-2xl shadow-2xl p-10 space-y-6 border border-blue-100 animate-fadeSlideIn" style={{ animationDelay: '400ms' }}>
          <h3 className="text-2xl font-bold text-primary mb-4 font-heading">Client Reviews</h3>
          <ul className="space-y-4">
            {reviews.map((review, i) => (
              <li key={i} className="border-l-4 border-primary pl-4 text-gray-800">
                <p className="italic">"{review.text}"</p>
                <div className="mt-2 font-semibold text-primary">- {review.name}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Decorative SVG wave at the bottom */}
      <svg className="absolute bottom-0 left-0 w-full h-12 md:h-16 -z-10" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,20 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="url(#studyabroad-wave)" />
        <defs>
          <linearGradient id="studyabroad-wave" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e0e7ff" />
            <stop offset="1" stopColor="#bae6fd" />
          </linearGradient>
        </defs>
      </svg>
      <SectionDivider color="#f4f6fb" />
    </section>
  );
};

export default ProjectsAndReviewsSection; 