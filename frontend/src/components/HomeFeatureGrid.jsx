import { FaUserGraduate, FaUniversity, FaPassport, FaRegFileAlt, FaMoneyCheckAlt, FaPlaneDeparture, FaHome, FaBriefcase } from 'react-icons/fa';

const features = [
  {
    icon: <FaRegFileAlt className="text-3xl text-white" />,
    circleClass: "bg-accent",
    title: 'Custom Web Applications',
  },
  {
    icon: <FaHome className="text-3xl text-white" />,
    circleClass: "bg-purple",
    title: 'Business Websites',
  },
  {
    icon: <FaBriefcase className="text-3xl text-white" />,
    circleClass: "bg-accent-dark",
    title: 'E-Commerce Solutions',
  },
  {
    icon: <FaUserGraduate className="text-3xl text-white" />,
    circleClass: "bg-primary-light",
    title: 'UI/UX Design',
  },
  {
    icon: <FaMoneyCheckAlt className="text-3xl text-white" />,
    circleClass: "bg-purple-dark",
    title: 'API Integrations',
  },
  {
    icon: <FaPlaneDeparture className="text-3xl text-white" />,
    circleClass: "bg-accent-light",
    title: 'Performance Optimization',
  },
];

export default function HomeFeatureGrid() {
  return (
    <section className="relative bg-gradient-to-br from-primary via-purple to-accent py-20 animate-fadeIn overflow-hidden">
      {/* Animated, blurred gradient blobs */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-gradient-to-br from-primary/60 via-purple/40 to-accent/40 rounded-full blur-3xl opacity-70 animate-blob1 -z-10 parallax-blob" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-gradient-to-tr from-accent/40 via-primary/30 to-purple/30 rounded-full blur-3xl opacity-60 animate-blob2 -z-10 parallax-blob" />
      <style>{`
        @keyframes blob1 { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(30px) scale(1.1);} }
        @keyframes blob2 { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(-20px) scale(1.05);} }
        .animate-blob1 { animation: blob1 12s ease-in-out infinite; }
        .animate-blob2 { animation: blob2 14s ease-in-out infinite; }
        @keyframes floatIcon { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-10px);} }
        .animate-floatIcon { animation: floatIcon 3s ease-in-out infinite; }
        .glow-hover:hover { box-shadow: 0 0 24px 6px rgba(236,72,153,0.25), 0 2px 8px 0 rgba(0,0,0,0.08); }
      `}</style>
      <h2 className="text-4xl font-extrabold text-center mb-8 bg-gradient-to-r from-accent to-purple bg-clip-text text-transparent">Web Development Solutions</h2>
      <p className="text-lg text-center text-purple-100 mb-12 font-medium max-w-2xl mx-auto">
        From custom web apps and business websites to e-commerce, UI/UX, and integrations—LIORA delivers modern, scalable solutions for your digital success.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <div
            key={f.title}
            className="relative flex flex-col items-center text-center group"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            {/* Floating Icon with animation and glow on hover */}
            <div className={`absolute -top-8 z-10 flex items-center justify-center w-16 h-16 rounded-full shadow-lg border-4 border-white group-hover:scale-110 group-hover:shadow-xl transition-transform duration-300 ${f.circleClass} animate-floatIcon glow-hover`}>
              {f.icon}
            </div>
            {/* Card */}
            <div className="pt-12 pb-8 px-6 bg-primary/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-purple w-full min-h-[200px] flex flex-col items-center transition-all duration-300 group-hover:scale-105 group-hover:shadow-3xl group-hover:border-accent">
              <div className="mt-2 text-lg font-bold text-white group-hover:text-accent transition-all">{f.title}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 