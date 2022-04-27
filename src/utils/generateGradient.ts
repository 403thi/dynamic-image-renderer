const DEFAULT_GRADIENTS = [
    ["#FC466B", "#3F5EFB"],
    ["#373B44", "#4286f4"],
    ["#654ea3", "#eaafc8"],
    ["#3C3B3F", "#605C3C"],
    ["#1f4037", "#99f2c8"],
    ["#c31432", "#240b36"],
    ["#12c2e9", "#c471ed", "#f64f59"],
    ["#355C7D", "#6C5B7B", "#C06C84"],
]

// get a random item of DEFAULT_GRADIENTS array
function randomColors() {
    return DEFAULT_GRADIENTS[Math.floor(Math.random()*DEFAULT_GRADIENTS.length)]
}

// generate CSS gradient
function generateGradient() {
    const gradient_colors = randomColors().join(',')
    return `linear-gradient(to right,${gradient_colors})`
}


export default generateGradient