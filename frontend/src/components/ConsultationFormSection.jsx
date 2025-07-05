import React, { useState } from 'react';

const initialState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const ConsultationFormSection = ({ onCancel }) => {
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
      const res = await fetch('/api/form/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
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
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4 animate-floatHeading">Book Your Free Consultation</h2>
        <p className="text-lg text-blue-800 mb-8">Let our experts guide you to the best financial and global education solutions. No hidden charges, just honest advice!</p>
        <form className="bg-white/90 rounded-2xl shadow-2xl p-10 space-y-6 border border-blue-100 animate-fadeSlideIn" onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleChange} required placeholder="Name" className="w-full px-5 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg transition-all" />
          <input name="email" value={form.email} onChange={handleChange} required type="email" placeholder="Email" className="w-full px-5 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg transition-all" />
          <input name="phone" value={form.phone} onChange={handleChange} required placeholder="Phone" className="w-full px-5 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg transition-all" />
          <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message (optional)" className="w-full px-5 py-3 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg transition-all min-h-[100px]" />
          <div className="flex gap-4 justify-center mt-2">
            <button type="submit" disabled={loading} className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2 px-8 rounded-xl font-semibold shadow hover:from-blue-700 hover:to-blue-500 transition-all text-lg glow-btn">
              {loading ? 'Booking...' : 'Book Consultation'}
            </button>
            {onCancel && (
              <button type="button" onClick={onCancel} className="bg-gray-100 text-gray-700 py-2 px-8 rounded-xl font-semibold hover:bg-gray-200 transition-all text-lg border border-gray-200">
                Cancel
              </button>
            )}
          </div>
          {success && <div className="text-green-600 font-medium">Thank you! We will contact you soon.</div>}
          {error && <div className="text-red-600 font-medium">{error}</div>}
        </form>
      </div>
      {/* Decorative SVG wave at the bottom */}
      <svg className="absolute bottom-0 left-0 w-full h-12 md:h-16 -z-10" viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <path d="M0,20 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="url(#consultation-wave)" />
        <defs>
          <linearGradient id="consultation-wave" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e0e7ff" />
            <stop offset="1" stopColor="#bae6fd" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default ConsultationFormSection; 