import TextAnimation from "../types/textAnimation"

const textAnimations: TextAnimation = {
    popup: {
        style: "animation: popup 0.6s ease;",
        keyframes: `
        @keyframes popup {
            from { font-size: 0px; }
        }`
    },
    fadein: {
        style: "animation: fadein 1s linear;",
        keyframes: `
        @keyframes fadein {
            from { opacity: 0; }
        }`
    },
    pulse: {
        style: "animation: pulse 6s linear infinite;",
        keyframes: `
        @keyframes pulse {
            0%, 100% { text-shadow: none; }
            50% {
                text-shadow:
                    0 0 50px var(--glow-color),
                    0 0 40px var(--glow-color),
                    0 0 30px var(--glow-color);
            }
        }`
    },
    flicker: {
        style: "animation: flicker 2s infinite;",
        keyframes: `
        @keyframes flicker {
            50%, 80%{ text-shadow: none; }
            0%, 45%, 55%, 75%, 85%, 100%{
                text-shadow:
                    0 0 50px var(--glow-color),
                    0 0 40px var(--glow-color),
                    0 0 30px var(--glow-color);
            }
        }`
    },
}

export default textAnimations