import imageSettings from "../types/imageSettings"
import defaultPreset from "./defaultPreset"

function dracula(): imageSettings {
    return {
        ...defaultPreset(),
        ... {
            titleColor: "#bd93f9",
            titleBgColor: "#44475a",
            subtitle: "// a open source project",
            subtitleColor: "#6272a4",
            subtitleShadow: "false",
            backgroundColor: "#282a36",
        }
    }
}

export default dracula