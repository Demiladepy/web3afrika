"use client";

import { Terminal, Rocket, Wallet, Server, Zap, Brain, Fingerprint, CircleDollarSign, ArrowRight, Calendar, Layers, Landmark } from "lucide-react";
import Link from "next/link";
import { NavbarConnectButton } from "@/components/NavbarConnectButton";
import { useState } from "react";

export default function VisionPage() {
  const [activeQuarter, setActiveQuarter] = useState('Q1');

  const roadmap = {
    Q1: {
      title: "Decentralized Intelligence",
      description: "Launching autonomous agents that can verify compute and run decentralized AI models directly on-chain.",
      project: "NeuroLink",
      detail: "A decentralized marketplace for AI models tailored for African linguistic data.",
      icon: Brain,
      color: "text-[#0C6E5F]",
      border: "border-[#0C6E5F]"
    },
    Q2: {
      title: "Real-World Impact",
      description: "Bridging the gap with stablecoin payments for everyday transactions and localized on-chain identity solutions.",
      project: "PayAfrik",
      detail: "Zero-gas stablecoin rails for merchants across 12 countries.",
      icon: Wallet,
      color: "text-[#E05D3A]",
      border: "border-[#E05D3A]"
    },
    Q3: {
      title: "Infrastructure Expansion",
      description: "Deploying African-native L2 nodes to reduce latency and ensure censorship resistance.",
      project: "AfriNode",
      detail: "Validator nodes in Lagos, Nairobi, and Cairo.",
      icon: Server,
      color: "text-[#0C6E5F]",
      border: "border-[#0C6E5F]"
    },
    Q4: {
      title: "The Renaissance",
      description: "Full DAO governance transition and launch of the African Builder Fund.",
      project: "GovDAO",
      detail: "On-chain voting for community grants.",
      icon: Landmark,
      color: "text-[#E05D3A]",
      border: "border-[#E05D3A]"
    }
  };

  const current = roadmap[activeQuarter as keyof typeof roadmap];
  const Icon = current.icon;

  return (
    <main className="min-h-screen relative bg-black scanlines">
      {/* Matrix grid background */}
      <div className="fixed inset-0 matrix-bg opacity-30"></div>

      {/* Ambient glow */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-[#0C6E5F] rounded-full blur-[150px] opacity-10"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-[#00ff88] rounded-full blur-[150px] opacity-10"></div>

      {/* Top Nav */}
      <nav className="relative z-50 border-b border-[#0C6E5F]/20 bg-black/60 backdrop-blur-md glass-card">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0C6E5F] to-[#00ff88] rounded-lg flex items-center justify-center shadow-lg">
              <Terminal className="w-6 h-6 text-black" />
            </div>
            <div className="font-bold text-xl">
              <span className="text-white">Web3Afrika</span>
              <span className="text-[#00ff88]">//</span>
              <span className="glow-green">Wrapped</span>
            </div>
          </Link>

          <div className="flex items-center gap-6 text-sm">
            <Link href="/" className="text-gray-300 hover:text-[#00ff88] transition-colors font-medium">Home</Link>
            <Link href="/vision" className="text-[#00ff88] font-medium">2025 Impact</Link>
            <Link href="/community" className="text-gray-300 hover:text-[#00ff88] transition-colors font-medium">Community</Link>
            <NavbarConnectButton />
          </div>
        </div>
      </nav>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16">

        {/* Hero Section */}
        <header className="mb-20 text-center space-y-8">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none">
            <span className="block text-white">2025: YEAR OF</span>
            <span className="block glow-green text-[#00ff88] mt-2">IMPACT</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed">
            We spent 2025 scaling. Now, we celebrate the milestones.{" "}
            <span className="text-[#E05D3A] font-bold">Are you ready to build?</span>
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="px-8 py-4 bg-gradient-to-r from-[#0C6E5F] to-[#00ff88] hover:from-[#00ff88] hover:to-[#0C6E5F] text-black hover:text-white font-black text-lg uppercase tracking-wider rounded-2xl transition-all shadow-2xl hover:scale-105 flex items-center gap-3">
              Mint Builder Pass
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 glass-card border border-white/20 hover:border-[#00ff88]/50 text-white font-black text-lg uppercase tracking-wider rounded-2xl transition-all hover:scale-105 flex items-center gap-3">
              Explore Tech Stack
              <Layers className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Metrics Section */}
        <div className="mb-32 relative">
          <div className="glass-card p-12 rounded-3xl border border-white/10 matrix-rain">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="text-7xl font-black text-white mb-2">14,025</div>
                <div className="text-lg font-bold text-gray-400 uppercase tracking-wider">Total Builders</div>
              </div>
              <div>
                <div className="text-7xl font-black text-[#00ff88] mb-2">2.4M+</div>
                <div className="text-lg font-bold text-gray-400 uppercase tracking-wider">On-Chain Actions</div>
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap Section */}
        <div className="mb-32">
          <div className="flex items-center flex-wrap gap-4 mb-12">
            <div className="w-1 h-12 bg-gradient-to-b from-[#E05D3A] to-[#00ff88]"></div>
            <div>
              <div className="text-sm font-bold text-[#E05D3A] uppercase tracking-wider mb-1">THE JOURNEY</div>
              <h2 className="text-5xl font-black text-white">2025 Milestones</h2>
            </div>
            <div className="flex-1 min-w-[20px]"></div>
            <div className="flex gap-2 bg-black/40 p-1 rounded-full border border-white/10">
              {['Q1', 'Q2', 'Q3', 'Q4'].map((q) => (
                <button
                  key={q}
                  onClick={() => setActiveQuarter(q)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeQuarter === q
                    ? 'bg-[#0C6E5F] text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Display */}
          <div className="glass-card p-12 rounded-3xl border border-white/10 relative overflow-hidden min-h-[400px] flex items-center">
            <div className="absolute inset-0 pattern-mudcloth opacity-10 pointer-events-none"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 w-full">
              <div>
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full border ${current.border} bg-black/20 mb-6`}>
                  <Calendar className={`w-4 h-4 ${current.color}`} />
                  <span className={`text-xs font-bold ${current.color} uppercase tracking-wider`}>Quarter: {activeQuarter} 2025</span>
                </div>
                <h3 className="text-5xl font-black text-white mb-6 leading-tight">{current.title}</h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  {current.description}
                </p>
              </div>

              <div className="glass-card p-8 rounded-2xl bg-black/40 border-white/5">
                <div className="flex items-start gap-4">
                  <div className={`w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center ${current.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Featured Project</div>
                    <div className="text-2xl font-black text-white mb-2">{current.project}</div>
                    <p className="text-gray-400">
                      {current.detail}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Focus */}
        <div className="mb-32">
          <h2 className="text-5xl font-black text-white text-center mb-16">Tech Stack Focus</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-2xl hover-lift glow-hover relative overflow-hidden">
              <div className="absolute inset-0 pattern-kente opacity-5 pointer-events-none"></div>
              <div className="w-16 h-16 rounded-xl bg-[#0C6E5F]/20 border border-[#0C6E5F]/40 flex items-center justify-center mb-6 relative z-10">
                <Layers className="w-8 h-8 text-[#0C6E5F]" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3 relative z-10">L2 Scaling</h3>
              <p className="text-gray-300 leading-relaxed relative z-10">
                Implementing ZK-rollups to minimize transaction costs while maintaining Ethereum-level security.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl hover-lift glow-hover relative overflow-hidden">
              <div className="absolute inset-0 pattern-mudcloth opacity-5 pointer-events-none"></div>
              <div className="w-16 h-16 rounded-xl bg-[#E05D3A]/20 border border-[#E05D3A]/40 flex items-center justify-center mb-6 relative z-10">
                <Fingerprint className="w-8 h-8 text-[#E05D3A]" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3 relative z-10">Onchain Identity</h3>
              <p className="text-gray-300 leading-relaxed relative z-10">
                Self-sovereign identity protocols allowing users to own their reputation across dApps.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl hover-lift glow-hover relative overflow-hidden">
              <div className="absolute inset-0 pattern-kente opacity-5 pointer-events-none"></div>
              <div className="w-16 h-16 rounded-xl bg-[#0C6E5F]/20 border border-[#0C6E5F]/40 flex items-center justify-center mb-6 relative z-10">
                <CircleDollarSign className="w-8 h-8 text-[#0C6E5F]" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3 relative z-10">DeFi Primitives</h3>
              <p className="text-gray-300 leading-relaxed relative z-10">
                Building lending and borrowing protocols specifically for SME financing in emerging markets.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-card p-12 rounded-3xl border border-[#00ff88]/30 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Join the Next Cohort</h2>
          <p className="text-xl text-gray-300 mb-8">Get early access to developer tools and grants.</p>
          <button className="px-8 py-4 glass-card border border-white/20 hover:border-[#00ff88]/50 text-white font-black text-lg uppercase tracking-wider rounded-2xl transition-all hover:scale-105">
            Apply Now
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-[#0C6E5F]/20 text-center">
          <p className="text-sm font-mono text-gray-600">
            © 2025 Web3Afrika. Building & Scaling Together.
          </p>
        </footer>
      </div>

      {/* Terminal Ticker */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-[#00ff88]/40 py-3 overflow-hidden z-50 shadow-2xl">
        <div className="ticker whitespace-nowrap text-sm font-mono text-[#00ff88] font-bold">
          <span className="inline-block px-10">// BUILD_STATUS: SCALING (100%)</span>
          <span className="inline-block px-10">&gt;&gt; NEW_MEMBER: @dev_david (Lagos) joined</span>
          <span className="inline-block px-10">// COMMIT: 7Faa92b [Mainnet Launch]</span>
          <span className="inline-block px-10">&gt;&gt; EVENT: Hackathon_Nairobi_2025 [COMPLETED]</span>
        </div>
      </div>
    </main>
  );
}
