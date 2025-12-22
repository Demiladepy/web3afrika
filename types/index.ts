export type PersonaType = 'Scaler' | 'Privacy Guardian' | 'Social Architect' | 'Degen Scholar';

export interface UserStats {
    name: string;
    role: string | null;
    persona: PersonaType;
    transactions: number;
    topChain: string;
    gasSpent: string;
    joinDate: string;
}

export const personas: Record<PersonaType, {
    title: string;
    tagline: string;
    description: string;
    color: string;
    icon: string;
    persona: PersonaType;
}> = {
    'Scaler': {
        title: "The Scaler",
        tagline: "Scaling Africa, one block at a time.",
        description: "Obsessed with efficiency. You live on L2s.",
        color: "from-[#0C6E5F] to-cyan-400",
        icon: "Rocket",
        persona: "Scaler"
    },
    'Privacy Guardian': {
        title: "The Privacy Guardian",
        tagline: "Building the shadows.",
        description: "You believe the future is private and secure.",
        color: "from-emerald-600 to-[#09705F]",
        icon: "Shield",
        persona: "Privacy Guardian"
    },
    'Social Architect': {
        title: "The Social Architect",
        tagline: "Community is power.",
        description: "The glue of the ecosystem. Mentoring & Leading.",
        color: "from-[#EE3C22] to-[#EC9120]",
        icon: "Users",
        persona: "Social Architect"
    },
    'Degen Scholar': {
        title: "The Degen Scholar",
        tagline: "For the tech AND the tokens.",
        description: "Mastering ZK proofs and meme coins alike.",
        color: "from-purple-600 to-[#EE3C22]",
        icon: "Brain",
        persona: "Degen Scholar"
    }
};
