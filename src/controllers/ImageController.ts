import { Request, Response } from "express"

import imageSettings from "../types/imageSettings"
import getTextAnimation from "../utils/getTextAnimation"
import getPreset from "../utils/getPreset"
import adjustHeightIfNotValid from "../utils/adjustHeightIfNotValid"
import adjustBackgroundIfNotValid from "../utils/adjustBackgroundIfNotValid"
import { queryParameters } from "../types/queryParameters"
import { DefineImageSettingsUseCase } from "../usecases/define-image-settings"
import { ValidateAndAdjustSettingsUseCase } from "../usecases/validate-and-adjust-settings"

class ImageController {

    constructor(
        public defineImageSettings: DefineImageSettingsUseCase,
        public validateAndAdjustSettings: ValidateAndAdjustSettingsUseCase
    ) {}

    handle = (req: Request, res: Response) => {
        const query = req.query as unknown as queryParameters

        let settings = this.defineImageSettings.execute({ query })
        settings = this.validateAndAdjustSettings.execute({ settings })

        res.set('content-type', 'image/svg+xml')
        res.render('main', settings)
    }
}

export { ImageController }