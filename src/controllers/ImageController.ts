import { Request, Response } from "express"

import generateGradient from "../utils/generateGradient"
import imageSettings from "../types/imageSettings"
import presets from "../presets"
import keyExists from "../utils/keyExists"
import getAnimation from "../utils/getAnimation"

const DEFAULT_HEIGHT = presets.defaultPreset().height


class ImageController {

    settings: imageSettings

    index = (req: Request, res: Response) => {
    
        this.defineSettings(req.query)
        this.verifyParameters()
        res.set('content-type', 'image/svg+xml')

        res.render('main', this.settings)
    }

    private defineSettings(query: any) {
        this.settings = {
            ...this.getPreset(query),
            ...query,
            // getAnimation function, cannot modified.
            getAnimation: getAnimation
        }
    }

    private verifyParameters(): void {
        this.settings.height = this.heightVerification(this.settings.height)
        this.settings.backgroundColor = this.backgroundVerification(this.settings.backgroundColor)
    }

    private heightVerification(height) : number{
        return (height >= DEFAULT_HEIGHT && height <= 1000) ? height : DEFAULT_HEIGHT
    }

    private backgroundVerification(background) {
        return background == 'gradient' ? generateGradient() : background
    }

    private getPreset({preset}) {
        if (keyExists(presets, preset)) {
            return presets[preset]()
        }
        
        return presets.defaultPreset()
        
    }
    
}

export default new ImageController()