import defaultPreset from "../presets/defaultPreset"
const DEFAULT_HEIGHT = defaultPreset().height

function adjustHeightIfNotValid(height) : number{
    return (height >= DEFAULT_HEIGHT && height <= 1000) ? height : DEFAULT_HEIGHT
}

export default adjustHeightIfNotValid
