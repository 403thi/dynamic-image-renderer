import { Request, Response } from "express"

import imageSettings from "../types/imageSettings"
import getAnimation from "../utils/getAnimation"
import getPreset from "../utils/getPreset"
import adjustHeightIfNotValid from "../utils/adjustHeightIfNotValid"
import adjustBackgroundIfNotValid from "../utils/adjustBackgroundIfNotValid"

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
            ...getPreset(query.preset),
            ...query,
            getAnimation: getAnimation
        }
    }

    private verifyParameters(): void {
        this.settings.height = adjustHeightIfNotValid(this.settings.height)
        this.settings.backgroundColor = adjustBackgroundIfNotValid(this.settings.backgroundColor)
    }
    
}

export default new ImageController()