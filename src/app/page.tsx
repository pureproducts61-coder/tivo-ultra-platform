import React from 'react';
import { Rocket, Shield, Cpu, Zap, CreditCard } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-cyan-500/30">
      {/* Hero Section */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border-2 border-cyan-500 overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.5)]">
               {/* Admin Avatar Placeholder */}
               <div className="w-full h-full bg-gradient-to-br from-cyan-900 to-black flex items-center justify-center text-xs font-bold">TIVO</div>
            </div>
            <span className="text-xl font-bold tracking-tighter bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">TIVO-ULTRA</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">Pricing</a>
            <button className="px-5 py-2 rounded-full border border-cyan-500/50 hover:bg-cyan-500/10 transition-all">Sign In</button>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-medium mb-6 animate-pulse">
            System Online: V1.0 Awakening
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tight mb-8 leading-[1.1]">
            BUILD THE <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500">IMPOSSIBLE</span> <br />
            WITH <span className="text-cyan-400 shadow-cyan-500/50 drop-shadow-2xl">AETHER-TIVO</span>
          </h1>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg md:text-xl mb-12">
            The world's first self-evolving AI platform that turns your ideas into Web, Mobile, and Desktop software in seconds.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-cyan-500 text-black font-bold rounded-xl hover:bg-cyan-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(6,182,212,0.4)]">
              Get Started Free
            </button>
            <button className="w-full sm:w-auto px-8 py-4 border border-white/10 bg-white/5 rounded-xl hover:bg-white/10 transition-all font-semibold">
              Explore War Room
            </button>
          </div>
        </div>

        {/* Feature Cards Preview */}
        <section id="features" className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            { icon: <Cpu className="w-8 h-8 text-cyan-500" />, title: "AI Forge", desc: "No-code backend and frontend generation using Tivo's core logic." },
            { icon: <Rocket className="w-8 h-8 text-purple-500" />, title: "Instant Deployment", desc: "One-click Vercel, Netlify, and GitHub Actions integration." },
            { icon: <Shield className="w-8 h-8 text-green-500" />, title: "Admin Shield", desc: "Complete control over users, credits, and global system rules." }
          ].map((feature, i) => (
            <div key={i} className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-cyan-500/30 transition-all group">
              <div className="mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </section>
      </main>

      <footer className="border-t border-white/5 py-10 text-center text-sm text-gray-600">
        &copy; 2024 TIVO-ULTRA. Created with ❤️ by Admin.
      </footer>
    </div>
  );
}