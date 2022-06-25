class DynamicImage {
    constructor(data) {
        this.title = data.title
        this.subtitle = data.subtitle
        this.textAnimation = data.textAnimation
        this.glowColor = data.glowColor
        
        this.preset = preset.value
        this.image = document.getElementById('previewImage')
        
        this.containerUrl = document.getElementById('url')
        this.params = `title=${this.title}&subtitle=${this.subtitle}&textAnimation=${this.textAnimation}&glowColor=${this.glowColor}`
    }
    
    update() {
        this.params = preset != 'default' ? `preset=${this.preset}&title=${this.title}&subtitle=${this.subtitle}&textAnimation=${this.textAnimation}&glowColor=${this.glowColor}` : this.params
        this.url = `https://dynamic-image-renderer.vercel.app/api?${this.params}`
        
        this.containerUrl.textContent = this.url
    }
    
    renderAll() {
        this.image.src = this.url
    }
}

const generate = document.querySelector('#generate')

generate.addEventListener('click', (event) => {
    const data = {
        title: 'myTitle', subtitle: 'mySubtitle', 
        textAnimation: 'pulse', glowColor: 'white',
        preset: 'dracula'
    }
    
    for (const item in data) {
        dataValue = document.querySelector(`#${item}`).value
        data[item] = dataValue ? dataValue : data[item]
    }
    
    const dynamicImage = new DynamicImage(data)
    
    dynamicImage.update()
    dynamicImage.renderAll()
})

