import React from 'react';
import { UserStats, personas } from '../types';
import { Rocket, Shield, Users, Brain, Zap, Award } from 'lucide-react';
import { cn } from '../lib/utils';

const iconMap = {
    Rocket: Rocket,
    Shield: Shield,
    Users: Users,
    Brain: Brain
};

export const BuilderCard = React.forwardRef<HTMLDivElement, { stats: UserStats, userImage?: string | null, bestMoment?: string }>(({ stats, userImage, bestMoment }, ref) => {
    const persona = personas[stats.persona];
    const Icon = iconMap[persona.icon as keyof typeof iconMap];

    return (
        <div ref={ref} className="w-[400px] h-[600px] bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] relative overflow-hidden flex flex-col rounded-[32px] border border-white/10 shadow-2xl grain hover-lift">

            {/* Animated gradient background */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
                <div className={cn("absolute top-0 left-0 w-full h-1/2 blur-[100px] gradient-orb",
                    persona.persona === 'Scaler' ? 'bg-[#0C6E5F]' :
                        persona.persona === 'Privacy Guardian' ? 'bg-emerald-500' :
                            persona.persona === 'Social Architect' ? 'bg-[#EE3C22]' :
                                'bg-purple-600'
                )}></div>
                <div className={cn("absolute bottom-0 right-0 w-full h-1/2 blur-[100px] gradient-orb",
                    persona.persona === 'Scaler' ? 'bg-cyan-500' :
                        persona.persona === 'Privacy Guardian' ? 'bg-[#09705F]' :
                            persona.persona === 'Social Architect' ? 'bg-[#EC9120]' :
                                'bg-[#EE3C22]'
                )} style={{ animationDelay: '1s' }}></div>
            </div>

            {/* African Pattern Overlay */}
            <div className="absolute inset-0 pattern-kente opacity-10 pointer-events-none"></div>

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                backgroundImage: `linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
                                  linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
            }}></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col h-full p-6">

                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <div className="text-[9px] font-black tracking-[0.2em] text-[#E05D3A] mb-0.5">WEB3AFRIKA</div>
                        <div className="text-[7px] font-bold tracking-[0.15em] text-white/40">WRAPPED 2025</div>
                    </div>
                    <div className="w-8 h-8 rounded-full glass-card flex items-center justify-center border border-white/10">
                        <Zap className="w-4 h-4 text-white" />
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1 flex flex-col items-center justify-center text-center">

                    {/* Icon or User Image */}
                    <div className={cn(
                        "w-32 h-32 rounded-full flex items-center justify-center mb-6 relative float overflow-hidden",
                        "bg-gradient-to-br shadow-2xl",
                        persona.color
                    )}>
                        {!userImage ? (
                            <>
                                <div className="absolute inset-0 rounded-full animate-pulse opacity-50 blur-xl"
                                    style={{
                                        background: `linear-gradient(135deg, ${persona.persona === 'Scaler' ? '#0C6E5F, cyan' :
                                            persona.persona === 'Privacy Guardian' ? 'emerald, #09705F' :
                                                persona.persona === 'Social Architect' ? '#EE3C22, #EC9120' :
                                                    'purple, #EE3C22'
                                            })`
                                    }}></div>
                                <div className="absolute inset-0 rounded-full border-2 border-white/20"></div>
                                <Icon className="w-14 h-14 text-white relative z-10 drop-shadow-2xl" />
                            </>
                        ) : (
                            <img src={userImage} alt="Builder" className="w-full h-full object-cover relative z-10" />
                        )}
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl font-black text-white mb-2 leading-tight tracking-tight">
                        {persona.title}
                    </h1>

                    {/* Description or Best Moment */}
                    {bestMoment ? (
                        <div className="relative px-4 py-2 mt-2 glass-card rounded-xl border border-white/10">
                            <p className="text-white/80 text-xs italic leading-relaxed max-w-[240px] font-medium">
                                "{bestMoment}"
                            </p>
                        </div>
                    ) : (
                        <p className="text-white/60 text-xs leading-relaxed max-w-[260px] font-medium px-2">
                            {persona.description}
                        </p>
                    )}
                </div>

                {/* Stats */}
                <div className="space-y-3 mt-4">
                    <div className="grid grid-cols-2 gap-3">
                        <div className="glass-card rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all glow-hover">
                            <div className="text-[8px] font-bold tracking-wider text-white/50 mb-2 uppercase">Education</div>
                            <div className={cn("text-3xl font-black",
                                persona.persona === 'Scaler' ? 'text-[#0C6E5F]' :
                                    persona.persona === 'Privacy Guardian' ? 'text-emerald-400' :
                                        persona.persona === 'Social Architect' ? 'text-[#EE3C22]' :
                                            'text-purple-400'
                            )}>{stats.transactions}h</div>
                        </div>

                        <div className="glass-card rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all glow-hover">
                            <div className="text-[8px] font-bold tracking-wider text-white/50 mb-2 uppercase">Top Project</div>
                            <div className="text-xl font-black text-white truncate">{stats.topChain}</div>
                        </div>
                    </div>

                    <div className="glass-card rounded-xl p-4 border border-white/10 hover:border-white/20 transition-all glow-hover flex items-center justify-between">
                        <div>
                            <div className="text-[8px] font-bold tracking-wider text-white/50 mb-1 uppercase">Contribution</div>
                            <div className="text-lg font-black text-white">{stats.gasSpent}</div>
                        </div>
                        <Award className={cn(
                            "w-6 h-6",
                            persona.persona === 'Scaler' ? 'text-[#0C6E5F]' :
                                persona.persona === 'Privacy Guardian' ? 'text-emerald-400' :
                                    persona.persona === 'Social Architect' ? 'text-[#EE3C22]' :
                                        'text-purple-400'
                        )} />
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-4 pt-3 border-t border-white/5 text-center">
                    <p className="text-[7px] font-bold tracking-[0.2em] text-white/30 uppercase">
                        Scaling Africa's Chain 2025
                    </p>
                </div>
            </div>
        </div>
    );
});

BuilderCard.displayName = 'BuilderCard';
