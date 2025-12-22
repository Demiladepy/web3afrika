import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "var(--background)",
                foreground: "var(--foreground)",
                // Official Web3Afrika Brand Colors
                w3a: {
                    green: "#0C6E5F",
                    darkGreen: "#09705F",
                    red: "#EE3C22", // The bright orange/red
                    orange: "#EC9120",
                    yellow: "#EB9122",
                    black: "#111111",
                    gray: "#757575",
                }
            },
            fontFamily: {
                sans: ['var(--font-archivo)', 'sans-serif'],
            },
            backgroundImage: {
                'hero-pattern': "radial-gradient(circle at 50% 50%, #0C6E5F 0%, transparent 50%)",
            }
        },
    },
    plugins: [],
};
export default config;
