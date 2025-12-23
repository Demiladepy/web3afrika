"use client";

import React, { useState, useRef, useCallback } from 'react';
import { BuilderCard } from './BuilderCard';
import { ShareSquare } from './ShareSquare';
import { UserStats, PersonaType, personas } from '../types';
import { toPng } from 'html-to-image';
import { Download, Wallet, Loader2, Sparkles, RefreshCw, Image as ImageIcon, LogOut } from 'lucide-react';
import { cn } from '../lib/utils';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { useEffect } from 'react';

const MOCK_DATA: UserStats = {
    name: "Crypto User",
    role: "Core Contributor",
    persona: "Scaler",
    transactions: 142,
    topChain: "Arbitrum",
    gasSpent: "0.24 ETH",
    joinDate: "Jan 2024"
};

export function Generator() {

    const [stats, setStats] = useState<UserStats>(MOCK_DATA);
    const [mode, setMode] = useState<'card' | 'square'>('card');
    const cardRef = useRef<HTMLDivElement>(null);
    const squareRef = useRef<HTMLDivElement>(null);

    const { address, isConnected } = useAccount();
    const { connect, isPending } = useConnect();
    const { disconnect } = useDisconnect();
    const [isAnalyzing, setIsAnalyzing] = useState(false);

    // Generate persona when wallet is connected
    useEffect(() => {
        if (isConnected && address) {
            setIsAnalyzing(true);
            // Simulate analysis time even after connection for effect
            const timer = setTimeout(() => {
                const keys = Object.keys(personas) as PersonaType[];
                const randomPersona = keys[Math.floor(Math.random() * keys.length)];

                const formattedAddress = address
                    ? (address.slice(0, 6) + "..." + address.slice(-4))
                    : "0x1234...5678";

                setStats({
                    ...MOCK_DATA,
                    name: formattedAddress,
                    persona: randomPersona,
                    transactions: Math.floor(Math.random() * 500) + 50,
                    topChain: ["Arbitrum", "Scroll", "Oasis", "Base", "Celo"][Math.floor(Math.random() * 5)],
                    gasSpent: (Math.random() * 0.5).toFixed(3) + " ETH"
                });
                setIsAnalyzing(false);
            }, 1500);
            return () => clearTimeout(timer);
        }
    }, [isConnected, address]);

    const handleConnect = () => {
        if (isConnected) {
            disconnect();
            setStats(MOCK_DATA); // Reset to mock data on disconnect
        } else {
            connect({ connector: injected() });
        }
    };

    const downloadImage = useCallback(async () => {
        const ref = mode === 'card' ? cardRef : squareRef;
        if (ref.current === null) return;

        try {
            const dataUrl = await toPng(ref.current, { cacheBust: true, pixelRatio: 2 });
            const link = document.createElement('a');
            link.download = 'web3afrika-wrapped-' + mode + '-' + Date.now() + '.png';
            link.href = dataUrl;
            link.click();
        } catch (err) {
            console.error(err);
        }
    }, [mode]);

    return (
        <div className="w-full max-w-7xl mx-auto">

            {/* Controls Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">

                {/* Left: Preview */}
                <div className="order-2 lg:order-1 flex items-center justify-center min-h-[680px] relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-[32px] blur-3xl"></div>
                    <div className="relative">
                        {mode === 'card' ? (
                            <BuilderCard ref={cardRef} stats={stats} />
                        ) : (
                            <ShareSquare ref={squareRef} stats={stats} />
                        )}
                    </div>
                </div>

                {/* Right: Controls */}
                <div className="order-1 lg:order-2 space-y-8">

                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-card border border-[#EE3C22]/30 hover:border-[#EE3C22]/50 transition-all">
                            <Sparkles className="w-5 h-5 text-[#EE3C22]" />
                            <span className="text-sm font-bold tracking-wider text-white">Generate Your Card</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                            Discover Your<br />
                            <span className="text-shimmer">Builder Persona</span>
                        </h2>

                        <p className="text-white/70 text-lg leading-relaxed max-w-md">
                            Connect your wallet to reveal your onchain identity, or customize your card manually.
                        </p>
                    </div>

                    {/* Connect Button */}
                    <button
                        onClick={handleConnect}
                        disabled={isPending || isAnalyzing}
                        className="w-full py-6 px-8 bg-gradient-to-r from-[#0C6E5F] to-[#00ff88] hover:from-[#00ff88] hover:to-[#0C6E5F] disabled:opacity-50 disabled:cursor-not-allowed text-black hover:text-white font-black text-lg uppercase tracking-wider rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 shadow-2xl hover:shadow-[#00ff88]/50 hover:scale-[1.02] active:scale-[0.98]"
                    >
                        {isPending || isAnalyzing ? (
                            <>
                                <Loader2 className="animate-spin w-6 h-6" />
                                {isPending ? 'Connecting...' : 'Analyzing Chain...'}
                            </>
                        ) : isConnected ? (
                            <>
                                <LogOut className="w-6 h-6" />
                                Disconnect {address?.slice(0, 4)}...{address?.slice(-4)}
                            </>
                        ) : (
                            <>
                                <Wallet className="w-6 h-6" />
                                Connect Wallet
                            </>
                        )}
                    </button>

                    {/* Divider */}
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-white/10"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="px-4 text-sm font-bold text-white/40 bg-[#0a0a0a] uppercase tracking-wider">Or Customize</span>
                        </div>
                    </div>

                    {/* Customization */}
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/50 uppercase tracking-wider">Persona</label>
                                <select
                                    value={stats.persona}
                                    onChange={(e) => setStats({ ...stats, persona: e.target.value as PersonaType })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm font-medium focus:border-[#0C6E5F] focus:ring-2 focus:ring-[#0C6E5F]/20 outline-none text-white transition-all glass-card"
                                >
                                    {Object.keys(personas).map(p => (
                                        <option key={p} value={p} className="bg-[#111111]">{p}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-white/50 uppercase tracking-wider">Top Chain</label>
                                <input
                                    type="text"
                                    value={stats.topChain}
                                    onChange={(e) => setStats({ ...stats, topChain: e.target.value })}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm font-medium focus:border-[#0C6E5F] focus:ring-2 focus:ring-[#0C6E5F]/20 outline-none text-white transition-all glass-card"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-white/50 uppercase tracking-wider">Role (Optional)</label>
                            <input
                                type="text"
                                value={stats.role || ''}
                                onChange={(e) => setStats({ ...stats, role: e.target.value })}
                                placeholder="e.g. Core Contributor"
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-3 text-sm font-medium focus:border-[#0C6E5F] focus:ring-2 focus:ring-[#0C6E5F]/20 outline-none text-white transition-all glass-card placeholder:text-white/30"
                            />
                        </div>
                    </div>

                    {/* View Mode Toggle */}
                    <div className="space-y-3">
                        <label className="text-xs font-bold text-white/50 uppercase tracking-wider">Format</label>
                        <div className="flex gap-3 p-1.5 glass-card rounded-xl border border-white/10">
                            <button
                                onClick={() => setMode('card')}
                                className={cn(
                                    "flex-1 px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-200",
                                    mode === 'card'
                                        ? "bg-gradient-to-r from-[#0C6E5F] to-[#09705F] text-white shadow-lg"
                                        : "text-white/50 hover:text-white/80"
                                )}
                            >
                                <ImageIcon className="w-4 h-4 inline mr-2" />
                                Card
                            </button>
                            <button
                                onClick={() => setMode('square')}
                                className={cn(
                                    "flex-1 px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-200",
                                    mode === 'square'
                                        ? "bg-gradient-to-r from-[#EE3C22] to-[#EC9120] text-white shadow-lg"
                                        : "text-white/50 hover:text-white/80"
                                )}
                            >
                                <ImageIcon className="w-4 h-4 inline mr-2" />
                                Square
                            </button>
                        </div>
                    </div>

                    {/* Download Button */}
                    <button
                        onClick={downloadImage}
                        className="w-full py-6 px-8 glass-card hover:bg-white/10 border border-white/20 hover:border-[#00ff88]/50 text-white font-black text-lg uppercase tracking-wider rounded-2xl transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] glow-hover"
                    >
                        <Download className="w-6 h-6" />
                        Download {mode === 'card' ? 'Card' : 'Square'}
                    </button>
                </div>
            </div>
        </div>
    );
}
