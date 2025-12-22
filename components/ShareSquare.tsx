import React from 'react';
import { UserStats, personas } from '../types';
import { TrendingUp, Award } from 'lucide-react';
import { cn } from '../lib/utils';

export const ShareSquare = React.forwardRef<HTMLDivElement, { stats: UserStats }>(({ stats }, ref) => {
    const persona = personas[stats.persona];

    return (
        <div ref={ref} className="w-[500px] h-[500px] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] relative overflow-hidden flex flex-col p-10 justify-between rounded-[32px] border border-white/10 shadow-2xl grain hover-lift">

            {/* Massive gradient orb */}
            <div className={cn(
                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full blur-[140px] opacity-30 pointer-events-none gradient-orb",
                persona.persona === 'Scaler' ? 'bg-[#0C6E5F]' :
                    persona.persona === 'Privacy Guardian' ? 'bg-emerald-500' :
                        persona.persona === 'Social Architect' ? 'bg-[#EE3C22]' :
                            'bg-purple-600'
            )}></div>

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                backgroundImage: `linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)`,
                backgroundSize: '25px 25px'
            }}></div>

            {/* Header */}
            <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                    <div className="max-w-[240px]">
                        <h2 className="text-4xl font-black text-white leading-[1.1] tracking-tight mb-1">
                            I BUILT<br />
                            <span className={cn(
                                "bg-gradient-to-r bg-clip-text text-transparent",
                                persona.color
                            )}>ONCHAIN</span><br />
                            IN 2025.
                        </h2>
                    </div>

                    <div className="glass-card px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#0C6E5F] animate-pulse"></div>
                        <span className="text-[10px] font-black tracking-wider text-white/90">WEB3AFRIKA</span>
                    </div>
                </div>
            </div>

            {/* Center - Persona */}
            <div className="relative z-10 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card border border-white/10 mb-4">
                    <Award className="w-3 h-3 text-white/60" />
                    <span className="text-[10px] font-bold tracking-[0.15em] text-white/60 uppercase">Builder Persona</span>
                </div>

                <h1 className={cn(
                    "text-6xl font-black bg-gradient-to-r bg-clip-text text-transparent leading-tight mb-3",
                    persona.color
                )}>
                    {persona.title.toUpperCase()}
                </h1>

                <p className="text-white/50 text-base font-medium max-w-sm mx-auto">
                    {persona.description}
                </p>
            </div>

            {/* Footer Stats */}
            <div className="relative z-10 grid grid-cols-2 gap-4">
                <div className="glass-card rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all glow-hover">
                    <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className={cn(
                            "w-5 h-5",
                            persona.persona === 'Scaler' ? 'text-[#0C6E5F]' :
                                persona.persona === 'Privacy Guardian' ? 'text-emerald-400' :
                                    persona.persona === 'Social Architect' ? 'text-[#EE3C22]' :
                                        'text-purple-400'
                        )} />
                        <span className="text-[9px] font-bold tracking-wider text-white/50 uppercase">Top Chain</span>
                    </div>
                    <div className="text-2xl font-black text-white">{stats.topChain}</div>
                </div>

                <div className="glass-card rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all glow-hover">
                    <div className="flex items-center gap-2 mb-2">
                        <Award className={cn(
                            "w-5 h-5",
                            persona.persona === 'Scaler' ? 'text-[#0C6E5F]' :
                                persona.persona === 'Privacy Guardian' ? 'text-emerald-400' :
                                    persona.persona === 'Social Architect' ? 'text-[#EE3C22]' :
                                        'text-purple-400'
                        )} />
                        <span className="text-[9px] font-bold tracking-wider text-white/50 uppercase">Role</span>
                    </div>
                    <div className="text-2xl font-black text-white truncate">{stats.role || 'Builder'}</div>
                </div>
            </div>

            {/* Branding watermark */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10">
                <div className="text-[8px] font-black tracking-[0.2em] text-white/20 uppercase">
                    Web3Afrika Wrapped
                </div>
            </div>
        </div>
    );
});

ShareSquare.displayName = 'ShareSquare';
