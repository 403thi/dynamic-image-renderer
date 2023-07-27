import textAnimations from "../config/textAnimations";
import keyExists from "./keyExists"

function getAnimation(textAnimation: string) {

    if (keyExists(textAnimations, textAnimation)) {
        const { style, keyframes } = textAnimations[textAnimation]

        return {
            style,
            keyframes
        }
    }
    return "";
}

export default getAnimation