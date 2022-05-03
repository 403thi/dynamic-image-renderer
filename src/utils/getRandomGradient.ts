import DEFAULT_GRADIENTS from "../config/gradients"

function getRandomGradient() {
    return DEFAULT_GRADIENTS[Math.floor(Math.random()*DEFAULT_GRADIENTS.length)]
}

export default getRandomGradient