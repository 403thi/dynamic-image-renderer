import defaultPreset from "./defaultPreset"
import imageSettings from "../types/imageSettings"

function monokai(): imageSettings {
    return {
        ...defaultPreset(),
        ... {
            titleColor: "#A6E22E",
            titleBgColor: "#F8F8F2",
            titleBgOpacity: "10",
            subtitleColor: "#E6DB74",
            subtitleShadow: "false",
            backgroundColor: "#272822",
        }
    }
}
export default monokai