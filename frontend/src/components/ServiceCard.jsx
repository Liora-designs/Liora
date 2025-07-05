import React from 'react';

const ServiceCard = ({ icon, title, description, cta, href }) => (
  <div className="relative flex flex-col items-center text-center group">
    {/* Floating Icon */}
    <div className="absolute -top-8 z-10 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg border-4 border-white group-hover:scale-110 group-hover:shadow-xl transition-transform duration-300">
      <span className="text-3xl text-white">{icon}</span>
    </div>
    {/* Card */}
    <div className="pt-12 pb-6 px-6 bg-white/60 backdrop-blur-lg rounded-2xl shadow-2xl border border-blue-100 w-full min-h-[320px] flex flex-col items-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl group-hover:border-gold">
      <h3 className="font-extrabold text-2xl mb-2 text-blue-800 tracking-tight">{title}</h3>
      <p className="text-gray-700 mb-4 font-medium">{description}</p>
      {cta && <a href={href} className="mt-auto bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-blue-700 hover:to-accent-dark transition-all">{cta}</a>}
    </div>
  </div>
);

export default ServiceCard; 