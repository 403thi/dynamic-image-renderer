import getRandomGradient from "./getRandomGradient"

function generateGradient() {
    const gradient_colors = getRandomGradient().join(',')
    return `linear-gradient(to right,${gradient_colors})`
}

export default generateGradient