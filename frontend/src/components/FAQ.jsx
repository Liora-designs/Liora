import React, { useState } from 'react';

const faqs = [
  {
    question: 'What web development services do you offer?',
    answer: 'We build custom websites, web applications, e-commerce platforms, and provide UI/UX design, API integration, and performance optimization.'
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'Project timelines vary based on complexity, but most business websites are delivered in 2-4 weeks. Custom apps may take longer.'
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Absolutely! We can modernize your current site for better performance, design, and mobile responsiveness.'
  },
  {
    question: 'Will my website be mobile-friendly and SEO optimized?',
    answer: 'Yes, all our websites are fully responsive and built with SEO best practices to help you rank higher on search engines.'
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer: 'We offer flexible support plans for updates, security, and feature enhancements after launch.'
  },
  {
    question: 'How do I get started with a project?',
    answer: 'Contact us for a free consultation. We\'ll discuss your goals, suggest solutions, and provide a detailed proposal.'
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative bg-gradient-to-br from-primary via-purple to-accent py-20 animate-fadeIn overflow-hidden" id="faq">
      {/* Decorative blurred gradient blob */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-primary/20 via-accent/10 to-gold/10 rounded-full blur-3xl opacity-60 animate-blob1 -z-10" />
      <style>{`
        @keyframes blob1 { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(20px) scale(1.08);} }
        .animate-blob1 { animation: blob1 16s ease-in-out infinite; }
        @keyframes fadeSlideIn { 0%{opacity:0;transform:translateY(30px);} 100%{opacity:1;transform:translateY(0);} }
        .animate-fadeSlideIn { animation: fadeSlideIn 0.8s cubic-bezier(.4,0,.2,1) both; }
        .faq-glow { box-shadow: 0 0 24px 4px rgba(59,130,246,0.10), 0 2px 8px 0 rgba(0,0,0,0.06); }
        .faq-glow-active { box-shadow: 0 0 32px 8px rgba(251,191,36,0.18), 0 2px 8px 0 rgba(0,0,0,0.10); border-color: #FFD700; }
      `}</style>
      {/* Decorative dots above title */}
      <div className="flex justify-center mb-2">
        <div className="flex gap-2">
          <span className="w-2 h-2 rounded-full bg-primary/60"></span>
          <span className="w-2 h-2 rounded-full bg-accent/60"></span>
          <span className="w-2 h-2 rounded-full bg-gold/60"></span>
        </div>
      </div>
      <h2 className="text-4xl font-extrabold text-pink-500 mb-10 text-center">Web Development FAQs</h2>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className={`rounded-2xl bg-gray-300 shadow-glass border border-black-100 overflow-hidden transition-all animate-fadeSlideIn ${openIndex === idx ? 'faq-glow-active' : 'faq-glow'}`}
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            <button
              className="w-full text-left px-8 py-5 font-semibold text-pink-700 focus:outline-none flex justify-between items-center text-lg hover:bg-blue-50 transition-all"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              {faq.question}
              <span className="text-2xl font-bold text-pink-400">{openIndex === idx ? '-' : '+'}</span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${openIndex === idx ? 'grid-rows-[1fr] opacity-100 py-2' : 'grid-rows-[0fr] opacity-0 py-0'}`}
              style={{ overflow: 'hidden' }}
            >
              <div className="px-8 pb-4 text-black-600 text-base">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ; 