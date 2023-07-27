import TextAnimation from "./textAnimation"

interface imageSettings {
    // size
    width: number
    height: number
    
    // title
    title: string
    titleColor: string
    titlePositionX: string | number
    titlePositionY: string | number
    titleFontSize: string | number
    titleBgOpacity : string | number
    titleBgBorderOpacity: string | number
    titleBgBorderSpeed: string
    titleBgColor : string
    titleShadow: string

    // subtitle
    subtitle: string
    subtitleColor: string
    subtitlePositionX: string | number
    subtitlePositionY: string | number
    subtitleFontSize: string | number
    subtitleBgOpacity : string | number
    subtitleBgColor : string
    subtitleShadow: string

    // effects
    glowColor: string
    textAnimation: string | TextAnimation[string]
    
    // border
    borderOpacity: string | number
    borderColor: string 

    // others
    backgroundColor: string
}

export default imageSettings