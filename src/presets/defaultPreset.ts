import generateGradient from "../utils/generateGradient"
import imageSettings from "../types/imageSettings"

function defaultPreset(): imageSettings {
    return {
        width: 800,
        height: 300,

        glowColor: "none",
        textAnimation: "fadein",

        title: "dynamic!",
        titleColor: "#111111",
        titlePositionX: "50",
        titlePositionY: "50",
        titleFontSize: "65",
        titleBgOpacity: "100",
        titleBgColor: "#fff",
        titleBgBorderOpacity: "0",
        titleShadow: "false",

        subtitle: "dynamic image renderer.",
        subtitleColor: "#EEE",
        subtitlePositionX: "60",
        subtitlePositionY: "67",
        subtitleFontSize: "20",
        subtitleBgOpacity: "0",
        subtitleBgColor: "#fff",
        subtitleShadow: "true",

        borderOpacity: "0",
        borderColor: "#fff",

        backgroundColor: generateGradient(),
    }
}

export default defaultPreset