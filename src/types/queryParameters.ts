import imageSettings from "./imageSettings";

interface queryParameters extends imageSettings {
  preset: string
  textAnimation: string
}

export { queryParameters }