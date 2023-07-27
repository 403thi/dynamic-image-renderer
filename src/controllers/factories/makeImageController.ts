import { DefineImageSettingsUseCase } from "../../usecases/define-image-settings";
import { ValidateAndAdjustSettingsUseCase } from "../../usecases/validate-and-adjust-settings";
import { ImageController } from "../ImageController";

export function makeImageController() {
  const defineImageSettingsUseCase = new DefineImageSettingsUseCase()
  const validateAndAdjustSettingsUseCase = new ValidateAndAdjustSettingsUseCase()

  const imageController = new ImageController(defineImageSettingsUseCase, validateAndAdjustSettingsUseCase)

  return imageController
}