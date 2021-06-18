device-data-detector
=============

# Description

**device-data-detector** is an experimental JS detection library that combines different approaches to try detect devices and return data about them.

It has been crafted for [truesiz.es](https://truesiz.es), so for now it only returns screen size data (theorical screen resolution, screen size and if it’s a built-in screen).

# Usage

## Import
Import this folder into your front-end project, and then link it in your html with :

```
<script src="lib/device-data-detector/lib/renderer/renderer.js" type="text/javascript"></script>
<script src=”lib/device-data-detector/data.js"></script>
<script src="lib/device-data-detector/main.js"></script>
```

## CDN
Coming soon

## Simple call

You simply need to call : `deviceDetection()`, and it will return you a `Device` object with all the available data.

Ex :
```
var detectedDevice = deviceDetection();
```

## Result exploitation

The returned `Device` object is compounded of :

| Property                | Description |
| ----------------------- | ----------- |
| `.name`                 | Device name
| `.userAgentFingerprint` | Fingerprints for detection in the user agent
| `.gpu`                  | Fingerprints for detection in the GPU name
| `.screenSize`           | Diagonal of the screen in inches
| `.ppi`                  | PPI (Pixels Per Inches) of the screen
| `.wRes`                 | Width of the screen in pixels
| `.hRes`                 | Height of the screen in pixels
| `.confidence`           | Confidence level of the detection :\n- 0 : not safe\n- 1 : poorly detected- 2 : good confidence- 3: safe detection
| `.builtIn`              | The detected screen is a built-in one

## Other functions

If you want to try more specific tests, you might be interested in these functions :

| Function | Result | Description |
| -------- | ------ | ----------- |
| `getScreenRatio()` | decimal value | Return the decimal value corresponding to the screen ratio (ex : 16/10 -> 0.625)
| `getGPU()` | string | Return the name of the GPU
| `getGPUVendor()` | string | Return the name of the GPU Vendor
| `isTouchEnabled()` | boolean | Return if the device has a touch screen
| `isTablet()` | boolean | Return if the device is a tablet
| `isMobile()` | boolean | Return if the device is a mobile
| `isComputer()` | boolean | Return if the device is a computer
| `isLaptop()` | boolean | Return if the device is a laptop (unsafe : might miss laptops, but never detect a desktop as a laptop)
| `isApple()` | boolean | Return if the device is an Apple Device
| `isIphone()` | boolean | Return if the device is an iPhone
| `isIpad()` | boolean | Return if the device is an iPad
| `isMac()` | boolean | Return if the device is a Mac
| `isChromebook()` | boolean | Return if the device is a Chromebook (note : some chromebooks declare themselves as android devices)


# Compatibility

## Warning

If you are familiar with front-end web developpement, you already know web standards had clearly not been thinked to precisely identify devices.

So this experimental library is probably something like 50% safe, witch is not that bad, but not that good to use it for serious purposes. 

However, it might be a nice plus in some cases 😉.

## By Ecosystem

| Family    | Device            | Support    |
| --------- | ----------------- | ---------- |
| Amazon    | Kindle Tablets    | ✅ Good
| Apple     | iPhone            | ✅ Good
|           | iPad              | ✅ Good
|           | Mac               | 🆗 Acceptable
| Google    | Chromebook        | 🆗 Acceptable
|           | Android Tablets   | 🆗 Acceptable
|           | Android Phones    | 🆗 Acceptable
| Microsoft | Windows Phone     | 🆗 Acceptable
|           | Surface Devices   | ⚠️ With limitations
|           | Windows Devices   | ⚠️ With limitations
| Others    | External Monitors | ⚠️ With limitations

## By Constructor

| Vendor         | Device Type     | Support    |
| -------------- | --------------- | ---------- |
| Amazon         | Kindle Tablets  | ✅ Good
| Apple          | iPhone          | ✅ Good
|                | iPad            | ✅ Good
|                | Mac             | 🆗 Acceptable
| Barnes & Noble | Nook Tablets    | ✅ Good
| Blackberry     | Phones          | ✅ Good
| Fairphone      | Phones          | ✅ Good
| Google         | Tablets         | ✅ Good
|                | Phones          | ✅ Good
|                | Chromebook      | 🆗 Acceptable
| Huawei         | Tablets         | ✅ Good
|                | Phones          | ✅ Good
| Lenovo         | Tablets         | ✅ Good
| Microsoft      | Phones          | ✅ Good
|                | Surface Devices | ⚠️ With limitations
| Nokia          | Phones          | ✅ Good (Android, Windows Phone only)
| Oppo           | Phones          | ✅ Good
| Poco           | Phones          | ✅ Good
| Redmi          | Phones          | ✅ Good
| Samsung        | Tablets         | ✅ Good
|                | Phones          | ✅ Good
| Xiaomi         | Tablets         | ✅ Good
|                | Phones          | ✅ Good

# How it works

# Technical Stack

This JS library only uses Vanilla JS and has only one JS dependencies, included in the sources (`/lib`) :

- [51 degress’s Renderer](https://github.com/51degrees/renderer) : a really inventive tool that allows to get around Apple GPU obfuscation on iOS.

## Fundamentals

**device-data-detector** is basically an awful combination of bad practices in order to try detect the undetectable.

It overuses user agents, screen resolution, deprecated and mosty unused JS features to get as many information as possible. Then it compare them to its own data base, in order to guess the device.

It’s basically like playing [Akinator](https://en.akinator.com/) with your browser.

## Non exhaustive list of approaches

To understand how does the library work, here are some examples of ways to detect devices :

- **User agent based detection**
	- Some devices like Chromebooks or Android devices have model name/number in their user agents. We can exploit them for safe detection (ex : `SM-G991` -> Samsung Galaxy S21)

- **Apple detection**
	- Most Apple devices have unique screen resolutions or ”unique screen resolution / GPU” couples. So using a data base of Apple devices, we can guess almost any iPhone, iPad or Mac with a built-in screen

- **Laptop detection**
	- `navigator.getBattery()` : if an non-mobile device (phone or tablet) is under battery or not fully charged, this is a laptop.
	- Mobile GPU : some GPU are designed only for laptops and have a hints in their name (ex : `/Nvidia [0-9][0-9][0-9]M/`)

- **Screen size probability depending on resolution**
	- If we do stats, it appears some resolutions are more often associated to certain screen sizes than others. We can use that to take a guess (ex : 90% of ultra-wide screens with 1440x3440 resolution are 34”)

- **Coordination with already known data**
	- Let’s assume, you already detected a first screen with device-data-detector and it returned a built-in one. Now the user changed to another one, it might be an external one. So you can call the library by giving it this hint.

# Contributing

## It’s a free project

This is a free/libre JS library under Mozilla Public License Version 2.0.

Your feedback and/or pull requests is very welcome!

There’s still a lot of work to make it more clever :
- There are certainly many tips I didn’t exploit that could bring better detection
- The library dataset misses a lot of brands and models and new devices are released everyday !

## Contributors

Created by [arnaud.engineer](https://arnaud.engineer).

