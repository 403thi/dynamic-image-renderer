import imageSettings from "../types/imageSettings";
import { queryParameters } from "../types/queryParameters";
import getPreset from "../utils/getPreset";
import getTextAnimation from "../utils/getTextAnimation";

interface DefineImageSettingsUseCaseRequest {
  query: queryParameters
}

type DefineImageSettingsUseCaseResponse = imageSettings


class DefineImageSettingsUseCase {
  execute({ query }: DefineImageSettingsUseCaseRequest): DefineImageSettingsUseCaseResponse {

    let settings = {
      ...getPreset(query.preset),
      ...query,
    }

    settings.textAnimation = getTextAnimation(settings.textAnimation as string)

    return settings
  }
}

export { DefineImageSettingsUseCase }