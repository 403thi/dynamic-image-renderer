import { Request, Response } from "express"

import imageSettings from "../types/imageSettings"
import getTextAnimation from "../utils/getTextAnimation"
import getPreset from "../utils/getPreset"
import adjustHeightIfNotValid from "../utils/adjustHeightIfNotValid"
import adjustBackgroundIfNotValid from "../utils/adjustBackgroundIfNotValid"
import { queryParameters } from "../types/queryParameters"

class ImageController {

    settings: imageSettings

    index = (req: Request, res: Response) => {
    
        this.defineSettings(req.query as unknown as queryParameters)
        this.verifyParameters()
        res.set('content-type', 'image/svg+xml')

        res.render('main', this.settings)
    }

    private defineSettings(query: queryParameters) {
        this.settings = {
            ...getPreset(query.preset),
            ...query,
        }
        this.settings.textAnimation = getTextAnimation(this.settings.textAnimation as string)
    }

    private verifyParameters(): void {
        this.settings.height = adjustHeightIfNotValid(this.settings.height)
        this.settings.backgroundColor = adjustBackgroundIfNotValid(this.settings.backgroundColor)
    }
    
}

export default new ImageController()