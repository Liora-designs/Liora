import { FaMoneyCheckAlt, FaHome, FaBriefcase, FaRegFileAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaRegFileAlt className="text-3xl text-white" />,
    circleClass: "bg-accent",
    title: 'Custom Web Applications',
    features: [
      'Tailored solutions for your business','Modern tech stack, scalable design','Seamless integrations','Built for performance and growth',
    ],
    cta: 'See Projects',
    href: '/projects',
  },
  {
    icon: <FaHome className="text-3xl text-white" />,
    circleClass: "bg-purple",
    title: 'Business Websites',
    features: [
      'Responsive & SEO-friendly',
      'Unique branding',
      'Fast, secure, reliable',
      'Easy content management',
    ],
    cta: 'See Portfolio',
    href: '/projects',
  },
  {
    icon: <FaBriefcase className="text-3xl text-white" />,
    circleClass: "bg-accent-dark",
    title: 'E-Commerce Solutions',
    features: [
      'Custom storefronts',
      'Payment gateway integration',
      'Inventory & order management',
      'Mobile-ready shopping experience',
    ],
    cta: 'See Stores',
    href: '/projects',
  },
];

export default function HomeFinanceGrid() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-purple to-accent py-20 animate-fadeIn overflow-hidden">
      {/* Animated, blurred gradient blobs */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-purple/40 via-primary/40 to-accent/40 rounded-full blur-3xl opacity-70 animate-blob1 -z-10 parallax-blob" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-primary/40 via-accent/30 to-purple/30 rounded-full blur-3xl opacity-60 animate-blob2 -z-10 parallax-blob" />
      <style>{`
        @keyframes blob1 { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(30px) scale(1.1);} }
        @keyframes blob2 { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(-20px) scale(1.05);} }
        .animate-blob1 { animation: blob1 13s ease-in-out infinite; }
        .animate-blob2 { animation: blob2 15s ease-in-out infinite; }
        @keyframes floatIcon { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }
        .animate-floatIcon { animation: floatIcon 3s ease-in-out infinite; }
        .glow-hover:hover { box-shadow: 0 0 24px 6px rgba(162,28,175,0.18), 0 2px 8px 0 rgba(0,0,0,0.08); }
      `}</style>
      <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-accent to-purple bg-clip-text text-transparent">Web Development Services</h2>
      <p className="text-lg text-center text-purple-100 mb-12 font-medium max-w-2xl mx-auto">
        LIORA builds high-performance web solutions for businesses and entrepreneurs—custom apps, business sites, and e-commerce platforms.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <div
            key={service.title}
            className="relative flex flex-col items-center text-center group"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            {/* Floating Icon with animation and glow on hover */}
            <div className={`absolute -top-8 z-10 flex items-center justify-center w-16 h-16 rounded-full shadow-lg border-4 border-white group-hover:scale-110 group-hover:shadow-xl transition-transform duration-300 ${service.circleClass} animate-floatIcon glow-hover`}>
              {service.icon}
            </div>
            {/* Card */}
            <div className="pt-12 pb-8 px-6 bg-primary/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-purple w-full min-h-[320px] flex flex-col items-start transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl group-hover:border-accent">
              <div className="text-xl font-bold text-white mb-4 mt-2">{service.title}</div>
              <ul className="mb-6 space-y-2 text-purple-100 text-base pl-4 list-disc">
                {service.features.map(f => <li key={f}>{f}</li>)}
              </ul>
              <a
                href={service.href}
                className="mt-auto bg-gradient-to-r from-accent to-purple text-white px-6 py-2 rounded-lg font-semibold shadow hover:from-accent-dark hover:to-purple-dark transition-all flex items-center gap-2"
              >
                <span>&#8594;</span> {service.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 