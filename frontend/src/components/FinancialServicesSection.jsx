import React, { useState } from 'react';
import { FaMoneyCheckAlt, FaHome, FaBriefcase } from 'react-icons/fa';
import SectionDivider from './SectionDivider';

const services = [
  {
    icon: <FaMoneyCheckAlt className="text-2xl text-green-600 group-hover:text-gold transition-all animate-bounceIcon" />,
    title: 'Custom Web Applications',
    features: [
      'Tailored solutions for your business',
      'Modern tech stack, scalable design',
      'Seamless integrations',
    ],
  },
  {
    icon: <FaHome className="text-2xl text-primary group-hover:text-gold transition-all animate-bounceIcon" />,
    title: 'Business Websites',
    features: [
      'Responsive & SEO-friendly',
      'Unique branding',
      'Fast, secure, reliable',
    ],
  },
  {
    icon: <FaBriefcase className="text-2xl text-accent-dark group-hover:text-gold transition-all animate-bounceIcon" />,
    title: 'E-Commerce Solutions',
    features: [
      'Custom storefronts',
      'Payment gateway integration',
      'Inventory & order management',
    ],
  },
];

const initialState = {
  name: '',
  email: '',
  phone: '',
  serviceType: '',
  details: '',
  message: '',
};

const FinancialServicesSection = () => {
  const [form, setForm] = useState(initialState);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const res = await fetch('/api/form/webdev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form }),
      });
      if (!res.ok) throw new Error('Submission failed');
      setSuccess(true);
      setForm(initialState);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-to-br from-primary via-purple to-accent py-20 animate-fadeIn">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-1 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-primary font-heading mb-6">Web Development Services</h2>
          <p className="text-lg text-primary-dark mb-8 font-medium">Expert web development for businesses and entrepreneurs. Custom apps, business sites, and e-commerce solutions—built for performance and growth.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service, i) => (
              <div key={service.title} className="group bg-white/70 backdrop-blur-lg rounded-xl shadow-glass p-4 flex items-start gap-3 animate-pop border border-blue-100" style={{ animationDelay: `${i * 80}ms` }}>
                {service.icon}
                <div>
                  <div className="font-semibold text-green-900 group-hover:text-gold transition-all">{service.title}</div>
                  <ul className="text-gray-700 text-sm list-disc pl-4 mt-1">
                    {service.features.map(f => <li key={f}>{f}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SectionDivider color="#f4f6fb" />
    </section>
  );
};

export default FinancialServicesSection; 