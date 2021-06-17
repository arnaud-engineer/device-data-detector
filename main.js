/*  =========================================================================
	 CONST
	========================================================================= */

	var sWres = window.screen.width * window.devicePixelRatio;
	var sHres = window.screen.height * window.devicePixelRatio;

/*  =========================================================================
	 INTERNAL UTILITIES
	========================================================================= */

	/*  ----------------------------------------
		 DEVICE LIST ITERATOR
		---------------------------------------- */

			function deviceListIterator(lDevices)
			{
				for(var i=0 ; i < lDevices.length ; i++) {
					if((lDevices[i].wRes - 10 <= sWres && lDevices[i].wRes + 10 >= sWres && lDevices[i].hRes - 10 <= sHres && lDevices[i].hRes + 10 >= sHres) || (lDevices[i].wRes - 10 <= sHres && lDevices[i].wRes + 10 >= sHres && lDevices[i].hRes - 10 <= sWres && lDevices[i].hRes + 10 >= sWres)) {
						let detectedGpu = getGPU();
						if(lDevices[i].gpu == "" || detectedGpu.includes(lDevices[i].gpu))
							return i;
					}
				}
				return lDevices.length - 1;
			}

	/*  ----------------------------------------
		 DEVICE CHARACTERISTICS
		---------------------------------------- */

			function getScreenRatio()
			{
				let resMin = Math.min(window.screen.width, window.screen.height);
				let resMax = Math.max(window.screen.width, window.screen.height);
				return resMax / resMin;
			}

		/*  ---------------
			 GPU DATA
			--------------- */

			function getGPU()
			{
				var gpu = null;
				try
				{
					// Add a temporary canvas to call WebGL
					let detectionCanvas = document.createElement("canvas");
					detectionCanvas.style.display = "none";
					document.body.appendChild(detectionCanvas);

					// Call of WebGL
					var gl = detectionCanvas.getContext('webgl');
					var debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
					gpu = gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);

					// Remove the temporary canvas
					newCanvas.remove();
				}
				catch(e) { /*console.log("WARNING - getGPU() : WEBGL_debug_renderer_info not supported by the browser, impossible to detect the GPU");*/ }

				// TRY TO RESOLVE APPLE SAFARI OBFUSCATION ("Apple GPU")
					// external lib : https://github.com/51degrees/renderer
				if (gpu.toLowerCase().includes("apple gpu"))
				{
					getRenderer(function(renderer) {
						// IF THE RENDERER FOUND SOMETHING
						if (renderer != "Apple A9X GPU|Apple A10X GPU|Apple A9 GPU|Apple A10 GPU|Apple A11 GPU|Apple A12X GPU|Apple A12 GPU|Apple A8 GPU|Apple A8X GPU|Apple A13 GPU|Apple A14 GPU") {
							gpu = renderer;
							console.log("RENDERER : " + gpu);
						}
					} );
				}
				// RETURN WHAT WE FOUND
				return gpu;
			}

			function getGPUVendor()
			{
				var vendor = null;
				try
				{
					// Add a temporary canvas to call WebGL
					let detectionCanvas = document.createElement("canvas");
					detectionCanvas.style.display = "none";
					document.body.appendChild(detectionCanvas);

					// Call of WebGL
					var gl = detectionCanvas.getContext('webgl');
					var debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
					vendor = gl.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);

					// Remove the temporary canvas
					newCanvas.remove();
				}
				catch(e) { /*console.log("WARNING - getGPUVendor() : WEBGL_debug_renderer_info not supported by the browser, impossible to detect the GPU");*/ }
				return vendor;
			}

		/*  ---------------
			 TOUCH SCREEN
			--------------- */

			function isTouchEnabled()
			{ return ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0); }

	/*  ----------------------------------------
		 DEVICE TYPE
		---------------------------------------- */

		function isTablet()
		{
			let userAgent = navigator.userAgent.toLowerCase();
			let classicTablet = /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(userAgent); // https://stackoverflow.com/questions/50195475/detect-if-device-is-tablet
			let ipadProDetection = (isApple() && isTouchEnabled() && (!(userAgent.includes("iphone")))); // iPad Pro's user agent pretend it's a mac with a touch screen https://getpolarized.io/2019/12/20/Apple-Lying-About-User-Agent-in-iPad-Pro.html
			return (classicTablet || ipadProDetection);
		}

			function isTabletModel() { return deviceListIterator(lTablet); }

		function isMobile()
		{
			let check = false;
			(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera); // https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
			return check;
		};

			function isMobileModel() { return deviceListIterator(lMobile); }

		function isComputer()
		{ return !(isTablet() || isMobile()); }

			function isComputerModel() { return deviceListIterator(lComputer); }

		/* Definitly not rocket science : https://stackoverflow.com/questions/42596664/detect-whether-client-system-is-laptop-or-desktop-using-javascript */
		async function isLaptop()
		{
			let isLap = false;
			// CHECK IF IS ON BATTERY : https://stackoverflow.com/questions/42596664/detect-whether-client-system-is-laptop-or-desktop-using-javascript
			try
			{
				let battery = await navigator.getBattery();
				if (!(battery.charging && battery.chargingTime === 0))
					isLap = true;
				else if(!battery.charging)
					isLap = true;
				console.log(battery.charging + " - " + battery.chargingTime);
			}
			catch(e) { console.log("WARNING - navigator.getBattery() not supported by the browser"); }
			finally { 
				// CHECK IF THE USER AGENT HAS CLUES (worst way to proceed, but seems to work in rare case)
				let ua = window.navigator.userAgent;
				for(var i=0 ; i < lLaptopUaClues.length ; i++) {
					if(ua.toLowerCase().includes(lLaptopUaClues[i].toLowerCase())) {
						isLap = true;
					}
				}
				// CHECK IF THE GPU DATA HAS CLUES (mobile GPU)
				let gpuName = getGPU();
				for(var i=0 ; i < lLaptopGpuClues.length ; i++) {
					if((lLaptopGpuClues[i].exec(gpuName)) !== null)
						isLap = true;
				}
				// RETURN THE CONCLUSION OF THESE INSUFFICIENT TESTS
				return isLap; 
			}
			
		}

			function isLaptopModel() { return deviceListIterator(lLaptop); }

		function isDesktop()
		{
			let isDesk = false;
			// CHECK IF THE USER AGENT HAS CLUES (worst way to proceed, but seems to work in rare case)
			let ua = window.navigator.userAgent;
			for(var i=0 ; i < lDesktopUaClues.length ; i++) {
				if(ua.toLowerCase().includes(lDesktopUaClues[i].toLowerCase())) {
					isDesk = true;
				}
			}
			// RETURN THE CONCLUSION OF ALL THESE INSUFFICIENT TESTS
			return isDesk;
		}

			function isMonitorModel() { return deviceListIterator(lMonitor); }

	/*  ----------------------------------------
		 DEVICE DETECTION UTILITIES
		---------------------------------------- */

		/*  ---------------
			 DEVICE DETECTION BY USER AGENT
			--------------- */

		function isDeviceModel()
		{
			// Check if the user agent contains an identifiable fingerprint that allows a safe detection (we don't look at anything else to maximize compatibility)
			var ua = window.navigator.userAgent;
			for(var i=0 ; i < lUserAgentDetectable.length ; i++) {
				// Get fingerprint list
				let lFingerprintsToTest = lUserAgentDetectable[i].userAgentFingerprint;
				if(!Array.isArray(lUserAgentDetectable[i].userAgentFingerprint)) {
					lFingerprintsToTest = [lUserAgentDetectable[i].userAgentFingerprint];
				}
				// Test each fingerprint
				for(var j=0 ; j < lFingerprintsToTest.length ; j++) {
					if(ua.toLowerCase().includes(lFingerprintsToTest[j].toLowerCase())) {
						return i;
					}
				}
			}
			return -1;
		}

		/*  ---------------
			 IPHONE DETECTION
			--------------- */

		// TODO : remove cScreen

		function isIphone()
		{ return (!!navigator.userAgent.toLowerCase().match(/iphone/i)); } //https://stackoverflow.com/questions/8309998/how-to-determine-which-iphone-version-the-javascript-code-runs-on

			function isIphoneModel() { return deviceListIterator(lIphone); }

		/*  ---------------
			 IPAD DETECTION
			--------------- */

		function isIpad()
		{ 
			let userAgent = navigator.userAgent.toLowerCase();
			let isClassicIpad = (!!navigator.userAgent.match(/iPad/i));
			let ipadProDetection = (isApple() && isTouchEnabled() && (!(userAgent.includes("iphone")))); // iPad Pro's user agent pretend it's a mac with a touch screen https://getpolarized.io/2019/12/20/Apple-Lying-About-User-Agent-in-iPad-Pro.html
			return (isClassicIpad || ipadProDetection);
		} 

			function isIpadModel() { return deviceListIterator(lIpad); }

		/*  ---------------
			 MAC DETECTION
			--------------- */

		function isApple()
		{ 
			let isOldApple = (!!navigator.userAgent.match(/Mac OS/i));
			let isNewApple = (!!navigator.userAgent.match(/macOS/i));
			return (isOldApple || isNewApple);
		}

		function isMac()
		{ 
			let isAppleDevice = isApple();
			let isNotMobile = (! ( (!!navigator.userAgent.match(/iPhone/i)) || (!!navigator.userAgent.match(/iPad/i)) ) );
			return (isAppleDevice && isNotMobile);
		}

			function isMacModel() { return deviceListIterator(lMac); }

		/*  ---------------
			 CHROMEBOOK DETECTION
			--------------- */

		function isChromebook() { return !!navigator.userAgent.match(/CrOS/i); } // TODO : Souvent marqué comme Android ...

			function isChromebookModel() { return deviceListIterator(lChromebook); }

