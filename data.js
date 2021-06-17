/*  =========================================================================
	 OBJECT MODEL
	========================================================================= */

	/*  ----------------------------------------
		 DEVICE
		---------------------------------------- */

		class Device
		{
			constructor(n, uafg, g, ss, d, wr, hr, conf = 3, bi = true) {
			    this.name = n;
			    this.userAgentFingerprint = uafg;
			    this.gpu = g;
			    this.screenSize = ss;
			    this.dpi = d;
			    this.wRes = wr;
			    this.hRes = hr;
			    this.confidence = conf;
			    this.builtIn = bi;
		    }
		}

/*  =========================================================================
	 DEVICE FAMILIES
	========================================================================= */

	/*  ----------------------------------------
		 APPLE DEVICES
		---------------------------------------- */

	/*
		Detection based on :
		- screen dimensions (width/height in pixels)
		- GPU name when relevant to differenciate models and avoid some potential confusions

		Limitations :
		- Not 100% reliable (some very rare models share these specs without having the same size)
		- Is not relevant when not using the built-in screen
	*/

		/*  ---------------
			 IPHONE
			--------------- */

		var lIphone = [
			new Device("iPhone 2G / 3G", "", "S5L8900", 3.5, 163, 320, 480),
			new Device("iPhone 3GS", "", "ALP0298C05", 3.5, 163, 320, 480),
			new Device("iPhone 2G-3GS", "", "", 3.5, 163, 320, 480),
			new Device("iPhone 4", "", "PowerVR SGX 535", 3.5, 326, 640, 960),
			new Device("iPhone 4S", "", "PowerVR SGX 543", 3.5, 326, 640, 960),
			new Device("iPhone 4 / 4S", "", "", 3.5, 326, 640, 960),
			new Device("iPhone 5 / 5C", "", "PowerVR SGX 543", 4, 326, 640, 1136),
			new Device("iPhone 5S", "", "A7", 4, 326, 640, 1136),
			new Device("iPhone SE 2016", "", "A9", 4, 326, 640, 1136),
			new Device("iPod Touch (6G)", "", "A8", 4, 326, 640, 1136),
			new Device("iPod Touch (7G)", "", "A10", 4, 326, 640, 1136),
			new Device("iPhone 5 / 5S / 5C", "", "", 4, 326, 640, 1136, 2),
			new Device("iPhone 6", "", "A8", 4.7, 326, 750, 1334),
			new Device("iPhone 6S", "", "A9", 4.7, 326, 750, 1334),
			new Device("iPhone 7", "", "A10", 4.7, 326, 750, 1334),
			new Device("iPhone 11", "", "A11", 4.7, 326, 750, 1334),
			new Device("iPhone SE 2020", "", "A13", 4.7, 326, 750, 1334),
			new Device("iPhone 6-8 / SE 2020", "", "", 4.7, 326, 750, 1334, 2),
			new Device("iPhone 12 Mini", "", "A14", 5.8, 463, 1125, 2436), // seems to be the simulated resolution
			new Device("iPhone 12 Mini", "", "", 5.4, 476, 1080, 2340), // theorical resolution
			new Device("iPhone 6 Plus", "", "A8", 5.5, 401, 1080, 1920),
			new Device("iPhone 6S Plus", "", "A9", 5.5, 401, 1080, 1920),
			new Device("iPhone 7 Plus", "", "A10", 5.5, 401, 1080, 1920),
			new Device("iPhone 8 Plus", "", "A11", 5.5, 401, 1080, 1920),
			new Device("iPhone 6-8 Plus", "", "", 5.5, 401, 1080, 1920, 2),
			new Device("iPhone X", "", "A11", 5.8, 463, 1125, 2436),
			new Device("iPhone XS", "", "A12", 5.8, 463, 1125, 2436),
			new Device("iPhone 11 Pro", "", "A13", 5.8, 463, 1125, 2436),
			new Device("iPhone X-11 Pro", "", "", 5.8, 463, 1125, 2436, 2),
			new Device("iPhone XR", "", "A12", 6.1, 326, 828, 1792),
			new Device("iPhone 11", "", "A13", 6.1, 326, 828, 1792),
			new Device("iPhone XR/11", "", "", 6.1, 326, 828, 1792),
			new Device("iPhone 12/12 Pro", "", "", 6.1, 460, 1170, 2532),
			new Device("iPhone XS Max", "", "A12", 6.5, 458, 1242, 2688),
			new Device("iPhone 11 Pro Max", "A13", "", 6.5, 458, 1242, 2688),
			new Device("iPhone XS Max / 11 Pro Max", "", "", 6.5, 458, 1242, 2688, 2),
			new Device("iPhone 12 Pro Max", "", "", 6.7, 458, 1284, 2778),
			new Device("Unknown iPhone", "", "", 5.8, 463, 1125, 2436, 1)
		];

		/*  ---------------
			 IPAD
			--------------- */

		var lIpad = [
			// Non-retina (devicePixelRatio == 1)
			new Device("iPad 1", "", "PowerVR SGX 535", 9.7, 132, 768, 1024),
			new Device("iPad 2 / iPad Mini 1", "", "PowerVR SGX 543", 9.7, 132, 768, 1024, 2), // TODO : impossible to resolve confusion
			new Device("Non-Retina iPad", "", "", 9.7, 132, 768, 1024),
			// 7.9 / 9.7
			new Device("iPad 3", "", "PowerVR SGX 543", 9.7, 264, 1536, 2048),
			new Device("iPad 4", "", "PowerVR SGX 554", 9.7, 264, 1536, 2048),
			new Device("iPad Mini 2-3 / iPad Air 1", "", "A7", 7.9, 326, 1536, 2048, 1), // confusion with iPad Air 1
			new Device("iPad Air 2", "", "A8X", 9.7, 264, 1536, 2048),
			new Device("iPad Mini 4", "", "A8", 7.9, 326, 1536, 2048),
			new Device("Pad Pro 9.7", "", "A9X", 9.7, 264, 1536, 2048), // experimental
			new Device("iPad 5 / iPad Pro 9.7", "", "A9", 9.7, 264, 1536, 2048),
			new Device("iPad 6", "", "A10", 9.7, 264, 1536, 2048),
			new Device("iPad Mini 5", "", "A12", 7.9, 326, 1536, 2048), // experimental
			new Device("Unknown 9.7 inches iPad", "", "", 9.7, 264, 1536, 2048, 1),
			// Modern iPad
			new Device("iPad 10.2 (2019)", "", "A10", 10.2, 264, 1620, 2160),
			new Device("iPad 10.2 (2020)", "", "A12", 10.2, 264, 1620, 2160),
			new Device("iPad 10.2", "", "", 10.2, 264, 1620, 2160),
			new Device("iPad Pro 10.5", "", "A10X", 10.5, 264, 1668, 2224),
			new Device("iPad Pro 10.5", "", "A10", 10.5, 264, 1668, 2224),
			new Device("iPad Air 10.5", "", "A12", 10.5, 264, 1668, 2224),
			new Device("iPad Pro / Air 10.5", "", "", 10.5, 264, 1668, 2224),
			// Modern iPad Pro / Air
			new Device("iPad Pro 11 (2018)", "", "A12X", 11.0, 264, 1668, 2388),
			new Device("iPad Pro 11 (2020)", "", "A12Z", 11.0, 264, 1668, 2388),
			new Device("iPad Pro 11 (2018-2020)", "", "A12", 11.0, 264, 1668, 2388),
			new Device("iPad Pro 11 (2021)", "", "M1", 11.0, 264, 1668, 2388), // experimental
			new Device("iPad Air 11 (2020)", "", "A14", 10.9, 264, 1640, 2360),
			new Device("iPad Air 11", "", "", 10.9, 264, 1640, 2360),
			new Device("iPad Pro 12.9 (2015)", "", "A9X", 12.9, 264, 2048, 2732),
			new Device("iPad Pro 12.9 (2015)", "", "A9", 12.9, 264, 2048, 2732),
			new Device("iPad Pro 12.9 (2017)", "", "A10X", 12.9, 264, 2048, 2732),
			new Device("iPad Pro 12.9 (2017)", "", "A10", 12.9, 264, 2048, 2732),
			new Device("iPad Pro 12.9 (2018)", "", "A12X", 12.9, 264, 2048, 2732),
			new Device("iPad Pro 12.9 (2020)", "", "A12Z", 12.9, 264, 2048, 2732),
			new Device("iPad Pro 12.9 (2018-2020)", "", "A12", 12.9, 264, 2048, 2732),
			new Device("iPad Pro 12.9 (2021)", "", "M1", 12.9, 264, 2048, 2732), // experimental
			new Device("iPad Pro 12.9", "", "", 12.9, 264, 2048, 2732),
			// DEFAULT
			new Device("Unknown iPad", "", "", 10.2, 264, 1620, 2160) // External screen case taken in account in deviceDetection()
		];

		/*  ---------------
			 MAC
			--------------- */

		// works with computer > 2010 (a few risks before)
		var lMac = [
			new Device("MacBook Air 11", "", "", 11.6, 135, 768, 1366, 2),
			new Device("MacBook 13", "", "", 13.3, 113, 800, 1280, 2),
			new Device("MacBook Air 13", "", "", 13.3, 128, 900, 1440, 2),
			new Device("MacBook Pro 15", "", "", 15.4, 128, 1050, 1680, 2),
			new Device("MacBook Pro 17", "", "", 17.3, 131, 1200, 1920, 2),
			new Device("iMac 21", "", "", 21.5, 103, 1080, 1920, 2),
			new Device("MacBook 12", "", "", 12.0, 226, 1440, 2304, 2),
			new Device("iMac 27", "", "", 27.0, 109, 1440, 2560, 2),
			new Device("MacBook Pro 15 Retina", "", "NVIDIA", 15.4, 220, 1800, 2880, 3), // Real GPU starts only with 15 inches models
			new Device("MacBook Pro 15 Retina", "", "AMD", 15.4, 220, 1800, 2880, 3), // Real GPU starts only with 15 inches models
			new Device("MacBook Pro 15 Retina", "", "4000", 15.4, 220, 1800, 2880, 3), // INTEL GPU might be on 13 too, but resolution is supposed to be different
			new Device("MacBook Pro 15 Retina", "", "5200", 15.4, 220, 1800, 2880, 3),  // intel gpu exclusive to 15" macbook
			new Device("MacBook Pro 15 Retina", "", "530", 15.4, 220, 1800, 2880, 3),
			new Device("MacBook Pro 15 Retina", "", "630", 15.4, 220, 1800, 2880, 3),
			new Device("MacBook Pro 15 Retina", "", "", 15.4, 220, 1800, 2880, 2),
			new Device("MacBook Pro 15 Retina", "", "", 15.4, 220, 2100, 3360, 2), // if scaled resolution
			new Device("MacBook Pro 16 Retina", "", "", 16.0, 226, 2240, 3584, 2),
			new Device("MacBook Pro 16 Retina", "", "", 16.0, 226, 1920, 3072, 2),
			new Device("MacBook 13 Retina", "", "4000", 13.3, 227, 1600, 2560, 3),
			new Device("MacBook 13 Retina", "", "", 13.3, 227, 1600, 2560, 2),
			new Device("MacBook 13 Retina", "", "5100", 13.3, 220, 1800, 2880, 3), // intel gpu exclusive to 13" macbook
			new Device("MacBook 13 Retina", "", "6100", 13.3, 220, 1800, 2880, 3),
			new Device("MacBook 13 Retina", "", "540", 13.3, 220, 1800, 2880, 3),
			new Device("MacBook 13 Retina", "", "550", 13.3, 220, 1800, 2880, 3),
			new Device("MacBook 13 Retina", "", "640", 13.3, 220, 1800, 2880, 3),
			new Device("MacBook 13 Retina", "", "645", 13.3, 220, 1800, 2880, 3),
			new Device("MacBook 13 Retina", "", "650", 13.3, 220, 1800, 2880, 3),
			new Device("MacBook 13 Retina", "", "655", 13.3, 220, 1800, 2880, 3),
			new Device("MacBook 13 Retina", "", "M1", 13.3, 220, 1800, 2880, 3),
			new Device("iMac 21 4K", "", "", 21.5, 219, 2304, 4096, 3),
			new Device("iMac 24 4.5K", "", "", 23.5, 218, 2520, 4480, 3),
			new Device("iMac 27 5K", "", "", 27.0, 218, 2880, 5120, 3),
			new Device("Mac with Pro Display XDR", "", "", 32.0, 216, 3384, 6016, 3, false),
			new Device("Mac with an external Monitor", "", "", 21.5, 103, 1080, 1920, 0, false) // we consider we are on an external monitor
		];

	/*  ----------------------------------------
		 GENERIC CHROMEBOOKS
		---------------------------------------- */

		// NOTE : A lot of chromebook seems marked as android device https://developers.whatismybrowser.com/useragents/parse/69314685android-browser-chrome-os-chromebook-2

		var lChromebook = [
			new Device("Entry-level Chromebook", "", "", 14.0, 96, 640, 1138, 1), // HP Chromebook 14A G5
			new Device("Entry-level Chromebook", "", "", 10.1, 143, 800, 1200, 1),
			new Device("Entry-level Chromebook", "", "", 10.1, 149, 800, 1280, 1),
			new Device("Entry-level Chromebook", "", "", 11.6, 135, 768, 1366, 1),
			new Device("HD Chromebook", "", "", 13.3, 165, 1080, 1920, 1),
			new Device("2.5K Chromebook", "", "", 12.3, 235, 1600, 2400, 1),
			new Device("2.5K Chromebook", "", "", 12.85, 239, 1700, 2560, 1),
			new Device("2.5K Chromebook", "", "", 13.3, 276, 1800, 3200, 1),
			new Device("3K Chromebook", "", "", 12.3, 293, 2000, 3000, 1),
			new Device("3K Chromebook", "", "", 13.3, 331, 2160, 3840, 1),
			// DEFAULT
			new Device("Unknown Chromebook", "", "", 11.6, 135, 768, 1366, 0)
		];

	/*  ----------------------------------------
		 GENERIC TABLETS
		---------------------------------------- */

		var lTablet = [
			new Device("Antic cheap tablet", "", "", 8.0, 104, 480, 800, 1),
			new Device("Antic cheap tablet", "", "", 8.0, 125, 600, 800, 1),
			new Device("Entry-level tablet", "", "", 7.0, 170, 600, 1024, 1),
			new Device("Entry-level tablet", "", "", 8.0, 160, 768, 1024, 1),
			new Device("Entry-level tablet", "", "", 9.7, 155, 768, 1366, 1),
			new Device("Entry-level tablet", "", "", 7.0, 180, 800, 1200, 1),
			new Device("Entry-level tablet", "", "", 7.0, 216, 800, 1280, 1),
			new Device("Entry-level tablet", "", "", 8.0, 189, 800, 1280, 1),
			new Device("Entry-level tablet", "", "", 7.0, 243, 900, 1440, 1),
			new Device("Entry-level tablet", "", "", 10.1, 162, 1024, 1280, 1),
			new Device("HD tablet", "", "", 8.0, 248, 1080, 1920, 1),
			new Device("HD tablet", "", "", 8.0, 323, 1200, 1920, 1),
			new Device("High-res tablet", "", "", 9.7, 102, 1536, 2048, 1),
			new Device("High-res tablet", "", "", 9.7, 339, 1600, 2560, 1),
			new Device("High-res tablet", "", "", 10.1, 301, 1700, 2560, 1),
			// DEFAULT
			new Device("Unknown Tablet", "", "", 7.0, 216, 800, 1280, 0)
		];

	/*  ----------------------------------------
		 GENERIC SMARTPHONES
		---------------------------------------- */


		// TODO : https://www.ldlc.com/telephonie/telephonie-portable/mobile-smartphone/c4416/
		var lMobile = [
			// Particular phones
			new Device("BlackBerry Passport", "", "", 4.5, 453, 1440, 1440, 3),
			// Generic phones
			new Device("Antic phone", "", "", 4.0, 215, 320, 800, 1),
			new Device("Antic phone", "", "", 4.15, 208, 480, 800, 1),
			new Device("Antic phone", "", "", 5, 275, 540, 960, 1),
			new Device("Antic phone", "", "", 4.3, 355, 768, 1280, 1),
			new Device("Entry-level Phone", "", "", 5.0, 312, 720, 1280, 1),
			new Device("Entry-level Phone", "", "", 5.1, 469, 800, 1280, 1),
			new Device("Middle-end Phone", "", "", 5.5, 469, 1080, 1920, 1),
			new Device("Middle-end Phone", "", "", 6.3, 469, 1080, 2280, 1),
			new Device("Middle-end Phone", "", "", 6.4, 469, 1080, 2310, 1),
			new Device("Middle-end Phone", "", "", 6.3, 469, 1080, 2340, 1),
			new Device("Middle-end Phone", "", "", 6.5, 469, 1080, 2400, 1),
			new Device("High-end Phone", "", "", 5.5, 469, 1440, 2560, 1),
			new Device("High-end Phone", "", "", 6.2, 469, 1440, 2960, 1),
			new Device("High-end Phone", "", "", 6.8, 469, 1440, 3040, 1),
			new Device("High-end Phone", "", "", 6.8, 469, 1440, 3088, 1),
			new Device("High-end Phone", "", "", 6.7, 469, 1440, 3200, 1),
			// DEFAULT
			new Device("Unknown Phone", "", "", 6.0, 216, 1080, 1920, 0)
		];


	/*  ----------------------------------------
		 GENERIC LAPTOP
		---------------------------------------- */

		// check if "Laptop" in user agent http://www.webapps-online.com/online-tools/user-agent-strings/dv/brand55230/hp-laptop
		var lLaptopUaClues = [
			"laptop", "notebook", // generic
			"thinkpad", "zenbook", "flip", "transformer", "latitude", "spectre", "satellite" // laptop brands
		];

		var lLaptopGpuClues= [
			/[0-9][0-9][0-9]M/, /mGPU/, /M[0-9][0-9][0-9]/ // Nvidia + AMD historic notations, not rocket science
		];

		var lLaptop = [
			// TODO : ppi
			// Surface device (odd resolutions)
			new Device("Microsoft Surface Laptop Go", "", "", 12.4, 216, 1024, 1536, 1), // screen size ?
			new Device("Microsoft Surface Pro 3", "", "", 12.0, 216, 1440, 2160, 1),
			new Device("Microsoft Surface Pro", "", "", 12.3, 263, 1824, 2736, 1), // 1 et 4 et 7+ (12.5) (12.3) (12.3)
			new Device("Microsoft Surface Book 2", "", "", 15.0, 216, 2160, 3240, 1),
			new Device("Microsoft Surface Studio", "", "", 28.0, 216, 3000, 4500, 1),
			new Device("Microsoft Surface Laptop", "", "", 15.0, 216, 1664, 2496, 1),
			new Device("Microsoft Surface Pro X", "", "", 13.0, 216, 1920, 2880, 1),
			// Oldies
			new Device("Antic Laptop", "", "", 14.0, 96, 768, 1152, 2), // Apple PowerBook G4
			new Device("Antic Laptop", "", "", 14.0, 96, 854, 1280, 2), // Apple PowerBook G4
			new Device("Antic Laptop", "", "", 14.0, 96, 960, 1440, 2), // Apple PowerBook G4
			new Device("Antic Laptop", "", "", 8.0, 96, 768, 1600, 2), // Sony VAIO P series laptop
			// Cheap Devices
			new Device("Entry-level laptop", "", "", 14.0, 96, 640, 1138, 1), // HP Chromebook 14A G5
			new Device("Entry-level Laptop", "", "", 10.1, 149, 800, 1280, 1), // Dell tablet
			// Antic resolutions
			new Device("Antic laptop", "", "", 15.6, 276, 480, 600, 1),
			new Device("Antic VGA laptop", "", "", 15.6, 276, 480, 640, 1),
			new Device("Antic WVGA laptop", "", "", 15.6, 276, 480, 768, 1),
			new Device("Antic WVGA laptop", "", "", 15.6, 276, 480, 800, 1),
			new Device("Antic WPAL laptop", "", "", 15.6, 276, 480, 848, 1),
			new Device("Antic PAL laptop", "", "", 15.6, 276, 576, 1024, 1),
			new Device("Antic SVGA laptop", "", "", 15.6, 276, 600, 800, 1),
			new Device("Antic SVGA laptop", "", "", 15.6, 276, 624, 832, 1),
			new Device("Antic WSVGA laptop", "", "", 15.6, 276, 600, 1024, 1),
			new Device("Antic WSVGA laptop", "", "", 15.6, 276, 640, 1024, 1),
			new Device("Antic XGA laptop", "", "", 15.6, 96, 768, 1024, 1),
			new Device("Antic XGA laptop", "", "", 15.6, 96, 800, 1024, 1),
			new Device("Antic Apple XGA laptop", "", "", 15.6, 96, 864, 1152, 1),
			new Device("Antic Sun XGA laptop", "", "", 15.6, 96, 900, 1152, 1),
			new Device("Antic SXGA laptop", "", "", 15.6, 96, 960, 1280, 1),
			new Device("Antic SXGA laptop", "", "", 15.6, 96, 1024, 1280, 1),
			new Device("Antic SXGA+ laptop", "", "", 15.6, 96, 1050, 1400, 1),
			// 4:3 HD
			new Device("4:3 Laptop", "", "", 15.6, 276, 1080, 1440, 1), //4:3 1080i
			new Device("4:3 Laptop", "", "", 15.6, 276, 1200, 1600, 1),
			new Device("4:3 Laptop", "", "", 15.6, 276, 1280, 1600, 1),
			new Device("4:3 Laptop", "", "", 15.6, 276, 1344, 1792, 1),
			new Device("4:3 Laptop", "", "", 15.6, 276, 1392, 1856, 1),
			new Device("4:3 Laptop", "", "", 15.6, 276, 1440, 1800, 1),
			new Device("4:3 Laptop", "", "", 15.6, 276, 1440, 1920, 1),
			new Device("4:3 Laptop", "", "", 15.6, 276, 1920, 2560, 1),
			// HD
			new Device("Entry-level Laptop", "", "", 14.0, 96, 720, 1152, 1),
			new Device("Entry-level Laptop", "", "", 14.0, 276, 720, 1280, 1), // 14
			new Device("Entry-level Laptop", "", "", 14.8, 276, 768, 1366, 1), // median 14 / 15.6
			new Device("Entry-level Laptop", "", "", 14.0, 276, 900, 1440, 1),
			new Device("Entry-level Laptop", "", "", 14.0, 130, 900, 1600, 1), // FUJITSU LIFEBOOK U745 : Representative ?
			new Device("Entry-level Laptop", "", "", 14.0, 276, 1000, 1776, 1),
			new Device("Entry-level Laptop", "", "", 14.0, 276, 1024, 1600, 1),
			new Device("Entry-level Laptop", "", "", 14.0, 276, 1050, 1680, 1),
			// Full HD
			new Device("Full HD Laptop", "", "", 15.6, 276, 1080, 1920, 1), // 15.6 -> 75% of models
			new Device("Full HD Laptop", "", "", 14.0, 276, 1152, 2048, 1), // 14 ???
			new Device("Full HD Laptop", "", "", 13.3, 276, 1200, 1920, 1), // 13.3 / 17.3 (too small reference population)
			new Device("Full HD Laptop", "", "", 10.5, 276, 1280, 1920, 1), // only found 10.5 so ...
			new Device("Full HD Laptop", "", "", 14.0, 276, 1280, 2048, 1), // 14 ???
			// 2K - 2.5K
			new Device("2K Laptop", "", "", 13.3, 276, 1080, 2048, 1),
			new Device("2.5K Laptop", "", "", 14.8, 276, 1440, 2560, 1), // median 14 / 15.6 (too small reference population)
			new Device("2.5K Laptop", "", "", 14.0, 276, 1440, 2304, 1), // 14 ???
			new Device("2.5K Laptop", "", "", 13.3, 276, 1350, 2160, 1), // Lenovo Thinkpad x1 Nano
			new Device("2.5K Laptop", "", "", 13.3, 276, 1536, 2048, 1), // Lenovo Thinkpad x1 Fold
			new Device("2.5K Laptop", "", "", 13.3, 216, 1504, 2256, 1), // Surface
			new Device("2.5K Laptop", "", "", 15.6, 216, 1600, 2560, 1), // MacBook 13 retina, else : 14.5, 16, 17.3, ... too many res to conclude
			new Device("2.5K Laptop", "", "", 15.6, 216, 1620, 2880, 1), // Lenovo Thinkpad W541 
			new Device("2.5K Laptop", "", "", 12.85, 216, 1700, 2560, 1), // Chromebook Pixel only
			new Device("2.5K Laptop", "", "", 10.2, 216, 1800, 2560, 1), // Pixel C only
			new Device("2.5K Laptop", "", "", 15.4, 216, 1800, 2880, 1), // Macbook 15 retina
			new Device("2.5K Laptop", "", "", 14.0, 216, 1800, 3200, 1), // Wide QXGA+ : HP Envy TouchSmart 14, Fujitsu Lifebook UH90/L, Lenovo Yoga 2 Pro 
			new Device("2.5K Laptop", "", "", 15.6, 216, 2048, 2560, 1), // QSXGA
			new Device("2.5K Laptop", "", "", 12.9, 216, 2048, 2732, 1), // iPad Pro 12.9" 
			// 3K
			new Device("3K Laptop", "", "", 13.7, 267, 2000, 3000, 1), // median 13.5 / 13.9 Microsoft Surface Book, Huawei MateBook X Pro
			new Device("UHD Laptop", "", "", 15.6, 216, 2048, 3200, 1), // Theorical : Wide QSXGA
			new Device("3K Laptop", "", "", 15.0, 260, 2160, 3240, 1), // Microsoft Surface Book 15
			new Device("3K Laptop", "", "", 13.9, 267, 2200, 3300, 1), // ASUS Zenbook S
			// 4K
			new Device("4K Laptop", "", "", 15.6, 276, 2160, 3840, 1), // TRUE DEF (2/3 15.6 1/3 17.3)
			new Device("4K Laptop", "", "", 13.4, 276, 2400, 3840, 1), // ASUS ROG Flow X13
			new Device("4K Laptop", "", "", 15.6, 276, 2160, 4096, 1),
			// Default
			new Device("Unknown Laptop", "", "", 14.0, 276, 1080, 1920, 0) // we consider we are on a average 14.0 laptop, so we can't be that wrong
		];


	/*  ----------------------------------------
		 GENERIC MONITORS
		---------------------------------------- */

		var lDesktopUaClues = [
			"desk", "all-in-one", "allinone",  "all in one", // generic
			"touchsmart" // laptop brands
		];

		var lMonitor = [
			// Antic Monitors
			new Device("Antic Monitor", "", "", 15, 276, 480, 600, 1, false),
			new Device("Antic VGA Monitor", "", "", 15, 276, 480, 640, 1, false),
			new Device("Antic WVGA Monitor", "", "", 15, 276, 480, 768, 1, false),
			new Device("Antic WVGA Monitor", "", "", 15, 276, 480, 800, 1, false),
			new Device("Antic WPAL Monitor", "", "", 15, 276, 480, 848, 1, false),
			new Device("Antic PAL Monitor", "", "", 15, 276, 576, 1024, 1, false),
			new Device("Antic SVGA Monitor", "", "", 15, 276, 600, 800, 1, false),
			new Device("Antic SVGA Monitor", "", "", 15, 276, 624, 832, 1, false),
			new Device("Antic WSVGA Monitor", "", "", 15, 276, 600, 1024, 1, false),
			new Device("Antic WSVGA Monitor", "", "", 15, 276, 640, 1024, 1, false),
			new Device("Antic XGA Monitor", "", "", 15, 96, 768, 1024, 1, false),
			new Device("Antic XGA Monitor", "", "", 15, 96, 800, 1024, 1, false),
			new Device("Antic Apple XGA Monitor", "", "", 15, 96, 864, 1152, 1, false),
			new Device("Antic Sun XGA Monitor", "", "", 15, 96, 900, 1152, 1, false),
			new Device("Antic SXGA Monitor", "", "", 15, 96, 960, 1280, 1, false),
			new Device("Antic SXGA Monitor", "", "", 17, 96, 1024, 1280, 1, false), // 60% 17", 40% 19" LDLC
			new Device("Antic SXGA+ Monitor", "", "", 15, 96, 1050, 1400, 1, false),
			// 4:3 HD
			new Device("4:3 Monitor", "", "", 17, 276, 1080, 1440, 1, false),
			new Device("4:3 Monitor", "", "", 17, 276, 1200, 1600, 1, false),
			new Device("4:3 Monitor", "", "", 17, 276, 1280, 1600, 1, false),
			new Device("4:3 Monitor", "", "", 17, 276, 1344, 1792, 1, false),
			new Device("4:3 Monitor", "", "", 17, 276, 1392, 1856, 1, false),
			new Device("4:3 Monitor", "", "", 17, 276, 1440, 1800, 1, false),
			new Device("4:3 Monitor", "", "", 17, 276, 1440, 1920, 1, false),
			new Device("4:3 Monitor", "", "", 17, 276, 1920, 2560, 1, false),
			// HD
			new Device("Entry-level Monitor", "", "", 18.5, 216, 768, 1366, 1, false), // Panasonic BT-LH1850 // seems there are a lot of 15.6 portable screen
			new Device("Entry-level Monitor", "", "", 19.5, 216, 900, 1440, 1, false), // Lenovo 19.5" LED - ThinkVision E2054 
			new Device("Entry-level Monitor", "", "", 19.5, 216, 900, 1600, 1, false), // 3 19.5" models
			new Device("Entry-level Monitor", "", "", 22.0, 216, 1050, 1680, 1, false), // 2 22.0" models
			// Full HD
			new Device("Full HD Monitor", "", "", 24.0, 216, 1080, 1920, 1, false), // 50% 24" / 35-40% 27" (250 models)
			new Device("Full HD Monitor", "", "", 24.0, 216, 1200, 1920, 1, false), // 90% 24" (25 models)
			new Device("HD Ultra Wide Monitor", "", "", 29.5, 216, 1080, 2560, 1, false), // 29 29.5 30 34 no winner
			new Device("HD Ultra Wide Monitor", "", "", 49.0, 216, 1080, 3840, 2, false), // 100% 49" (4 models) 
			new Device("HD Ultra Wide Monitor", "", "", 43.4, 216, 1200, 3840, 2, false), // 100% 43.4" (3 models) 
			// 2,5K
			new Device("2,5K Monitor", "", "", 27.0, 216, 1440, 2560, 1, false), // 80% 27" / 10-15% 32" (150 models) // WQHD : Wide Quad HD:Dell UltraSharp U2711, Dell XPS One 27, Apple iMac
			new Device("2,5K Ultra Wide Monitor", "", "", 34.0, 216, 1440, 3440, 2, false), // 90% 34" / 10% 35" (50 models) 
			new Device("2,5K Ultra Wide Monitor", "", "", 49.0, 216, 1440, 5120, 2, false), // 100% 49" (6 models) 
			// 3K
			new Device("3K Monitor", "", "", 30.0, 216, 1600, 2560, 1, false), // WQXGA : Wide QXGA:Apple Cinema HD 30, Apple 13" MacBook Pro Retina Display, Dell Ultrasharp U3011, Dell 3007WFP, Dell 3008WFP, Gateway XHD3000, Samsung 305T, HP LP3065, HP ZR30W, Nexus 10 
			new Device("3K Ultra Wide Monitor", "", "", 37.5, 216, 1600, 3840, 1, false), // 2 37.5" // 3 38"
			// 4K
			new Device("4K Monitor", "", "", 27.0, 216, 2160, 3840, 1, false), // Acer S277HK (40% 27" / 10% 28" / 40% 32")
			new Device("4K Monitor", "", "", 31.0, 216, 2160, 4096, 1, false), // Panasonic BT-4LH310P
			new Device("4K Monitor", "", "", 21.5, 216, 2304, 4096, 1, false),
			new Device("4K Ultra Wide Monitor", "", "", 34.0, 216, 2160, 5120, 2, false), // 100% 2 models
			new Device("4.5K Monitor", "", "", 24.0, 216, 2520, 4480, 2, false), // iMac 24" Apple Silicon
			// And beyond
			new Device("5K Monitor", "", "", 27.0, 216, 2880, 5120, 2, false), // Dell UP2715K, LG Ultrafine 27, Apple 27" iMac 5K Retina Display 
			new Device("6K Monitor", "", "", 32.0, 216, 3384, 6016, 2, false), // Apple 32" Pro Display XDR[20] 6K Retina Display 
			new Device("8K Monitor", "", "", 31.5, 216, 4320, 7680, 2, false), // Dell UltraSharp UP3218K
			// Default
			new Device("Unknown Monitor", "", "", 21.5, 216, 1080, 1920, 0, false),
		]; 


	/*  ----------------------------------------
		 GENERIC COMPUTER (possibly a laptop, possibly not)
		---------------------------------------- */
		
		var lComputer = [
			// PARTICULAR CASES
				// Surface device (odd resolutions)
				new Device("Microsoft Surface Laptop Go", "", "", 12.4, 216, 1024, 1536, 2), // screen size ?
				new Device("Microsoft Surface Pro 3", "", "", 12.0, 216, 1440, 2160, 2),
				new Device("Microsoft Surface Pro", "", "", 12.3, 263, 1824, 2736, 2), // 1 et 4 et 7+ (12.5) (12.3) (12.3)
				new Device("Microsoft Surface Book 2", "", "", 15.0, 216, 2160, 3240, 2),
				new Device("Microsoft Surface Studio", "", "", 28.0, 216, 3000, 4500, 2),
				new Device("Microsoft Surface Laptop", "", "", 15.0, 216, 1664, 2496, 2),
				new Device("Microsoft Surface Pro X", "", "", 13.0, 216, 1920, 2880, 2),
				// Oldies
				new Device("Antic Laptop", "", "", 14.0, 96, 768, 1152, 2), // Apple PowerBook G4
				new Device("Antic Laptop", "", "", 14.0, 96, 854, 1280, 2), // Apple PowerBook G4
				new Device("Antic Laptop", "", "", 14.0, 96, 960, 1440, 2), // Apple PowerBook G4
				new Device("Antic Laptop", "", "", 8.0, 96, 768, 1600, 2), // Sony VAIO P series laptop
				// Cheap Devices
				new Device("Entry-level laptop", "", "", 14.0, 96, 640, 1138, 2), // HP Chromebook 14A G5
				new Device("Entry-level Laptop", "", "", 10.1, 149, 800, 1280, 2), // Dell tablet
			// ANTIC RESOLUTIONS = RE-USE OF AN OLD MONITOR (best bet)
				// Antic Monitors
				new Device("Antic Monitor", "", "", 15, 276, 480, 600, 1, false),
				new Device("Antic VGA Monitor", "", "", 15, 276, 480, 640, 1, false),
				new Device("Antic WVGA Monitor", "", "", 15, 276, 480, 768, 1, false),
				new Device("Antic WVGA Monitor", "", "", 15, 276, 480, 800, 1, false),
				new Device("Antic WPAL Monitor", "", "", 15, 276, 480, 848, 1, false),
				new Device("Antic PAL Monitor", "", "", 15, 276, 576, 1024, 1, false),
				new Device("Antic SVGA Monitor", "", "", 15, 276, 600, 800, 1, false),
				new Device("Antic SVGA Monitor", "", "", 15, 276, 624, 832, 1, false),
				new Device("Antic WSVGA Monitor", "", "", 15, 276, 600, 1024, 1, false),
				new Device("Antic WSVGA Monitor", "", "", 15, 276, 640, 1024, 1, false),
				new Device("Antic XGA Monitor", "", "", 15, 96, 768, 1024, 1, false),
				new Device("Antic XGA Monitor", "", "", 15, 96, 800, 1024, 1, false),
				new Device("Antic Apple XGA Monitor", "", "", 15, 96, 864, 1152, 1, false),
				new Device("Antic Sun XGA Monitor", "", "", 15, 96, 900, 1152, 1, false),
				new Device("Antic SXGA Monitor", "", "", 15, 96, 960, 1280, 1, false),
				new Device("Antic SXGA Monitor", "", "", 17, 96, 1024, 1280, 1, false), // 60% 17", 40% 19" LDLC
				new Device("Antic SXGA+ Monitor", "", "", 15, 96, 1050, 1400, 1, false),
				// 4:3 HD
				new Device("4:3 Monitor", "", "", 17, 276, 1080, 1440, 1, false),
				new Device("4:3 Monitor", "", "", 17, 276, 1200, 1600, 1, false),
				new Device("4:3 Monitor", "", "", 17, 276, 1280, 1600, 1, false),
				new Device("4:3 Monitor", "", "", 17, 276, 1344, 1792, 1, false),
				new Device("4:3 Monitor", "", "", 17, 276, 1392, 1856, 1, false),
				new Device("4:3 Monitor", "", "", 17, 276, 1440, 1800, 1, false),
				new Device("4:3 Monitor", "", "", 17, 276, 1440, 1920, 1, false),
				new Device("4:3 Monitor", "", "", 17, 276, 1920, 2560, 1, false),
			// BASIC RESOLUTION = LAPTOP
				// HD
				new Device("Entry-level Laptop", "", "", 14.0, 96, 720, 1152, 1),
				new Device("Entry-level Laptop", "", "", 14.0, 276, 720, 1280, 1), // 14
				new Device("Entry-level Laptop", "", "", 14.8, 276, 768, 1366, 1), // median 14 / 15.6
				new Device("Entry-level Laptop", "", "", 14.0, 276, 900, 1440, 1),
				new Device("Entry-level Laptop", "", "", 14.0, 130, 900, 1600, 1), // Representative ?
				new Device("Entry-level Laptop", "", "", 14.0, 276, 1000, 1776, 1),
				new Device("Entry-level Laptop", "", "", 14.0, 276, 1024, 1600, 1),
				new Device("Entry-level Laptop", "", "", 14.0, 276, 1050, 1680, 1),
				// Full HD
				new Device("Full HD Laptop", "", "", 15.6, 276, 1080, 1920, 1), // 15.6 -> 75% of models
				new Device("Full HD Laptop", "", "", 14.0, 276, 1152, 2048, 1), // 14 ???
				new Device("Full HD Laptop", "", "", 13.3, 276, 1200, 1920, 1), // 13.3 / 17.3 (too small reference population)
				new Device("Full HD Laptop", "", "", 10.5, 276, 1280, 1920, 1), // only found 10.5 so ...
				new Device("Full HD Laptop", "", "", 14.0, 276, 1280, 2048, 1), // 14 ???
				// 2K - 2.5K
				new Device("2K Laptop", "", "", 13.3, 276, 1080, 2048, 1),
				new Device("2.5K Laptop", "", "", 14.8, 276, 1440, 2560, 1), // median 14 / 15.6 (too small reference population)
				new Device("2.5K Laptop", "", "", 14.0, 276, 1440, 2304, 1), // 14 ???
				new Device("2.5K Laptop", "", "", 13.3, 276, 1350, 2160, 1), // Lenovo Thinkpad x1 Nano
				new Device("2.5K Laptop", "", "", 13.3, 276, 1536, 2048, 1), // Lenovo Thinkpad x1 Fold
				new Device("2.5K Laptop", "", "", 13.3, 216, 1504, 2256, 1), // Surface
				new Device("2.5K Laptop", "", "", 15.6, 216, 1600, 2560, 1), // MacBook 13 retina, else : 14.5, 16, 17.3, ... too many res to conclude
				new Device("2.5K Laptop", "", "", 15.6, 216, 1620, 2880, 1), // Lenovo Thinkpad W541 
				new Device("2.5K Laptop", "", "", 12.85, 216, 1700, 2560, 1), // Chromebook Pixel only
				new Device("2.5K Laptop", "", "", 10.2, 216, 1800, 2560, 1), // Pixel C only
				new Device("2.5K Laptop", "", "", 15.4, 216, 1800, 2880, 1), // Macbook 15 retina
				new Device("2.5K Laptop", "", "", 14.0, 216, 1800, 3200, 1), // Wide QXGA+ : HP Envy TouchSmart 14, Fujitsu Lifebook UH90/L, Lenovo Yoga 2 Pro 
				new Device("2.5K Laptop", "", "", 15.6, 216, 2048, 2560, 1), // QSXGA
				new Device("2.5K Laptop", "", "", 12.9, 216, 2048, 2732, 1), // iPad Pro 12.9" 
			// UHD AND WIDE RESOLUTION = MONITOR
				// HD
				new Device("HD Ultra Wide Monitor", "", "", 29.5, 216, 1080, 2560, 1, false), // 29 29.5 30 34 no winner
				new Device("HD Ultra Wide Monitor", "", "", 49.0, 216, 1080, 3840, 2, false), // 100% 49" (4 models) 
				new Device("HD Ultra Wide Monitor", "", "", 43.4, 216, 1200, 3840, 2, false), // 100% 43.4" (3 models) 
				// 2,5K
				new Device("2,5K Ultra Wide Monitor", "", "", 34.0, 216, 1440, 3440, 2, false), // 90% 34" / 10% 35" (50 models) 
				new Device("2,5K Ultra Wide Monitor", "", "", 49.0, 216, 1440, 5120, 2, false), // 100% 49" (6 models) 
				// 3K
				new Device("3K Monitor", "", "", 30.0, 216, 1600, 2560, 1, false), // WQXGA : Wide QXGA:Apple Cinema HD 30, Apple 13" MacBook Pro Retina Display, Dell Ultrasharp U3011, Dell 3007WFP, Dell 3008WFP, Gateway XHD3000, Samsung 305T, HP LP3065, HP ZR30W, Nexus 10 
				new Device("3K Ultra Wide Monitor", "", "", 37.5, 216, 1600, 3840, 1, false), // 2 37.5" // 3 38"
				// 4K
				new Device("4K Monitor", "", "", 27.0, 216, 2160, 3840, 1, false), // Acer S277HK (40% 27" / 10% 28" / 40% 32")
				new Device("4K Monitor", "", "", 31.0, 216, 2160, 4096, 1, false), // Panasonic BT-4LH310P
				new Device("4K Monitor", "", "", 21.5, 216, 2304, 4096, 1, false),
				new Device("4K Ultra Wide Monitor", "", "", 34.0, 216, 2160, 5120, 2, false), // 100% 2 models
				new Device("4.5K Monitor", "", "", 24.0, 216, 2520, 4480, 2, false), // iMac 24" Apple Silicon
				// And beyond
				new Device("5K Monitor", "", "", 27.0, 216, 2880, 5120, 2, false), // Dell UP2715K, LG Ultrafine 27, Apple 27" iMac 5K Retina Display 
				new Device("6K Monitor", "", "", 32.0, 216, 3384, 6016, 2, false), // Apple 32" Pro Display XDR[20] 6K Retina Display 
				new Device("8K Monitor", "", "", 31.5, 216, 4320, 7680, 2, false), // Dell UltraSharp UP3218K
			// DEFAULT = basic monitor
				new Device("Unknown Device", "", "", 21.5, 216, 1080, 1920, 0, false),
		]; 

