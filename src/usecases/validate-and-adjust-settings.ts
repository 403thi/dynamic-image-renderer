import imageSettings from "../types/imageSettings";
import adjustBackgroundIfNotValid from "../utils/adjustBackgroundIfNotValid";
import adjustHeightIfNotValid from "../utils/adjustHeightIfNotValid";

interface ValidateAndAdjustSettingsUseCaseRequest {
  settings: imageSettings
}

type ValidateAndAdjustSettingsUseCaseResponse =imageSettings

class ValidateAndAdjustSettingsUseCase {
  execute({ settings }: ValidateAndAdjustSettingsUseCaseRequest): ValidateAndAdjustSettingsUseCaseResponse {

    settings.height = adjustHeightIfNotValid(settings.height)
    settings.backgroundColor = adjustBackgroundIfNotValid(settings.backgroundColor)
    
    return settings
  }
}

export { ValidateAndAdjustSettingsUseCase }