/*  =========================================================================
	 DETECTION
	========================================================================= */

	function deviceDetection(isExternalMonitor = false)
	{
		if(isExternalMonitor === false)
		{
			// DEVICE DETECTION WITH AGENT USER (100% Safe, so we start here)
			var deviceModel = isDeviceModel(); // -1 if unknown
			if (deviceModel != -1) {
				return lUserAgentDetectable[deviceModel];
			}
			// MOBILE DEVICE DETECTION
			else if(isMobile() || isTablet()) {
				// TABLETS
				if(isTablet()) {
					if(isIpad()) {
						deviceModel = isIpadModel();
						// IF UNKNOWN IPAD WITHOUT AN IPAD SCREEN RATIO (1.33 : 4:3)
						let screenRatio = getScreenRatio();
						if (deviceModel === lIpad.length - 1 && screenRatio > 1.5) {
							// Check if it does fit with an external Monitor
							deviceModel = isMonitorModel();
							return lMonitor[deviceModel];
						}
						// IF KNOWN IPAD OR UNKNOWN IPAD WITH AN IPAD SCREEN RATIO
						else {
							return lIpad[deviceModel];
						}
					}
					else {
						deviceModel = isTabletModel();
						return lTablet[deviceModel];
					}
				}
				// PHONES
				else if(isIphone()) {
					deviceModel = isIphoneModel();
					return lIphone[deviceModel];
				}
				else {
					deviceModel = isMobileModel();
					return lMobile[deviceModel];
				}
			}
			// COMPUTERS
			else if(isComputer()) {
				// PARTICULAR COMPUTERS
				if(isMac()) {
					deviceModel = isMacModel();
					// IF UNKNOWN MAC
					if(deviceModel === lMac.length - 1) {
						// Check if it does fit with an external Monitor
						monitorModel = isMonitorModel();
						if(monitorModel != lMonitor.length - 1)
							return lMonitor[monitorModel];
					}
					return lMac[deviceModel];
				}
				else if(isChromebook()) {
					deviceModel = isChromebookModel();
					// IF UNKNOWN CHROMEBOOK
					if(deviceModel === lMac.length - 1) {
						// Check if it does fit with an external Monitor
						monitorModel = isMonitorModel();
						if(monitorModel != lMonitor.length - 1)
							return lMonitor[monitorModel];
					}
					return lChromebook[deviceModel];
				}
				// LAPTOPS : it may not detect a laptop, but never fails rejecting desktop
				else if(isLaptop()) {
					deviceModel = isLaptopModel();
					// IF UNKNOW LAPTOP
					if (deviceModel === lLaptop.length - 1) {
						// TRY TO DETECT A MONITOR
						let monitorModel = isMonitorModel();
						if(monitorModel != lMonitor.length - 1)
							return lMonitor[monitorModel];
					}
					return lLaptop[deviceModel];
				}
				else if(isDesktop()) {
					deviceModel = isMonitorModel();
					return lMonitor[deviceModel];
				}
				// UNDETECTED DESKTOPS AND LAPTOPS
				else {
					deviceModel = isComputerModel();
					return lComputer[deviceModel];
				}
			}
		}
		// DESK MONITORS
		else
		{
			deviceModel = isMonitorModel();
			return lMonitor[deviceModel];
		}
	}