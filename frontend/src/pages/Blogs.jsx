import SectionDivider from '../components/SectionDivider';

export default function Blogs() {
  return (
    <main className="min-h-screen bg-white/80 py-20 px-4 animate-fadeIn">
      <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-lg rounded-2xl shadow-glass p-10 border border-blue-100">
        <h1 className="text-4xl font-extrabold text-primary font-heading text-center mb-8">Blogs</h1>
        <p className="text-lg text-primary-dark mb-6 text-center font-medium">
          Insights, tips, and updates on finance, study abroad, and more. Stay tuned for our latest posts!
        </p>
        <div className="bg-blue-50/60 rounded-xl p-8 text-center text-blue-700 font-semibold shadow-glass border border-blue-100">
          Blog posts coming soon...
        </div>
      </div>
      <SectionDivider color="#f4f6fb" />
    </main>
  );
} 