import defaultPreset from "./defaultPreset"
import imageSettings from "../types/imageSettings"

function minimalist(): imageSettings {
    return {
        ...defaultPreset(), // "includes" default preset
        ...{
            titleColor: "#fff",
            titleFontSize: "70",
            titleBgOpacity: "10",
            titlePositionY: "49",

            subtitlePositionX: "50",
            subtitlePositionY: "68",
            subtitleFontSize: "22",
            subtitleShadow: "false",

            backgroundColor: "#000",
    }
}
}

export default minimalist