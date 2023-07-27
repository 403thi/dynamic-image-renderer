<div align="center">
 
<img src="https://dynamic-image-renderer.vercel.app/api">
 
# Dynamic Image Renderer API

### easy to use - open source

![License Repo](https://img.shields.io/github/license/403thi/dynamic-image-renderer?style=flat)
![GitHub Repo stars](https://img.shields.io/github/stars/403thi/dynamic-image-renderer?style=flatl)
</div>
<hr>

### WARNING ⚠ The API is in a code refactoring process, so parameters and styles may change in the future.

<hr>

# **Make your repositories and READMEs more beautiful!**

This API generate an image dynamically with your parameters! It's simple to use, customizable and with ready presets!

# Navigation
<details open>
<summary>Usage</summary>

* [Basic Usage](#basic-usage)
* [Using Presets and Animations](#using-presets-and-animations)
</details>


<details open>
<summary>About</summary>

* [About the project](#about-the-project)
* [How it works?](#how-it-works)
* [How to make a preset](#how-to-make-a-preset)
* [How to make a animation](#how-to-make-a-animation)
* [How to add a gradient](#how-to-add-a-gradient)
</details>


<details open>
<summary>
<a href="#parameters">Parameters</a>
</summary>

* [Size](#size)
* [Title](#title)
* [Subtitle](#subtitle)
* [Effects](#effects)
* [Background](#background)
</details>

<details open>
<summary>
<a href="#animations">Animations</a>
</summary>

* [Pop-up](#pop-up-popup)
* [Fade-in](#fade-in-fadein)
* [Pulse](#pulse-pulse)
* [Flicker](#flicker-flicker)
</details>

<details open>
<summary>
<a href="#presets">Presets</a>
</summary>

* [Default](#default)
* [Minimalist](#minimalist)
* [Dracula](#dracula)
* [Hub](#hub)
* [Monokai](#monokai)
* [One Dark](#onedark)
</details>

<hr>

# About the project

The API is made with [Express](https://expressjs.com/) and [TypeScript](https://www.typescriptlang.org/).

The project idea is make the API be in continuous progression with new presets and features, then: [Pull Requests](https://github.com/403thi/dynamic-image-renderer/pulls) and [ideas](https://github.com/403thi/dynamic-image-renderer/labels/%F0%9F%92%A1%20Idea) are welcome! Read [how it works?](#how-it-works) for more information about the project structure.

*This is my first open-source project, so let's share learning! :)*

Inspired in [Capsule Render](https://github.com/kyechan99/capsule-render/) project.
# Basic usage
[!] **API uses a default preset if you don't specify.**

In HTML, link the URL in `src`

`<img src="https://dynamic-image-renderer.vercel.app/api?title=myTitle&subtitle=mySubtitle">`

In Markdown, you can use HTML way or the markdown one.

`![Image Description](https://dynamic-image-renderer.vercel.app/api?title=myTitle&subtitle=mySubtitle)`


<img src="https://dynamic-image-renderer.vercel.app/api?title=myTitle&subtitle=mySubtitle">
 
# Parameters

## Size
Parameter | Default
-----|-----
`height` | `300`

## Title
Parameter | Default | Description
-----|-----|-----
`title` | `dynamic!` | Title content
`titleColor` | `#111111` | Title color (CSS color: rgb, hex, etc)
`titlePositionX` | `50` (0..100) | X axis title position (This position is calculated in percentage)
`titlePositionY` | `50` (0..100) | Y axis title position
`titleFontSize` | `65` (px) | Title Font size in pixels
`titleBgOpacity` | `100` (0..100) | Title background opacity
`titleBgColor` | `#fff` | Title background color (CSS color)
`titleShadow` | `false` | If you want title shadow (true, false)


## Subtitle
Parameter | Default
-----|-----
`subtitle` | `dynamic image renderer.`
`subtitleColor` | `#EEE`
`subtitlePositionX` | `60` (0..100)
`subtitlePositionY` | `67` (0..100)
`subtitleFontSize` | `20` (px)
`subtitleBgOpacity` | `0` (0..100)
`subtitleBgColor` | `#fff`
`subtitleShadow` | `true`


## Effects
Parameter | Default | Description
-----|-----|-----
`glowColor` | `none` | Color used in animations such as "flicker" or "pulse".
`textAnimation` | `fadein` | Check available animations [here](#animations)

See more of animations [here](#animations). 

## Background
Parameter | Default
-----|-----
`backgroundColor` | `gradient`

# Animations

## Pop-up (popup)
[!] Played when is loaded.

`<img src="https://dynamic-image-renderer.vercel.app/api?textAnimation=popup">`

<img src="https://dynamic-image-renderer.vercel.app/api?textAnimation=popup">

## Fade-in (fadein)
[!] Played when is loaded.

`<img src="https://dynamic-image-renderer.vercel.app/api?textAnimation=fadein">`

<img src="https://dynamic-image-renderer.vercel.app/api?textAnimation=fadein">

## Pulse (pulse)

***Note: Pulse and Flicker needs a glowColor parameter, because it's "none" by default.***

`<img src="https://dynamic-image-renderer.vercel.app/api?textAnimation=pulse&glowColor=white">`

<img src="https://dynamic-image-renderer.vercel.app/api?textAnimation=pulse&glowColor=white">

## Flicker (flicker)

***Note: Pulse and Flicker needs a glowColor parameter, because it's "none" by default.***

`<img src="https://dynamic-image-renderer.vercel.app/api?textAnimation=flicker&glowColor=white">`

<img src="https://dynamic-image-renderer.vercel.app/api?textAnimation=flicker&glowColor=white">

# Presets
See each preset configuration in [files](src/presets)
## Default
`<img src="https://dynamic-image-renderer.vercel.app/api">`

<img src="https://dynamic-image-renderer.vercel.app/api">

## Minimalist
`<img src="https://dynamic-image-renderer.vercel.app/api?preset=minimalist">`

<img src="https://dynamic-image-renderer.vercel.app/api?preset=minimalist">

## Dracula
`<img src="https://dynamic-image-renderer.vercel.app/api?preset=dracula">`

<img src="https://dynamic-image-renderer.vercel.app/api?preset=dracula">

## Hub
Note: You will probably need to change positions of title and subtitle.

`<img src="https://dynamic-image-renderer.vercel.app/api?preset=hub">`

<img src="https://dynamic-image-renderer.vercel.app/api?preset=hub">

## Monokai
`<img src="https://dynamic-image-renderer.vercel.app/api?preset=monokai">`

<img src="https://dynamic-image-renderer.vercel.app/api?preset=monokai">

## OneDark
`<img src="https://dynamic-image-renderer.vercel.app/api?preset=oneDark">`

<img src="https://dynamic-image-renderer.vercel.app/api?preset=oneDark">


# Using presets and animations

## Minimalist preset with pulse animation
`<img src="https://dynamic-image-renderer.vercel.app/api?preset=minimalist&textAnimation=pulse&glowColor=green&titleBgOpacity=0&title=myTitle&subtitle=my%20subtitle">`

<img src="https://dynamic-image-renderer.vercel.app/api?preset=minimalist&textAnimation=pulse&glowColor=green&titleBgOpacity=0&title=myTitle&subtitle=my%20subtitle">

<hr>

## Dracula preset with flicker animation
`<img src="https://dynamic-image-renderer.vercel.app/api?preset=dracula&title=myTitle&subtitle=my%20subtitle&textAnimation=flicker&glowColor=gray">`

<img src="https://dynamic-image-renderer.vercel.app/api?preset=dracula&title=myTitle&subtitle=my%20subtitle&textAnimation=flicker&glowColor=gray">

# How it works?
Basically, this API get the parameters and render as a SVG, in browser, the SVG is shown as an image.

The SVG is rendered as a [EJS](https://ejs.co/) template, the file is [here](src/views/main.ejs).

# How to make a preset
You can find the presets in [presets folder](src/presets/), to add a preset, create a preset with `name.ts`, and, please, follow the preset struct:
```ts
import imageSettings from "../types/imageSettings"
import defaultPreset from "./defaultPreset"

function preset(): imageSettings {
    return {
        // this preset will be a base, all parameters initialize with this preset
        ...defaultPreset(),
        ... { 
            // here, your modifications.
            title: "title" 
        }
    }
}
export default preset
```
Modify the [index file](src/presets/index.ts) with new preset.

# How to make a animation
You can find all animations in [animations.ts](src/config/animations.ts), this object contains all animations, follow the animations struct:
```ts
// ...
animationName: {
    style: "this style will be appliqued in title and subtitle",
    keyframes: `
        this string is reserved to create a animation keyframes
    `
}
```

# How to add a gradient
You can find the gradients in [gradients.ts](src/config/gradients.ts), just add colors for the gradient.
