import React from 'react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#050510] text-white selection:bg-cyan-500 selection:text-black">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-white/10 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 animate-pulse border border-cyan-400/50"></div>
          <span className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
            TIVO-ULTRA
          </span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
          <a href="#admin" className="hover:text-cyan-400 transition-colors">Admin Portal</a>
        </div>
        <button className="px-5 py-2 bg-cyan-600 hover:bg-cyan-500 text-sm font-bold rounded-full transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)]">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/10 blur-[120px] rounded-full -z-10"></div>
        <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-none">
          THE FUTURE OF <br />
          <span className="text-cyan-500">DIGITAL CREATION</span>
        </h1>
        <p className="max-w-2xl text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
          Create Web Apps, Mobile Apps, and Desktop Software in seconds. 
          Powered by AETHER-TIVO, the world's most advanced autonomous engine.
        </p>
        <div className="flex gap-4">
          <button className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:scale-105 transition-transform">
            Build Your App Now
          </button>
          <button className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-sm font-bold rounded-xl hover:bg-white/10 transition-colors">
            View Live Demo
          </button>
        </div>
      </section>

      {/* Pricing Section Placeholder */}
      <section id="pricing" className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Flexible Plans</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-cyan-500/50 transition-all">
            <h3 className="text-xl font-bold mb-2">Free Explorer</h3>
            <p className="text-4xl font-black mb-6">$0<span className="text-sm text-gray-500">/mo</span></p>
            <ul className="text-gray-400 space-y-3 mb-8">
              <li>✓ Basic Web App Creator</li>
              <li>✓ Daily 5 Credits</li>
              <li>✓ Community Support</li>
            </ul>
            <button className="w-full py-3 border border-white/10 rounded-xl hover:bg-white/5">Current Plan</button>
          </div>
          <div className="p-8 rounded-3xl border border-cyan-500/30 bg-cyan-500/5 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-cyan-500 text-black text-[10px] font-bold px-2 py-1 rounded">MOST POPULAR</div>
            <h3 className="text-xl font-bold mb-2">Ultra Pro</h3>
            <p className="text-4xl font-black mb-6">$19<span className="text-sm text-gray-500">/mo</span></p>
            <ul className="text-gray-400 space-y-3 mb-8">
              <li>✓ Web + Mobile + Desktop Apps</li>
              <li>✓ Unlimited AI Generations</li>
              <li>✓ Priority Execution & Support</li>
              <li>✓ Bkash / Nagad / Rocket Payments</li>
            </ul>
            <button className="w-full py-3 bg-cyan-500 text-black font-bold rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:scale-[1.02] transition-transform">Upgrade Now</button>
          </div>
        </div>
      </section>

      <footer className="p-12 border-t border-white/10 text-center text-gray-500 text-sm">
        © 2025 TIVO-ULTRA ENGINE. Handcrafted for the Supreme Admin.
      </footer>
    </div>
  );
};

export default LandingPage;
