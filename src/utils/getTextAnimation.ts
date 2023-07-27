import textAnimations from "../config/textAnimations";
import keyExists from "./keyExists"

function getTextAnimation(textAnimation: string) {

    if (keyExists(textAnimations, textAnimation)) {
        const { style, keyframes } = textAnimations[textAnimation]

        return {
            style,
            keyframes
        }
    }
    return "";
}

export default getTextAnimation