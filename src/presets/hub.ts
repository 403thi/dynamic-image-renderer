import imageSettings from "../types/imageSettings"
import defaultPreset from "./defaultPreset"

function hub(): imageSettings {
    return {
        ...defaultPreset(), // "includes" default preset
        ...{
            title: "dynamic",
            titleColor: "#FFFFFF",
            titlePositionX: "40",
            titleBgOpacity: "0",
            titleBgColor: "#fff",
            titleShadow: "false",

            subtitle: "hub",
            subtitleColor: "#000",
            subtitlePositionX: "64",
            subtitlePositionY: "50",
            subtitleFontSize: "65",
            subtitleBgOpacity: "100",
            subtitleBgColor: "orange",
            subtitleShadow: "false",

            backgroundColor: "#000",
    }
}
}

export default hub