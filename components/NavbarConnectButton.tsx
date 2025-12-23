"use client";

import React from 'react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { Loader2, LogOut, Wallet } from 'lucide-react';

export function NavbarConnectButton() {
    const { address, isConnected } = useAccount();
    const { connect, isPending } = useConnect();
    const { disconnect } = useDisconnect();

    const handleConnect = () => {
        if (isConnected) {
            disconnect();
        } else {
            connect({ connector: injected() });
        }
    };

    return (
        <button
            onClick={handleConnect}
            disabled={isPending}
            className="px-5 py-2.5 bg-gradient-to-r from-[#0C6E5F] to-[#09705F] hover:from-[#00ff88] hover:to-[#0C6E5F] text-white hover:text-black font-bold rounded-lg transition-all shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
        >
            {isPending ? (
                <Loader2 className="w-4 h-4 animate-spin" />
            ) : isConnected ? (
                <>
                    <LogOut className="w-4 h-4" />
                    <span className="hidden sm:inline">{address?.slice(0, 4)}...{address?.slice(-4)}</span>
                </>
            ) : (
                <>
                    <Wallet className="w-4 h-4" />
                    <span>Connect Wallet</span>
                </>
            )}
        </button>
    );
}
