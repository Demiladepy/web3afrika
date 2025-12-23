import { Generator } from "@/components/Generator";
import { NavbarConnectButton } from "@/components/NavbarConnectButton";
import { Terminal, TrendingUp, Users, Globe2, Code2 } from "lucide-react";
import Link from "next/link";

export default function Home() {
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
            <div className="w-10 h-10 bg-gradient-to-br from-[#0C6E5F] to-[#00ff88] rounded-lg flex items-center justify-center shadow-lg glow-hover">
              <Terminal className="w-6 h-6 text-black" />
            </div>
            <div className="font-bold text-xl">
              <span className="text-white">Web3Afrika</span>
              <span className="text-[#00ff88]">//</span>
              <span className="glow-green">Wrapped</span>
            </div>
          </Link>

          <div className="flex items-center gap-6 text-sm">
            <Link href="/" className="text-[#00ff88] font-medium">Home</Link>
            <Link href="/vision" className="text-gray-300 hover:text-[#00ff88] transition-colors font-medium">2025 Vision</Link>
            <Link href="/community" className="text-gray-300 hover:text-[#00ff88] transition-colors font-medium">Community Wins</Link>
            <NavbarConnectButton />
          </div>
        </div>
      </nav>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-16">

        {/* Status Badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full border border-[#00ff88]/30 hover:border-[#00ff88]/50 transition-all">
            <div className="w-2.5 h-2.5 rounded-full bg-[#00ff88] pulse-green shadow-lg shadow-[#00ff88]/50"></div>
            <span className="text-sm font-mono text-[#00ff88] uppercase tracking-wider font-bold">
              🚀 System Status: Scaling
            </span>
          </div>
        </div>

        {/* Hero */}
        <header className="mb-24 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-[#EE3C22]/30 mb-4">
            <span className="text-xs font-bold text-[#EE3C22] uppercase tracking-wider">2025: YEAR OF SCALING</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none">
            <span className="block text-white">YOUR BUILDER</span>
            <span className="block glow-green text-[#00ff88] mt-2">PERSONA</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
            Based on your on-chain activity, code commits, and community<br />
            contributions in <span className="text-white font-bold">2024</span>.
          </p>
        </header>

        {/* Generator */}
        <Generator />

        {/* Stats Dashboard */}
        <div className="mt-32 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-[#00ff88]"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">
              Global Footprint
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#0C6E5F] to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-8 rounded-2xl group hover:border-[#00ff88]/50 transition-all hover-lift glow-hover">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-lg bg-[#0C6E5F]/20 border border-[#0C6E5F]/30 flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#00ff88]" />
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Transactions</span>
              </div>
              <div className="text-6xl font-black text-white mb-3 leading-none">80K<span className="text-[#00ff88] text-5xl">+</span></div>
              <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden mb-3">
                <div className="h-full progress-bar" style={{ width: '85%' }}></div>
              </div>
              <div className="text-sm font-bold text-[#00ff88]">↑ +120% vs 2023</div>
            </div>

            <div className="glass-card p-8 rounded-2xl group hover:border-[#EE3C22]/50 transition-all hover-lift glow-hover">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-lg bg-[#EE3C22]/20 border border-[#EE3C22]/30 flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-[#EE3C22]" />
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Core Builders</span>
              </div>
              <div className="text-6xl font-black text-white mb-3 leading-none">80<span className="text-[#EE3C22] text-5xl">+</span></div>
              <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden mb-3">
                <div className="h-full bg-gradient-to-r from-[#EE3C22] to-[#EC9120]" style={{ width: '90%' }}></div>
              </div>
              <div className="text-sm font-bold text-[#EE3C22]">Target: 100% by Q1 2025</div>
            </div>

            <div className="glass-card p-8 rounded-2xl group hover:border-[#00ff88]/50 transition-all hover-lift glow-hover">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-lg bg-[#0C6E5F]/20 border border-[#0C6E5F]/30 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-[#00ff88]" />
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Active</span>
              </div>
              <div className="text-6xl font-black text-white mb-3 leading-none">300<span className="text-[#00ff88] text-5xl">+</span></div>
              <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden mb-3">
                <div className="h-full progress-bar" style={{ width: '75%' }}></div>
              </div>
              <div className="text-sm font-bold text-[#00ff88]">Summit '25</div>
            </div>

            <div className="glass-card p-8 rounded-2xl group hover:border-[#00ff88]/50 transition-all hover-lift glow-hover">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-lg bg-[#0C6E5F]/20 border border-[#0C6E5F]/30 flex items-center justify-center">
                  <Globe2 className="w-6 h-6 text-[#00ff88]" />
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Major Hubs</span>
              </div>
              <div className="text-6xl font-black text-white mb-4 leading-none">4<span className="text-gray-500 text-4xl"> Hubs</span></div>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1.5 bg-[#0C6E5F]/20 border border-[#0C6E5F]/40 rounded-lg text-xs font-bold text-[#00ff88] hover:bg-[#0C6E5F]/30 transition-colors">Lagos</span>
                <span className="px-3 py-1.5 bg-[#0C6E5F]/20 border border-[#0C6E5F]/40 rounded-lg text-xs font-bold text-[#00ff88] hover:bg-[#0C6E5F]/30 transition-colors">Nairobi</span>
                <span className="px-3 py-1.5 bg-[#0C6E5F]/20 border border-[#0C6E5F]/40 rounded-lg text-xs font-bold text-[#00ff88] hover:bg-[#0C6E5F]/30 transition-colors">Accra</span>
                <span className="px-3 py-1.5 bg-[#0C6E5F]/20 border border-[#0C6E5F]/40 rounded-lg text-xs font-bold text-[#00ff88] hover:bg-[#0C6E5F]/30 transition-colors">Cape Town</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-[#0C6E5F]/20 text-center">
          <p className="text-sm font-mono text-gray-600">
            © 2025 Web3Afrika. Building #Scaling Together.
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
          <span className="inline-block px-10">// NETWORK_STATUS: ONLINE</span>
          <span className="inline-block px-10">&gt;&gt; DEPLOYMENT: Base_Mainnet_v2.1.0</span>
          <span className="inline-block px-10">// SYSTEM: SCALING_MODE ACTIVE</span>
        </div>
      </div>
    </main>
  );
}
