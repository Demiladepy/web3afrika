"use client";

import { Generator } from "@/components/Generator";
import { NavbarConnectButton } from "@/components/NavbarConnectButton";
import {
  Terminal, TrendingUp, Users, Globe2, Code2, X, Linkedin,
  BookOpen, Zap, Palette, Megaphone,
  LayoutGrid, ArrowRight, ShieldCheck, Rocket,
  GraduationCap, MapPin, Fingerprint, Coins, Wallet, Bot, Brain, Sparkles, Building2,
  Layers, Hammer, Radio, Ticket, Ban, CircleDollarSign, Landmark, Award
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [activePersona, setActivePersona] = useState<"dev" | "design" | "creator">("dev");

  const educationModules = [
    {
      title: "Solidity & EVM Mastery",
      desc: "Advanced security & gas optimization standards.",
      icon: <ShieldCheck className="w-5 h-5 text-[#00ff88]" />,
      progress: "100%",
      users: "5.2k grads"
    },
    {
      title: "Foundry & Geth Workflows",
      desc: "Real-world professional tooling for 2025.",
      icon: <Hammer className="w-5 h-5 text-[#E05D3A]" />,
      progress: "100%",
      users: "4.8k grads"
    },
    {
      title: "On-chain Identity (DID)",
      desc: "Building the future of decentralized reputation.",
      icon: <Fingerprint className="w-5 h-5 text-[#0C6E5F]" />,
      progress: "100%",
      users: "3.1k grads"
    }
  ];

  const trends = [
    { name: "RWA / Tokenization", color: "from-blue-500 to-cyan-500", icon: <Landmark className="w-4 h-4" /> },
    { name: "Stablecoin ($cNGN)", color: "from-green-500 to-emerald-500", icon: <CircleDollarSign className="w-4 h-4" /> },
    { name: "AI x Web3 Agents", color: "from-purple-500 to-pink-500", icon: <Bot className="w-4 h-4" /> },
    { name: "Account Abstraction", color: "from-orange-500 to-red-500", icon: <Wallet className="w-4 h-4" /> },
  ];

  return (
    <main className="min-h-screen relative bg-black scanlines overflow-x-hidden">

      {/* Matrix grid background */}
      <div className="fixed inset-0 matrix-bg opacity-30 pointer-events-none"></div>

      {/* Ambient glow */}
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-[#0C6E5F] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-[#00ff88] rounded-full blur-[150px] opacity-10 pointer-events-none"></div>

      {/* Top Nav */}
      <nav className="relative z-50 border-b border-[#0C6E5F]/20 bg-black/60 backdrop-blur-md glass-card sticky top-0">
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

          <div className="hidden md:flex items-center gap-6 text-sm">
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
          <div className="inline-flex items-center gap-3 px-6 py-3 glass-card rounded-full border border-[#00ff88]/30 hover:border-[#00ff88]/50 transition-all cursor-default">
            <div className="w-2.5 h-2.5 rounded-full bg-[#00ff88] pulse-green shadow-lg shadow-[#00ff88]/50"></div>
            <span className="text-sm font-mono text-[#00ff88] uppercase tracking-wider font-bold">
              ✨ Community Impact Report 2025
            </span>
          </div>
        </div>

        {/* Hero */}
        <header className="mb-24 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card border border-[#E05D3A]/30 mb-4 animate-fade-in-up">
            <span className="text-xs font-bold text-[#E05D3A] uppercase tracking-wider">2025: YEAR OF SCALING</span>
          </div>

          <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none animate-fade-in">
            <span className="block text-white">YOUR BUILDER</span>
            <span className="block glow-green text-[#00ff88] mt-2">PERSONA</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed animate-fade-in-delay">
            Based on your on-chain activity, code commits, and community<br />
            contributions in <span className="text-white font-bold">2025</span>.
          </p>
        </header>

        {/* Generator */}
        <Generator />

        {/* Stats Dashboard */}
        <div id="impact" className="mt-32 mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-1 h-8 bg-[#00ff88]"></div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tight">
              Global Footprint
            </h2>
            <div className="flex-1 h-px bg-gradient-to-r from-[#0C6E5F] to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass-card p-8 rounded-2xl group hover:border-[#00ff88]/50 transition-all hover-lift glow-hover relative overflow-hidden">
              <div className="absolute inset-0 pattern-mudcloth opacity-20 pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-5 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#0C6E5F]/20 border border-[#0C6E5F]/30 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-[#00ff88]" />
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Talent Pipeline</span>
              </div>
              <div className="text-5xl font-black text-white mb-3 leading-none">15K<span className="text-[#00ff88] text-3xl">+</span></div>
              <div className="text-sm font-bold text-[#00ff88] mb-1">Developers Supported</div>
              <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden mb-3">
                <div className="h-full progress-bar" style={{ width: '100%' }}></div>
              </div>
              <div className="text-xs text-gray-400">Surpassed 2025 Goals</div>
            </div>

            <div className="glass-card p-8 rounded-2xl group hover:border-[#E05D3A]/50 transition-all hover-lift glow-hover relative overflow-hidden">
              <div className="absolute inset-0 pattern-kente opacity-10 pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-5 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#E05D3A]/20 border border-[#E05D3A]/30 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#E05D3A]" />
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Pan-African Reach</span>
              </div>
              <div className="text-5xl font-black text-white mb-3 leading-none">20<span className="text-[#E05D3A] text-3xl">+ Cities</span></div>
              <div className="text-sm font-bold text-[#E05D3A] mb-1">Across 13+ Countries</div>
              <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden mb-3">
                <div className="h-full bg-gradient-to-r from-[#E05D3A] to-[#C77D2B]" style={{ width: '92%' }}></div>
              </div>
              <div className="text-xs text-gray-400">Physical Presence</div>
            </div>

            <div className="glass-card p-8 rounded-2xl group hover:border-[#00ff88]/50 transition-all hover-lift glow-hover relative overflow-hidden">
              <div className="absolute inset-0 pattern-mudcloth opacity-20 pointer-events-none"></div>
              <div className="flex items-center gap-3 mb-5 relative z-10">
                <div className="w-12 h-12 rounded-lg bg-[#0C6E5F]/20 border border-[#0C6E5F]/30 flex items-center justify-center">
                  <Ticket className="w-6 h-6 text-[#00ff88]" />
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Mass Adoption</span>
              </div>
              <div className="text-5xl font-black text-white mb-3 leading-none">4k<span className="text-[#00ff88] text-3xl">+</span></div>
              <div className="text-sm font-bold text-[#00ff88] mb-1">Blockfest Attendees</div>
              <div className="w-full h-2 bg-gray-900 rounded-full overflow-hidden mb-3">
                <div className="h-full progress-bar" style={{ width: '88%' }}></div>
              </div>
              <div className="text-xs text-gray-400">Single Major Event</div>
            </div>

            <div className="glass-card p-8 rounded-2xl group hover:border-[#00ff88]/50 transition-all hover-lift glow-hover">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-lg bg-[#0C6E5F]/20 border border-[#0C6E5F]/30 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-[#00ff88]" />
                </div>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Major Hubs</span>
              </div>
              <div className="text-6xl font-black text-white mb-4 leading-none">4<span className="text-gray-500 text-4xl"> Hubs</span></div>
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1.5 bg-[#0C6E5F]/20 border border-[#0C6E5F]/40 rounded-lg text-xs font-bold text-[#00ff88]">Lagos</span>
                <span className="px-3 py-1.5 bg-[#0C6E5F]/20 border border-[#0C6E5F]/40 rounded-lg text-xs font-bold text-[#00ff88]">Nairobi</span>
                <span className="px-3 py-1.5 bg-[#0C6E5F]/20 border border-[#0C6E5F]/40 rounded-lg text-xs font-bold text-[#00ff88]">Accra</span>
                <span className="px-3 py-1.5 bg-[#0C6E5F]/20 border border-[#0C6E5F]/40 rounded-lg text-xs font-bold text-[#00ff88]">Kigali</span>
              </div>
            </div>
          </div>
        </div>

        {/* 1. Education Deep-Dive */}
        <section className="mb-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Not Just Teaching.<br />
                <span className="text-[#00ff88]">Building Pipelines.</span>
              </h2>
              <p className="text-gray-400 text-lg">
                In 2025, we shifted focus from general awareness to <strong className="text-white">technical excellence</strong>.
                Our cohorts produced actionable, hireable talent.
              </p>

              <div className="space-y-4">
                {educationModules.map((mod, i) => (
                  <div key={i} className="glass-card p-4 rounded-xl flex items-center gap-4 border-l-4 border-l-[#00ff88] hover:bg-white/5 transition-colors">
                    <div className="p-3 bg-black/40 rounded-lg">
                      {mod.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-lg">{mod.title}</h4>
                      <p className="text-sm text-gray-400">{mod.desc}</p>
                    </div>
                    <div className="hidden sm:block text-right">
                      <div className="text-[#00ff88] font-bold text-sm">{mod.users}</div>
                      <div className="text-xs text-gray-500">Completed</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative glass-card p-8 rounded-3xl border border-[#00ff88]/20 bg-gradient-to-br from-[#0C6E5F]/10 to-transparent">
              <div className="absolute top-0 right-0 p-4">
                <div className="bg-[#00ff88] text-black text-xs font-black px-3 py-1 rounded-full uppercase">
                  Top Rated
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-black/40 p-6 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center">
                      <LayoutGrid className="text-blue-400 w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Smart Contract Auditing</div>
                      <div className="text-xs text-gray-400">Advanced Track</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-[85%]"></div>
                  </div>
                </div>

                <div className="bg-black/40 p-6 rounded-xl border border-white/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <Zap className="text-purple-400 w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-white font-bold">Zero Knowledge Proofs</div>
                      <div className="text-xs text-gray-400">Research Track</div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-purple-500 h-full w-[60%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Ecosystem Events */}
        <section id="events" className="mb-32">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-black text-white mb-2">DEFINING MOMENTS</h2>
              <p className="text-[#00ff88] font-mono">// 2025 HIGHLIGHTS</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Event 1 */}
            <div className="group relative h-[400px] rounded-2xl overflow-hidden glass-card border border-white/5">
              <Image
                src="/images/onchain-festival.jpg"
                alt="Onchain Festival Lagos"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="text-[#E05D3A] text-xs font-bold uppercase tracking-wider mb-2">November 2025</div>
                <h3 className="text-2xl font-black text-white mb-2">Onchain Festival Lagos</h3>
                <p className="text-gray-300 text-sm line-clamp-2">Theme: "The African Renaissance". Pivoting from speculation to real utility.</p>
              </div>
            </div>

            {/* Event 2 */}
            <div className="group relative h-[400px] rounded-2xl overflow-hidden glass-card border border-white/5">
              <Image
                src="/images/blockfest.jpg"
                alt="Blockfest Africa"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="text-[#00ff88] text-xs font-bold uppercase tracking-wider mb-2">October 2025</div>
                <h3 className="text-2xl font-black text-white mb-2">Blockfest Africa</h3>
                <p className="text-gray-300 text-sm line-clamp-2">Over 4,000 participants. Featuring leaders from NITDA & SEC.</p>
              </div>
            </div>

            {/* Event 3 */}
            <div className="group relative h-[400px] rounded-2xl overflow-hidden glass-card border border-white/5">
              <Image
                src="/images/hedera-hackathon.jpg"
                alt="Hedera Hackathon"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div className="text-blue-400 text-xs font-bold uppercase tracking-wider mb-2">Major Milestone</div>
                <h3 className="text-2xl font-black text-white mb-2">Hedera $1M Hackathon</h3>
                <p className="text-gray-300 text-sm line-clamp-2">Coordinating the "Nigeria + Partners" hub. A technical massive success.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Founder's Corner */}
        <section className="mb-32">
          <div className="glass-card p-1 rounded-3xl bg-gradient-to-r from-[#C77D2B] via-[#E05D3A] to-[#0C6E5F]">
            <div className="bg-black/90 rounded-[22px] p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-[#E05D3A] rounded-full blur-[120px] opacity-20"></div>

              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="w-full md:w-1/3">
                  <div className="aspect-square rounded-2xl bg-gray-800 overflow-hidden relative border-2 border-[#E05D3A]/50 shadow-2xl shadow-[#E05D3A]/20">
                    <Image
                      src="/images/founder.jpg"
                      alt="Idris Olubisi"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 z-10">
                      <span className="text-white font-bold text-sm">Idris Olubisi</span>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-2/3">
                  <div className="flex items-center gap-3 mb-6">
                    <Award className="w-8 h-8 text-[#E05D3A]" />
                    <h2 className="text-3xl font-black text-white uppercase">Global Recognition</h2>
                  </div>

                  <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    "In late 2025, our founder <strong className="text-white">Idris Olubisi</strong> was officially recognized by the
                    <span className="text-white mx-1 border-b-2 border-dashed border-[#E05D3A]">UK Government</span>
                    with a <strong>Global Talent Visa</strong>. This milestone validates Web3Afrika not just as a community,
                    but as a bridge to international opportunity for every member."
                  </p>

                  <div className="flex gap-4">
                    <div className="px-4 py-2 rounded-full bg-[#E05D3A]/10 border border-[#E05D3A]/30 text-[#E05D3A] text-sm font-bold">
                      Global Talent
                    </div>
                    <div className="px-4 py-2 rounded-full bg-[#00ff88]/10 border border-[#00ff88]/30 text-[#00ff88] text-sm font-bold">
                      Tech Ecosystem Leader
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Tech Trends 2025 */}
        <section className="mb-32">
          <h2 className="text-center text-4xl font-black text-white mb-16">
            THE 2025 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff88] to-[#0C6E5F]">META</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trends.map((trend, i) => (
              <div key={i} className="glass-card p-6 rounded-xl flex flex-col items-center justify-center text-center gap-3 hover:bg-white/5 transition-all cursor-crosshair">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${trend.color} flex items-center justify-center shadow-lg`}>
                  <div className="text-white">{trend.icon}</div>
                </div>
                <span className="text-white font-bold">{trend.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Interactive "Your Path" */}
        <section className="mb-32 text-center">
          <h2 className="text-3xl font-black text-white mb-8">DISCOVER YOUR PATH</h2>

          <div className="inline-flex bg-white/5 p-1 rounded-full mb-12">
            {(["dev", "design", "creator"] as const).map(role => (
              <button
                key={role}
                onClick={() => setActivePersona(role)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${activePersona === role ? 'bg-[#00ff88] text-black shadow-[0_0_20px_rgba(0,255,136,0.4)]' : 'text-gray-400 hover:text-white'
                  }`}
              >
                {role === 'dev' ? 'Developer' : role === 'design' ? 'Designer' : 'Creator'}
              </button>
            ))}
          </div>

          <div className="max-w-4xl mx-auto min-h-[300px] glass-card p-10 rounded-3xl border border-white/10 relative overflow-hidden transition-all">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00ff88] to-transparent"></div>

            {activePersona === "dev" && (
              <div className="animate-fade-in space-y-4">
                <div className="w-16 h-16 bg-[#00ff88]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Terminal className="w-8 h-8 text-[#00ff88]" />
                </div>
                <h3 className="text-3xl font-bold text-white">The Architect</h3>
                <p className="text-gray-400">In 2025, you focused on Foundry, Rust, and Account Abstraction. <br />You built the pipes that power the continent.</p>
                <div className="pt-4 flex justify-center gap-4">
                  <div className="bg-black/40 px-4 py-2 rounded text-sm text-[#00ff88] font-mono border border-[#00ff88]/20">Code Commits: Top 5%</div>
                  <div className="bg-black/40 px-4 py-2 rounded text-sm text-[#00ff88] font-mono border border-[#00ff88]/20">Hackathons: 3 Wins</div>
                </div>
              </div>
            )}

            {activePersona === "design" && (
              <div className="animate-fade-in space-y-4">
                <div className="w-16 h-16 bg-[#E05D3A]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-[#E05D3A]" />
                </div>
                <h3 className="text-3xl font-bold text-white">The Visionary</h3>
                <p className="text-gray-400">You defined the look of African Web3 in 2025. <br />From UI Kits to Event Branding, your pixels moved mountains.</p>
                <div className="pt-4 flex justify-center gap-4">
                  <div className="bg-black/40 px-4 py-2 rounded text-sm text-[#E05D3A] font-mono border border-[#E05D3A]/20">Figma Files: 200+</div>
                  <div className="bg-black/40 px-4 py-2 rounded text-sm text-[#E05D3A] font-mono border border-[#E05D3A]/20">POAPs Designed: 15</div>
                </div>
              </div>
            )}

            {activePersona === "creator" && (
              <div className="animate-fade-in space-y-4">
                <div className="w-16 h-16 bg-[#0C6E5F]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Megaphone className="w-8 h-8 text-[#0C6E5F]" />
                </div>
                <h3 className="text-3xl font-bold text-white">The Amplifier</h3>
                <p className="text-gray-400">You told the stories that mattered. <br />Twitter Spaces, Articles, and Community Calls - you kept the pulse alive.</p>
                <div className="pt-4 flex justify-center gap-4">
                  <div className="bg-black/40 px-4 py-2 rounded text-sm text-cyan-400 font-mono border border-cyan-400/20">Spaces Hosted: 50+</div>
                  <div className="bg-black/40 px-4 py-2 rounded text-sm text-cyan-400 font-mono border border-cyan-400/20">Reach: 100k+</div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* 6. Real World Projects */}
        <section className="mb-32">
          <div className="flex items-center gap-3 mb-10">
            <Rocket className="w-6 h-6 text-[#00ff88]" />
            <h2 className="text-3xl font-black text-white uppercase">Built Here</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded bg-white flex items-center justify-center font-black text-black">A</div>
                <ArrowRight className="text-gray-500 -rotate-45" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Atsur</h3>
              <p className="text-sm text-gray-400 mb-4">Leveraging blockchain for African art investment and provenance.</p>
              <span className="text-xs bg-[#00ff88]/10 text-[#00ff88] px-2 py-1 rounded">RWA</span>
            </div>

            <div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded bg-purple-500 flex items-center justify-center font-black text-white">S</div>
                <ArrowRight className="text-gray-500 -rotate-45" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Songdis</h3>
              <p className="text-sm text-gray-400 mb-4">Digital distribution for independent African artists on-chain.</p>
              <span className="text-xs bg-purple-500/10 text-purple-400 px-2 py-1 rounded">MusicNFT</span>
            </div>

            <div className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded bg-blue-500 flex items-center justify-center font-black text-white">H</div>
                <ArrowRight className="text-gray-500 -rotate-45" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">HiDAO</h3>
              <p className="text-sm text-gray-400 mb-4">Community-governed health insurance protocol.</p>
              <span className="text-xs bg-blue-500/10 text-blue-400 px-2 py-1 rounded">DeSci</span>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-[#0C6E5F]/20 flex flex-col md:flex-row items-center justify-between gap-4">
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
          <span className="inline-block px-10">// BUILD_STATUS: SCALING (100%)</span>
          <span className="inline-block px-10">&gt;&gt; EVENT: Africa_Deep_Tech_Challenge [COMPLETED]</span>
          <span className="inline-block px-10">// EDUCATION: 15,000_Devs_Trained</span>
          <span className="inline-block px-10">&gt;&gt; RECOGNITION: Global_Talent_Visa [Idris_Olubisi]</span>
          <span className="inline-block px-10">// NETWORK: 20_CITIES_ACTIVE</span>
          <span className="inline-block px-10">&gt;&gt; TREND: RWA_Stablecoins_AI_Agents</span>
        </div>
      </div>
    </main>
  );
}
