import generateGradient from "./generateGradient"

function adjustBackgroundIfNotValid(background) {
    return background == 'gradient' ? generateGradient() : background
}

export default adjustBackgroundIfNotValid