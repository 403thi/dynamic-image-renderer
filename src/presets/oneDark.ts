import imageSettings from "../types/imageSettings"
import defaultPreset from "./defaultPreset"

function oneDark(): imageSettings {
    return {
        ...defaultPreset(),
        ... {
            titleColor: "#c678dd",
            titleBgColor: "#4b5263",
            titleBgOpacity: "50",
            subtitleColor: "#98c379",
            subtitle: '"dynamic image renderer"',
            subtitleShadow: "false",
            backgroundColor: "#282c34",
        }
    }
}

export default oneDark