/*  =========================================================================
	 UNIQUE DEVICES (Identification by user agent)
	========================================================================= */

		var lUserAgentDetectable = [
			// CHROMEBOOK -> https://en.wikipedia.org/wiki/List_of_Chromebooks
			new Device("ASUS Chromebook Flip C100", "ASUS Chromebook Flip C100PA", "", 10.1, 149, 800, 1280),
			new Device("ASUS Chromebook Flip C101", "ASUS Chromebook Flip C101PA", "", 10.1, 149, 800, 1280),
			new Device("Acer Chromebook R11", "Acer Chromebook R11", "", 11.6, 135, 768, 1366),
			new Device("Acer Chromebook 15", "Chromebook 15 (CB3-531", "", 15.6, 100, 768, 1366),
			new Device("Acer Chromebook 15", "Chromebook 15 CB515", "", 15.6, 100, 768, 1366),
			new Device("ASUS Chromebook C201", "ASUS Chromebook C201PA", "", 11.6, 135, 768, 1366),
			new Device("ASUS Chromebook C202", "ASUS Chromebook C202SA", "", 11.6, 135, 768, 1366),
			new Device("ASUS Chromebook C213", "ASUS Chromebook C213NA", "", 11.6, 135, 768, 1366),
			new Device("ASUS Chromebook C300", "ASUS Chromebook C300", "", 13.3, 112, 768, 1366),
			new Device("Dell Latitude 5400", "Dell Latitude 5400", "", 14, 112, 768, 1366),
			new Device("Dell Chromebook 11", "Dell Chromebook 11", "", 11.6, 135, 768, 1366),
			new Device("Dell Chromebook 11", "Chromebook 11 Model 3180", "", 11.6, 135, 768, 1366),
			new Device("HP Chromebook 11", "HP Chromebook 11", "", 11.6, 135, 768, 1366),
			new Device("Lenovo N23 Yoga", "Lenovo N23 Yoga", "", 11.6, 135, 768, 1366),
			new Device("Lenovo Chromebook N22/N23", "Lenovo Intel Braswell Chromebook", "", 11.6, 135, 768, 1366),
			new Device("Lenovo ThinkPad 11e", "Lenovo ThinkPad 11e", "", 11.6, 135, 768, 1366),
			new Device("Samsung Chromebook 3", "Samsung Chromebook 3", "", 11.6, 135, 768, 1366),
			new Device("Acer Chromebook R13", "Acer Chromebook R13", "", 13.3, 165, 1080, 1920),
			new Device("Dell Chromebook 13", "Dell Chromebook 13", "", 13.3, 165, 1080, 1920),
			new Device("HP Chromebook x360", "HP Chromebook x360", "", 14, 157, 1080, 1920),
			new Device("Acer Chromebook 14", "Chromebook 14", "", 14.0, 157, 1080, 1920),
			new Device("Chromebook Flip C302", "Chromebook Flip C302", "", 12.5, 176, 1080, 1920),
			new Device("Toshiba Chromebook 2", "Toshiba Chromebook 2", "", 13.0, 169, 1080, 1920),
			new Device("HP Chromebook x2", "HP Chromebook x2", "", 12.3, 238, 1440, 2560),
			new Device("Samsung Chromebook Plus", "Samsung Chromebook Plus", "", 12.3, 235, 1600, 2400),
			new Device("Samsung Chromebook Pro", "Samsung Chromebook Pro", "", 12.3, 235, 1600, 2400),
			new Device("Pixel Slate", "Google Pixel Slate", "", 12.3, 293, 2000, 3000),
			// KINDLE
			new Device("Kindle Fire 7", "Kindle Fire", "", 7.0, 170, 600, 1024),
			new Device("Kindle Fire 6", "KFARWI", "", 6.0, 198, 600, 1024),
			new Device("Kindle Fire 7", "KFAUWI", "", 7.0, 170, 600, 1024),
			new Device("Kindle Fire HD 7", "KFOT", "", 7.0, 170, 600, 1024),
			new Device("Kindle Fire HD 7", "KFFOWI", "", 7.0, 170, 600, 1024),
			new Device("Kindle Fire HD 7", "KFMUWI", "", 7.0, 170, 600, 1024),
			new Device("Kindle Fire HD 7", "KFTT", "", 7.0, 216, 800, 1280),
			new Device("Kindle Fire HD 7", "TATE", "", 7.0, 216, 800, 1280),
			new Device("Kindle Fire HD 7", "KFASWI", "", 7.0, 216, 800, 1280),
			new Device("Kindle Fire HD 7", "KFSOWI", "", 7.0, 216, 800, 1280),
			new Device("Kindle Fire HDX 7", "KFTHWA", "", 7.0, 323, 1200, 1920),
			new Device("Kindle Fire HDX 7", "KFTHWI", "", 7.0, 323, 1200, 1920),
			new Device("Kindle Fire HD 8", "KFDOWI", "", 8.0, 189, 800, 1280),
			new Device("Kindle Fire HD 8", "KFGIWI", "", 8.0, 189, 800, 1280),
			new Device("Kindle Fire HD 8", "KFKAWI", "", 8.0, 189, 800, 1280),
			new Device("Kindle Fire HD 8", "KFMEWI", "", 8.0, 189, 800, 1280),
			new Device("Kindle Fire HD 8.9", "JEM", "", 8.9, 248, 1080, 1920),
			new Device("Kindle Fire HD 8.9", "KFJWA", "", 8.9, 248, 1080, 1920),
			new Device("Kindle Fire HD 8.9", "KFJWI", "", 8.9, 248, 1080, 1920),
			new Device("Kindle Fire HDX 8.9", "KFAPWA", "", 8.9, 339, 1600, 2560),
			new Device("Kindle Fire HDX 8.9", "KFAPWI", "", 8.9, 339, 1600, 2560),
			new Device("Kindle Fire HDX 8.9", "KFSAWA", "", 8.9, 339, 1600, 2560),
			new Device("Kindle Fire HD 10", "KFSUWI", "", 10.1, 224, 1200, 1920),
			new Device("Kindle Fire HD 10", "KFTBWI", "", 10.1, 149, 800, 1280),
			new Device("Amazon Fire Phone", "SD4930UR", "", 4.7, 224, 312, 1280),
				// NOTE : Unknow kindle = KF****
			// ANDROID TABLET
			new Device("Allview 2 Speed Quad", "Allview 2 Speed QUAD", "", 8.0, 160, 768, 1024),
			new Device("Allview Viva H7", "VivaH7", "", 7.0, 170, 600, 1024),
			new Device("Acer Iconia Tab 7", "B1-A71 Build", "", 7.0, 170, 600, 1024),
			new Device("Acer Iconia Tab 10", "A3-A20FHD Build", "", 10.1, 224, 1200, 1920),
			new Device("Acer SmartDisplay", "DA220HQL Build", "", 21.5, 102, 1080, 1920),
			new Device("Ainol Novo 9", "novo9-Spark", "", 9.7, 102, 1536, 2048),
			new Device("Archos 70 Xenon", "Archos 70 Xenon", "", 7.0, 170, 600, 1024),
			new Device("Archos 70c Cobalt", "Archos 70c Cobalt", "", 7.0, 170, 600, 1024),
			new Device("Archos 80b Xenon", "Archos 80b Xenon", "", 8.0, 189, 800, 1280),
			new Device("Archos 90 Neon", "Archos 90 Neon", "", 9.0, 104, 480, 800),
			new Device("Archos 90 Neon", "Archos 90b Neon", "", 9.0, 132, 600, 1024),
			new Device("Archos 101 Copper", "Archos 101 Copper", "", 10.1, 118, 600, 1024),
			new Device("Arnova 7", "ARNOVA 7", "", 7.0, 133, 480, 800),
			new Device("Arnova 8", "ARNOVA 8", "", 8.0, 125, 600, 800),
			new Device("Arnova 9", "ARNOVA 9", "", 9.7, 132, 768, 1024),
			new Device("Arnova 10.1", "ARNOVA 101", "", 10.1, 118, 600, 1024),
			new Device("Aquaris E10", "Aquaris E10", "", 10.1, 224, 1200, 1920),
			new Device("Asus Transformer Pad TF502T", "Transformer Pad TF502T", "", 10.1, 155, 768, 1366),
			new Device("Asus Transformer TF101", "Transformer TF101", "", 10.1, 149, 800, 1280),
			new Device("Asus Transformer TF101G", "Transformer TF101G", "", 10.1, 149, 800, 1280),
			new Device("Asus Transformer Prime TF201", "Transformer Prime TF201", "", 10.1, 149, 800, 1280),
			new Device("ASUS Transformer TF300T", "Transformer TF300T", "", 10.1, 149, 800, 1280),
			new Device("ASUS Transformer Pad TF300T", "Transformer Pad TF300T", "", 10.1, 149, 800, 1280),
			new Device("ASUS Transformer TF300TG", "Transformer TF300TG", "", 10.1, 149, 800, 1280),
			new Device("ASUS Transformer Pad TF300TG", "Transformer Pad TF300TG", "", 10.1, 149, 800, 1280),
			new Device("ASUS Transformer TF300TL", "Transformer TF300TL", "", 10.1, 149, 800, 1280),
			new Device("ASUS Transformer Pad TF300TL", "Transformer Pad TF300TL", "", 10.1, 149, 800, 1280),
			new Device("ASUS Transformer Pad TF103C", "transformer pad tf103c", "", 10.1, 149, 800, 1280),
			new Device("Asus Transformer Pad Infinity TF700T", "TF700T", "", 10.1, 224, 1200, 1920),
			new Device("Asus Transformer Pad Infinity TF700KL", "TF700KL", "", 10.1, 224, 1200, 1920),
			new Device("Asus Transformer Pad TF303CL", "transformer pad tf303cl", "", 10.1, 224, 1200, 1920),
			new Device("Asus FonePad", "ASUS K00S", "", 7.0, 216, 800, 1280),
			new Device("Asus FonePad", "ME371MG", "", 7.0, 216, 800, 1280),
			new Device("Asus MeMo Pad HD7", "ME173X", "", 7.0, 216, 800, 1280),
			new Device("Asus Memo Pad FHD", "ME302C", "", 10.1, 224, 1200, 1920),
			// Asus ZenPad
			new Device("Avvio Pad", "Avvio_PAD10.1", "", 10.1, 149, 800, 1280),
			new Device("BQ Edison 2", "Edison 2 Quad Core", "", 10.1, 149, 800, 1280),
			new Device("BQ Edison 3", "Edison 3", "", 10.1, 149, 800, 1280),
			new Device("BQ Elcano", "bq Elcano Build", "", 10.1, 149, 800, 1280),
			new Device("BQ Maxwell Lite", "Maxwell Lite", "", 7.0, 170, 600, 1024),
			new Device("Cherry Mobility tablet", "nl; PC1038", "", 10.1, 118, 600, 1024),
			new Device("Condor CTAB785R16", "CTAB785R16", "", 7.0, 183, 768, 1024),
			new Device("Dell Streak 7", "Dell Streak 7", "", 7.0, 133, 480, 800),
			new Device("Dell Streak 8", "Venue 8", "", 8.0, 189, 800, 1280),
			new Device("Dell Venue 11", "Venue 11", "", 10.8, 204, 1080, 1920),
			new Device("Dex IP977", "iP977 Build/iP977", "", 9.7, 264, 1536, 2048),
			new Device("Digiland DL 7", "DL700D Build", "", 7.0, 133, 480, 800),
			new Device("EasyPad 970", "EasyPad 970", "", 9.7, 132, 768, 1024), // à pousser car dispo en France
			new Device("Empire M785", "TM785M3", "", 7.0, 170, 600, 1024),
			new Device("Digiflip XT811", "XT811 Build/XT811", "", 8.0, 180, 800, 1200),
			new Device("Digiflip XT911", "XT911 Build/XT911", "", 8.9, 248, 1080, 1920),
			new Device("Flytouch 7", "BC1003 Build", "", 10.1, 118, 600, 1024),
			new Device("Fujitsu F-01D", "F-01D Build", "", 10.1, 149, 800, 1280), // à approfondir meme si compliqué
			new Device("HCL ME Connect V3", "Connect-V3 Build/HCL", "", 7.0, 133, 480, 800),
			// HUAWEI TABLET (credible model or verified id only)
				// Modern MatePad
			new Device("Huawei MatePad Pro 12.6 (2021)", "WGR-W09", "", 12.6, 240, 1600, 2560),
			new Device("Huawei MatePad Pro 12.6 (2021)", "WGR-W19", "", 12.6, 240, 1600, 2560),
			new Device("Huawei MatePad Pro 12.6 (2021)", "WGR-AN19", "", 12.6, 240, 1600, 2560),
			new Device("Huawei MatePad Pro 10.8 (2021)", "MRR-W29", "", 10.8, 280, 1600, 2560),
			//new Device("Huawei MatePad Pro 10.8 5G (2019)", "SCMR-AL00", "", 10.8, 280, 1600, 2560),
			new Device("Huawei MatePad 10.8 (2020)", "SCMR-W09", "", 10.8, 280, 1600, 2560),
			new Device("Huawei MatePad 10.8 (2020)", "SCMR-AL00", "", 10.8, 280, 1600, 2560),
			new Device("Huawei MatePad 10.8 (2019)", "MRX-AL09", "", 10.8, 280, 1600, 2560),
			new Device("Huawei MatePad 10.8 (2019)", "MRX-AL19", "", 10.8, 280, 1600, 2560),
			new Device("Huawei MatePad 10.8 (2019)", "MRX-W09", "", 10.8, 280, 1600, 2560),
			new Device("Huawei MatePad 10.8 (2019)", "MRX-W19", "", 10.8, 280, 1600, 2560),
			new Device("Huawei MatePad 5G", "BAH3-AN10", "", 10.4, 280, 1200, 2000),
			new Device("Huawei MatePad", "BAH3-W09", "", 10.4, 280, 1200, 2000),
			new Device("Huawei MatePad", "BAH3-AL00", "", 10.4, 280, 1200, 2000),
			new Device("Huawei MatePad", "BAH3-L09", "", 10.4, 280, 1200, 2000),
			// new Device("Huawei MatePad Pro 11 (2021)", "MRR-W29", "", 10.8, 280, 1600, 2560),
			new Device("Huawei Enjoy Tablet 2", "AGS3-W00D", "", 10.1, 224, 1200, 1920),
				// Series M
			//new Device("Huawei MatePad M6 10.8", "MRX-W19", "", 10.8, 280, 1600, 2560),
			new Device("Huawei MatePad M6 Turbo 8.4", "VRD-AL10", "", 8.4, 359, 1600, 2560),
			new Device("Huawei MatePad M6 Turbo 8.4", "VRD-W10", "", 8.4, 359, 1600, 2560),
			new Device("Huawei MatePad M6 Turbo 8.4", "VRD-W09", "", 8.4, 359, 1600, 2560),
			//new Device("Huawei MatePad M6 8.4", "VRD-W09", "", 8.4, 359, 1600, 2560),
			new Device("Huawei MediaPad M5 Pro 10.8", "CMR-AL19", "", 10.8, 280, 1600, 2560),
			new Device("Huawei MediaPad M5 Pro 10.8", "CMR-W19", "", 10.8, 280, 1600, 2560),
			new Device("Huawei MediaPad M5 10.8", "CMR-AL09", "", 10.8, 280, 1600, 2560),
			new Device("Huawei MediaPad M5 10.8", "CMR-W09", "", 10.8, 280, 1600, 2560),
			new Device("Huawei MediaPad M5 lite", "BAH2-L09", "", 10.1, 224, 1200, 1920),
			new Device("Huawei MediaPad M5 lite", "BAH2-W09", "", 10.1, 224, 1200, 1920),
			new Device("Huawei MediaPad M5 lite", "BAH2-W19", "", 10.1, 224, 1200, 1920),
			new Device("Huawei MediaPad M5 8", "SHT-AL09", "", 8.4, 359, 1600, 2560),
			new Device("Huawei MediaPad M5 8", "SHT-W09", "", 8.4, 359, 1600, 2560),
			new Device("Huawei MediaPad M5 Lite 8", "JDN2-L09", "", 8.0, 283, 1200, 1920),
			new Device("Huawei MediaPad M3 Lite 10", "Bach-L09", "", 10.1, 224, 1200, 1920),
			new Device("Huawei MediaPad M3 Lite 10", "Bach-W09", "", 10.1, 224, 1200, 1920),
			new Device("Huawei MediaPad M3 8.4", "BTV-DL09", "", 8.4, 359, 1600, 2560),
			new Device("Huawei MediaPad M3 8.4", "BTV-W09", "", 8.4, 359, 1600, 2560),
			new Device("Huawei MediaPad M3 Lite 8", "CPN-AL00", "", 8.0, 283, 1200, 1920),
			new Device("Huawei MediaPad M3 Lite 8", "CPN-W09", "", 8.0, 283, 1200, 1920),
			new Device("Huawei MediaPad M3 Lite 8", "CPN-L09", "", 8.0, 283, 1200, 1920),
			new Device("Huawei MediaPad M2 10.1", "M2-A01W", "", 10.1, 224, 1200, 1920),
			new Device("Huawei MediaPad M2 10.1", "M2-A01L", "", 10.1, 224, 1200, 1920),
			new Device("Huawei MediaPad M2 8.0", "M2-801L", "", 8.0, 283, 1200, 1920),
			//new Device("Huawei MediaPad M2 7.0", "FDR-A01L", "", 7.0, 323, 1200, 1920),
				// Series T
			new Device("Huawei MatePad T 10S", "AGS3-L09", "", 10.1, 224, 1200, 1920),
			new Device("Huawei MatePad T 10S", "AGS3-W09", "", 10.1, 224, 1200, 1920),
			new Device("Huawei MediaPad T5", "AGS2-W09", "", 10.1, 224, 1200, 1920),
			new Device("Huawei MediaPad T5", "AGS2-W19", "", 10.1, 224, 1200, 1920),
			new Device("Huawei MediaPad T5", "AGS2-L09", "", 10.1, 224, 1200, 1920),
			new Device("Huawei MediaPad T3 10", "AGS-W09", "", 9.6, 157, 800, 1280),
			new Device("Huawei MediaPad T3 10", "AGS-L09", "", 9.6, 157, 800, 1280),
			new Device("Huawei MediaPad T3 10", "AGS-L03", "", 9.6, 157, 800, 1280),
			new Device("Huawei MediaPad T3 8.0", "KOB-L09", "", 8.0, 189, 800, 1280),
			new Device("Huawei MediaPad T3 8.0", "KOB-W09", "", 8.0, 189, 800, 1280),
			new Device("Huawei MediaPad T3 7.0", "BG2-U01", "", 7.0, 170, 600, 1024),
			new Device("Huawei MediaPad T3 7.0", "BG2-W09", "", 7.0, 170, 600, 1024),
			new Device("Huawei MediaPad T3 7.0", "BG2-U03", "", 7.0, 170, 600, 1024),
			new Device("Huawei MediaPad T2 10.0 Pro", "FDR-A01L", "", 10.0, 226, 1200, 1920),
			new Device("Huawei MediaPad T2 10.0 Pro", "FDR-A03L", "", 10.0, 226, 1200, 1920),
			new Device("Huawei MediaPad T2 10.0 Pro", "FDR-A04L", "", 10.0, 226, 1200, 1920),
			new Device("Huawei MediaPad T2 Pro 7.0", "PLE-701L", "", 7.0, 315, 1080, 1920),
			new Device("Huawei MediaPad T2 Pro 7.0", "PLE-703L", "", 7.0, 315, 1080, 1920),
			new Device("Huawei MediaPad T2 7.0", "BGO-DL09", "", 7.0, 170, 600, 1024),
			new Device("Huawei MediaPad T2 7.0", "BGO-L03", "", 7.0, 170, 600, 1024),
			new Device("Huawei MediaPad T1 Plus 7.0", "T1-701ua", "", 7.0, 170, 600, 1024),
			new Device("Huawei MediaPad T1 Plus 7.0", "T1-701u", "", 7.0, 170, 600, 1024),
			//new Device("Huawei MediaPad T1 7.0", "T1-701ua", "", 7.0, 170, 600, 1024),
			new Device("Huawei MediaPad T1 10", "T1-A21L", "", 9.6, 157, 800, 1280),
			//new Device("Huawei MediaPad T1 8", "T1-A21L", "", 8.0, 188, 800, 1280),
				// Series X
			new Device("Huawei MediaPad X2", "GEM-703L", "", 7.0, 323, 1200, 1920),
			new Device("Huawei MediaPad X2", "GEM-702L", "", 7.0, 323, 1200, 1920),
			new Device("Huawei MediaPad X2", "GEM-701L", "", 7.0, 323, 1200, 1920),
				// Old ones
			new Device("Huawei EE Eagle", "Eagle Build", "", 8.0, 180, 800, 1200),
			new Device("Huawei EE Eagle", "Eagle_4G Build", "", 8.0, 180, 800, 1200),
			new Device("Huawei MediaPad 7", "MediaPad 7 Youth", "", 7.0, 170, 600, 1024),
			new Device("Huawei MediaPad 7", "MediaPad 7 Lite II", "", 7.0, 170, 600, 1024),
			new Device("Huawei MediaPad 10", "MediaPad 10 LINK", "", 10.1, 143, 800, 1200),
			new Device("Huawei MediaPad M1", "MediaPad M1 8.0", "", 8.0, 180, 800, 1200),
			// LENOVO
				// Old Lenovo Tablets
			new Device("Lenovo S5000", "Lenovo S5000", "", 7.0, 216, 800, 1280),
			new Device("Lenovo IdeaPad A1", "; A1_07 Build", "", 7.0, 170, 600, 1024),
			new Device("Lenovo IdeaTab S6000H", "IdeaTab S6000-H", "", 10.1, 149, 800, 1280),
			new Device("Lenovo IdeaPad K1", "Ideapad K1", "", 10.1, 149, 800, 1280),
			new Device("Lenovo IdeaPad K1", "; K1 Build", "", 10.1, 149, 800, 1280),
			new Device("Lenovo IdeaPad S2", "Ideapad S2", "", 10.0, 151, 800, 1280), // experimental
			new Device("Lenovo IdeaPad S2", "; S2 Build", "", 10.0, 151, 800, 1280), // experimental
			// Lenovo LePad S2010
			// Lenovo LePad S2007
				// Lenovo Pad
			// Lenovo Yoga Smart Tab - ZA540019IN - https://www.gsmarena.com/lenovo_yoga_smart_tab-9959.php
			new Device("Lenovo Yoga Tablet 2 Pro", "YOGA Tablet 2 Pro", "", 13.3, 221, 1440, 2560),
			new Device("Lenovo Yoga Pad Pro", "YT-K606", "", 13.0, 221, 1350, 2160), // experimental (F)
			new Device("Lenovo Pad Pro", "TB-J716", "", 11.5, 263, 1600, 2560), // experimental (F)
			new Device("Lenovo Pad Plus", "TB-J607", "", 11.0, 212, 1200, 2000), // experimental (F)
			new Device("Lenovo Pad", "TB-J606", "", 11.0, 212, 1200, 2000), // experimental (F)
				// P Series
			new Device("Lenovo Tab P11 Pro", "TB-J706", "", 11.5, 263, 1600, 2560), // experimental (F)
			new Device("Lenovo Tab P11", "TB-J606", "", 11.0, 212, 1200, 2000), // experimental (F)
				// A Series
			new Device("Lenovo A10-70 A7600", "Lenovo A7600", "", 10.1, 149, 800, 1280), // experimental https://github.com/matomo-org/device-detector/blob/master/regexes/device/mobiles.yml
			new Device("Lenovo A8-50 A5500", "Lenovo A5500", "", 8.0, 189, 800, 1280),
			new Device("Lenovo A7-50 A3500", "Lenovo A3500", "", 7.0, 216, 800, 1280),
			new Device("Lenovo A7-30 A3300", "Lenovo A3500", "", 7.0, 170, 600, 1024),
				// Yoga Series
			new Device("Lenovo Yoga Tab 3 Plus", "YT-X703", "", 10.1, 299, 1600, 2560), // experimental
			new Device("Lenovo Yoga Tab 3 Plus", "YT-X703F", "", 10.1, 299, 1600, 2560),
			new Device("Lenovo Yoga Tab 3 Pro", "YT3-X90F", "", 10.1, 299, 1600, 2560),
			new Device("Lenovo Yoga Tablet 2 10.1", "YOGA Tablet 2-1050", "", 10.1, 224, 1200, 1920),
			new Device("Lenovo Yoga Tablet 2 8.0", "YOGA Tablet 2-830", "", 8.0, 283, 1200, 1920),
			new Device("Lenovo Yoga Tablet 10 HD+", "Lenovo B8080", "", 10.1, 224, 1200, 1920),
			new Device("Lenovo Yoga Tablet 10", "Lenovo B8000", "", 10.1, 224, 1200, 1920), // experimental https://github.com/matomo-org/device-detector/blob/master/regexes/device/mobiles.yml
			new Device("Lenovo Yoga Tablet 8", "Lenovo B6000", "", 8.0, 189, 800, 1280),
				// M Series
			new Device("Lenovo M10 Plus", "TB-X606", "", 10.3, 220, 1200, 1920), // experimental ("", F)
			new Device("Lenovo Tab M10 HD Gen 2", "TB-X306", "", 10.1, 149, 800, 1280), // experimental (F, ZA6W0066SE)
			new Device("Lenovo M10 FHD REL", "TB-X605", "", 10.1, 224, 1200, 1920), // experimental (FC, LC, ZA4Y0079IN)
			//new Device("Lenovo Tab M8 (HD)", "TB-8505", "", 8.0, 283, 1200, 1920), // no model found
			new Device("Lenovo Tab M8", "TB-8505", "", 8.0, 189, 800, 1280), // experimental (F, FS, X)
			new Device("Lenovo Tab M7", "TB-7305", "", 7.0, 170, 600, 1024), // experimental (F, X)
				// Tab Series
			new Device("Lenovo Moto Tab", "TB-X704A", "", 10.1, 224, 1200, 1920), // weird, similar to Lenovo Tab4 10 Plus
			new Device("Lenovo Tab4 10 Plus", "TB-X704", "", 10.1, 224, 1200, 1920), // experimental (F, L)
			new Device("Lenovo Tab4 10", "TB-X304", "", 10.1, 149, 800, 1280), // experimental (F, L)
			new Device("Lenovo Tab4 8 Plus", "TB-8704", "", 8.0, 283, 1200, 1920), // experimental (F, X)
			new Device("Lenovo Tab4 8", "TB-8504", "", 8.0, 189, 800, 1280), // experimental (F, X)
			new Device("Lenovo Tab3 10", "TB3-X70L", "", 10.1, 224, 1200, 1920), // experimental
			new Device("Lenovo Tab3 10", "TB3-X70L", "", 10.1, 224, 1200, 1920), // todo : probably insufficient
			new Device("Lenovo Tab3 8 Plus", "TB-8703", "", 8.0, 283, 1200, 1920), // experimental (F, X)
			new Device("Lenovo Tab3 8", "TB3-850", "", 8.0, 189, 800, 1280), // experimental
			new Device("Lenovo Tab3 8", "TB3-850F", "", 8.0, 189, 800, 1280),
			new Device("Lenovo Tab3 8", "TB3-850M", "", 8.0, 189, 800, 1280),
			new Device("Lenovo Tab3 7", "; TB3-710I", "", 7.0, 170, 600, 1024),
			new Device("Lenovo Tab3 7", "; TB-7703X", "", 7.0, 170, 600, 1024),
			new Device("Lenovo Tab3 7", "; TB3-730X", "", 7.0, 170, 600, 1024),
			new Device("Lenovo Tab3 7", "; TB3-710F", "", 7.0, 170, 600, 1024),
			new Device("Lenovo Tab 2 A10-70", "Lenovo Tab 2 A10-70", "", 10.1, 224, 1200, 1920),
			new Device("Lenovo Tab 2 A7-30", "Lenovo Tab 2 A7-30", "", 7.0, 170, 600, 1024),
			new Device("Lenovo Tab 2 A7-20", "Lenovo Tab 2 A7-20", "", 7.0, 170, 600, 1024),
			new Device("Lenovo Tab 2 A7-10", "Lenovo Tab 2 A7-10", "", 7.0, 170, 600, 1024),
			new Device("Lenovo Tab 7", "TB-7504", "", 7.0, 210, 720, 1280), // experimental (F, X)
			new Device("Lenovo Tab 7 Essential", "TB-7304", "", 7.0, 170, 600, 1024), // experimental

	









			// NOOK
			new Device("Nook Color", "NOOK BNRV200", "", 7.0, 170, 600, 1024),
			new Device("Nook Color", "NookColor", "", 7.0, 170, 600, 1024),
			new Device("Nook 7", "NOOK BNTV250", "", 7.0, 170, 600, 1024),
			new Device("Nook HD", "BN NookHD)", "", 7.0, 243, 900, 1440),
			new Device("Nook HD", "BN NookHD", "", 7.0, 243, 900, 1440),
			new Device("Nook HD+", "BN NookHD+", "", 8.9, 248, 1080, 1920),
			new Device("Nook HD+", "NOOK BNTV600", "", 8.9, 248, 1080, 1920),
			new Device("Nook 10.1", "BNTV650", "", 10.1, 224, 1200, 1920),
			// HP
			new Device("HP 7", "HP 7 Build", "", 7.0, 216, 800, 1280),
			new Device("HP 7", "HP 7 G2 Build", "", 7.0, 216, 800, 1280),
			new Device("HP Slate 7 Plus", "HP 7 Plus", "", 7.0, 216, 800, 1280),
			new Device("HP Slate 10", "HP Slate 10 HD", "", 10.2, 149, 800, 1280),
			new Device("HP Slate 21 Pro", "Slate 21 Pro", "", 21.5, 102, 1080, 1920),
			new Device("HP SlateBook 14", "HP SlateBook 14", "", 14, 157, 1080, 1920),
			new Device("HP TouchPad", "TouchPad Build", "", 21.5, 102, 1080, 1920),
			// HTC
			new Device("HTC Flyer", "HTC Flyer", "", 7.0, 170, 600, 1024),
			// GOOGLE
			new Device("Nexus 7", "Nexus 7", "", 7.0, 323, 1200, 1920),
			new Device("Nexus 9", "Nexus 10", "", 8.9, 288, 1536, 2048),
			new Device("Nexus 10", "Nexus 10", "", 10.1, 299, 1600, 2560),
			new Device("Pixel C", "Pixel C Build", "", 10.2, 301, 1700, 2560),
			// XIAOMI
			new Device("Xiaomi Mi Pad", "MI PAD Build", "", 7.9, 320, 1536, 2048),
			new Device("Xiaomi Mi Pad 2", "MI PAD 2", "", 7.9, 320, 1536, 2048),
			new Device("Xiaomi Mi Pad 3", "MI PAD 3", "", 7.9, 320, 1536, 2048),
			new Device("Xiaomi Mi Pad 4", "MI PAD 4 Build", "", 8.0, 275, 1200, 1920),
			new Device("Xiaomi Mi Pad 4 Plus", "MI PAD 4 PLUS", "", 10.1, 224, 1200, 1920),
			// SAMSUNG TABLETS
				// Old Galaxy Tab
			new Device("Samsung Galaxy Tab 7.0", "GT-P1000", "", 7.0, 170, 600, 1024),
			new Device("Samsung Galaxy Tab 7.0", "GT-P1010", "", 7.0, 170, 600, 1024),
			new Device("Samsung Galaxy Tab 7.0", "SGH-T849", "", 7.0, 170, 600, 1024),
			new Device("Samsung Galaxy Tab 7.0", "SCH-I800", "", 7.0, 170, 600, 1024),
			new Device("Samsung Galaxy Tab 2 7.0", "GT-P3100", "", 7.0, 170, 600, 1024),
			new Device("Samsung Galaxy Tab 2 7.0", "GT-P3110", "", 7.0, 170, 600, 1024),
			new Device("Samsung Galaxy Tab 2 7.0", "SCH-I705", "", 7.0, 170, 600, 1024),
			new Device("Samsung Galaxy Tab 3 7.0", "SM-T210", "", 7.0, 170, 600, 1024),
			new Device("Samsung Galaxy Tab 3 7.0", "SM-T211", "", 7.0, 170, 600, 1024),
			new Device("Samsung Galaxy Tab 3 7.0", "SM-T215", "", 7.0, 170, 600, 1024),
			new Device("Samsung Galaxy Tab 3 7.0", "SM-T217", "", 7.0, 170, 600, 1024),
			new Device("Samsung Galaxy Tab 3 7.0", "GT-P3200", "", 7.0, 170, 600, 1024),
			new Device("Samsung Galaxy Tab 3 7.0", "GT-P3210", "", 7.0, 170, 600, 1024),
			new Device("Samsung Galaxy Tab 3 7.0", "GT-P3220", "", 7.0, 170, 600, 1024),
			new Device("Samsung Galaxy Tab 3 Kids", "SM-T2105", "", 7.0, 170, 600, 1024),
			new Device("Samsung Galaxy Tab 3 7.0", "SM-T21", "", 7.0, 170, 600, 1024), // shorter, risk of confusion ?
			new Device("Samsung Galaxy Tab Plus 7.0", "GT-P6200", "", 7.0, 170, 600, 1024),
			new Device("Samsung Galaxy Tab Lite 7.0", "SM-T110", "", 7.0, 170, 600, 1024),
			new Device("Samsung Galaxy Tab Lite 7.0", "SM-T111", "", 7.0, 170, 600, 1024),
			new Device("Samsung Galaxy Tab Lite 7.0", "SM-T112", "", 7.0, 170, 600, 1024),
			new Device("Samsung Galaxy Tab Lite 7.0", "SM-T113", "", 7.0, 170, 600, 1024),
			new Device("Samsung Galaxy Tab Lite 7.0", "SM-T116", "", 7.0, 170, 600, 1024),
			new Device("Samsung Galaxy Tab 4 7.0", "SM-T230", "", 7.0, 216, 800, 1280),
			new Device("Samsung Galaxy Tab 4 7.0", "SM-T231", "", 7.0, 216, 800, 1280),
			new Device("Samsung Galaxy Tab 4 7.0", "SM-T235", "", 7.0, 216, 800, 1280),
			new Device("Samsung Galaxy Tab 4 Lite 7.0", "SM-T239", "", 7.0, 216, 800, 1280),
			new Device("Samsung Galaxy Tab 7.7", "GT-P6800", "", 7.7, 169, 800, 1024),
			new Device("Samsung Galaxy Tab 3 8.0", "SM-T310", "", 8.0, 189, 800, 1280),
			new Device("Samsung Galaxy Tab 3 8.0", "SM-T311", "", 8.0, 189, 800, 1280),
			new Device("Samsung Galaxy Tab 3 8.0", "SM-T315", "", 8.0, 189, 800, 1280),
			new Device("Samsung Galaxy Tab 4 8.0", "SM-T330", "", 8.0, 189, 800, 1280),
			new Device("Samsung Galaxy Tab 4 8.0", "SM-T331", "", 8.0, 189, 800, 1280),
			new Device("Samsung Galaxy Tab 4 8.0", "SM-T335", "", 8.0, 189, 800, 1280),
			new Device("Samsung Galaxy Tab 4 8.0", "SM-T337", "", 8.0, 189, 800, 1280),
			new Device("Samsung Galaxy Tab 8.9", "GT-P7300 ", "", 8.9, 170, 800, 1280),
			new Device("Samsung Galaxy Tab 8.9", "GT-P7310 ", "", 8.9, 170, 800, 1280),
			new Device("Samsung Galaxy Tab 10.1", "GT-P7100", "", 10.1, 149, 800, 1280),
			new Device("Samsung Galaxy Tab 10.1", "GT-P7500", "", 10.1, 149, 800, 1280),
			new Device("Samsung Galaxy Tab 10.1", "GT-P7501", "", 10.1, 149, 800, 1280),
			new Device("Samsung Galaxy Tab 10.1", "GT-P7510", "", 10.1, 149, 800, 1280),
			new Device("Samsung Galaxy Tab 10.1", "GT-P7511", "", 10.1, 149, 800, 1280),
			new Device("Samsung Galaxy Tab 10.1", "SCH-I905", "", 10.1, 149, 800, 1280),
			new Device("Samsung Galaxy Tab 10.1", "SGH-T859", "", 10.1, 149, 800, 1280),
			new Device("Samsung Galaxy Tab 2 10.1", "GT-P5100", "", 10.1, 149, 800, 1280),
			new Device("Samsung Galaxy Tab 2 10.1", "GT-P5110", "", 10.1, 149, 800, 1280),
			new Device("Samsung Galaxy Tab 3 10.1", "GT-P5200", "", 10.1, 149, 800, 1280),
			new Device("Samsung Galaxy Tab 3 10.1", "GT-P5210", "", 10.1, 149, 800, 1280),
			new Device("Samsung Galaxy Tab 3 10.1", "GT-P5220", "", 10.1, 149, 800, 1280),
			new Device("Samsung Galaxy Tab 4 10.1", "SM-T530", "", 10.1, 149, 800, 1280),
			new Device("Samsung Galaxy Tab 4 10.1", "SM-T531", "", 10.1, 149, 800, 1280),
			new Device("Samsung Galaxy Tab 4 10.1", "SM-T535", "", 10.1, 149, 800, 1280),
				// Galaxy Tab Pro
			new Device("Samsung Galaxy Tab Pro 8.4", "SM-T320", "", 8.4, 360, 1600, 2560),
			new Device("Samsung Galaxy Tab Pro 8.4", "SM-T321", "", 8.4, 360, 1600, 2560),
			new Device("Samsung Galaxy Tab Pro 8.4", "SM-T325", "", 8.4, 360, 1600, 2560),
			new Device("Samsung Galaxy Tab Pro 10.1", "SM-T520", "", 10.1, 299, 1600, 2560),
			new Device("Samsung Galaxy Tab Pro 4 10.1", "SM-T525", "", 10.1, 299, 1600, 2560),
			new Device("Samsung Galaxy Tab Pro 4 12.2", "SM-T900", "", 12.2, 247, 1600, 2560),
			new Device("Samsung Galaxy Tab Pro 4 12.2", "SM-T905", "", 12.2, 247, 1600, 2560),
				// Galaxy Tab S
			new Device("Samsung Galaxy Tab S2 8.0", "SM-T710", "", 8.0, 320, 1536, 2048),
			new Device("Samsung Galaxy Tab S2 8.0", "SM-T715", "", 8.0, 320, 1536, 2048),
			new Device("Samsung Galaxy Tab S2 8.0", "SM-T719", "", 8.0, 320, 1536, 2048),
			new Device("Samsung Galaxy Tab S 8.4", "SM-T700", "", 8.4, 360, 1600, 2560),
			new Device("Samsung Galaxy Tab S 8.4", "SM-T705", "", 8.4, 360, 1600, 2560),
			new Device("Samsung Galaxy Tab S 8.4", "SM-T707", "", 8.4, 360, 1600, 2560), // SM-T707V
			new Device("Samsung Galaxy Tab S2 9.7", "SM-T810", "", 9.7, 264, 1536, 2048),
			new Device("Samsung Galaxy Tab S2 9.7", "SM-T815", "", 9.7, 264, 1536, 2048),
			new Device("Samsung Galaxy Tab S2 9.7", "SM-T817", "", 9.7, 264, 1536, 2048),
			new Device("Samsung Galaxy Tab S3 9.7", "SM-T820", "", 9.7, 264, 1536, 2048),
			new Device("Samsung Galaxy Tab S3 9.7", "SM-T825", "", 9.7, 264, 1536, 2048),
			new Device("Samsung Galaxy Tab S 10.1", "SM-T800", "", 10.5, 288, 1600, 2560),
			new Device("Samsung Galaxy Tab S 10.1", "SM-T805", "", 10.5, 288, 1600, 2560),
			new Device("Samsung Galaxy Tab S 10.1", "SM-T807", "", 10.5, 288, 1600, 2560),
			new Device("Samsung Galaxy Tab S4 10.5", "SM-T830", "", 10.5, 288, 1600, 2560),
			new Device("Samsung Galaxy Tab S4 10.5", "SM-T835", "", 10.5, 288, 1600, 2560),
			new Device("Samsung Galaxy Tab S5e", "SM-T720", "", 10.5, 288, 1600, 2560),
			new Device("Samsung Galaxy Tab S5e", "SM-T721", "", 10.5, 288, 1600, 2560),
			new Device("Samsung Galaxy Tab S5e", "SM-T725", "", 10.5, 288, 1600, 2560),
			new Device("Samsung Galaxy Tab S5e", "SM-T727", "", 10.5, 288, 1600, 2560),
			new Device("Samsung Galaxy Tab S6", "SM-T860", "", 10.5, 288, 1600, 2560),
			new Device("Samsung Galaxy Tab S6", "SM-T861", "", 10.5, 288, 1600, 2560),
			new Device("Samsung Galaxy Tab S6", "SM-T865", "", 10.5, 288, 1600, 2560),
			new Device("Samsung Galaxy Tab S6", "SM-T866", "", 10.5, 288, 1600, 2560),
			new Device("Samsung Galaxy Tab S6", "SM-T867", "", 10.5, 288, 1600, 2560),
			new Device("Samsung Galaxy Tab S6", "SM-T86", "", 10.5, 288, 1600, 2560), // shorter, risk of confusion ?
			new Device("Samsung Galaxy Tab S6 Lite", "SM-P610", "", 10.4, 224, 1200, 2000),
			new Device("Samsung Galaxy Tab S6 Lite", "SM-P615", "", 10.4, 224, 1200, 2000),
			new Device("Samsung Galaxy Tab S6 Lite", "SM-P617", "", 10.4, 224, 1200, 2000),
			new Device("Samsung Galaxy Tab S7", "SM-T870", "", 11.0, 274, 1600, 2560),
			new Device("Samsung Galaxy Tab S7", "SM-T875", "", 11.0, 274, 1600, 2560),
			new Device("Samsung Galaxy Tab S7", "SM-T876", "", 11.0, 274, 1600, 2560),
			new Device("Samsung Galaxy Tab S7 FE", "SM-T730", "", 12.4, 243, 1600, 2560),
			new Device("Samsung Galaxy Tab S7 FE", "SM-T736", "", 12.4, 243, 1600, 2560),
			new Device("Samsung Galaxy Tab S7+", "SM-T970", "", 12.4, 266, 1752, 2800),
			new Device("Samsung Galaxy Tab S7+", "SM-T976", "", 12.4, 266, 1752, 2800),
				// Galaxy Tab A
			new Device("Samsung Galaxy Tab A 7.0", "SM-T280", "", 7.0, 216, 800, 1280),
			new Device("Samsung Galaxy Tab A 7.0", "SM-T285", "", 7.0, 216, 800, 1280),
			new Device("Samsung Galaxy Tab A 8.0", "SM-T350", "", 8.0, 160, 768, 1024),
			new Device("Samsung Galaxy Tab A 8.0", "SM-T355", "", 8.0, 160, 768, 1024),
			new Device("Samsung Galaxy Tab A 8.0", "SM-P350", "", 8.0, 160, 768, 1024),
			new Device("Samsung Galaxy Tab A 8.0", "SM-P355", "", 8.0, 160, 768, 1024),
			new Device("Samsung Galaxy Tab A 8.0", "SM-T380", "", 8.0, 189, 800, 1280),
			new Device("Samsung Galaxy Tab A 8.0", "SM-T385", "", 8.0, 189, 800, 1280),
			new Device("Samsung Galaxy Tab A 8.0", "SM-T387", "", 8.0, 189, 800, 1280),
			new Device("Samsung Galaxy Tab A 8.0", "SM-P205", "", 8.0, 189, 800, 1280),
			new Device("Samsung Galaxy Tab A 8.0", "SM-T290", "", 8.0, 189, 800, 1280),
			new Device("Samsung Galaxy Tab A 8.0", "SM-T295", "", 8.0, 189, 800, 1280),
			new Device("Samsung Galaxy Tab A 8.0", "SM-T297", "", 8.0, 189, 800, 1280),
			new Device("Samsung Galaxy Tab A 8.4", "SM-T305", "", 8.4, 180, 800, 1280),
			new Device("Samsung Galaxy Tab A 8.4", "SM-T307", "", 8.4, 180, 800, 1280),
			new Device("Samsung Galaxy Tab A 9.7", "SM-T550", "", 8.0, 160, 768, 1024),
			new Device("Samsung Galaxy Tab A 9.7", "SM-T555", "", 8.0, 160, 768, 1024),
			new Device("Samsung Galaxy Tab A 9.7", "SM-P550", "", 8.0, 160, 768, 1024),
			new Device("Samsung Galaxy Tab A 9.7", "SM-P555", "", 8.0, 160, 768, 1024),
			new Device("Samsung Galaxy Tab A 10.1", "SM-T580", "", 10.1, 224, 1200, 1920),
			new Device("Samsung Galaxy Tab A 10.1", "SM-T510", "", 10.1, 224, 1200, 1920),
			new Device("Samsung Galaxy Tab A 10.1", "SM-T585", "", 10.1, 224, 1200, 1920),
			new Device("Samsung Galaxy Tab A 10.1", "SM-T515", "", 10.1, 224, 1200, 1920),
			new Device("Samsung Galaxy Tab A 10.1", "SM-P580", "", 10.1, 224, 1200, 1920),
			new Device("Samsung Galaxy Tab A 10.1", "SM-P585", "", 10.1, 224, 1200, 1920),
			new Device("Samsung Galaxy Tab A7 Lite", "SM-T220", "", 8.7, 179, 800, 1340),
			new Device("Samsung Galaxy Tab A7 Lite", "SM-T225", "", 8.7, 179, 800, 1340),
			new Device("Samsung Galaxy Tab A7 Lite", "SM-T227", "", 8.7, 179, 800, 1340),
			new Device("Samsung Galaxy Tab A7", "SM-T500", "", 10.4, 224, 1200, 2000),
			new Device("Samsung Galaxy Tab A7", "SM-T505", "", 10.4, 224, 1200, 2000),
			new Device("Samsung Galaxy Tab A7", "SM-T507", "", 10.4, 224, 1200, 2000),
			new Device("Samsung Galaxy Tab A 10.5", "SM-T590", "", 10.5, 224, 1200, 1920),
			new Device("Samsung Galaxy Tab A 10.5", "SM-T595", "", 10.5, 224, 1200, 1920),
			new Device("Samsung Galaxy Tab A 10.5", "SM-P590", "", 10.5, 224, 1200, 1920),
			new Device("Samsung Galaxy Tab A 10.5", "SM-P595", "", 10.5, 224, 1200, 1920),
				// Galaxy Tab E
			new Device("Samsung Galaxy Tab E 8.0", "SM-T375", "", 8.0, 189, 800, 1280),
			new Device("Samsung Galaxy Tab E 8.0", "SM-T377", "", 8.0, 189, 800, 1280),
			new Device("Samsung Galaxy Tab E 9.6", "SM-T560", "", 9.6, 157, 800, 1280),
			new Device("Samsung Galaxy Tab E 9.6", "SM-T561", "", 9.6, 157, 800, 1280),
				// Galaxy Note Tab
			new Device("Samsung Galaxy Note 8.0", "GT-N510", "", 8.0, 189, 800, 1280),
			new Device("Samsung Galaxy Note 8.0", "SGH-I467", "", 8.0, 189, 800, 1280),
			new Device("Samsung Galaxy Note 10.1", "GT-N800", "", 10.1, 149, 800, 1280),
			new Device("Samsung Galaxy Note 10.1", "GT-N801", "", 10.1, 149, 800, 1280),
			new Device("Samsung Galaxy Note 10.1", "GT-N802", "", 10.1, 149, 800, 1280),
			new Device("Samsung Galaxy Note 10.1", "SPH-P600", "", 10.1, 149, 800, 1280),
			new Device("Samsung Galaxy Note 10.1", "SM-P600", "", 10.1, 299, 1600, 2560),
			new Device("Samsung Galaxy Note 10.1", "SM-P601", "", 10.1, 299, 1600, 2560),
			new Device("Samsung Galaxy Note 10.1", "SM-P602", "", 10.1, 299, 1600, 2560),
			new Device("Samsung Galaxy Note 10.1", "SM-P605", "", 10.1, 299, 1600, 2560),
			new Device("Samsung Galaxy Note 10.1", "SM-P607", "", 10.1, 299, 1600, 2560),
			new Device("Samsung Galaxy Note Pro 12.2", "SM-P900", "", 12.2, 247, 1600, 2560),
			new Device("Samsung Galaxy Note Pro 12.2", "SM-P901", "", 12.2, 247, 1600, 2560),
			new Device("Samsung Galaxy Note Pro 12.2", "SM-P905", "", 12.2, 247, 1600, 2560),





			new Device("Snook X10", "SNOOK-X10", "", 10.1, 162, 1024, 1280),




			// ZTE
			new Device("ZTE Grand X View 3", "K83CA", "", 8.0, 189, 800, 1280),



			// ODD TABLETS
			new Device("BlackBerry PlayBook", "PlayBook", "", 7.0, 170, 600, 1024),
			new Device("HP TouchPad", "hpwOS", "", 8.9, 144, 768, 1024),





		// SmartPhones
			// BlackBerry (Android models only)
			new Device("BlackBerry Evolve X", "BBH100", "", 5.99, 403, 1080, 2160),
			new Device("BlackBerry Evolve", "BBG100", "", 5.99, 403, 1080, 2160),
			new Device("BlackBerry Key 2", "BBF100", "", 4.5, 434, 1080, 1620),
			new Device("BlackBerry Key 2 LE", "BBE100", "", 4.5, 434, 1080, 1620),
			new Device("BlackBerry Motion", "BBD100", "", 5.5, 403, 1080, 1920),
			new Device("BlackBerry Aurora", "BBC100", "", 5.5, 267, 720, 1280),
			new Device("BlackBerry Keyone", "BBB100", "", 4.5, 434, 1080, 1620),
			new Device("BlackBerry DTEK60", "BBA100", "", 5.5, 534, 1440, 2560),
			new Device("BlackBerry DTEK60", "BBA100", "", 5.5, 534, 1440, 2560),
			new Device("BlackBerry DTEK50", "STH100-2", "", 5.2, 424, 1080, 1920),
			new Device("BlackBerry DTEK50", "STH100-1", "", 5.2, 424, 1080, 1920),
			new Device("Blackberry Priv", "BlackBerry Priv", "", 5.4, 540, 1440, 2560),
			// Fairphone
			new Device("Fairphone 1", "FP1", "", 4.3, 256, 540, 960),
			new Device("Fairphone 2", "FP2", "", 5.0, 446, 1080, 1920),
			new Device("Fairphone 3", "FP3", "", 5.65, 427, 1080, 2160),
			// Google Pixel
			new Device("Google Pixel 5", "Pixel 5", "", 6.0, 432, 1080, 2340),
			new Device("Google Pixel 4 XL", "Pixel 4 XL", "", 6.3, 537, 1440, 3040),
			new Device("Google Pixel 4A", "Pixel 4a (5G​)", "", 6.2, 413, 1080, 2340),
			new Device("Google Pixel 4A", "Pixel 4a", "", 5.8, 443, 1080, 2340),
			new Device("Google Pixel 4", "Pixel 4", "", 5.7, 444, 1080, 2280),
			new Device("Google Pixel 3 XL", "Pixel 3 XL", "", 6.3, 522, 1440, 2960),
			new Device("Google Pixel 3A XL", "Pixel 3a XL", "", 6.0, 402, 1080, 2160),
			new Device("Google Pixel 3A", "Pixel 3a", "", 5.6, 441, 1080, 2220),
			new Device("Google Pixel 3", "Pixel 3", "", 5.5, 439, 1080, 2160),
			new Device("Google Pixel 2 XL", "Pixel 2 XL", "", 6.0, 490, 1440, 2560),
			new Device("Google Pixel 2", "Pixel 2", "", 5.0, 441, 1080, 1920),
			new Device("Google Pixel XL", "Pixel XL", "", 5.5, 534, 1440, 2560),
			new Device("Google Pixel", "Pixel Build", "", 5.0, 441, 1080, 1920),
			// HUAWEI
				// Y Series
			new Device("Huawei Y9s / P Smart Pro", "STK-L21", "", 6.59, 391, 1080, 2340),
			new Device("Huawei Y9s", "STK-LX3", "", 6.59, 391, 1080, 2340),
			new Device("Huawei Y9s", "STK-L22", "", 6.59, 391, 1080, 2340),
			new Device("Huawei Y9a", "FRL-L22", "", 6.63, 397, 1080, 2400),
			new Device("Huawei Y9a", "FRL-L23", "", 6.63, 397, 1080, 2400),
			new Device("Huawei Y9 / Y8s", "JKM-LX1", "", 6.5, 396, 1080, 2340),
			new Device("Huawei Y9 / Y8", "JKM-LX2", "", 6.5, 396, 1080, 2340),
			new Device("Huawei Y9 / Y8", "JKM-LX3", "", 6.5, 396, 1080, 2340),
			new Device("Huawei Y9", "JKM-AL00", "", 6.5, 396, 1080, 2340),
			new Device("Huawei Y9", "JKM-TL00", "", 6.5, 396, 1080, 2340),
			new Device("Huawei Y9 (2018)", "FLA-LX1", "", 5.93, 407, 1080, 2160),
			new Device("Huawei Y9 (2018)", "FLA-LX2", "", 5.93, 407, 1080, 2160),
			new Device("Huawei Y9 (2018)", "FLA-LX3", "", 5.93, 407, 1080, 2160),
			new Device("Huawei Y9 (2018)", "FLA-AL00", "", 5.93, 407, 1080, 2160),
			new Device("Huawei Y9 (2018)", "FLA-AL10", "", 5.93, 407, 1080, 2160),
			new Device("Huawei Y9 (2018)", "FLA-AL20", "", 5.93, 407, 1080, 2160),
			new Device("Huawei Y9 (2018)", "FLA-TL10", "", 5.93, 407, 1080, 2160),
			new Device("Huawei Y8p", "AQM-LX1", "", 6.3, 418, 1080, 2400),
			new Device("Huawei Y7 Pro (2019)", "DUB-LX2", "", 6.26, 269, 720, 1520),
			new Device("Huawei Y7 Pro (2019) / Enjoy 9", "DUB-AL20", "", 6.26, 269, 720, 1520),
			new Device("Huawei Y7 Pro (2019) / Enjoy 9", "DUB-AL00", "", 6.26, 269, 720, 1520),
			new Device("Huawei Y7 Pro (2019) / Enjoy 9", "DUB-TL00", "", 6.26, 269, 720, 1520),
			new Device("Huawei Y7 Prime (2018)", "LDN-L21", "", 5.99, 269, 720, 1440),
			new Device("Huawei Y7 Prime (2018)", "LDN-LX2", "", 5.99, 269, 720, 1440),
			new Device("Huawei Y7 Prime (2018)", "LDN-TL10", "", 5.99, 269, 720, 1440),
			new Device("Huawei Y7 Prime (2017)", "TRT-L53", "", 5.5, 267, 720, 1280),
			new Device("Huawei Y7 Prime (2017)", "TRT-L21A", "", 5.5, 267, 720, 1280),
			new Device("Huawei Y7 Prime (2017)", "TRT-AL00", "", 5.5, 267, 720, 1280),
			new Device("Huawei Y7 Prime (2017)", "TRT-TL10", "", 5.5, 267, 720, 1280),
			new Device("Huawei Y7 Prime (2017)", "SLA-TL10", "", 5.5, 267, 720, 1280),
			new Device("Huawei Y7 Prime (2017)", "SLA-AL00", "", 5.5, 267, 720, 1280),
			// new Device("Huawei Y7 Pro (2018)", "DUB-TL00", "", 5.99, 269, 720, 1440), // Missing No https://www.gsmarena.com/huawei_y7_pro_(2018)-9188.php
			new Device("Huawei Y7 (2019)", "DUB-LX1", "", 6.26, 269, 720, 1520),
			new Device("Huawei Y7 (2019)", "DUB-LX3", "", 6.26, 269, 720, 1520),
			new Device("Huawei Y7 (2018)", "LDN-L01", "", 5.99, 269, 720, 1440),
			new Device("Huawei Y7 (2018)", "LDN-LX3", "", 5.99, 269, 720, 1440),
			new Device("Huawei Y7 (2017)", "TRT-LX1", "", 5.5, 267, 720, 1280),
			new Device("Huawei Y7 (2017)", "TRT-LX2", "", 5.5, 267, 720, 1280),
			new Device("Huawei Y7 (2017)", "TRT-LX3", "", 5.5, 267, 720, 1280),
			new Device("Huawei Y7p / P40 Lite E", "ART-L28", "", 6.39, 269, 720, 1560),
			new Device("Huawei Y7p / P40 Lite E", "ART-L29", "", 6.39, 269, 720, 1560),
			new Device("Huawei Y7a / P Smart 2021", "PPA-LX", "", 6.67, 395, 1080, 2400), // 1-3
			new Device("Huawei Y6s", "JAT-LX3", "", 6.09, 282, 720, 1560),
			new Device("Huawei Y6s", "JAT-L29", "", 6.09, 282, 720, 1560),
			new Device("Huawei Y6s", "JAT-LX1", "", 6.09, 282, 720, 1560),
			new Device("Huawei Y6s", "JAT-L41", "", 6.09, 282, 720, 1560),
			new Device("Huawei Y6p", "MED-LX9", "", 6.3, 278, 720, 1600),
			new Device("Huawei Y6 Pro (2019)", "MRD-LX2", "", 6.09, 282, 720, 1560),
			new Device("Huawei Y6 Prime (2018)", "ATU-L31", "", 5.7, 282, 720, 1440),
			new Device("Huawei Y6 Prime (2018)", "ATU-L42", "", 5.7, 282, 720, 1440),
			new Device("Huawei Y6 (2019)", "MRD-LX1", "", 6.09, 282, 720, 1560), // https://www.gsmarena.com/huawei_y6_(2019)-9620.php
			new Device("Huawei Y6 (2019)", "MRD-LX3", "", 6.09, 282, 720, 1560),
			new Device("Huawei Y6 (2018)", "ATU-L11", "", 5.7, 282, 720, 1440),
			new Device("Huawei Y6 (2018)", "ATU-LX3", "", 5.7, 282, 720, 1440),
			new Device("Huawei Y6 (2018)", "ATU-L21", "", 5.7, 282, 720, 1440),
			new Device("Huawei Y6 (2018)", "ATU-L22", "", 5.7, 282, 720, 1440),
			new Device("Huawei Y6 (2017)", "MYA-AL10", "", 5.0, 294, 720, 1280),
			new Device("Huawei Y6 (2017)", "MYA-TL10", "", 5.0, 294, 720, 1280),
			new Device("Huawei Y5 / Y6 (2017)", "MYA-L03", "", 5.0, 294, 720, 1280),
			new Device("Huawei Y5 / Y6 (2017)", "MYA-L23", "", 5.0, 294, 720, 1280),
			new Device("Huawei Y5 / Y6 (2017)", "MYA-L02", "", 5.0, 294, 720, 1280),
			new Device("Huawei Y5 / Y6 (2017)", "MYA-L22", "", 5.0, 294, 720, 1280),
			new Device("Huawei Y6 (2017)", "MYA-L11", "", 5.0, 294, 720, 1280),
			new Device("Huawei Y6 (2017)", "MYA-L41", "", 5.0, 294, 720, 1280),
			new Device("Huawei Y6II Compact", "LYO-L01", "", 5.0, 294, 720, 1280),
			new Device("Huawei Y6II Compact", "LYO-L21", "", 5.0, 294, 720, 1280),
			new Device("Huawei Y6II Compact", "CAM-L21", "", 5.0, 294, 720, 1280),
			new Device("Huawei Y5 Prime (2018)", "DRA-LX2", "", 6.45, 295, 720, 1440),
			new Device("Huawei Y5 Prime (2018)", "DUA-LX2", "", 6.45, 295, 720, 1440),
			new Device("Huawei Y5 Prime (2018)", "DRA-L01", "", 6.45, 295, 720, 1440),
			new Device("Huawei Y5 Prime (2018)", "DUA-L21", "", 6.45, 295, 720, 1440),
			new Device("Huawei Y5 Prime (2018)", "DRA-L21", "", 6.45, 295, 720, 1440),
			new Device("Huawei Y5 Prime (2018)", "DRA-LX3", "", 6.45, 295, 720, 1440),
			new Device("Huawei Y5 Prime (2018)", "DRA-AL00", "", 6.45, 295, 720, 1440),
			new Device("Huawei Y5 Prime (2018)", "DRA-TL00", "", 6.45, 295, 720, 1440),
			new Device("Huawei Y5 Prime (2018)", "ATU-AL10", "", 6.45, 295, 720, 1440),
			new Device("Huawei Y5p", "DRA-LX9", "", 6.45, 295, 720, 1440),
			new Device("Huawei Y5 Lite (2018)", "DRA-LX5", "", 6.45, 295, 720, 1440),
			new Device("Huawei Y5 (2019)", "AMN-LX1", "", 5.71, 295, 720, 1520),
			new Device("Huawei Y5 (2019)", "AMN-LX2", "", 5.71, 295, 720, 1520),
			new Device("Huawei Y5 (2019)", "AMN-LX3", "", 5.71, 295, 720, 1520),
			new Device("Huawei Y5 (2019)", "AMN-LX9", "", 5.71, 295, 720, 1520),
			new Device("Huawei Y5 (2017)", "MYA-L13", "", 5.0, 294, 720, 1280),
			new Device("Huawei Y5 (2017)", "MYA-U29", "", 5.0, 294, 720, 1280),
			new Device("Huawei Y5II", "CUN-U29", "", 5.0, 294, 720, 1280),
			new Device("Huawei Y5II", "CUN-U19", "", 5.0, 294, 720, 1280),
			new Device("Huawei Y5II", "CUN-U09", "", 5.0, 294, 720, 1280),
			new Device("Huawei Y5II", "CUN-L33", "", 5.0, 294, 720, 1280),
			new Device("Huawei Y5II", "CUN-L23", "", 5.0, 294, 720, 1280),
			new Device("Huawei Y5II", "CUN-L22", "", 5.0, 294, 720, 1280),
			new Device("Huawei Y5II", "CUN-L21", "", 5.0, 294, 720, 1280),
			new Device("Huawei Y5II", "CUN-L03", "", 5.0, 294, 720, 1280),
			new Device("Huawei Y5II", "CUN-L02", "", 5.0, 294, 720, 1280),
			new Device("Huawei Y5II", "CUN-L01", "", 5.0, 294, 720, 1280),
			new Device("Huawei Y4II", "LUA-U23", "", 4.5, 218, 480, 854),
			new Device("Huawei Y4II", "LUA-U22", "", 4.5, 218, 480, 854),
			new Device("Huawei Y4II", "LUA-U03", "", 4.5, 218, 480, 854),
			new Device("Huawei Y4II", "LUA-U02", "", 4.5, 218, 480, 854),
			new Device("Huawei Y4II", "LUA-L23", "", 4.5, 218, 480, 854),
			new Device("Huawei Y4II", "LUA-L22", "", 4.5, 218, 480, 854),
			new Device("Huawei Y4II", "LUA-L13", "", 4.5, 218, 480, 854),
			new Device("Huawei Y4II", "LUA-L03", "", 4.5, 218, 480, 854),
			new Device("Huawei Y4II", "LUA-L02", "", 4.5, 218, 480, 854),
			new Device("Huawei Y4II", "LUA-L01", "", 4.5, 218, 480, 854),
			new Device("Huawei Y3 (2018)", "CAG-L02", "", 5.0, 196, 480, 854),
			new Device("Huawei Y3 (2018)", "CAG-L03", "", 5.0, 196, 480, 854),
			new Device("Huawei Y3 (2018)", "CAG-L22", "", 5.0, 196, 480, 854),
			new Device("Huawei Y3 (2018)", "CAG-L23", "", 5.0, 196, 480, 854),
			new Device("Huawei Y3 (2017)", "CRO-L02", "", 5.0, 196, 480, 854),
			new Device("Huawei Y3 (2017)", "CRO-L03", "", 5.0, 196, 480, 854),
			new Device("Huawei Y3 (2017)", "CRO-L22", "", 5.0, 196, 480, 854),
			new Device("Huawei Y3 (2017)", "CRO-L23", "", 5.0, 196, 480, 854),
			new Device("Huawei Y3 (2017)", "CRO-U00", "", 5.0, 196, 480, 854),
			new Device("Huawei Y Max", "ARS-L22", "", 7.12, 350, 1080, 2244),
			new Device("Huawei Y Max", "ARS-AL00", "", 7.12, 350, 1080, 2244),
				// P Smart Series
			new Device("Huawei P Smart 2020", "POT-LX1A", "", 6.21, 415, 1080, 2340),
			new Device("Huawei P Smart+ 2019", "POT-LX1T", "", 6.21, 415, 1080, 2340),
			new Device("Huawei P Smart 2019", "POT-LX1AF", "", 6.21, 415, 1080, 2340),
			new Device("Huawei P Smart 2019", "POT-LX2J", "", 6.21, 415, 1080, 2340),
			new Device("Huawei P Smart 2019", "POT-LX1RUA", "", 6.21, 415, 1080, 2340),
			new Device("Huawei P Smart 2019", "POT-LX3", "", 6.21, 415, 1080, 2340),
			new Device("Huawei P Smart 2017", "FIG-LX1", "", 5.65, 427, 1080, 2160),
			new Device("Huawei P Smart 2017", "FIG-LX2", "", 5.65, 427, 1080, 2160),
			new Device("Huawei P Smart 2017", "FIG-LX3", "", 5.65, 427, 1080, 2160),
			new Device("Huawei P Smart 2017", "FIG-LA1", "", 5.65, 427, 1080, 2160),
			new Device("Huawei P Smart 2017", "FIG-TL10", "", 5.65, 427, 1080, 2160),
			new Device("Huawei P Smart 2017", "FIG-AL10", "", 5.65, 427, 1080, 2160),
			new Device("Huawei P Smart Z", "STK-LX1", "", 6.59, 391, 1080, 2340),
				// P Series
			new Device("Huawei P40 Pro+", "ELS-N39", "", 6.58, 441, 1200, 2640),
			new Device("Huawei P40 Pro+", "ELS-AN10", "", 6.58, 441, 1200, 2640),
			new Device("Huawei P40 Pro", "ELS-NX9", "", 6.58, 441, 1200, 2640),
			new Device("Huawei P40 Pro", "ELS-N04", "", 6.58, 441, 1200, 2640),
			new Device("Huawei P40 Pro", "ELS-AN00", "", 6.58, 441, 1200, 2640),
			new Device("Huawei P40 Pro", "ELS-TN00", "", 6.58, 441, 1200, 2640),
			//new Device("Huawei Mate 40 RS Porsche Design", "NOP-AN00", "", 6.76, 456, 1344, 2772),
			//new Device("Huawei P40 Lite E", "ART-L29N", "", 6.39, 269, 720, 1560),
			new Device("Huawei P40 Lite", "CDY-NX9A", "", 6.5, 405, 1080, 2400),
			new Device("Huawei P40 Lite / Nova 7i", "JNY-L21A", "", 6.5, 405, 1080, 2400),
			new Device("Huawei P40 Lite / Nova 7i", "JNY-L01A", "", 6.5, 405, 1080, 2400),
			new Device("Huawei P40 Lite / Nova 7i", "JNY-L21B", "", 6.5, 405, 1080, 2400),
			new Device("Huawei P40 Lite / Nova 7i", "JNY-L22A", "", 6.5, 405, 1080, 2400),
			new Device("Huawei P40 Lite / Nova 7i", "JNY-L02A", "", 6.5, 405, 1080, 2400),
			new Device("Huawei P40 Lite / Nova 7i / P20 Lite (2019)", "JNY-L22B", "", 6.5, 405, 1080, 2400),
			new Device("Huawei P40 Lite", "JNY-LX1", "", 6.5, 405, 1080, 2400),
			new Device("Huawei P40", "ANA-AL00", "", 6.1, 422, 1080, 2340),
			new Device("Huawei P40", "ANA-AN00", "", 6.1, 422, 1080, 2340),
			new Device("Huawei P40", "ANA-TN00", "", 6.1, 422, 1080, 2340),
			new Device("Huawei P40", "ANA-NX9", "", 6.1, 422, 1080, 2340),
			new Device("Huawei P40", "ANA-LX4", "", 6.1, 422, 1080, 2340),
			new Device("Huawei P30 Pro", "VOG-L29", "", 6.47, 398, 1080, 2340),
			new Device("Huawei P30 Pro", "VOG-L09", "", 6.47, 398, 1080, 2340),
			new Device("Huawei P30 Pro", "VOG-AL00", "", 6.47, 398, 1080, 2340),
			new Device("Huawei P30 Pro", "VOG-TL00", "", 6.47, 398, 1080, 2340),
			new Device("Huawei P30 Pro", "VOG-L04", "", 6.47, 398, 1080, 2340),
			new Device("Huawei P30 Pro", "VOG-AL10", "", 6.47, 398, 1080, 2340),
			new Device("Huawei P30 Pro", "HW-02L", "", 6.47, 398, 1080, 2340),
			new Device("Huawei P30", "ELE-L29", "", 6.1, 422, 1080, 2340),
			new Device("Huawei P30", "ELE-L09", "", 6.1, 422, 1080, 2340),
			new Device("Huawei P30", "ELE-AL00", "", 6.1, 422, 1080, 2340),
			new Device("Huawei P30", "ELE-TL00", "", 6.1, 422, 1080, 2340),
			new Device("Huawei P30", "ELE-L04", "", 6.1, 422, 1080, 2340),
			new Device("Huawei P30 Lite New Edition", "MAR-LX2B", "", 6.15, 409, 1080, 2312),
			new Device("Huawei P30 Lite", "MAR-LX1M", "", 6.15, 409, 1080, 2312),
			new Device("Huawei P30 Lite", "MAR-AL00", "", 6.15, 409, 1080, 2312),
			new Device("Huawei P30 Lite", "MAR-TL00", "", 6.15, 409, 1080, 2312),
			new Device("Huawei P30 Lite", "MAR-LX2", "", 6.15, 409, 1080, 2312),
			new Device("Huawei P30 Lite", "MAR-LX1A", "", 6.15, 409, 1080, 2312),
			new Device("Huawei P30 Lite", "MAR-LX3A", "", 6.15, 409, 1080, 2312),
			new Device("Huawei P30 Lite", "MAR-LX1B", "", 6.15, 409, 1080, 2312),
			new Device("Huawei P30 Lite", "MAR-LX3Bm", "", 6.15, 409, 1080, 2312),
			//new Device("Huawei Nova 4e", "MAR-LX1B", "", 6.15, 409, 1080, 2312), // MAR-AL00 - https://www.gsmarena.com/huawei_nova_4e-9627.php
			new Device("Huawei P20 Pro", "CLT-L29", "", 6.1, 408, 1080, 2240), //"",C
			new Device("Huawei P20 Pro", "CLT-L09", "", 6.1, 408, 1080, 2240), //"",C
			new Device("Huawei P20 Pro", "CLT-L04", "", 6.1, 408, 1080, 2240),
			new Device("Huawei P20 Pro", "CLT-AL00", "", 6.1, 408, 1080, 2240),
			new Device("Huawei P20 Pro", "CLT-AL01", "", 6.1, 408, 1080, 2240),
			new Device("Huawei P20 Pro", "CLT-TL01", "", 6.1, 408, 1080, 2240),
			new Device("Huawei P20 Lite", "ANE-LX1", "", 5.84, 432, 1080, 2280),
			new Device("Huawei P20 Lite", "ANE-LX2", "", 5.84, 432, 1080, 2280),//J
			new Device("Huawei P20 Lite", "ANE-LX3", "", 5.84, 432, 1080, 2280),
			new Device("Huawei P20 Lite", "ANE-L21", "", 5.84, 432, 1080, 2280),
			new Device("Huawei P20 Lite", "ANE-L22", "", 5.84, 432, 1080, 2280),
			new Device("Huawei P20 Lite", "ANE-L23", "", 5.84, 432, 1080, 2280),
			new Device("Huawei P20 Lite", "ANE-AL00", "", 5.84, 432, 1080, 2280),
			new Device("Huawei P20 Lite", "ANE-TL00", "", 5.84, 432, 1080, 2280),
			new Device("Huawei P20", "EML-L09", "", 5.8, 408, 1080, 2240),//C
			new Device("Huawei P20", "EML-L29", "", 5.8, 408, 1080, 2240),//C
			new Device("Huawei P20", "EML-AL00", "", 5.8, 408, 1080, 2240),
			new Device("Huawei P20", "EML-TL00", "", 5.8, 408, 1080, 2240),
			new Device("Huawei P10 Plus", "VKY-L09", "", 5.5, 540, 1440, 2560),
			new Device("Huawei P10 Plus", "VKY-L29", "", 5.5, 540, 1440, 2560),
			new Device("Huawei P10 Plus", "VKY-AL00", "", 5.5, 540, 1440, 2560),
			new Device("Huawei P10 Lite", "WAS-LX1", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P10 Lite", "WAS-LX2", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P10 Lite", "WAS-LX3", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P10 Lite", "WAS-L03T", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P10 Lite", "WAS-AL00", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P10 Lite", "WAS-TL10", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P10", "VTR-L09", "", 5.1, 432, 1080, 1920),
			new Device("Huawei P10", "VTR-L29", "", 5.1, 432, 1080, 1920),
			new Device("Huawei P10", "VTR-AL00", "", 5.1, 432, 1080, 1920),
			new Device("Huawei P10", "VTR-TL00", "", 5.1, 432, 1080, 1920),
			new Device("Huawei P9 Lite Mini", "SLA-L02", "", 5.0, 294, 720, 1280),
			new Device("Huawei P9 Lite Mini", "SLA-L03", "", 5.0, 294, 720, 1280),
			new Device("Huawei P9 Lite Mini", "SLA-L22", "", 5.0, 294, 720, 1280),
			new Device("Huawei P9 Lite Mini", "SLA-L23", "", 5.0, 294, 720, 1280),
			new Device("Huawei P9 Lite", "VNS-L62", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P9 Lite", "VNS-L53", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P9 Lite", "VNS-L52", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P9 Lite", "VNS-L31", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P9 Lite", "VNS-L23", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P9 Lite", "VNS-L22", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P9 Lite", "VNS-L21", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P9 Lite", "VNS-TL00", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P9 Lite", "VNS-DL00", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P9 Lite", "VNS-AL00", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P9 Plus", "VIE-L09", "", 5.5, 424, 1080, 1920),
			new Device("Huawei P9 Plus", "VIE-L29", "", 5.5, 424, 1080, 1920),
			new Device("Huawei P9 Plus", "VIE-AL10", "", 5.5, 424, 1080, 1920),
			new Device("Huawei P9", "EVA-L09", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P9", "EVA-L19", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P9", "EVA-L29", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P9", "EVA-AL10", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P9", "EVA-AL00", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P9", "EVA-DL00", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P9", "EVA-TL00", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P8 Lite", "PRA-AL00", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P8 Lite", "PRA-TL10", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P8 Lite", "PRA-TL20", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P8 Lite", "PRA-LA1", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P8 Lite", "PRA-LX1", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P8 Lite", "PRA-LX2", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P8 Lite", "PRA-LX3", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P8 Lite", "PRA-L21", "", 5.2, 424, 1080, 1920),
			new Device("Huawei P8 Lite", "PRA-L32", "", 5.2, 424, 1080, 1920),
				// G Series
			new Device("Huawei G9 Plus", "MLA-UL00", "", 5.5, 401, 1080, 1920),
			new Device("Huawei G9 Plus", "MLA-TL10", "", 5.5, 401, 1080, 1920),
				// Mate Series
			new Device("Huawei Mate 40 Pro+", "NOP-AN00", "", 6.76, 456, 1344, 2772),
			new Device("Huawei Mate 40 Pro", "NOH-NX9", "", 6.76, 456, 1344, 2772),
			new Device("Huawei Mate 40 Pro", "NOH-AN00", "", 6.76, 456, 1344, 2772),
			new Device("Huawei Mate 40E", "OCE-AN50", "", 6.5, 402, 1080, 2376),
			new Device("Huawei Mate 40", "OCE-AN10", "", 6.5, 402, 1080, 2376),
			new Device("Huawei Mate 30 RS Porsche Design", "LIO-AN00P", "", 6.53, 409, 1176, 2400),
			new Device("Huawei Mate 30E Pro 5G", "LIO-AN00", "", 6.53, 409, 1176, 2400), //00m
			new Device("Huawei Mate 30 Pro 5G", "LIO-N29", "", 6.53, 409, 1176, 2400),
			new Device("Huawei Mate 30 Pro 5G", "LIO-AL10", "", 6.53, 409, 1176, 2400),
			new Device("Huawei Mate 30 Pro 5G", "LIO-TL10", "", 6.53, 409, 1176, 2400),
			new Device("Huawei Mate 30 Pro", "LIO-L09", "", 6.53, 409, 1176, 2400),
			new Device("Huawei Mate 30 Pro", "LIO-L29", "", 6.53, 409, 1176, 2400),
			new Device("Huawei Mate 30 Pro", "LIO-AL00", "", 6.53, 409, 1176, 2400),
			new Device("Huawei Mate 30 Pro", "LIO-TL00", "", 6.53, 409, 1176, 2400),
			new Device("Huawei Mate 30 5G", "TAS-AN00", "", 6.62, 389, 1080, 2340),
			new Device("Huawei Mate 30 5G", "TAS-TN00", "", 6.62, 389, 1080, 2340),
			new Device("Huawei Mate 30", "TAS-L09", "", 6.62, 389, 1080, 2340),
			new Device("Huawei Mate 30", "TAS-L29", "", 6.62, 389, 1080, 2340),
			new Device("Huawei Mate 30", "TAS-AL00", "", 6.62, 389, 1080, 2340),
			new Device("Huawei Mate 30", "TAS-TL00", "", 6.62, 389, 1080, 2340),
			new Device("Huawei Mate 20X 5G", "EVR-N29", "", 7.2, 346, 1080, 2244),
			new Device("Huawei Mate 20X 5G", "EVR-AN00", "", 7.2, 346, 1080, 2244),
			new Device("Huawei Mate 20X", "EVR-L29", "", 7.2, 346, 1080, 2244),
			new Device("Huawei Mate 20X", "EVR-AL00", "", 7.2, 346, 1080, 2244),
			new Device("Huawei Mate 20X", "EVR-TL00", "", 7.2, 346, 1080, 2244),
			new Device("Huawei Mate 20 RS Porsche Design", "LYA-AL00P", "", 6.39, 538, 1440, 3120),
			new Device("Huawei Mate 20 Pro", "LYA-L09", "", 6.39, 538, 1440, 3120),
			new Device("Huawei Mate 20 Pro", "LYA-L29", "", 6.39, 538, 1440, 3120),
			new Device("Huawei Mate 20 Pro", "LYA-AL00", "", 6.39, 538, 1440, 3120),
			new Device("Huawei Mate 20 Pro", "LYA-AL10", "", 6.39, 538, 1440, 3120),
			new Device("Huawei Mate 20 Pro", "LYA-TL00", "", 6.39, 538, 1440, 3120),
			new Device("Huawei Mate 20 Pro", "LYA-L0C", "", 6.39, 538, 1440, 3120),
			new Device("Huawei Mate 20 Lite", "SNE-AL00", "", 6.3, 409, 1080, 2340),
			new Device("Huawei Mate 20 Lite", "SNE-LX1", "", 6.3, 409, 1080, 2340),
			new Device("Huawei Mate 20 Lite", "SNE-LX2", "", 6.3, 409, 1080, 2340),
			new Device("Huawei Mate 20 Lite", "SNE-LX3", "", 6.3, 409, 1080, 2340),
			//new Device("Huawei Mate 20 Lite", "INE-LX2", "", 6.3, 409, 1080, 2340),
			new Device("Huawei Mate 20", "HMA-L29", "", 6.53, 381, 1080, 2244),
			new Device("Huawei Mate 20", "HMA-L09", "", 6.53, 381, 1080, 2244),
			new Device("Huawei Mate 20", "HMA-LX9", "", 6.53, 381, 1080, 2244),
			new Device("Huawei Mate 20", "HMA-AL00", "", 6.53, 381, 1080, 2244),
			new Device("Huawei Mate 20", "HMA-TL00", "", 6.53, 381, 1080, 2244),
			new Device("Huawei Mate 10 Pro", "BLA-A09", "", 6.0, 402, 1080, 2160),
			new Device("Huawei Mate 10 Pro", "BLA-L09", "", 6.0, 402, 1080, 2160),
			new Device("Huawei Mate 10 Pro", "BLA-L29", "", 6.0, 402, 1080, 2160),
			new Device("Huawei Mate 10 Pro", "BLA-AL00", "", 6.0, 402, 1080, 2160),
			//new Device("Huawei Mate 10 Porsche", "BLA-A09", "", 6.0, 402, 1080, 2160), // missing no https://www.gsmarena.com/huawei_mate_10_porsche_design-8899.php
			new Device("Huawei Mate 10 Lite", "RNE-L01", "", 5.9, 409, 1080, 2160),
			new Device("Huawei Mate 10 Lite", "RNE-L02", "", 5.9, 409, 1080, 2160),
			new Device("Huawei Mate 10 Lite", "RNE-L03", "", 5.9, 409, 1080, 2160),
			new Device("Huawei Mate 10 Lite", "RNE-L11", "", 5.9, 409, 1080, 2160),
			new Device("Huawei Mate 10 Lite", "RNE-L21", "", 5.9, 409, 1080, 2160),
			new Device("Huawei Mate 10 Lite", "RNE-L22", "", 5.9, 409, 1080, 2160),
			new Device("Huawei Mate 10 Lite", "RNE-L23", "", 5.9, 409, 1080, 2160),
			new Device("Huawei Mate 10 Lite", "RNE-AL00", "", 5.9, 409, 1080, 2160),
			new Device("Huawei Mate 10", "ALP-L09", "", 5.9, 499, 1440, 2560),
			new Device("Huawei Mate 10", "ALP-L29", "", 5.9, 499, 1440, 2560),
			new Device("Huawei Mate 10", "ALP-AL00", "", 5.9, 499, 1440, 2560),
			new Device("Huawei Mate 10", "ALP-TL00", "", 5.9, 499, 1440, 2560),
			// new Device("Huawei Mate 9 Porsche Design", "LON-L29", "", 5.5, 534, 1440, 2560),
			new Device("Huawei Mate 9 Pro", "LON-L29", "", 5.5, 534, 1440, 2560),
			new Device("Huawei Mate 9 Pro", "LON-AL00", "", 5.5, 534, 1440, 2560),
			new Device("Huawei Mate 9", "MHA-L09", "", 5.9, 373, 1080, 1920),
			new Device("Huawei Mate 9", "MHA-L29", "", 5.9, 373, 1080, 1920),
			new Device("Huawei Mate 9", "MHA-AL00", "", 5.9, 373, 1080, 1920),
			new Device("Huawei Mate RS Porsche Design", "NEO-L29", "", 6.0, 538, 1440, 2880),
			new Device("Huawei Mate RS Porsche Design", "NEO-AL00", "", 6.0, 538, 1440, 2880),
			new Device("Huawei Mate XS", "TAH-N29m", "", 8.0, 414, 2200, 2480),
			new Device("Huawei Mate X", "TAH-AN00", "", 8.0, 414, 2200, 2480),
			new Device("Huawei Mate X2", "TET-AN00", "", 8.0, 414, 2200, 2480),
				// Nova Series
			new Device("Huawei Nova 8 Pro", "BRQ-AN00", "", 6.72, 439, 1236, 2676),
			new Device("Huawei Nova 8 5G", "ANG-AN00", "", 6.57, 392, 1080, 2340),
			new Device("Huawei Nova 8 SE", "JSC-AN00", "", 6.53, 403, 1080, 2400),
			new Device("Huawei Nova 7 SE", "CDL-AN50", "", 6.5, 405, 1080, 2400),
			new Device("Huawei Nova 7 SE", "CDY-AN00", "", 6.5, 405, 1080, 2400),
			new Device("Huawei Nova 7 SE", "CDY-NX9B", "", 6.5, 405, 1080, 2400),
			new Device("Huawei Nova 7 Pro 5G", "JER-AN10", "", 6.57, 392, 1080, 2340),
			new Device("Huawei Nova 7 5G", "JEF-AN00", "", 6.53, 403, 1080, 2400),
			new Device("Huawei Nova 7 5G", "JEF-NX9", "", 6.53, 403, 1080, 2400),
			new Device("Huawei Nova 7 5G", "JEF-AN20", "", 6.53, 403, 1080, 2400),
			new Device("Huawei Nova 7i", "JNY-LX2", "", 6.4, 398, 1080, 2310),
			new Device("Huawei Nova 6 SE", "JNY-AL10", "", 6.4, 398, 1080, 2310),
			new Device("Huawei Nova 6 SE", "JNY-TL10", "", 6.4, 398, 1080, 2310),
			new Device("Huawei Nova 6 5G", "WLZ-AN00", "", 6.57, 401, 1080, 2400),
			new Device("Huawei Nova 6 5G", "WLZ-TN00", "", 6.57, 401, 1080, 2400),
			new Device("Huawei Nova 6", "WLZ-AL10", "", 6.57, 401, 1080, 2400),
			new Device("Huawei Nova 6", "WLZ-TL10", "", 6.57, 401, 1080, 2400),
			new Device("Huawei Nova 5z", "SPN-AL00", "", 6.26, 412, 1080, 2340),
			new Device("Huawei Nova 5z", "SPN-TL00", "", 6.26, 412, 1080, 2340),
			//new Device("Huawei Nova 5i Pro", "SPN-AL00", "", 6.26, 412, 1080, 2340),
			new Device("Huawei Nova 5t", "YAL-L21", "", 6.26, 412, 1080, 2340),
			new Device("Huawei Nova 5t", "YAL-L61", "", 6.26, 412, 1080, 2340),
			new Device("Huawei Nova 5t", "YAL-L71", "", 6.26, 412, 1080, 2340),
			new Device("Huawei Nova 5t", "YAL-L61", "", 6.26, 412, 1080, 2340), //YAL-L61D
			new Device("Huawei Nova 5i", "GLK-LX", "", 6.4, 398, 1080, 2310), // experimental 1, 1U, 2, 3
			new Device("Huawei Nova 5i", "GLK-AL00", "", 6.4, 398, 1080, 2310),
			new Device("Huawei Nova 5i", "GLK-TL00", "", 6.4, 398, 1080, 2310),
			new Device("Huawei Nova 5 Pro", "SEA-AL10", "", 6.39, 403, 1080, 2340),
			new Device("Huawei Nova 5 Pro", "SEA-TL10", "", 6.39, 403, 1080, 2340),
			new Device("Huawei Nova 5", "SEA-AL00", "", 6.39, 403, 1080, 2340),
			new Device("Huawei Nova 5", "SEA-TL00", "", 6.39, 403, 1080, 2340),
			new Device("Huawei Nova 4", "VCE-AL00", "", 6.4, 398, 1080, 2310),
			new Device("Huawei Nova 4", "VCE-TL00", "", 6.4, 398, 1080, 2310),
			new Device("Huawei Nova 4", "VCE-L22", "", 6.4, 398, 1080, 2310),
			new Device("Huawei Nova 3i", "INE-LX1", "", 6.3, 409, 1080, 2310), // gros bazar : https://www.gsmarena.com/huawei_nova_3i-9632.php
			new Device("Huawei Nova 3i", "INE-LX2", "", 6.3, 409, 1080, 2310),
			new Device("Huawei Nova 3i", "INE-AL00", "", 6.3, 409, 1080, 2310),
			new Device("Huawei Nova 3i", "INE-TL00", "", 6.3, 409, 1080, 2310),
			new Device("Huawei Nova 3", "PAR-AL00", "", 6.3, 409, 1080, 2310),
			new Device("Huawei Nova 3", "PAR-LX1", "", 6.3, 409, 1080, 2310), // "", M
			new Device("Huawei Nova 3", "PAR-LX9", "", 6.3, 409, 1080, 2310),
			new Device("Huawei Nova 3", "PAR-TL20", "", 6.3, 409, 1080, 2310),
			new Device("Huawei Nova 3", "PAR-TL00", "", 6.3, 409, 1080, 2310),
			new Device("Huawei Nova 2s", "HWI-AL00", "", 6.0, 403, 1080, 2160),
			new Device("Huawei Nova 2s", "HWI-TL00", "", 6.0, 403, 1080, 2160),
			new Device("Huawei Nova 2 Plus", "BAC-L03", "", 5.5, 401, 1080, 1920),
			new Device("Huawei Nova 2 Plus", "BAC-L21", "", 5.5, 401, 1080, 1920),
			new Device("Huawei Nova 2 Plus", "BAC-L22", "", 5.5, 401, 1080, 1920),
			new Device("Huawei Nova 2 Plus", "BAC-L23", "", 5.5, 401, 1080, 1920),
			new Device("Huawei Nova 2 Plus", "BAC-AL00", "", 5.5, 401, 1080, 1920),
			new Device("Huawei Nova 2", "PIC-LX9", "", 5.0, 443, 1080, 1920),
			new Device("Huawei Nova 2", "PIC-AL00", "", 5.0, 443, 1080, 1920),
			new Device("Huawei Nova 2", "PIC-TL00", "", 5.0, 443, 1080, 1920),
			new Device("Huawei Nova Plus", "MLA-L01", "", 5.5, 401, 1080, 1920),
			new Device("Huawei Nova Plus", "MLA-L11", "", 5.5, 401, 1080, 1920),
			new Device("Huawei Nova Plus", "MLA-L02", "", 5.5, 401, 1080, 1920),
			new Device("Huawei Nova Plus", "MLA-L12", "", 5.5, 401, 1080, 1920),
			new Device("Huawei Nova Plus", "MLA-L03", "", 5.5, 401, 1080, 1920),
			new Device("Huawei Nova Plus", "MLA-L13", "", 5.5, 401, 1080, 1920),
			new Device("Huawei Nova Plus", "MLA-AL10", "", 5.5, 401, 1080, 1920),
			new Device("Huawei Nova", "CAN-L01", "", 5.0, 441, 1080, 1920),
			new Device("Huawei Nova", "CAN-L11", "", 5.0, 441, 1080, 1920),
			new Device("Huawei Nova", "CAN-L02", "", 5.0, 441, 1080, 1920),
			new Device("Huawei Nova", "CAN-L12", "", 5.0, 441, 1080, 1920),
			new Device("Huawei Nova", "CAN-L03", "", 5.0, 441, 1080, 1920),
			new Device("Huawei Nova", "CAN-L13", "", 5.0, 441, 1080, 1920),
			new Device("Huawei Nova", "CAZ-AL10", "", 5.0, 441, 1080, 1920),
			new Device("Huawei Nova", "CAZ-TL10", "", 5.0, 441, 1080, 1920),
				// Enjoy Series
			new Device("Huawei Enjoy 20 Plus 5G", "FRL-AN00", "", 6.63, 397, 1080, 2400), // FRL-AN00a
			new Device("Huawei Enjoy 20 SE", "PPA-AL20", "", 6.67, 395, 1080, 2400),
			new Device("Huawei Enjoy 20 Pro", "DVC-AN20", "", 6.5, 405, 1080, 2400),
			new Device("Huawei Enjoy 20 5G", "WKG-AN00", "", 6.6, 266, 720, 1600),
			new Device("Huawei Enjoy 10s", "AQM-AL00", "", 6.3, 418, 1080, 2400),
			new Device("Huawei Enjoy 10s", "AQM-TL00", "", 6.3, 418, 1080, 2400),
			new Device("Huawei Enjoy 10 Plus", "STK-AL00", "", 6.59, 391, 1080, 2340),
			new Device("Huawei Enjoy 10 Plus", "STK-TL00", "", 6.59, 391, 1080, 2340),
			new Device("Huawei Enjoy 10", "ART-TL00", "", 6.39, 269, 720, 1560),
			new Device("Huawei Enjoy 10", "ART-AL00", "", 6.39, 269, 720, 1560),
			new Device("Huawei Enjoy 9s", "POT-AL00", "", 6.21, 415, 1080, 2340),
			new Device("Huawei Enjoy 9s", "POT-TL00", "", 6.21, 415, 1080, 2340),
			new Device("Huawei Enjoy 9e", "MRD-AL00", "", 6.09, 282, 720, 1560),
			new Device("Huawei Enjoy 9e", "MRD-TL00", "", 6.09, 282, 720, 1560),
			new Device("Huawei Enjoy 6s", "DIG-L01", "", 5.0, 294, 720, 1280),
			new Device("Huawei Enjoy 6s", "DIG-L03", "", 5.0, 294, 720, 1280),
			new Device("Huawei Enjoy 6s", "DIG-L21", "", 5.0, 294, 720, 1280),
			new Device("Huawei Enjoy 6s", "DIG-L23", "", 5.0, 294, 720, 1280),
			new Device("Huawei Enjoy 6s", "DIG-AL00", "", 5.0, 294, 720, 1280),
			new Device("Huawei Enjoy 6s", "DIG-TL10", "", 5.0, 294, 720, 1280),
			new Device("Huawei Enjoy 6", "NCE-AL10", "", 5.0, 293, 720, 1280),
			new Device("Huawei Enjoy 6", "NCE-TL10", "", 5.0, 293, 720, 1280),
			new Device("Huawei Enjoy 6", "NCE-AL00", "", 5.0, 293, 720, 1280),
			new Device("Huawei Enjoy 6", "NCE-TL00", "", 5.0, 293, 720, 1280),
			new Device("Huawei Enjoy Z 5G", "DVC-AN00", "", 6.5, 405, 1080, 2400),
			// NOKIA
				// Android (HMD)
			new Device("Nokia 9 Pureview", "Nokia 9 Pureview", "", 5.99, 538, 1440, 2880),
			new Device("Nokia 8.3 5G", "Nokia 8.3 5G", "", 	6.8, 387, 1080, 2400),
			new Device("Nokia 8.1", "Nokia 8.1", "", 6.18, 408, 1080, 2280),
			new Device("Nokia 8 Sirocco", "Nokia 8 Sirocco", "", 5.5, 534, 1440, 2560),
			new Device("Nokia 8", "Nokia 8", "", 5.3, 554, 1440, 2560),
			new Device("Nokia 7.2", "Nokia 7.2", "", 6.3, 400, 1080, 2280),
			new Device("Nokia 7.1", "Nokia 7.1", "", 5.84, 432, 1080, 2280),
			new Device("Nokia 7 Plus", "Nokia 7 Plus", "", 6.0, 402, 1080, 2160),
			new Device("Nokia 7", "Nokia 7", "", 5.2, 424, 1080, 1920),
			new Device("Nokia 6.2", "Nokia 6.2", "", 6.3, 400, 1080, 1920),
			new Device("Nokia 6.1 Plus", "Nokia 6.1 Plus", "", 5.8, 435, 1080, 2280),
			new Device("Nokia 6.1", "Nokia 6.1", "", 5.5, 403, 1080, 1920),
			new Device("Nokia 6", "Nokia 6", "", 5.5, 403, 1080, 1920),
			new Device("Nokia 5.4", "Nokia 5.4", "", 6.39, 269, 720, 1560),
			new Device("Nokia 5.3", "Nokia 5.3", "", 6.55, 268, 720, 1600),
			new Device("Nokia 5.1 Plus", "Nokia 5.1 Plus", "", 5.86, 287, 720, 1520),
			new Device("Nokia 5.1", "Nokia 5.1", "", 5.5, 439, 1080, 2160),
			new Device("Nokia 5", "Nokia 5", "", 5.2, 282, 720, 1280),
			new Device("Nokia 4.2", "Nokia 4.2", "", 5.71, 295, 720, 1520),
			new Device("Nokia 3.4", "Nokia 3.4", "", 6.39, 269, 720, 1560),
			new Device("Nokia 3.2", "Nokia 3.2", "", 6.26, 274, 720, 1560),
			new Device("Nokia 3.1 Plus", "Nokia 3.1 Plus", "", 6.0, 268, 720, 1440),
			new Device("Nokia 3.1", "Nokia 3.1", "", 5.2, 310, 720, 1440),
			new Device("Nokia 3", "Nokia 3", "", 5.0, 294, 720, 1280),
			new Device("Nokia 2.4", "Nokia 2.4", "", 6.5, 270, 720, 1600),
			new Device("Nokia 2.4", "Nokia 2.4", "", 6.5, 270, 720, 1600),
			new Device("Nokia 2.3", "Nokia 2.3", "", 6.2, 277, 720, 1560),
			new Device("Nokia 2.2", "Nokia 2.2", "", 5.71, 295, 720, 1520),
			new Device("Nokia 2.1", "Nokia 2.1", "", 5.5, 267, 720, 1280),
			new Device("Nokia 2", "Nokia 2", "", 5.0, 294, 720, 1280),
			new Device("Nokia 1.4", "Nokia 1.4", "", 6.51, 269, 720, 1600),
			new Device("Nokia 1.3", "Nokia 1.3", "", 5.71, 295, 720, 1520),
			new Device("Nokia 1 Plus", "Nokia 1 Plus", "", 5.45, 197, 480, 960),
			new Device("Nokia 1", "Nokia 1", "", 4.5, 218, 480, 854),
			new Device("Nokia X20", "Nokia X20", "", 6.67, 394, 1080, 2400),
			new Device("Nokia X10", "Nokia X10", "", 6.67, 394, 1080, 2400),
			new Device("Nokia X5", "Nokia X5", "", 5.86, 287, 720, 1520),
			new Device("Nokia X6", "Nokia X6", "", 5.8, 435, 1080, 2280),
			new Device("Nokia X71", "Nokia X71", "", 6.39, 400, 1080, 2316),
			new Device("Nokia X7", "Nokia X7", "", 6.18, 408, 1080, 2280),
			new Device("Nokia G20", "Nokia G20", "", 6.5, 270, 720, 1600),
			new Device("Nokia G10", "Nokia G10", "", 6.5, 270, 720, 1600),
			new Device("Nokia C20 Plus", "Nokia C20 Plus", "", 6.52, 269, 720, 1600),
			new Device("Nokia C20", "Nokia C20", "", 6.52, 269, 720, 1600),
			new Device("Nokia C10", "Nokia C10", "", 6.52, 269, 720, 1600),
			new Device("Nokia C5", "Nokia C5", "", 6.52, 269, 720, 1600),
			new Device("Nokia C3", "Nokia C3", "", 5.99, 269, 720, 1440),
			new Device("Nokia C3", "Nokia C3", "", 5.99, 269, 720, 1440),
			new Device("Nokia C2", "Nokia C2", "", 5.7, 282, 720, 1440),
			new Device("Nokia C1 Plus", "Nokia C1 Plus", "", 5.45, 295, 720, 1440),
			new Device("Nokia C1", "Nokia C1", "", 5.45, 197, 480, 960),
				// Microsoft Lumia
			new Device("Microsoft Lumia 430", "Lumia 430", "", 4.0, 235, 480, 800),
			new Device("Microsoft Lumia 435", "Lumia 435", "", 4.0, 235, 480, 800),
			new Device("Microsoft Lumia 532", "Lumia 532", "", 4.0, 235, 480, 800),
			new Device("Microsoft Lumia 535", "Lumia 535", "", 5.0, 220, 540, 960),
			new Device("Microsoft Lumia 540", "Lumia 540", "", 5.0, 294, 720, 1280),
			new Device("Microsoft Lumia 550", "Lumia 550", "", 4.7, 315, 720, 1280),
			new Device("Microsoft Lumia 640 XL", "Lumia 640 XL", "", 5.7, 258, 720, 1280),
			new Device("Microsoft Lumia 640", "Lumia 640", "", 5.0, 294, 720, 1280),
			new Device("Microsoft Lumia 650", "Lumia 650", "", 5.0, 297, 720, 1280),
			new Device("Microsoft Lumia 950 XL", "Lumia 950 XL", "", 5.7, 518, 1440, 2560),
			new Device("Microsoft Lumia 950", "Lumia 950", "", 5.2, 564, 1440, 2560),
				// Nokia Lumia
			new Device("Nokia Lumia 505", "Lumia 505", "", 3.7, 252, 480, 800),
			new Device("Nokia Lumia 510", "Lumia 510", "", 4.0, 246, 480, 800),
			new Device("Nokia Lumia 520", "Lumia 520", "", 4.0, 246, 480, 800),
			new Device("Nokia Lumia 530", "Lumia 530", "", 4.0, 246, 480, 854),
			new Device("Nokia Lumia 610", "Lumia 610", "", 3.7, 252, 480, 800),
			new Device("Nokia Lumia 620", "Lumia 620", "", 3.8, 252, 480, 800),
			new Device("Nokia Lumia 630", "Lumia 630", "", 4.7, 201, 480, 800),
			new Device("Nokia Lumia 625", "Lumia 625", "", 4.5, 208, 480, 854),
			new Device("Nokia Lumia 710", "Lumia 710", "", 3.7, 252, 480, 800),
			new Device("Nokia Lumia 720", "Lumia 720", "", 4.3, 217, 480, 800),
			new Device("Nokia Lumia 730", "Lumia 730", "", 4.7, 315, 720, 1280),
			new Device("Nokia Lumia 800", "Lumia 800", "", 3.7, 252, 480, 800),
			new Device("Nokia Lumia 820", "Lumia 820", "", 4.3, 217, 480, 800),
			new Device("Nokia Lumia 830", "Lumia 830", "", 5.0, 294, 720, 1280),
			new Device("Nokia Lumia 900", "Lumia 900", "", 4.3, 217, 480, 800),
			new Device("Nokia Lumia 920", "Lumia 920", "", 4.5, 332, 768, 1280),
			new Device("Nokia Lumia 925", "Lumia 925", "", 4.5, 332, 768, 1280),
			new Device("Nokia Lumia 928", "Lumia 928", "", 4.5, 332, 768, 1280),
			new Device("Nokia Lumia 930", "Lumia 930", "", 5.0, 100, 1080, 1920),
			new Device("Nokia Lumia 1020", "Lumia 1020", "", 4.5, 334, 768, 1280),
			new Device("Nokia Lumia 1320", "Lumia 1320", "", 6.0, 245, 720, 1280),
			new Device("Nokia Lumia 1520", "Lumia 1520", "", 6.0, 367, 1080, 1920),
			new Device("Nokia Lumia 2520", "Lumia 2520", "", 10.1, 218, 1080, 1920),
			new Device("Nokia Lumia Icon", "Lumia Icon", "", 5.0, 441, 1080, 1920),
			new Device("Nokia Lumia Icon", "Lumia 929", "", 5.0, 441, 1080, 1920),
			// XIAOMI
				// Mi A
			new Device("Xiaomi Mi A3", "Mi A3", "", 6.01, 100, 720, 1560),
			new Device("Xiaomi Mi A2 Lite", "Mi A2 Lite", "", 5.84, 100, 1080, 2280),
			new Device("Xiaomi Mi A2", "Mi A2", "", 5.99, 100, 1080, 2160),
			new Device("Xiaomi Mi A1", "Mi A1", "", 5.5, 100, 1080, 1920),
				// Mi "Classics"
			new Device("Xiaomi Mi 1 Youth", "Mi 1 Youth", "", 4.0, 100, 480, 854),
			new Device("Xiaomi Mi 1S Youth", "Mi 1S Youth", "", 4.0, 100, 480, 854),
			new Device("Xiaomi Mi 1S", "Mi 1S", "", 4.0, 100, 480, 854),
			new Device("Xiaomi Mi 1", "Mi 1 Build", "", 4.0, 100, 480, 854),
			new Device("Xiaomi Mi 2A", "Mi 2A", "", 4.5, 100, 720, 1280),
			new Device("Xiaomi Mi 2S", "Mi 2S", "", 4.3, 100, 720, 1280),
			new Device("Xiaomi Mi 2", "Mi 2 Build", "", 4.3, 100, 720, 1280),
			new Device("Xiaomi Mi 3", "Mi 3 Build", "", 5.0, 100, 1080, 1920),
			new Device("Xiaomi Mi 4C", "Mi 4C", "", 5.0, 100, 1080, 1920),
			new Device("Xiaomi Mi 4I", "Mi 4I", "", 5.0, 100, 1080, 1920),
			new Device("Xiaomi Mi 4S", "Mi 4S", "", 5.0, 100, 1080, 1920),
			new Device("Xiaomi Mi 4", "Mi 4", "", 5.0, 100, 1080, 1920),
			new Device("Xiaomi Mi 5X", "Mi 5X", "", 5.5, 100, 1080, 1920),
			new Device("Xiaomi Mi 5C", "Mi 5C", "", 5.15, 100, 1080, 1920),
			new Device("Xiaomi Mi 5S Plus", "Mi 5S Plus", "", 5.7, 100, 1080, 1920),
			new Device("Xiaomi Mi 5S", "Mi 5S", "", 5.15, 100, 1080, 1920),
			new Device("Xiaomi Mi 5", "Mi 5", "", 5.15, 100, 1080, 1920),
			new Device("Xiaomi Mi 6X", "Mi 6X", "", 5.99, 100, 1080, 2160),
			new Device("Xiaomi Mi 6", "Mi 6", "", 5.15, 100, 1080, 1920),
			new Device("Xiaomi Mi 8 Lite", "Mi 8 Lite", "", 6.26, 100, 1080, 2280),
			new Device("Xiaomi Mi 8 SE", "Mi 8 SE", "", 5.88, 100, 1080, 2248),
			new Device("Xiaomi Mi 8 EE", "Mi 8 EE", "", 6.21, 100, 1080, 2248),
			new Device("Xiaomi Mi 8", "Mi 8", "", 6.21, 100, 1080, 2248),
			new Device("Xiaomi Mi 9T Pro", "Mi 9T Pro", "", 6.39, 100, 1080, 2340),
			new Device("Xiaomi Mi 9T", "Mi 9T", "", 6.39, 403, 1080, 2340),
			new Device("Xiaomi Mi 9 Pro", "Mi 9 Pro", "", 6.39, 100, 1080, 2340),
			new Device("Xiaomi Mi 9 SE", "Mi 9T", "", 5.97, 100, 1080, 2340),
			new Device("Xiaomi Mi 9 Explorer", "Mi 9 Explorer", "", 6.39, 403, 1080, 2340),
			new Device("Xiaomi Mi 9", "Mi 9", "", 6.39, 403, 1080, 2340),
			new Device("Xiaomi Mi 10 Lite", "Mi 10 Lite", "", 6.57, 100, 1080, 2400),
			new Device("Xiaomi Mi 10 Youth", "Mi 10 Youth", "", 6.57, 100, 1080, 2400),
			new Device("Xiaomi Mi 10i", "Mi 10i", "", 6.67, 100, 1080, 2400),
			new Device("Xiaomi Mi 10T Lite", "Mi 10T Lite", "", 6.67, 100, 1080, 2400),
			new Device("Xiaomi Mi 10T Pro", "Mi 10T Pro", "", 6.67, 100, 1080, 2400),
			new Device("Xiaomi Mi 10T", "Mi 10T", "", 6.67, 100, 1080, 2400),
			new Device("Xiaomi Mi 10S", "Mi 10S", "", 6.67, 100, 1080, 2340),
			new Device("Xiaomi Mi 10 Pro", "Mi 10 Pro", "", 6.67, 100, 1080, 2340),
			new Device("Xiaomi Mi 10 Ultra", "Mi 10 Ultra", "", 6.67, 100, 1080, 2340),
			new Device("Xiaomi Mi 10", "Mi 10", "", 6.67, 100, 1080, 2340),
			new Device("Xiaomi Mi 11i", "Mi 11 Lite", "", 6.67, 100, 1080, 2400),
			new Device("Xiaomi Mi 11 Lite", "Mi 11 Lite", "", 6.55, 100, 1080, 2400),
			new Device("Xiaomi Mi 11 Pro", "Mi 11 Pro", "", 6.81, 100, 1440, 3200),
			new Device("Xiaomi Mi 11 Ultra", "Mi 11 Ultra", "", 6.81, 100, 1440, 3200),
			new Device("Xiaomi Mi 11", "Mi 11", "", 6.81, 100, 1440, 3200),
				// Mi Note
			new Device("Xiaomi Mi Note 10", "MI NOTE 10", "", 6.47, 100, 1080, 2340),
			new Device("Xiaomi Mi Note 3", "MI NOTE 3", "", 5.5, 100, 1080, 1920),
			new Device("Xiaomi Mi Note 2", "MI NOTE 2", "", 5.7, 100, 1080, 1920),
			new Device("Xiaomi Mi Note", "MI NOTE", "", 5.7, 100, 1080, 1920),
			new Device("Xiaomi Mi Note Pro", "MI NOTE PRO", "", 5.7, 100, 1440, 2560),
				// Mi Max
			new Device("Xiaomi Mi Max Prime", "MI MAX PRIME", "", 6.44, 100, 1080, 1920),
			new Device("Xiaomi Mi Max 2", "MI MAX 2", "", 6.44, 100, 1080, 1920),
			new Device("Xiaomi Mi Max 3", "MI MAX 3", "", 6.9, 100, 1080, 2160),
			new Device("Xiaomi Mi Max", "MI MAX", "", 6.44, 100, 1080, 1920),
				// Mi Mix
			new Device("Mi Mix Fold", "Mi MIX Fold", "", 8.01, 100, 1860, 2480), // experimental : works only with main
			new Device("Mi Mix Alpha", "Mi MIX Alpha", "", 7.92, 100, 2088, 2250), // experimental
			new Device("Xiaomi Mi Mix 3", "MI MIX 3", "", 6.39, 100, 1080, 2160),
			new Device("Xiaomi Mi Mix 2S", "MI MIX 2S", "", 5.99, 100, 1080, 2160),
			new Device("Xiaomi Mi Mix 2", "MI MIX 2", "", 5.99, 100, 1080, 2160),
			new Device("Xiaomi Mi Mix", "MI MIX", "", 6.4, 100, 1080, 2040),
				// Rare Mi
			new Device("Xiaomi Mi CC9e", "Mi CC9e", "", 6.01, 100, 720, 1560),
			new Device("Xiaomi Mi CC9 Pro", "Mi CC9 Pro", "", 6.47, 100, 1080, 2340),
			new Device("Xiaomi Mi CC9", "Mi CC9", "", 6.39, 100, 1080, 2340),
			new Device("Xiaomi Mi Play", "Mi Play", "", 5.84, 100, 1080, 2280),
				// Poco
			new Device("Pocophone F1", "POCOPHONE F1", "", 6.18, 100, 1080, 2246),
			new Device("Poco F2 Pro", "POCO F2 Pro", "", 6.67, 100, 1080, 2400),
			new Device("Poco F3", "POCO F3", "", 6.67, 100, 1080, 2400),
			new Device("Poco X2", "POCO X2", "", 6.67, 100, 1080, 2400),
			new Device("Poco X3 NFC", "POCO X3 NFC", "", 6.67, 100, 1080, 2400),
			new Device("Poco X3 PRO", "POCO X3 PRO", "", 6.67, 100, 1080, 2400),
			new Device("Poco X3", "POCO X3", "", 6.67, 100, 1080, 2400),
			new Device("Poco M2 Pro", "POCO M2 Pro", "", 6.67, 100, 1080, 2400),
			new Device("Poco M2 Reloaded", "POCO M2 Reloaded", "", 6.53, 100, 1080, 2340),
			new Device("Poco M2", "POCO M2", "", 6.53, 100, 1080, 2340),
			new Device("Poco M3 Pro", "POCO M3 Pro", "", 6.5, 100, 1080, 2400),
			new Device("Poco M3", "POCO M3", "", 6.53, 100, 1080, 2340),
			new Device("Poco C3", "POCO C3", "", 6.43, 100, 720, 1600),
				// Redmi "Classics"
			new Device("Redmi 1S 4G", "Redmi 1S 4G", "", 4.7, 312, 720, 1280),
			new Device("Redmi 1S", "Redmi 1S", "", 4.7, 312, 720, 1280),
			new Device("Redmi 1", "Redmi 1 Build", "", 4.7, 312, 720, 1280),
			new Device("Redmi 2 Pro", "Redmi 2 Pro", "", 4.7, 312, 720, 1280),
			new Device("Redmi 2A", "Redmi 2A", "", 4.7, 312, 720, 1280),
			new Device("Redmi 2", "Redmi 2", "", 4.7, 312, 720, 1280),
			new Device("Redmi 3S Prime", "Redmi 3S Prime", "", 5.0, 294, 720, 1280),
			new Device("Redmi 3S", "Redmi 3S", "", 5.0, 294, 720, 1280),
			new Device("Redmi 3X", "Redmi 3X", "", 5.0, 294, 720, 1280),
			new Device("Redmi 3 Prime", "Redmi 3 Prime", "", 5.0, 294, 720, 1280),
			new Device("Redmi 3", "Redmi 3", "", 5.0, 294, 720, 1280),
			new Device("Redmi 4 Pro", "Redmi 4 Pro", "", 5.0, 441, 1080, 1920),
			new Device("Redmi 4 Prime", "Redmi 4 Prime", "", 5.0, 441, 1080, 1920),
			new Device("Redmi 4X", "Redmi 4X", "", 5.0, 294, 720, 1280),
			new Device("Redmi 4A", "Redmi 4A", "", 5.0, 296, 720, 1280),
			new Device("Redmi 4", "Redmi 4", "", 5.0, 296, 720, 1280),
			new Device("Redmi 5 Plus", "Redmi 5 Plus", "", 5.99, 100, 1080, 2160),
			new Device("Redmi 5A", "Redmi 5A", "", 5.0, 294, 720, 1280),
			new Device("Redmi 5", "Redmi 5", "", 5.7, 100, 720, 1440),
			new Device("Redmi 6 Pro", "Redmi 6 Pro", "", 5.84, 432, 1080, 2280),
			new Device("Redmi 6A", "Redmi 6A", "", 5.45, 295, 720, 1440),
			new Device("Redmi 6", "Redmi 6", "", 5.45, 295, 720, 1440),
			new Device("Redmi 7A", "Redmi 7A", "", 5.45, 295, 720, 1440),
			new Device("Redmi 7", "Redmi 7", "", 6.26, 269, 720, 1520),
			new Device("Redmi 8A Dual", "Redmi 8A Dual", "", 6.22, 270, 720, 1520),
			new Device("Redmi 8A Pro", "Redmi 8A Pro", "", 6.22, 270, 720, 1520),
			new Device("Redmi 8A", "Redmi 8A", "", 6.22, 270, 720, 1520),
			new Device("Redmi 8", "Redmi 8", "", 6.22, 270, 720, 1520),
			new Device("Redmi 9T", "Redmi 9T", "", 6.53, 395, 1080, 2340),
			new Device("Redmi 9 Power", "Redmi 9 Power", "", 6.53, 395, 1080, 2340),
			new Device("Redmi 9I", "Redmi 9i", "", 6.53, 269, 720, 1600),
			new Device("Redmi 9 (India)", "M2004C3MI", "", 6.53, 269, 720, 1600), // experimental
			new Device("Redmi 9C NFC", "Redmi 9C NFC", "", 6.53, 269, 720, 1600),
			new Device("Redmi 9C", "Redmi 9C", "", 6.53, 269, 720, 1600),
			new Device("Redmi 9 Prime", "Redmi 9 Prime", "", 6.53, 395, 1080, 2340),
			new Device("Redmi 9A", "Redmi 9A", "", 6.53, 269, 720, 1600),
			new Device("Redmi 9", "Redmi 9", "", 6.53, 395, 1080, 2340),
				// Rere Redmi Series
			new Device("Redmi Go", "Redmi Go", "", 5.0, 296, 720, 1440),
			new Device("Redmi Pro", "Redmi Pro", "", 5.5, 401, 1080, 1920),
			new Device("Redmi Y1 Lite", "Redmi Y1 Lite", "", 5.5, 267, 720, 1280),
			new Device("Redmi Y1", "Redmi Y1", "", 5.5, 267, 720, 1280),
			new Device("Redmi Y2", "Redmi Y2", "", 5.99, 269, 720, 1440),
			new Device("Redmi Y3", "Redmi Y3", "", 6.26, 269, 720, 1520),
			new Device("Redmi S2", "Redmi S2", "", 5.99, 269, 720, 1440),
				// Redmi K
			new Device("Redmi K20 Pro", "Redmi K20 Pro", "", 6.39, 403, 1080, 2340),
			new Device("Redmi K20 Premium", "Redmi K20 Premium", "", 6.39, 403, 1080, 2340),
			new Device("Redmi K20", "Redmi K20", "", 6.39, 403, 1080, 2340),
			new Device("Redmi K30I 5G", "Redmi K30I 5G", "", 6.67, 100, 1080, 2400),
			new Device("Redmi K30 Pro Zoom", "Redmi K30 Pro Zoom", "", 6.67, 100, 1080, 2400),
			new Device("Redmi K30 Pro", "Redmi K30 Pro", "", 6.67, 100, 1080, 2400),
			new Device("Redmi K30 Ultra", "Redmi K30 Ultra", "", 6.67, 100, 1080, 2400),
			new Device("Redmi K30 5G Racing", "Redmi K30 5G Racing", "", 6.67, 100, 1080, 2400),
			new Device("Redmi K30 5G", "Redmi K30 5G", "", 6.67, 100, 1080, 2400),
			new Device("Redmi K30S", "Redmi K30S", "", 6.67, 100, 1080, 2400),
			new Device("Redmi K30", "Redmi K30", "", 6.67, 100, 1080, 2400),
			new Device("Redmi K40 Pro+", "Redmi K40 Pro Plus", "", 6.67, 100, 1080, 2400),
			new Device("Redmi K40 Pro", "Redmi K40 Pro", "", 6.67, 100, 1080, 2400),
			new Device("Redmi K40", "Redmi K40", "", 6.67, 100, 1080, 2400),
				// Redmi Note
			new Device("Redmi Note", "Redmi Note Build", "", 5.5, 267, 720, 1280),
			new Device("Redmi Note 2", "Redmi Note 2", "", 5.5, 403, 1080, 1920),
			new Device("Redmi Note 3", "Redmi Note 3", "", 5.5, 403, 1080, 1920),
			new Device("Redmi Note 4X", "Redmi Note 4X", "", 5.5, 403, 1080, 1920),
			new Device("Redmi Note 4", "Redmi Note 4", "", 5.5, 403, 1080, 1920),
			new Device("Redmi Note 5A Prime", "Redmi Note 5A Prime", "", 5.5, 267, 720, 1280),
			new Device("Redmi Note 5A", "Redmi Note 5A", "", 5.5, 267, 720, 1280),
			new Device("Redmi Note 5 Pro", "Redmi Note 5 Pro", "", 5.99, 100, 1080, 2160),
			new Device("Redmi Note 5", "Redmi Note 5", "", 5.99, 100, 1080, 2160),
			new Device("Redmi Note 6 Pro", "Redmi Note 6 Pro", "", 6.26, 100, 1080, 2280),
			new Device("Redmi Note 7 Pro", "Redmi Note 7 Pro", "", 6.3, 100, 1080, 2340),
			new Device("Redmi Note 7S", "Redmi Note 7S", "", 6.3, 100, 1080, 2340),
			new Device("Redmi Note 7", "Redmi Note 7", "", 6.3, 100, 1080, 2340),
			new Device("Redmi Note 8 Pro", "Redmi Note 8 Pro", "", 6.53, 100, 1080, 2340),
			new Device("Redmi Note 8T", "Redmi Note 8T", "", 6.3, 100, 1080, 2340),
			new Device("Redmi Note 8", "Redmi Note 8", "", 6.3, 100, 1080, 2340),
			new Device("Redmi Note 9 Pro 5G", "Redmi Note 9 Pro 5G", "", 6.67, 100, 1080, 2400),
			new Device("Redmi Note 9 Pro Max", "Redmi Note 9 Pro Max", "", 6.67, 100, 1080, 2400),
			new Device("Redmi Note 9 Pro", "Redmi Note 9 Pro", "", 6.67, 100, 1080, 2400),
			new Device("Redmi Note 9S", "Redmi Note 9S", "", 6.67, 100, 1080, 2400),
			new Device("Redmi Note 9T", "Redmi Note 9T", "", 6.53, 100, 1080, 2400),
			new Device("Redmi Note 9 5G", "Redmi Note 9 5G", "", 6.53, 100, 1080, 2400),
			new Device("Redmi Note 9", "Redmi Note 9", "", 6.53, 100, 1080, 2400),
			new Device("Redmi Note 10 Pro Max", "Redmi Note 10 Pro Max", "", 6.67, 100, 1080, 2400),
			new Device("Redmi Note 10 Pro", "Redmi Note 10 Pro", "", 6.67, 100, 1080, 2400),
			new Device("Redmi Note 10S", "Redmi Note 10S", "", 6.43, 100, 1080, 2400),
			new Device("Redmi Note 10", "Redmi Note 10", "", 6.43, 100, 1080, 2400),
				// Redmi X
			new Device("Redmi 10X Pro 5G", "Redmi 10X Pro 5G", "", 6.5, 395, 1080, 2400),
			new Device("Redmi 10X 5G", "Redmi 10X 5G", "", 6.5, 395, 1080, 2400),
			new Device("Redmi 10X Pro", "Redmi 10X Pro", "", 6.57, 395, 1080, 2340),
			new Device("Redmi 10X", "Redmi 10X", "", 6.57, 395, 1080, 2340),
				// Xiaomi Black Shark
			new Device("Black Shark", "SKW-H0", "", 5.99, 403, 1080, 2160),
			new Device("Black Shark Helo", "AWM-A0", "", 6.01, 403, 1080, 2160),
			new Device("Black Shark 2", "SKW-A0", "", 6.39, 403, 1080, 2340),
			new Device("Black Shark 2 Pro", "DLT-H0", "", 6.39, 403, 1080, 2340),
			//new Device("Black Shark 3S", "SHARK MBU-H0", "", 6.67, 395, 1080, 2400), // user-agent ???
			//new Device("Black Shark 3", "SHARK MBU-H0", "", 6.67, 395, 1080, 2400), // user-agent ???
			new Device("Black Shark 3 Pro", "SHARK MBU-H0", "", 7.1, 484, 1440, 3120),
			// OnePlus
			new Device("OnePlus One", "MI-ONEPlus", "", 5.46, 401, 1080, 1920),
			new Device("OnePlus Two", "OnePlus Two", "", 5.46, 401, 1080, 1920),
			new Device("OnePlus X", "OnePlus X", "", 5, 441, 1080, 1920),
			new Device("OnePlus 3T", "OnePlus 3T", "", 5.46, 401, 1080, 1920),
			new Device("OnePlus 3T", "OnePlus3T", "", 5.46, 401, 1080, 1920),
			new Device("OnePlus 3", "OnePlus 3", "", 5.46, 401, 1080, 1920),
			new Device("OnePlus 3", "OnePlus3", "", 5.46, 401, 1080, 1920),
			new Device("OnePlus 5", "ONEPLUS A5000", "", 5.46, 401, 1080, 1920),
			new Device("OnePlus 5T", "ONEPLUS A5010", "", 6.01, 401, 1080, 2160),
			new Device("OnePlus 5T", "OnePlus 5T", "", 6.01, 401, 1080, 2160),
			new Device("OnePlus 5T", "OnePlus5T", "", 6.01, 401, 1080, 2160),
			new Device("OnePlus 6T", "OnePlus6T", "", 6.41, 402, 1080, 2340),
			new Device("OnePlus 6T", "ONEPLUS 6T", "", 6.41, 402, 1080, 2340),
			new Device("OnePlus 6T", "ONEPLUS A6010", "", 6.41, 402, 1080, 2340),
			new Device("OnePlus 6T", "ONEPLUS A6013", "", 6.41, 402, 1080, 2340),
			new Device("OnePlus 6", "OnePlus6", "", 6.28, 402, 1080, 2280),
			new Device("OnePlus 6", "ONEPLUS 6", "", 6.28, 402, 1080, 2280),
			new Device("OnePlus 7T Pro", "OnePlus 7TPro", "", 6.67, 516, 1440, 3120),
			new Device("OnePlus 7T Pro", "OnePlus7TPro", "", 6.67, 516, 1440, 3120),
			new Device("OnePlus 7T", "OnePlus 7T", "", 6.55, 402, 1080, 2400),
			new Device("OnePlus 7T", "OnePlus7T", "", 6.55, 402, 1080, 2400),
			new Device("OnePlus 7 Pro", "OnePlus 7Pro", "", 6.67, 516, 1440, 3120),
			new Device("OnePlus 7 Pro", "OnePlus7Pro", "", 6.67, 516, 1440, 3120),
			new Device("OnePlus 7", "OnePlus 7", "", 6.41, 402, 1080, 2340),
			new Device("OnePlus 7", "OnePlus7", "", 6.41, 402, 1080, 2340),
			new Device("OnePlus 8 Pro", "OnePlus 8Pro", "", 6.78, 513, 1440, 3168),
			new Device("OnePlus 8 Pro", "OnePlus8Pro", "", 6.78, 513, 1440, 3168),
			new Device("OnePlus 8T", "OnePlus 8T", "", 6.55, 402, 1080, 2400),
			new Device("OnePlus 8T", "OnePlus8TTMO", "", 6.55, 402, 1080, 2400),
			new Device("OnePlus 8", "OnePlus 8", "", 6.55, 402, 1080, 2400),
			new Device("OnePlus 8", "OnePlus8TMO", "", 6.55, 402, 1080, 2400),
			new Device("OnePlus 9 Pro", "OnePlus 9Pro", "", 6.7, 525, 1440, 3216),
			new Device("OnePlus 9 Pro", "OnePlus9Pro", "", 6.7, 525, 1440, 3216),
			new Device("OnePlus 9", "OnePlus 9", "", 6.55, 402, 1080, 2400),
			new Device("OnePlus 9", "OnePlus9TMO", "", 6.55, 402, 1080, 2400),
			new Device("OnePlus Nord", "OnePlus Nord", "", 6.44, 408, 1080, 2400),
			new Device("OnePlus Nord N100", "OnePlusN100", "", 6.52, 269, 720, 1600),
			new Device("OnePlus Nord N10", "OnePlusN10", "", 6.49, 406, 1080, 2400),
			// Samsung
				// Galaxy S
			new Device("Samsung Galaxy S", "GT-I9000", "", 4.0, 233, 480, 800),
			new Device("Samsung Galaxy S2", "GT-I9100", "", 4.3, 217, 480, 800),
			new Device("Samsung Galaxy S3", "GT-I9300", "", 4.8, 306, 720, 1280),
			new Device("Samsung Galaxy S4", "SCH-I545", "", 5.0, 441, 1080, 1920),
			new Device("Samsung Galaxy S5", "SM-G900V", "", 5.1, 432, 1080, 1920),
			new Device("Samsung Galaxy S6", "SM-G920V", "", 5.1, 576, 1440, 2560),
			new Device("Samsung Galaxy S6 Edge", "SM-G925F", "", 5.1, 576, 1440, 2560),
			new Device("Samsung Galaxy S6 Edge +", "SM-G928F", "", 5.7, 515, 1440, 2560),
			new Device("Samsung Galaxy S7", "SM-G930VC", "", 5.1, 576, 1440, 2560),
			new Device("Samsung Galaxy S7 Edge", "SM-G935S", "", 5.5, 534, 1440, 2560),
			new Device("Samsung Galaxy S8+", "SM-G955F", "", 6.2, 531, 1440, 2960),
			new Device("Samsung Galaxy S9", "SM-G960F", "", 5.8, 568, 1440, 2960),
			new Device("Samsung Galaxy S9+", "SM-G965F", "", 6.2, 531, 1440, 2960),
			new Device("Samsung Galaxy S10e", "SM-G975F", "", 5.8, 438, 1080, 2280),
			new Device("Samsung Galaxy S10", "SM-G973F", "", 6.1, 550, 1440, 3040),
			new Device("Samsung Galaxy S10+", "SM-G975F", "", 6.4, 526, 1440, 3040),
			new Device("Samsung Galaxy S10 5G", "SM-G977N", "", 6.7, 502, 1440, 3040),
			new Device("Samsung Galaxy S20", "SM-G981B", "", 6.2, 563, 1440, 3200),
			new Device("Samsung Galaxy S20+", "SM-G986U", "", 6.7, 525, 1440, 3200),
			new Device("Samsung Galaxy S20 Ultra", "SM-G988U", "", 6.9, 509, 1440, 3200),
			new Device("Samsung Galaxy S21", "SM-G991", "", 6.2, 421, 1080, 2400),
			new Device("Samsung Galaxy S21+", "SM-G996", "", 6.7, 394, 1080, 2400),
			new Device("Samsung Galaxy S21 Ultra", "SM-G998", "", 6.8, 515, 1440, 3200),
				// Galaxy Z
			new Device("Samsung Galaxy Z Fold", "SM-F900U", "", 7.3, 414, 1536, 2152),
			new Device("Samsung Galaxy Z Flip", "SM-F700", "", 6.7, 425, 1080, 2636),
			new Device("Samsung Galaxy Z Flip", "SM-F707", "", 6.7, 425, 1080, 2636),
			new Device("Samsung Galaxy Z Flip", "SCV47", "", 6.7, 425, 1080, 2636),
			new Device("Samsung Galaxy Z Flip", "SCG04", "", 6.7, 425, 1080, 2636),
			new Device("Samsung Galaxy Z Fold 2", "SM-F916B", "", 7.6, 373, 1768, 2208),
			new Device("Samsung Galaxy Z Fold 2", "SM-W2021", "", 7.6, 373, 1768, 2208),
			new Device("Samsung Galaxy Z Fold 2", "SCG05", "", 7.6, 373, 1768, 2208),
				// Galaxy A
			new Device("Samsung Galaxy Alpha", "SM-G850", "", 4.7, 312, 720, 1280),
			new Device("Samsung Galaxy A2 Core", "SM-A260", "", 5.0, 220, 540, 960),
			new Device("Samsung Galaxy A3 (2015)", "SM-A300", "", 4.5, 245, 540, 960),
			new Device("Samsung Galaxy A3 (2016)", "SM-A310", "", 4.7, 312, 720, 1280),
			new Device("Samsung Galaxy A3 (2017)", "SM-A320", "", 4.7, 312, 720, 1280),
			new Device("Samsung Galaxy A5 (2015)", "SM-A500", "", 5.0, 294, 720, 1280),
			new Device("Samsung Galaxy A5 (2016)", "SM-A510", "", 5.2, 424, 1080, 1920),
			new Device("Samsung Galaxy A5 (2017)", "SM-A520", "", 5.2, 424, 1080, 1920),
			new Device("Samsung Galaxy A6 (2018)", "SM-A600", "", 5.6, 287, 720, 1480),
			new Device("Samsung Galaxy A6+ (2018)", "SM-A605", "", 5.6, 411, 1080, 2160),
			new Device("Samsung Galaxy A6S", "SM-G620", "", 6.0, 402, 1080, 2160),
			new Device("Samsung Galaxy A7 (2015)", "SM-A700", "", 5.5, 401, 1080, 1920),
			new Device("Samsung Galaxy A7 (2016)", "SM-A710", "", 5.5, 401, 1080, 1920),
			new Device("Samsung Galaxy A7 (2017)", "SM-A720", "", 5.7, 386, 1080, 1920),
			new Device("Samsung Galaxy A7 (2018)", "SM-A750", "", 6.0, 411, 1080, 2220),
			new Device("Samsung Galaxy A8 (2015)", "SM-A800", "", 5.7, 386, 1080, 1920),
			new Device("Samsung Galaxy A8 (2016)", "SM-A810", "", 5.7, 386, 1080, 1920),
			new Device("Samsung Galaxy A8 (2018)", "SM-A530", "", 5.6, 441, 1080, 2220),
			new Device("Samsung Galaxy A8+ (2018)", "SM-A730", "", 6.0, 411, 1080, 2220),
			new Device("Samsung Galaxy A8 Star", "SM-G885", "", 6.3, 392, 1080, 2220),
			new Device("Samsung Galaxy A8S", "SM-G8870", "", 6.4, 403, 1080, 2340),
			new Device("Samsung Galaxy A9 (2016)", "SM-A900", "", 6.0, 367, 1080, 1920),
			new Device("Samsung Galaxy A9 Pro (2016)", "SM-A910", "", 6.0, 367, 1080, 1920),
			new Device("Samsung Galaxy A9S (2018)", "SM-A9200", "", 6.3, 392, 1080, 2220),
			new Device("Samsung Galaxy A9 (2018)", "SM-A920", "", 6.3, 392, 1080, 2220),
			new Device("Samsung Galaxy A01 Core", "SM-A013", "", 5.3, 311, 720, 1480),
			new Device("Samsung Galaxy A01", "SM-A015", "", 5.7, 295, 720, 1520),
			new Device("Samsung Galaxy A02", "SM-A022", "", 6.5, 270, 720, 1600),
			new Device("Samsung Galaxy A02S", "SM-A025", "", 6.5, 270, 720, 1600),
			new Device("Samsung Galaxy A10", "SM-A105", "", 6.22, 271, 720, 1520),
			new Device("Samsung Galaxy A10S", "SM-A107", "", 6.22, 271, 720, 1520),
			new Device("Samsung Galaxy A10E", "SM-A102", "", 5.83, 295, 720, 1560),
			new Device("Samsung Galaxy A10E", "SM-S102", "", 5.83, 295, 720, 1560),
			new Device("Samsung Galaxy A11", "SM-A115", "", 6.4, 268, 720, 1560),
			new Device("Samsung Galaxy A12", "SM-A125", "", 6.4, 268, 720, 1560),
			new Device("Samsung Galaxy A20E", "SM-A202", "", 5.83, 295, 720, 1560),
			new Device("Samsung Galaxy A20", "SM-A205", "", 6.4, 268, 720, 1560),
			new Device("Samsung Galaxy A20S", "SM-A207", "", 6.5, 264, 720, 1560),
			new Device("Samsung Galaxy A21 (Japan)", "SC-42A", "", 5.83, 295, 720, 1560),
			new Device("Samsung Galaxy A21", "SM-A215", "", 6.5, 270, 720, 1600),
			new Device("Samsung Galaxy A21S", "SM-A217", "", 6.5, 270, 720, 1600),
			new Device("Samsung Galaxy A22", "SM-A225", "", 6.4, 273, 720, 1600),
			new Device("Samsung Galaxy A22 5G", "SM-A226", "", 6.6, 399, 1080, 2400),
			new Device("Samsung Galaxy A30", "SM-A305", "", 6.4, 403, 1080, 2340),
			new Device("Samsung Galaxy A30", "SCV43", "", 6.4, 403, 1080, 2340),
			new Device("Samsung Galaxy A30S", "SM-A307", "", 6.4, 268, 720, 1560),
			new Device("Samsung Galaxy A31", "SM-A315", "", 6.4, 403, 1080, 2400),
			new Device("Samsung Galaxy A32", "SM-A325", "", 6.4, 411, 1080, 2400),
			new Device("Samsung Galaxy A32 5G", "SM-A326", "", 6.5, 270, 720, 1600),
			new Device("Samsung Galaxy A40", "SM-A405", "", 5.9, 437, 1080, 2340),
			new Device("Samsung Galaxy A41", "SM-A415", "", 6.1, 431, 1080, 2400),
			new Device("Samsung Galaxy A41", "SCV48", "", 6.1, 431, 1080, 2400),
			new Device("Samsung Galaxy A41", "SC-41A", "", 6.1, 431, 1080, 2400),
			new Device("Samsung Galaxy A42", "SM-A426", "", 6.6, 257, 720, 1600),
			new Device("Samsung Galaxy A50", "SM-A505", "", 6.4, 403, 1080, 2340),
			new Device("Samsung Galaxy A51", "SM-A515", "", 6.5, 405, 1080, 2400),
			new Device("Samsung Galaxy A51", "SM-A516", "", 6.5, 405, 1080, 2400),
			new Device("Samsung Galaxy A51", "SCG07", "", 6.5, 405, 1080, 2400),
			new Device("Samsung Galaxy A51", "SC-54A", "", 6.5, 405, 1080, 2400),
			new Device("Samsung Galaxy A52", "SM-A525", "", 6.5, 405, 1080, 2400),
			new Device("Samsung Galaxy A52", "SM-A526", "", 6.5, 405, 1080, 2400),
			new Device("Samsung Galaxy A60", "SM-A605", "", 6.3, 409, 1080, 2340),
			new Device("Samsung Galaxy M40", "SM-M405", "", 6.3, 409, 1080, 2340),
			new Device("Samsung Galaxy A70", "SM-A705", "", 6.7, 393, 1080, 2400),
			new Device("Samsung Galaxy A70S", "SM-A707", "", 6.7, 393, 1080, 2400),
			new Device("Samsung Galaxy A71", "SM-A715", "", 6.7, 393, 1080, 2400),
			new Device("Samsung Galaxy A71", "SM-A716", "", 6.7, 393, 1080, 2400),
			new Device("Samsung Galaxy A72", "SM-A725", "", 6.7, 393, 1080, 2400),
			new Device("Samsung Galaxy A80", "SM-A805", "", 6.7, 393, 1080, 2400),
			new Device("Samsung Galaxy A90", "SM-A908", "", 6.7, 393, 1080, 2400),
				// Galaxy C
			new Device("Samsung Galaxy C5", "SM-C500", "", 5.2, 424, 1080, 1920),
			new Device("Samsung Galaxy C5 Pro", "SM-C501", "", 5.2, 424, 1080, 1920),
			new Device("Samsung Galaxy J7+", "SM-C710F", "", 5.5, 401, 1080, 1920),
			new Device("Samsung Galaxy C7", "SM-C710", "", 5.7, 386, 1080, 1920),
			new Device("Samsung Galaxy C8", "SM-C710", "", 5.5, 401, 1080, 1920),
			new Device("Samsung Galaxy C9 Pro", "SM-C900", "", 6.0, 367, 1080, 1920),
				// Galaxy F
			new Device("Samsung Galaxy F12", "SM-F127", "", 6.5, 270, 720, 1600),
			new Device("Samsung Galaxy F41", "SM-F415", "", 6.4, 403, 1080, 2340),
			new Device("Samsung Galaxy F62", "SM-E625", "", 6.7, 385, 1080, 2400),
				// Galaxy G
			new Device("Samsung Galaxy Folder", "SM-G150", "", 3.8, 246, 480, 800),
			new Device("Samsung Galaxy Folder", "SM-G160", "", 3.8, 246, 480, 800),
			new Device("Samsung Galaxy Star 2 Plus", "SM-G350", "", 4.3, 217, 480, 800),
			new Device("Samsung Galaxy Core", "SM-G386", "", 4.5, 178, 480, 640),
			new Device("Samsung Galaxy Xcover", "SM-G569", "", 3.65, 158, 320, 480),
			new Device("Samsung Galaxy Xcover 2", "SM-G771", "", 4.0, 233, 480, 800),
			new Device("Samsung Galaxy Xcover 3", "SM-G388", "", 4.5, 207, 480, 800),
			new Device("Samsung Galaxy Xcover 3", "SM-G389", "", 4.5, 207, 480, 800),
			new Device("Samsung Galaxy Xcover 4", "SM-G390", "", 5.0, 294, 720, 1280),
			new Device("Samsung Galaxy Xcover Pro", "SM-G715", "", 6.3, 409, 1080, 2340),
			new Device("Samsung Galaxy Grand", "GT-I908", "", 5.0, 187, 480, 800),
			new Device("Samsung Galaxy Grand Prime", "SM-G530", "", 5.0, 220, 540, 960),
			new Device("Samsung Galaxy Grand Prime", "SM-G531", "", 5.0, 220, 540, 960),
			new Device("Samsung Galaxy Grand Max", "SM-G720", "", 5.25, 278, 720, 1280),
			new Device("Samsung Galaxy Grand 2", "SM-G710", "", 5.25, 278, 720, 1280),
			new Device("Samsung Galaxy Mega 5.8", "GT-I9152", "", 5.8, 190, 540, 960),
			new Device("Samsung Galaxy Mega 6.3", "GT-I9200", "", 6.3, 233, 720, 1280),
			new Device("Samsung Galaxy Mega 2", "GT-I9200", "", 6.0, 245, 720, 1280),
			new Device("Samsung Galaxy S4 Active", "GT-I9295", "", 5.0, 441, 1080, 1920),
			new Device("Samsung Galaxy S5 Sport", "SM-G860", "", 5.1, 432, 1080, 1920),
			new Device("Samsung Galaxy S5 Active", "SM-G870", "", 5.1, 432, 1080, 1920),
			new Device("Samsung Galaxy S6 Active", "SM-G890", "", 5.1, 576, 1440, 2560),
			new Device("Samsung Galaxy S7 Active", "SM-G891", "", 5.1, 576, 1440, 2560),
			new Device("Samsung Galaxy S8 Active", "SM-G892", "", 5.8, 568, 1440, 2960),
			new Device("Samsung Galaxy S3 Mini", "GT-I8200", "", 4.0, 233, 480, 800),
			new Device("Samsung Galaxy S3 Mini", "GT-I8190", "", 4.0, 233, 480, 800),
			new Device("Samsung Galaxy S4 Mini", "GT-i9195", "", 4.3, 256, 540, 960),
			new Device("Samsung Galaxy S5 Mini", "SM-G800", "", 4.5, 326, 720, 1280),
				// Galaxy J
			new Device("Samsung Galaxy J1 (2015)", "SM-J100", "", 4.3, 100, 480, 800),
			new Device("Samsung Galaxy J1 Ace", "SM-J110", "", 4.3, 100, 480, 800),
			new Device("Samsung Galaxy J1 Ace Neo", "SM-J111", "", 4.3, 100, 480, 800),
			new Device("Samsung Galaxy J1 Mini", "SM-J105", "", 4.0, 100, 480, 800),
			new Device("Samsung Galaxy J1 Mini Prime", "SM-J106", "", 4.0, 100, 480, 800),
			new Device("Samsung Galaxy J1 (2016)", "SM-J120", "", 4.5, 100, 480, 800),
			new Device("Samsung Galaxy J2 (2015)", "SM-J200", "", 4.7, 100, 540, 960),
			new Device("Samsung Galaxy J2 Prime", "SM-G532", "", 5.0, 100, 540, 960),
			new Device("Samsung Galaxy J2 (2016)", "SM-J210", "", 5.0, 100, 720, 1280),
			new Device("Samsung Galaxy J2 (2017)", "SM-J200", "", 4.7, 100, 540, 960),
			new Device("Samsung Galaxy J2 (2018)", "SM-J250", "", 5.0, 100, 540, 960),
			new Device("Samsung Galaxy J2 Core (2020)", "SM-J260GU", "", 5.0, 100, 540, 960),
			new Device("Samsung Galaxy J2 Core (2018)", "SM-J260", "", 5.0, 100, 540, 960),
			new Device("Samsung Galaxy J3 (2016)", "SM-J320", "", 5.0, 100, 720, 1280),
			new Device("Samsung Galaxy J3 Pro (2016)", "SM-J3110", "", 5.0, 100, 720, 1280),
			new Device("Samsung Galaxy J3 Prime", "SM-J327", "", 5.0, 100, 720, 1280),
			new Device("Samsung Galaxy J3 (2017)", "SM-J330", "", 5.0, 100, 720, 1280),
			new Device("Samsung Galaxy J3 (2018)", "SM-J337", "", 5.0, 100, 720, 1280),
			new Device("Samsung Galaxy J4", "SM-J320", "", 5.5, 100, 720, 1280),
			new Device("Samsung Galaxy J4+", "SM-J415", "", 6.0, 100, 720, 1480),
			new Device("Samsung Galaxy J4 Core", "SM-J410", "", 6.0, 100, 720, 1480),
			new Device("Samsung Galaxy J5 (2015)", "SM-J500", "", 5.0, 100, 720, 1280),
			new Device("Samsung Galaxy J5 (2016)", "SM-J510", "", 5.2, 100, 720, 1280),
			new Device("Samsung Galaxy J5 Prime", "SM-G570", "", 5.0, 100, 720, 1280),
			new Device("Samsung Galaxy J5 (2017)", "SM-J530", "", 5.2, 100, 720, 1280),
			new Device("Samsung Galaxy J6", "SM-J600", "", 5.6, 100, 720, 1480),
			new Device("Samsung Galaxy J6+", "SM-J610", "", 5.6, 100, 720, 1480),
			new Device("Samsung Galaxy J7 (2015)", "SM-J700", "", 5.5, 100, 720, 1280),
			new Device("Samsung Galaxy J7 (2016)", "SM-J710", "", 5.5, 100, 720, 1280),
			new Device("Samsung Galaxy J7 Prime", "SM-G610", "", 5.5, 100, 1080, 1920),
			new Device("Samsung Galaxy J7 (2017)", "SM-J730", "", 5.5, 100, 1080, 1920),
			new Device("Samsung Galaxy J7+", "SM-C710", "", 5.5, 100, 1080, 1920),
			new Device("Samsung Galaxy J7 Max", "SM-G615", "", 5.7, 100, 1080, 1920),
			new Device("Samsung Galaxy J7 Core", "SM-J701", "", 5.5, 100, 720, 1280),
			new Device("Samsung Galaxy J7 V", "SM-J727", "", 5.5, 100, 720, 1280),
			new Device("Samsung Galaxy J7 (2018)", "SM-J737", "", 5.5, 100, 720, 1280),
			new Device("Samsung Galaxy J7 Duo", "SM-J720", "", 5.5, 100, 720, 1280),
			new Device("Samsung Galaxy J7 Prime 2", "SM-G611", "", 5.5, 100, 1080, 1920),
			new Device("Samsung Galaxy J7 Crown", "SM-S767VL", "", 5.5, 100, 720, 1280),
			new Device("Samsung Galaxy J8", "SM-J810", "", 6.0, 100, 720, 1480),
			new Device("Samsung Galaxy J Max", "SM-T285YD", "", 7.0, 100, 800, 1280),
				// Galaxy M
			new Device("Samsung Galaxy M01", "SM-M015", "", 5.7, 295, 720, 1520),
			new Device("Samsung Galaxy M02", "SM-M022", "", 6.5, 295, 720, 1600),
			new Device("Samsung Galaxy M02S", "SM-M025", "", 6.5, 295, 720, 1600),
			new Device("Samsung Galaxy M01S", "SM-M017", "", 6.2, 271, 720, 1520),
			new Device("Samsung Galaxy M10", "SM-M105", "", 6.22, 270, 720, 1520),
			new Device("Samsung Galaxy M10S", "SM-M107", "", 6.4, 263, 720, 1520),
			new Device("Samsung Galaxy M11", "SM-M115", "", 6.4, 263, 720, 1520),
			new Device("Samsung Galaxy M12", "SM-M127", "", 6.5, 295, 720, 1600),
			new Device("Samsung Galaxy M20", "SM-M205", "", 6.3, 409, 1080, 2340),
			new Device("Samsung Galaxy M21", "SM-F415", "", 6.4, 403, 1080, 2340),
			new Device("Samsung Galaxy M21S", "SM-M205", "", 6.4, 403, 1080, 2340),
			new Device("Samsung Galaxy M30", "SM-M305", "", 6.4, 403, 1080, 2340),
			new Device("Samsung Galaxy M31", "SM-M315", "", 6.4, 403, 1080, 2340),
			new Device("Samsung Galaxy M31S", "SM-M317", "", 6.5, 405, 1080, 2400),
			new Device("Samsung Galaxy M30S", "SM-M307", "", 6.4, 403, 1080, 2340),
			new Device("Samsung Galaxy M40", "SM-M405", "", 6.3, 409, 1080, 2340),
			new Device("Samsung Galaxy M42", "SM-M42", "", 6.6, 266, 720, 1600),
			new Device("Samsung Galaxy M51", "SM-M515", "", 6.7, 385, 1080, 2400),
			new Device("Samsung Galaxy M62", "SM-​M625", "", 6.7, 385, 1080, 2400),
				// Galaxy Note
			new Device("Samsung Galaxy Note", "GT-N700", "", 5.3, 285, 800, 1280),
			new Device("Samsung Galaxy Note", "SGH-I717", "", 5.3, 285, 800, 1280),
			new Device("Samsung Galaxy Note 2", "GT-N710", "", 5.5, 267, 720, 1280),
			new Device("Samsung Galaxy Note 2", "SCH-I605", "", 5.5, 267, 720, 1280),
			new Device("Samsung Galaxy Note 2", "SGH-I317", "", 5.5, 267, 720, 1280),
			new Device("Samsung Galaxy Note 2", "SGH-T889", "", 5.5, 267, 720, 1280),
			new Device("Samsung Galaxy Note 2", "SPH-L900", "", 5.5, 267, 720, 1280),
			new Device("Samsung Galaxy Note 3", "SM-N900", "", 5.7, 386, 1080, 1920),
			new Device("Samsung Galaxy Note 3 Neo", "SM-N750", "", 5.5, 267, 720, 1280),
			new Device("Samsung Galaxy Note 4", "SM-N910", "", 5.7, 515, 1440, 2560),
			new Device("Samsung Galaxy Note 5", "SM-N920", "", 5.7, 515, 1440, 2560),
			new Device("Samsung Galaxy Note 7", "SM-N930", "", 5.7, 515, 1440, 2560),
			new Device("Samsung Galaxy Note Edge", "SM-N915", "", 5.6, 525, 1440, 2560), // 2014
			new Device("Samsung Galaxy Note 8", "SM-N950", "", 6.3, 522, 1440, 2960),
			new Device("Samsung Galaxy Note 9", "SM-N960", "", 6.4, 514, 1440, 2960),
			new Device("Samsung Galaxy Note 10", "SM-N970", "", 6.3, 400, 1080, 2280),
			new Device("Samsung Galaxy Note 10+", "SM-N975", "", 6.8, 495, 1440, 3040),
			new Device("Samsung Galaxy Note 10+", "SM-N976", "", 6.8, 495, 1440, 3040),
			new Device("Samsung Galaxy Note 10 Lite", "SM-N770", "", 6.7, 393, 1080, 2400),
			new Device("Samsung Galaxy Note 20", "SM-N980", "", 6.7, 393, 1080, 2400),
			new Device("Samsung Galaxy Note 20", "SM-N981", "", 6.7, 393, 1080, 2400),
			new Device("Samsung Galaxy Note 20 Ultra", "SM-N985", "", 6.9, 494, 1440, 3088),
			new Device("Samsung Galaxy Note 20 Ultra", "SM-N986", "", 6.9, 494, 1440, 3088),







			// Cancer
			new Device("LAVA Iris 52", "LH9810", "", 5.45, 197, 480, 960),






			// OPPO (I support these devices from when they started having coherent model numbers like CPH....) (before 2016, too small id to avoid fingerprint confusions with other brands)
				// Oppo Series K
			new Device("OPPO K1", "PBCM30", "", 6.4, 403, 1080, 2340),
			new Device("OPPO K3", "CPH1955", "", 6.5, 403, 1080, 2340),
			new Device("OPPO K3", "CUN-AL00", "", 6.5, 403, 1080, 2340),
			new Device("OPPO K3", "PCGM00", "", 6.5, 403, 1080, 2340),
			new Device("OPPO K5", "PCNM00", "", 6.4, 403, 1080, 2340),
			new Device("OPPO K7X", "PERM00", "", 6.5, 405, 1080, 2400),
			// Oppo K7 5G
			new Device("OPPO K9", "PEXM00", "", 6.43, 409, 1080, 2400),
				// Oppo Reno Series
			new Device("OPPO Reno 6 Pro+ 5G", "PENM00", "", 6.55, 402, 1080, 2400),
			new Device("OPPO Reno 6 Pro 5G", "PEPM00", "", 6.55, 402, 1080, 2400),
			new Device("OPPO Reno 6 5G", "PEQM00", "", 6.43, 409, 1080, 2400),
			new Device("OPPO Reno 5 Pro+ 5G", "PDRM00", "", 6.55, 402, 1080, 2400),
			new Device("OPPO Reno 5 Pro+ 5G", "PDRT00", "", 6.55, 402, 1080, 2400),
			new Device("OPPO Reno 5 Pro 5G", "PDSM00", "", 6.55, 402, 1080, 2400),
			new Device("OPPO Reno 5 Pro 5G", "PDST00", "", 6.55, 402, 1080, 2400),
			new Device("OPPO Reno 5 Pro 5G", "CPH2201", "", 6.55, 402, 1080, 2400),
			new Device("OPPO Reno 5A", "CPH2199", "", 6.5, 405, 1080, 2400),
			new Device("OPPO Reno 5F", "CPH2217", "", 6.43, 409, 1080, 2400),
			new Device("OPPO Reno 5 5G", "PEGM00", "", 6.43, 409, 1080, 2400),
			new Device("OPPO Reno 5 5G", "PEGT00", "", 6.43, 409, 1080, 2400),
			new Device("OPPO Reno 5 5G", "CPH2145", "", 6.43, 409, 1080, 2400),
			new Device("OPPO Reno 5 Lite", "CPH2205", "", 6.43, 409, 1080, 2400),
			new Device("OPPO Reno 5K", "PEGM10", "", 6.43, 409, 1080, 2400),
			new Device("OPPO Reno 5Z", "CPH2211", "", 6.43, 409, 1080, 2400),
			new Device("OPPO Reno 5", "CPH2159", "", 6.4, 411, 1080, 2400),
			new Device("OPPO Reno 4Z 5G", "CPH2065", "", 6.57, 402, 1080, 2400),
			new Device("OPPO Reno 4 Pro 5G", "PDNM00", "", 6.55, 402, 1080, 2400),
			new Device("OPPO Reno 4 Pro 5G", "PDNT00", "", 6.55, 402, 1080, 2400),
			new Device("OPPO Reno 4 Pro 5G", "CPH2089", "", 6.55, 402, 1080, 2400),
			new Device("OPPO Reno 4 Pro", "CPH2109", "", 6.5, 402, 1080, 2400),
			new Device("OPPO Reno 4F", "SPH2209", "", 6.43, 409, 1080, 2400),
			new Device("OPPO Reno 4 5G", "PDPM00", "", 6.43, 409, 1080, 2400),
			new Device("OPPO Reno 4 5G", "PDPT00", "", 6.43, 409, 1080, 2400),
			new Device("OPPO Reno 4 5G", "CPH2091", "", 6.43, 409, 1080, 2400),
			new Device("OPPO Reno 4 Lite", "CPH2125", "", 6.43, 409, 1080, 2400),
			new Device("OPPO Reno 4 SE", "PEAT00", "", 6.43, 409, 1080, 2400),
			new Device("OPPO Reno 4 SE", "PEAM00", "", 6.43, 409, 1080, 2400),
			new Device("OPPO Reno 4", "CPH2113", "", 6.4, 411, 1080, 2400),
			new Device("OPPO Reno 3 Pro 5G", "PCRM00", "", 6.5, 402, 1080, 2400),
			new Device("OPPO Reno 3 Pro 5G", "PCRT00", "", 6.5, 402, 1080, 2400),
			new Device("OPPO Reno 3 Pro 5G", "CPH2009", "", 6.5, 402, 1080, 2400),
			new Device("OPPO Reno 3 5G", "PCHM30", "", 6.4, 411, 1080, 2400),
			new Device("OPPO Reno 3 Youth", "PCLM50", "", 6.4, 411, 1080, 2400),
			new Device("OPPO Reno 3 Pro", "CPH2035", "", 6.4, 411, 1080, 2400),
			new Device("OPPO Reno 3 Pro", "CPH2036", "", 6.4, 411, 1080, 2400),
			new Device("OPPO Reno 3 Pro", "CPH2037", "", 6.4, 411, 1080, 2400),
			new Device("OPPO Reno 3", "CPH2043", "", 6.4, 411, 1080, 2400),
			new Device("OPPO Reno Ace 2", "PDHM00", "", 6.55, 402, 1080, 2400),
			new Device("OPPO Reno Ace", "PCLM10", "", 6.5, 401, 1080, 2400),
			new Device("OPPO Reno 2Z", "PCKM70", "", 6.5, 395, 1080, 2340),
			new Device("OPPO Reno 2Z", "PCKT00", "", 6.5, 395, 1080, 2340),
			new Device("OPPO Reno 2Z", "PCKM00", "", 6.5, 395, 1080, 2340),
			new Device("OPPO Reno 2Z", "CPH1945", "", 6.5, 395, 1080, 2340),
			new Device("OPPO Reno 2Z", "CPH1951", "", 6.5, 395, 1080, 2340),
			new Device("OPPO Reno 2Z", "PCKM80", "", 6.5, 395, 1080, 2340),
			new Device("OPPO Reno 2F", "CPH1989", "", 6.5, 394, 1080, 2340),
			new Device("OPPO Reno 2", "PCKM70", "", 6.5, 401, 1080, 2400),
			new Device("OPPO Reno 2", "PCKT00", "", 6.5, 401, 1080, 2400),
			new Device("OPPO Reno 2", "PCKM00", "", 6.5, 401, 1080, 2400),
			new Device("OPPO Reno 2", "CPH1907", "", 6.5, 401, 1080, 2400),
			new Device("OPPO Reno 10X Zoom", "CPH1919", "", 6.6, 387, 1080, 2340),
			new Device("OPPO Reno 10X Zoom", "PCCM00", "", 6.6, 387, 1080, 2340),
			new Device("OPPO Reno 5G", "CPH1921", "", 6.6, 387, 1080, 2340),
			new Device("OPPO Reno A", "CPH1983", "", 6.4, 402, 1080, 2340),
			new Device("OPPO Reno Z", "PCDM10", "", 6.4, 402, 1080, 2340),
			new Device("OPPO Reno Z", "CPH1979", "", 6.4, 402, 1080, 2340),
			new Device("OPPO Reno", "PCAM00", "", 6.4, 402, 1080, 2340),
			new Device("OPPO Reno", "PCAT00", "", 6.4, 402, 1080, 2340),
			new Device("OPPO Reno", "CPH1917", "", 6.4, 402, 1080, 2340),
				// Oppo Series R
			new Device("OPPO R17 Neo", "CPH1893", "", 6.41, 402, 1080, 2340),
			new Device("OPPO R17 Pro", "CPH1877", "", 6.4, 403, 1080, 2340),
			new Device("OPPO R17 Pro", "PBDM00", "", 6.4, 403, 1080, 2340),
			new Device("OPPO R17", "CPH1879", "", 6.4, 403, 1080, 2340),
			new Device("OPPO R17", "PBEM00", "", 6.4, 403, 1080, 2340),
			new Device("OPPO R15X", "PBCM10", "", 6.4, 402, 1080, 2340),
			new Device("OPPO R15 Pro", "CPH1831", "", 6.28, 401, 1080, 2280),
			new Device("OPPO R15 Pro", "PAAM00", "", 6.28, 401, 1080, 2280),
			new Device("OPPO R15", "PACM00", "", 6.28, 401, 1080, 2280),
			new Device("OPPO R15", "CPH1835", "", 6.28, 401, 1080, 2280),
			new Device("OPPO R15", "PACT00", "", 6.28, 401, 1080, 2280),
			new Device("OPPO R15", "PAAT00", "", 6.28, 401, 1080, 2280),
			new Device("OPPO R11S Plus", "CPH1721", "", 6.43, 376, 1080, 2160),
			new Device("OPPO R11S", "CPH1719", "", 6.01, 401, 1080, 2160),
			//new Device("OPPO R11 Plus", "CPH1707", "", 6.0, 367, 1080, 1920),
			new Device("OPPO R11", "CPH1707", "", 5.5, 401, 1080, 1920),
			new Device("OPPO R9S Plus", "CPH1611", "", 6.0, 367, 1080, 1920),
			new Device("OPPO R9S", "CPH1607", "", 5.5, 401, 1080, 1920),
			new Device("OPPO R7 Plus", "R7plusf", "", 6.0, 367, 1080, 1920),
				// Oppo Find
			new Device("OPPO Find X Lamborghini", "PAFM00", "", 6.42, 401, 1080, 2340),
			new Device("OPPO Find X Lamborghini", "PAFT00", "", 6.42, 401, 1080, 2340),
			new Device("OPPO Find X Lamborghini", "CPH1875", "", 6.42, 401, 1080, 2340),
			new Device("OPPO Find X Lamborghini", "PAHM00", "", 6.42, 401, 1080, 2340),
			new Device("OPPO Find X2 Lite", "CPH2005", "", 6.4, 408, 1080, 2400),
			new Device("OPPO Find X2 Pro", "CPH2025", "", "", 6.7, 513, 1440, 3168),
			new Device("OPPO Find X2 Neo", "CPH2009", "", "", 6.5, 405, 1080, 2400),
			new Device("OPPO Find X2 Pro", "PDEM30", "", "", 6.7, 513, 1440, 3168),
			new Device("OPPO Find X2", "CPH2023", "", 6.7, 513, 1440, 3168),
			new Device("OPPO Find X2", "PDEM10", "", 6.7, 513, 1440, 3168),
			new Device("OPPO Find X3 Neo", "CPH2207", "", 6.55, 402, 1080, 2400),
			new Device("OPPO Find X3 Lite", "CPH2145", "", 6.43, 410, 1080, 2400),
			new Device("OPPO Find X3 Pro", "CPH2173", "", 6.7, 525, 1440, 3216),
			new Device("OPPO Find X3 Pro", "PEEM00", "", 6.7, 525, 1440, 3216),
			new Device("OPPO Find X3", "PEDM00", "", 6.7, 525, 1440, 3216),
			new Device("OPPO Find X", "CPH1871", "", 6.42, 401, 1080, 2340),
			new Device("OPPO Find X", "PAFM00", "", 6.42, 401, 1080, 2340),
				// Oppo Series A
			new Device("OPPO A93 5G", "PCGM00", "", "", 6.5, 405, 1080, 2400),
			new Device("OPPO A93 5G", "PEHM00", "", "", 6.5, 405, 1080, 2400),
			new Device("OPPO A93", "CPH2121", "", 6.43, 409, 1080, 2400),
			new Device("OPPO A92S", "PDKM00", "", 6.57, 401, 1080, 2400),
			new Device("OPPO A92", "CPH2059", "", 6.5, 405, 1080, 2400),
			new Device("OPPO A91", "PCPM00", "", 6.4, 408, 1080, 2400),
			new Device("OPPO A91", "CPH2001", "", 6.4, 408, 1080, 2400),
			new Device("OPPO A91", "CPH2021", "", 6.4, 408, 1080, 2400),
			new Device("OPPO A83", "CPH1827", "", 5.7, 282, 720, 1440),
			new Device("OPPO A83", "CPH1729", "", 5.7, 282, 720, 1440),
			//new Device("OPPO A79", "CPH1715", "", 6.01, 402, 1080, 2160),
			new Device("OPPO A77", "CPH1715", "", 5.5, 401, 1080, 1920),
			//new Device("OPPO A75", "CPH2099", "", 6.0, 402, 1080, 2160),
			new Device("OPPO A73", "CPH2099", "", 6.44, 409, 1080, 2400),
			new Device("OPPO A73 5G", "CPH2161", "", 6.5, 405, 1080, 2400),
			new Device("OPPO A72", "CPH2067", "", 6.5, 405, 1080, 2400),
			new Device("OPPO A72 5G", "PDYM20", "", 6.5, 405, 1080, 2400),
			new Device("OPPO A71 (2017)", "CPH1717", "", 5.2, 282, 720, 1280),
			new Device("OPPO A71 (2018)", "CPH1801", "", 5.2, 282, 720, 1280),
			new Device("OPPO A57", "CPH1701", "", 5.2, 282, 720, 1280),
			new Device("OPPO A53S 5G", "CPH2321", "", 6.52, 270, 720, 1600),
			new Device("OPPO A53 5G", "PECM30", "", 6.5, 405, 1080, 2400),
			new Device("OPPO A53 5G", "PECT30", "", 6.5, 405, 1080, 2400),
			new Device("OPPO A35S", "CPH2139", "", 6.5, 270, 720, 1600),
			new Device("OPPO A35S", "CPH2135", "", 6.5, 270, 720, 1600),
			new Device("OPPO A35", "CPH2127", "", 6.5, 270, 720, 1600),
			new Device("OPPO A35", "CPH2131", "", 6.5, 270, 720, 1600),
			new Device("OPPO A52", "CPH2061", "", 6.5, 405, 1080, 2400),
			new Device("OPPO A52", "CPH2069", "", 6.5, 405, 1080, 2400),
			new Device("OPPO A52", "PADM00", "", 6.5, 405, 1080, 2400),
			new Device("OPPO A52", "PDAM10", "", 6.5, 405, 1080, 2400),
			//new Device("OPPO A33 (2015)", "PDVM00", "", 5.0, 220, 540, 960),
			new Device("OPPO A33", "CPH2137", "", 6.5, 270, 720, 1600),
			new Device("OPPO A32", "PDVM00", "", 6.5, 270, 720, 1600),
			new Device("OPPO A31", "CPH2015", "", 6.5, 270, 720, 1600),
			new Device("OPPO A31", "CPH2029", "", 6.5, 270, 720, 1600),
			new Device("OPPO A31", "CPH2031", "", 6.5, 270, 720, 1600),
			new Device("OPPO A31", "CPH2073", "", 6.5, 270, 720, 1600),
			new Device("OPPO A31", "CPH2081", "", 6.5, 270, 720, 1600),
			//new Device("OPPO A31 (2015)", "CPH2179", "", 4.5, 218, 480, 854),
			//new Device("OPPO A30", "CPH2185", "", 5.0, 100, 1080, 1920),
			new Device("OPPO A15S", "CPH2179", "", 6.52, 269, 720, 1600),
			new Device("OPPO A15", "CPH2185", "", 6.52, 269, 720, 1600),
			new Device("OPPO A12E", "CPH1853", "", 6.2, 271, 720, 1520),
			//new Device("OPPO A12S", "CPH2077", "", 6.2, 271, 720, 1520),
			new Device("OPPO A12", "CPH2077", "", 6.22, 270, 720, 1520),
			new Device("OPPO A12", "CPH2083", "", 6.22, 270, 720, 1520),
			new Device("OPPO A11K", "CPH2083", "", 6.22, 270, 720, 1520),
			new Device("OPPO A11K", "CPH2071", "", 6.22, 270, 720, 1520),
			new Device("OPPO A11", "PCHM10", "", 6.5, 270, 720, 1600),
			new Device("OPPO A11", "PCHT10", "", 6.5, 270, 720, 1600),
			new Device("OPPO A9 (2020)", "CPH1937", "", 6.5, 269, 720, 1600),
			new Device("OPPO A9 (2020)", "CPH1939", "", 6.5, 269, 720, 1600),
			new Device("OPPO A9 (2020)", "CPH1941", "", 6.5, 269, 720, 1600),
			new Device("OPPO A9X", "PCEM00", "", 6.53, 395, 1080, 2340),
			new Device("OPPO A9", "CPH1938", "", 6.53, 395, 1080, 2340),
			new Device("OPPO A9", "PCAM10", "", 6.53, 395, 1080, 2340),
			new Device("OPPO A8", "PDBM00", "", 6.5, 269, 720, 1600),
			new Device("OPPO A7X", "PBBM00", "", 6.3, 409, 1080, 2340),
			new Device("OPPO A7X", "PBBT00", "", 6.3, 409, 1080, 2340),
			new Device("OPPO A7N", "PCDM00", "", 6.2, 271, 720, 1520),
			new Device("OPPO A7N", "PCDT00", "", 6.2, 271, 720, 1520),
			new Device("OPPO A7", "CPH1901", "", 6.2, 271, 720, 1520),
			new Device("OPPO A7", "CPH1903", "", 6.2, 271, 720, 1520),
			new Device("OPPO A7", "CPH1905", "", 6.2, 271, 720, 1520),
			new Device("OPPO A7", "PBFM00", "", 6.2, 271, 720, 1520),
			new Device("OPPO A7", "PBFT00", "", 6.2, 271, 720, 1520),
			new Device("OPPO A5S", "CPH1909", "", 6.2, 271, 720, 1520),
			new Device("OPPO A5S", "CPH1912", "", 6.2, 271, 720, 1520),
			new Device("OPPO A5S", "CPH1920", "", 6.2, 271, 720, 1520),
			new Device("OPPO A5 (2020)", "CPH1931", "", 6.5, 270, 720, 1600),
			new Device("OPPO A5 (2020)", "CPH1933", "", 6.5, 270, 720, 1600),
			new Device("OPPO A5 (2020)", "CPH1935", "", 6.5, 270, 720, 1600),
			new Device("OPPO A5 (2020)", "CPH1943", "", 6.5, 270, 720, 1600),
			new Device("OPPO A5 (2020)", "CPH1959", "", 6.5, 270, 720, 1600),
			new Device("OPPO A5 (2018)", "CPH1809", "", 6.2, 271, 720, 1520),
			new Device("OPPO A5 (2018)", "CPH1851", "", 6.2, 271, 720, 1520),
			new Device("OPPO A5 (2018)", "PBAM00", "", 6.2, 271, 720, 1520),
			new Device("OPPO A5 (2018)", "PBAT00", "", 6.2, 271, 720, 1520),
			new Device("OPPO A5 (2018)", "PBBM30", "", 6.2, 271, 720, 1520),
			new Device("OPPO A3S", "CPH1803", "", 6.2, 271, 720, 1520),
			new Device("OPPO A3S", "CPH1805", "", 6.2, 271, 720, 1520),
			new Device("OPPO A3S", "CPH1853", "", 6.2, 271, 720, 1520),
			new Device("OPPO A3", "PADM00", "", 6.2, 405, 1080, 2280),
			new Device("OPPO A3", "PADT00", "", 6.2, 405, 1080, 2280),
			new Device("OPPO A3", "CPH1837", "", 6.2, 405, 1080, 2280),
			//new Device("OPPO A1", "CPH1923", "", 5.7, 282, 720, 1440),
			new Device("OPPO A1K", "CPH1923", "", 6.1, 282, 720, 1560),
				// Oppo Series F
			new Device("OPPO F19 Pro 5G", "CPH2213", "", 6.43, 409, 1080, 2400),
			new Device("OPPO F19 Pro", "CPH2285", "", 6.43, 409, 1080, 2400),
			new Device("OPPO F19", "CHP2219", "", 6.43, 409, 1080, 2400),
			new Device("OPPO F19", "CPH2219", "", 6.43, 409, 1080, 2400),
			new Device("OPPO F17 Pro", "CPH2119", "", 6.44, 409, 1080, 2400),
			new Device("OPPO F17", "CPH2095", "", 6.44, 409, 1080, 2400),
			new Device("OPPO F15", "CPH2001", "", 6.4, 411, 1080, 2400),
			new Device("OPPO F11 Pro", "CPH1969", "", 6.53, 395, 1080, 2340),
			new Device("OPPO F11 Pro", "CPH2209", "", 6.53, 395, 1080, 2340),
			new Device("OPPO F11 Pro", "CPH1987", "", 6.53, 395, 1080, 2340),
			new Device("OPPO F11", "CPH1911", "", 6.53, 395, 1080, 2340),
			new Device("OPPO F11", "CPH1913", "", 6.53, 395, 1080, 2340),
			new Device("Oppo F9", "CPH1823", "", 6.3, 409, 1080, 2340),
			new Device("Oppo F9", "CPH1881", "", 6.3, 409, 1080, 2340),
			new Device("Oppo F9", "CPH1825", "", 6.3, 409, 1080, 2340),
			new Device("Oppo F7", "CPH1819", "", 6.23, 405, 1080, 2280),
			new Device("Oppo F7", "CPH1821", "", 6.23, 405, 1080, 2280),
			new Device("Oppo F5", "CPH172", "", 6.0, 402, 1080, 2160),
			new Device("Oppo F3 Plus", "CPH1613", "", 6.0, 367, 1080, 1920),
			new Device("Oppo F3", "CPH1609", "", 5.5, 401, 1080, 1920),
			//new Device("Oppo F1 Plus", "F1 Build/LMY47D", "", 5.5, 401, 1080, 1920),
			new Device("Oppo F1S", "OPPO F1s", "", 5.5, 267, 720, 1280),
			new Device("Oppo F1", "F1 Build/LMY47D", "", 5.0, 294, 720, 1280),
















		// END OF LIST
			new Device("OPPO F11 Pro", "CPH1987", "", 6.53, 395, 1080, 2340)








			




		];