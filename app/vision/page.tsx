import { Terminal, Rocket, Wallet, Server, Zap, Brain, Fingerprint, DollarSign, ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";

export default function VisionPage() {
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
            <Link href="/vision" className="text-[#00ff88] font-medium">2025 Vision</Link>
            <Link href="/community" className="text-gray-300 hover:text-[#00ff88] transition-colors font-medium">Community</Link>
            <button className="px-5 py-2.5 bg-gradient-to-r from-[#0C6E5F] to-[#09705F] hover:from-[#00ff88] hover:to-[#0C6E5F] text-white hover:text-black font-bold rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16">
        {/* Status Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full border border-[#00ff88]/30">
            <div className="w-2.5 h-2.5 rounded-full bg-[#00ff88] pulse-green shadow-lg shadow-[#00ff88]/50"></div>
            <span className="text-sm font-mono text-[#00ff88] uppercase tracking-wider font-bold">
              SYSTEM STATUS: SCALING
            </span>
          </div>
        </div>

        {/* Hero Section */}
        <header className="mb-20 text-center space-y-8">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none">
            <span className="block text-white">2025: YEAR OF</span>
            <span className="block glow-green text-[#00ff88] mt-2">SCALING</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed">
            We spent 2024 laying the foundation. Now, we activate the protocol for exponential growth.{" "}
            <span className="text-[#EE3C22] font-bold">Are you ready to build?</span>
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="px-8 py-4 bg-gradient-to-r from-[#0C6E5F] to-[#00ff88] hover:from-[#00ff88] hover:to-[#0C6E5F] text-black hover:text-white font-black text-lg uppercase tracking-wider rounded-2xl transition-all shadow-2xl hover:scale-105 flex items-center gap-3">
              Mint Builder Pass
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="px-8 py-4 glass-card border border-white/20 hover:border-[#00ff88]/50 text-white font-black text-lg uppercase tracking-wider rounded-2xl transition-all hover:scale-105 flex items-center gap-3">
              Explore Tech Stack
              <Zap className="w-5 h-5" />
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
          <div className="flex items-center gap-4 mb-12">
            <div className="w-1 h-12 bg-gradient-to-b from-[#EE3C22] to-[#00ff88]"></div>
            <div>
              <div className="text-sm font-bold text-[#EE3C22] uppercase tracking-wider mb-1">THE ROADMAP</div>
              <h2 className="text-5xl font-black text-white">Strategic Pillars</h2>
            </div>
            <div className="flex-1"></div>
            <div className="flex gap-2">
              {['Q1', 'Q2', 'Q3', 'Q4'].map((q) => (
                <button
                  key={q}
                  className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                    q === 'Q1'
                      ? 'bg-[#0C6E5F] text-white'
                      : 'glass-card text-gray-400 hover:text-white'
                  }`}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="relative pl-8 md:pl-12">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0C6E5F] via-[#00ff88] to-[#EE3C22]"></div>

            {/* Pillar 1 */}
            <div className="relative mb-16">
              <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-[#0C6E5F] border-4 border-black shadow-lg"></div>
              <div className="glass-card p-8 rounded-2xl hover-lift glow-hover">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-[#0C6E5F]/20 border border-[#0C6E5F]/40 flex items-center justify-center">
                    <Brain className="w-8 h-8 text-[#0C6E5F]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-black text-white">Decentralized Intelligence</h3>
                      <span className="px-3 py-1 bg-[#0C6E5F]/20 border border-[#0C6E5F]/40 rounded-full text-xs font-bold text-[#0C6E5F]">
                        Q1 2025
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Launching autonomous agents that can verify compute and run decentralized AI models directly on-chain.
                    </p>
                    <div className="glass-card p-4 rounded-xl border border-white/5">
                      <div className="flex items-start gap-3">
                        <Brain className="w-5 h-5 text-[#0C6E5F] mt-0.5" />
                        <div>
                          <div className="font-bold text-white mb-1">Project: NeuroLink</div>
                          <p className="text-sm text-gray-400">
                            A decentralized marketplace for AI models tailored for African linguistic data.
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="relative mb-16">
              <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-[#EE3C22] border-4 border-black shadow-lg"></div>
              <div className="glass-card p-8 rounded-2xl hover-lift glow-hover">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl bg-[#EE3C22]/20 border border-[#EE3C22]/40 flex items-center justify-center">
                    <Wallet className="w-8 h-8 text-[#EE3C22]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-black text-white">Real-World Impact</h3>
                      <span className="px-3 py-1 bg-[#EE3C22]/20 border border-[#EE3C22]/40 rounded-full text-xs font-bold text-[#EE3C22]">
                        Q2 2025
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      Bridging the gap with stablecoin payments for everyday transactions and localized on-chain identity solutions.
                    </p>
                    <div className="glass-card p-4 rounded-xl border border-white/5">
                      <div className="flex items-start gap-3">
                        <Wallet className="w-5 h-5 text-[#EE3C22] mt-0.5" />
                        <div>
                          <div className="font-bold text-white mb-1">Project: PayAfrik</div>
                          <p className="text-sm text-gray-400">
                            Zero-gas stablecoin rails for merchants across 12 countries.
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 ml-auto" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="relative">
              <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-[#0C6E5F] border-4 border-black shadow-lg"></div>
              <div className="glass-card p-8 rounded-2xl hover-lift glow-hover">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#0C6E5F]/20 border border-[#0C6E5F]/40 flex items-center justify-center">
                    <Server className="w-8 h-8 text-[#0C6E5F]" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-black text-white">Infrastructure Expansion</h3>
                      <span className="px-3 py-1 bg-[#0C6E5F]/20 border border-[#0C6E5F]/40 rounded-full text-xs font-bold text-[#0C6E5F]">
                        Q3-Q4 2025
                      </span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">
                      Deploying African-native L2 nodes to reduce latency and ensure censorship resistance.
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
            <div className="glass-card p-8 rounded-2xl hover-lift glow-hover">
              <div className="w-16 h-16 rounded-xl bg-[#0C6E5F]/20 border border-[#0C6E5F]/40 flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-[#0C6E5F]" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">L2 Scaling</h3>
              <p className="text-gray-300 leading-relaxed">
                Implementing ZK-rollups to minimize transaction costs while maintaining Ethereum-level security.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl hover-lift glow-hover">
              <div className="w-16 h-16 rounded-xl bg-[#EE3C22]/20 border border-[#EE3C22]/40 flex items-center justify-center mb-6">
                <Fingerprint className="w-8 h-8 text-[#EE3C22]" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Onchain Identity</h3>
              <p className="text-gray-300 leading-relaxed">
                Self-sovereign identity protocols allowing users to own their reputation across dApps.
              </p>
            </div>

            <div className="glass-card p-8 rounded-2xl hover-lift glow-hover">
              <div className="w-16 h-16 rounded-xl bg-[#0C6E5F]/20 border border-[#0C6E5F]/40 flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-[#0C6E5F]" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">DeFi Primitives</h3>
              <p className="text-gray-300 leading-relaxed">
                Building lending and borrowing protocols specifically for SME financing in emerging markets.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-card p-12 rounded-3xl border border-[#00ff88]/30 text-center">
          <h2 className="text-4xl font-black text-white mb-4">Join the 2025 Cohort</h2>
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
          <span className="inline-block px-10">// BUILD_STATUS: PASSING (99.9%)</span>
          <span className="inline-block px-10">&gt;&gt; NEW_MEMBER: @dev_david (Lagos) joined</span>
          <span className="inline-block px-10">// COMMIT: 7Faa92b [Mainnet Launch]</span>
          <span className="inline-block px-10">&gt;&gt; EVENT: Hackathon_Nairobi_2025 [REGISTRATION OPEN]</span>
        </div>
      </div>
    </main>
  );
}

