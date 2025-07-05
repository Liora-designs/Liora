import SectionDivider from '../components/SectionDivider';

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-primary via-purple to-accent py-20 px-4 animate-fadeIn">
      <div className="max-w-3xl mx-auto bg-white/60 backdrop-blur-lg rounded-2xl shadow-glass p-10 border border-blue-100">
        <h1 className="text-4xl font-extrabold text-primary font-heading text-center mb-8">About Us</h1>
        <p className="text-lg text-primary-dark mb-6 text-center font-medium">
          At LIORA, we turn your digital vision into reality—delivering stunning, high-performance websites and web apps tailored to your business goals.
        </p>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-2 font-heading">Our Mission</h2>
          <p className="text-gray-600">To empower businesses and individuals with cutting-edge web development solutions, delivered with creativity, expertise, and care.</p>
        </div>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-2 font-heading">Our Values</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-1">
            <li>Innovation & Quality</li>
            <li>Personalized Solutions</li>
            <li>Expertise & Professionalism</li>
            <li>Client Success First</li>
            <li>Transparency & Ethics</li>
          </ul>
        </div>
        {/* Meet Our Team Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-primary mb-4 font-heading text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 rounded-xl shadow p-6 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold text-white mb-4">D</div>
              <div className="font-bold text-lg text-primary mb-1">Dev Bhatt</div>
              <div className="text-primary-dark mb-2">Co-Founder & Technical Director</div>
              <div className="text-gray-600 text-center text-sm">Expert in full-stack web development and passionate about building scalable solutions.</div>
            </div>
            <div className="bg-white/80 rounded-xl shadow p-6 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-gold flex items-center justify-center text-3xl font-bold text-white mb-4">D</div>
              <div className="font-bold text-lg text-primary mb-1">Divish Kulkarni</div>
              <div className="text-primary-dark mb-2">Co-Founder & Client Relations Director</div>
              <div className="text-gray-600 text-center text-sm">Ensures timely delivery and smooth communication between clients and the team.</div>
            </div>
            <div className="bg-white/80 rounded-xl shadow p-6 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple to-primary flex items-center justify-center text-3xl font-bold text-white mb-4">N</div>
              <div className="font-bold text-lg text-primary mb-1">Nandish vyas</div>
              <div className="text-primary-dark mb-2">Co-Founder & Chief Marketing Officer</div>
              <div className="text-gray-600 text-center text-sm">Drives innovative marketing strategies and builds strong brand presence to connect with our clients and audience.</div>
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-primary mb-2 font-heading">Contact</h2>
          <p className="text-gray-600">Email: <a href="mailto:lioradesigns51@gmail.com" className="underline">lioradesigns51@gmail.com</a></p>
          <p className="text-gray-600">Phone: <a href="tel:+919372815568" className="underline">+91-93728 15568</a></p>
          <p className="text-gray-600">Devjanu Bunglow,opp st rocks school, Plot No 371/391, Borivali West, Mumbai - 400092</p>
        </div>
      </div>
      <SectionDivider color="#f4f6fb" />
    </main>
  );
} 