import { Terminal, Trophy, Play, ArrowRight, Shield, TrendingUp, Plus, Quote, X, Linkedin, Download } from "lucide-react";
import Link from "next/link";

export default function CommunityPage() {
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
            <Link href="/vision" className="text-gray-300 hover:text-[#00ff88] transition-colors font-medium">2025 Vision</Link>
            <Link href="/community" className="text-[#00ff88] font-medium">Community Wins</Link>
            <button className="px-5 py-2.5 bg-gradient-to-r from-[#0C6E5F] to-[#09705F] hover:from-[#00ff88] hover:to-[#0C6E5F] text-white hover:text-black font-bold rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105">
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <header className="mb-20 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-[#00ff88]/30 mb-4">
            <div className="w-2 h-2 rounded-full bg-[#00ff88] pulse-green"></div>
            <span className="text-xs font-bold text-[#00ff88] uppercase tracking-wider">LIVE FROM THE BLOCKCHAIN</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none">
            <span className="block text-white">2024: THE YEAR</span>
            <span className="block glow-green text-[#00ff88] mt-2">WE BUILT</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed">
            From first commits to hackathon grand prizes. We are celebrating the builders, shippers, and winners who defined our community this year.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <button className="px-8 py-4 bg-gradient-to-r from-[#0C6E5F] to-[#00ff88] hover:from-[#00ff88] hover:to-[#0C6E5F] text-black hover:text-white font-black text-lg uppercase tracking-wider rounded-2xl transition-all shadow-2xl hover:scale-105 flex items-center gap-3">
              <Trophy className="w-5 h-5" />
              View Hall of Fame
            </button>
            <button className="px-8 py-4 glass-card border border-white/20 hover:border-[#00ff88]/50 text-white font-black text-lg uppercase tracking-wider rounded-2xl transition-all hover:scale-105 flex items-center gap-3">
              <Play className="w-5 h-5" />
              Watch Recap Video
            </button>
          </div>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <div className="glass-card p-8 rounded-2xl hover-lift glow-hover">
            <div className="flex items-center justify-between mb-4">
              <div className="text-xs font-bold text-[#00ff88] uppercase tracking-wider">+120% YoY</div>
              <Trophy className="w-6 h-6 text-[#00ff88]" />
            </div>
            <div className="text-5xl font-black text-white mb-2">85</div>
            <div className="text-lg font-bold text-gray-400">Total Community Wins</div>
          </div>

          <div className="glass-card p-8 rounded-2xl hover-lift glow-hover">
            <div className="text-5xl font-black text-white mb-2">450+</div>
            <div className="text-lg font-bold text-gray-400 mb-4">Active Builders</div>
            <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden">
              <div className="h-full progress-bar" style={{ width: '75%' }}></div>
            </div>
          </div>

          <div className="glass-card p-8 rounded-2xl hover-lift glow-hover">
            <div className="text-5xl font-black text-white mb-2">12</div>
            <div className="text-lg font-bold text-gray-400 mb-4">Hackathons Won</div>
            <div className="flex gap-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0C6E5F] to-[#00ff88] border-2 border-black"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Hall of Fame */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="text-sm font-bold text-[#EE3C22] uppercase tracking-wider">HALL OF FAME</div>
            <div className="flex-1 h-px bg-gradient-to-r from-[#EE3C22] to-transparent"></div>
          </div>
          <h2 className="text-5xl font-black text-white mb-12">Featured Champion</h2>

          <div className="glass-card p-8 rounded-3xl border border-white/10 hover-lift">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0C6E5F]/20 to-[#00ff88]/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-black text-white/20">📊</div>
                </div>
              </div>
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#0C6E5F] to-[#00ff88] border-4 border-black"></div>
                    <div>
                      <div className="font-black text-white text-xl">Sarah Mensah</div>
                      <div className="text-sm text-gray-400">Lead Developer</div>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-[#EE3C22]/20 border border-[#EE3C22]/40 rounded-full text-xs font-bold text-[#EE3C22]">
                    Hackathon Winner
                  </span>
                </div>
                <h3 className="text-3xl font-black text-white mb-4">CERTIFLEX</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  A decentralized certification platform revolutionizing credential verification. Sarah built a system that ensures privacy while maintaining transparency on-chain.
                </p>
                <div className="flex gap-2 mb-6 flex-wrap">
                  <span className="px-3 py-1 glass-card rounded-lg text-xs font-bold text-white">Solidity</span>
                  <span className="px-3 py-1 glass-card rounded-lg text-xs font-bold text-white">React</span>
                  <span className="px-3 py-1 glass-card rounded-lg text-xs font-bold text-white">Zero-Knowledge Proofs</span>
                </div>
                <button className="px-6 py-3 glass-card border border-white/20 hover:border-[#00ff88]/50 text-white font-bold rounded-xl transition-all hover:scale-105 flex items-center gap-2">
                  View Project
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Builders & Shippers */}
        <div className="mb-20">
          <h2 className="text-5xl font-black text-white mb-12">Builders & Shippers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-2xl hover-lift glow-hover">
              <div className="w-16 h-16 rounded-xl bg-[#0C6E5F]/20 border border-[#0C6E5F]/40 flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-[#0C6E5F]" />
              </div>
              <span className="px-3 py-1 bg-[#0C6E5F]/20 border border-[#0C6E5F]/40 rounded-full text-xs font-bold text-[#0C6E5F] mb-4 inline-block">
                OPEN SOURCE
              </span>
              <h3 className="text-2xl font-black text-white mb-3">Privacy by Design</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Contributing to core Layer 1 chains to enhance privacy protocols.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0C6E5F] to-[#00ff88] border-2 border-black"></div>
                <div>
                  <div className="font-bold text-white">Yinka Oshidipe</div>
                  <div className="text-sm text-gray-400">Core Contributor</div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl hover-lift glow-hover">
              <div className="w-16 h-16 rounded-xl bg-[#EE3C22]/20 border border-[#EE3C22]/40 flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[#EE3C22]" />
              </div>
              <span className="px-3 py-1 bg-[#EE3C22]/20 border border-[#EE3C22]/40 rounded-full text-xs font-bold text-[#EE3C22] mb-4 inline-block">
                GROWTH STORY
              </span>
              <h3 className="text-2xl font-black text-white mb-3">From Zero to Hero</h3>
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "I gained the confidence to deploy my first mainnet contract thanks to the mentorship here."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#EE3C22] to-[#EC9120] border-2 border-black"></div>
                <div>
                  <div className="font-bold text-white">Madev</div>
                  <div className="text-sm text-gray-400">Smart Contract Dev</div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl hover-lift glow-hover border-2 border-dashed border-[#00ff88]/30">
              <div className="w-16 h-16 rounded-xl bg-[#0C6E5F]/20 border border-[#0C6E5F]/40 flex items-center justify-center mb-6">
                <Plus className="w-8 h-8 text-[#00ff88]" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">You're Next</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Start building today and be featured in our 2025 wrap up.
              </p>
              <button className="w-full px-6 py-3 bg-gradient-to-r from-[#0C6E5F] to-[#00ff88] hover:from-[#00ff88] hover:to-[#0C6E5F] text-black hover:text-white font-black rounded-xl transition-all flex items-center justify-center gap-2">
                Start Building
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Community Voices */}
        <div className="mb-20">
          <h2 className="text-5xl font-black text-white mb-12">Community Voices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="font-mono text-xs text-[#00ff88] mb-4">&gt; console.log("Life changing");</div>
              <p className="text-gray-300 leading-relaxed mb-4 italic">
                "The hackathons pushed me to learn Rust. Now I'm contributing to Solana projects globally. This community is pure energy."
              </p>
              <div className="text-sm font-bold text-white">— David K.</div>
            </div>

            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="font-mono text-xs text-[#00ff88] mb-4">&gt; sudo commit --message "Gratitude"</div>
              <p className="text-gray-300 leading-relaxed mb-4 italic">
                "Web3Afrika isn't just a DAO, it's a family. The mentorship I received during the cohort was invaluable."
              </p>
              <div className="text-sm font-bold text-white">— Amara N.</div>
            </div>

            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="font-mono text-xs text-[#00ff88] mb-4">&gt; git push origin main</div>
              <p className="text-gray-300 leading-relaxed mb-4 italic">
                "Finding a team for the hackathon was seamless. We didn't just build a project, we built a startup."
              </p>
              <div className="text-sm font-bold text-white">— Samuel O.</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-card p-12 rounded-3xl border border-[#00ff88]/30 text-center">
          <h2 className="text-5xl font-black text-white mb-4">READY TO SCALE?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            2024 was about building foundations. 2025 is the Year of Scaling. Join the movement and ship products that matter.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-[#0C6E5F] to-[#00ff88] hover:from-[#00ff88] hover:to-[#0C6E5F] text-black hover:text-white font-black text-lg uppercase tracking-wider rounded-2xl transition-all shadow-2xl hover:scale-105">
            Join us for 2025
          </button>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-[#0C6E5F]/20 flex items-center justify-between">
          <p className="text-sm font-mono text-gray-600">
            © 2024 Web3Afrika. All rights reserved.
          </p>
          <div className="flex gap-4">
            <button className="w-8 h-8 rounded-lg glass-card flex items-center justify-center hover:border-[#00ff88]/50 transition-colors">
              <X className="w-4 h-4 text-gray-400" />
            </button>
            <button className="w-8 h-8 rounded-lg glass-card flex items-center justify-center hover:border-[#00ff88]/50 transition-colors">
              <Linkedin className="w-4 h-4 text-gray-400" />
            </button>
            <button className="w-8 h-8 rounded-lg glass-card flex items-center justify-center hover:border-[#00ff88]/50 transition-colors">
              <Download className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </footer>
      </div>

      {/* Terminal Ticker */}
      <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-md border-t border-[#00ff88]/40 py-3 overflow-hidden z-50 shadow-2xl">
        <div className="ticker whitespace-nowrap text-sm font-mono text-[#00ff88] font-bold">
          <span className="inline-block px-10">// BUILD_STATUS: PASSING (99.9%)</span>
          <span className="inline-block px-10">&gt;&gt; NEW_MEMBER: @dev_david (Lagos) joined</span>
          <span className="inline-block px-10">// COMMIT: 7Faa92b [Mainnet Launch]</span>
        </div>
      </div>
    </main>
  );
}

