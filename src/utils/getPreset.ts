import presets from "../presets"
import keyExists from "./keyExists"

function getPreset(preset) {
    if (keyExists(presets, preset)) {
        return presets[preset]()
    }
    
    return presets.defaultPreset()   
}

export default getPreset 