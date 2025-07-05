import React from 'react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Starter',
    price: '₹1000-5000',
    features: [
      '1-3 Page Website',
      'Responsive Design',
      'Basic HTML/CSS/Wordpress',
      '1 Month free services',
      'No API integration'
    ],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '₹5000-10000',
    features: [
      '4 to 6 Pages',
      'Custom Design',
      'High level website - Javascript',
      '1 Month free services',
      '1-2 API integration',
    ],
    highlight: true,
  },
  {
    name: 'Pro Max',
    price: '₹10000-15000',
    features: [
      '6-10 Pages',
      'E-Commerce Integration',
      'Advanced Animations',
      'API Integrations',
      'Priority Support',
      '6 Month free services ',
      
    ],
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary via-purple to-accent py-20 px-4 animate-fadeIn">
      <h1 className="text-5xl font-extrabold text-center text-white mb-12">Pricing Plans</h1>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        {plans.map((plan, i) => (
          <div
            key={plan.name}
            className={`rounded-3xl shadow-2xl p-8 bg-white/80 border-4 ${plan.highlight ? 'border-accent scale-105' : 'border-transparent'} flex flex-col items-center transition-all duration-300`}
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <h2 className="text-3xl font-bold mb-4 text-primary">{plan.name}</h2>
            <div className="text-2xl font-extrabold text-purple mb-6">{plan.price}</div>
            <ul className="mb-8 space-y-2 text-lg text-gray-700 text-left w-full max-w-xs mx-auto list-disc pl-6">
              {plan.features.map(f => <li key={f}>{f}</li>)}
            </ul>
            <Link to="/about-us" className="mt-auto bg-gradient-to-r from-accent to-purple text-white px-8 py-3 rounded-xl font-semibold shadow hover:from-accent-dark hover:to-purple-dark transition-all inline-block text-center">Choose {plan.name}</Link>
          </div>
        ))}
      </div>
    </main>
  );
} 