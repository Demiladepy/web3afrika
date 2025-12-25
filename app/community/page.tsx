"use client";

import { Terminal, Trophy, Play, ArrowRight, X, Linkedin, MessageSquare, GitCommit, GitPullRequest } from "lucide-react";
import Link from "next/link";
import { NavbarConnectButton } from "@/components/NavbarConnectButton";

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
            <Link href="/vision" className="text-gray-300 hover:text-[#00ff88] transition-colors font-medium">2025 Impact</Link>
            <Link href="/community" className="text-[#00ff88] font-medium">Community Wins</Link>
            <NavbarConnectButton />
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
            <span className="block text-white">2025: THE YEAR</span>
            <span className="block glow-green text-[#00ff88] mt-2">WE SCALED</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed">
            From first commits to hackathon grand prizes. We are celebrating the builders, shippers, and winners who defined our community this year.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="#community-voices" className="px-8 py-4 bg-gradient-to-r from-[#0C6E5F] to-[#00ff88] hover:from-[#00ff88] hover:to-[#0C6E5F] text-black hover:text-white font-black text-lg uppercase tracking-wider rounded-2xl transition-all shadow-2xl hover:scale-105 flex items-center gap-3">
              <Trophy className="w-5 h-5" />
              View Hall of Fame
            </Link>
            <Link href="https://www.youtube.com/@web3afrika" target="_blank" className="px-8 py-4 glass-card border border-white/20 hover:border-[#00ff88]/50 text-white font-black text-lg uppercase tracking-wider rounded-2xl transition-all hover:scale-105 flex items-center gap-3">
              <Play className="w-5 h-5" />
              Watch Recap Video
            </Link>
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

        {/* Builders & Shippers */}
        <div className="mb-20">
          <h2 className="text-5xl font-black text-white mb-12">Builders & Shippers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-2xl hover-lift glow-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0C6E5F]/10 rounded-full blur-3xl"></div>
              <div className="w-16 h-16 rounded-xl bg-[#0C6E5F]/20 border border-[#0C6E5F]/40 flex items-center justify-center mb-6 overflow-hidden">
                <img src="/uploaded_image_sarah_new.jpg" alt="Community" className="w-full h-full object-cover opacity-80" />
              </div>
              <span className="px-3 py-1 bg-[#0C6E5F]/20 border border-[#0C6E5F]/40 rounded-full text-xs font-bold text-[#0C6E5F] mb-4 inline-block">
                VOLUNTEER
              </span>
              <h3 className="text-2xl font-black text-white mb-3">Growth & Confidence</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                "At the start of 2024, I made a commitment to improve my communication skills... volunteered at @web3afrika in Lagos, which helped boost my confidence even more!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0C6E5F] to-[#00ff88] border-2 border-black"></div>
                <div>
                  <div className="font-bold text-white">Sarah Mensah</div>
                  <div className="text-sm text-gray-400">Community Volunteer</div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl hover-lift glow-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#EE3C22]/10 rounded-full blur-3xl"></div>
              <div className="w-16 h-16 rounded-xl bg-[#EE3C22]/20 border border-[#EE3C22]/40 flex items-center justify-center mb-6 overflow-hidden">
                <img src="/uploaded_image_madev.png" alt="Community Event" className="w-full h-full object-cover opacity-80" />
              </div>
              <span className="px-3 py-1 bg-[#EE3C22]/20 border border-[#EE3C22]/40 rounded-full text-xs font-bold text-[#EE3C22] mb-4 inline-block">
                COMMUNITY
              </span>
              <h3 className="text-2xl font-black text-white mb-3">Amazing Experience</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                "It was an amazing experience at @web3afrika last week! I met many passionate Web3 enthusiasts... Thank you, @web3afrika and @oasisonchain."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#EE3C22] to-[#EC9120] border-2 border-black"></div>
                <div>
                  <div className="font-bold text-white">Madev</div>
                  <div className="text-sm text-gray-400">Smart Contract Dev</div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-2xl hover-lift glow-hover relative overflow-hidden">
              <div className="w-16 h-16 rounded-xl bg-[#00ff88]/20 border border-[#00ff88]/40 flex items-center justify-center mb-6 overflow-hidden">
                <img src="/uploaded_image_certiflex.jpg" alt="Team building Certiflex" className="w-full h-full object-cover opacity-80" />
              </div>
              <span className="px-3 py-1 bg-[#00ff88]/20 border border-[#00ff88]/40 rounded-full text-xs font-bold text-[#00ff88] mb-4 inline-block">
                AYATHON
              </span>
              <h3 className="text-2xl font-black text-white mb-3">CERTIFLEX</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                "I'm proud to say, my team and I won the just concluded Ayathon. I had a lovely time building 'CERTIFLEX'... Special thanks to @ayahq_ and @web3afrika"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00ff88] to-[#0C6E5F] border-2 border-black flex items-center justify-center">
                  <span className="text-xs">🏆</span>
                </div>
                <div>
                  <div className="font-bold text-white">Anoluwapo Ali</div>
                  <div className="text-sm text-gray-400">Hackathon Winner</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Community Voices */}
        <div className="mb-20" id="community-voices">
          <h2 className="text-5xl font-black text-white mb-12">Community Voices</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="flex items-center gap-2 font-mono text-xs text-[#00ff88] mb-4">
                <MessageSquare className="w-3 h-3" />
                <span>&gt; console.log("Bullish");</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 italic">
                "Interesting to hear how intentional @olanetsoft n the team is about the community. I'm really bullish on Web3afrika!"
              </p>
              <div className="text-sm font-bold text-white">— NonFungibleHuman</div>
            </div>

            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="flex items-center gap-2 font-mono text-xs text-[#00ff88] mb-4">
                <GitCommit className="w-3 h-3" />
                <span>&gt; sudo commit --message "Winner"</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 italic">
                "Excited to win this week quiz challenge at @web3afrika, and also being a first time winner in the quiz challenge 😁"
              </p>
              <div className="text-sm font-bold text-white">— Bukola Anuoluwapo</div>
            </div>

            <div className="glass-card p-6 rounded-2xl hover-lift">
              <div className="flex items-center gap-2 font-mono text-xs text-[#00ff88] mb-4">
                <GitPullRequest className="w-3 h-3" />
                <span>&gt; git push origin main</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4 italic">
                "I'm super excited to be here, live and direct at @web3afrika event, witnessing the FIRST collaboration between @oasisOnchain n @ThankArbitrum! 🎉"
              </p>
              <div className="text-sm font-bold text-white">— 𝒅𝒆𝒂𝒏 𓃵</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="glass-card p-12 rounded-3xl border border-[#00ff88]/30 text-center">
          <h2 className="text-5xl font-black text-white mb-4">READY TO SCALE?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            2025 was about scaling. 2026 is the Year of Dominance. Join the movement and ship products that matter.
          </p>
          <Link href="https://discord.com/invite/YMJ49PDTym" target="_blank" className="inline-block px-8 py-4 bg-gradient-to-r from-[#0C6E5F] to-[#00ff88] hover:from-[#00ff88] hover:to-[#0C6E5F] text-black hover:text-white font-black text-lg uppercase tracking-wider rounded-2xl transition-all shadow-2xl hover:scale-105">
            Join the Community
          </Link>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-[#0C6E5F]/20 flex items-center justify-between">
          <p className="text-sm font-mono text-gray-600">
            © 2025 Web3Afrika. Scaling African Innovation.
          </p>
          <div className="flex gap-4">
            <Link href="https://x.com/web3afrika" target="_blank" className="w-8 h-8 rounded-lg glass-card flex items-center justify-center hover:bg-black/50 hover:border-[#00ff88]/50 transition-all text-gray-400 hover:text-white">
              <X className="w-4 h-4" />
            </Link>
            <Link href="https://www.linkedin.com/company/web3afrika/" target="_blank" className="w-8 h-8 rounded-lg glass-card flex items-center justify-center hover:bg-[#0077b5]/20 hover:border-[#0077b5] transition-all text-gray-400 hover:text-[#0077b5]">
              <Linkedin className="w-4 h-4" />
            </Link>
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
