import animations from "../config/animations";
import keyExists from "./keyExists"

function getAnimation(animation) {

    if (keyExists(animations, animation)) {
        const { style, keyframes } = animations[animation]

        return {
            style: style,
            keyframes: keyframes
        }
    }
    return "";
}

export default getAnimation