import { http, createConfig } from 'wagmi'
import { mainnet, arbitrum, optimism, base, scroll, celo } from 'wagmi/chains'
import { injected } from 'wagmi/connectors'

export const config = createConfig({
    chains: [mainnet, arbitrum, optimism, base, scroll, celo],
    connectors: [
        injected(),
    ],
    transports: {
        [mainnet.id]: http(),
        [arbitrum.id]: http(),
        [optimism.id]: http(),
        [base.id]: http(),
        [scroll.id]: http(),
        [celo.id]: http(),

    },
})
