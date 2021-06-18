/*  =========================================================================
	 MAIN
	========================================================================= */

	document.addEventListener('DOMContentLoaded', function(event)
	{
		// Device data
		document.getElementById("dUserAgent").innerHTML = window.navigator.userAgent;
		document.getElementById("dGpu").innerHTML = getGPU();
		document.getElementById("dGpuVendor").innerHTML = getGPUVendor();
		document.getElementById("dW").innerHTML = window.screen.width;
		document.getElementById("dH").innerHTML = window.screen.height;
		document.getElementById("dPixelRadio").innerHTML = window.devicePixelRatio;
		document.getElementById("dtW").innerHTML = window.screen.width * window.devicePixelRatio;
		document.getElementById("dtH").innerHTML = window.screen.height * window.devicePixelRatio;
		document.getElementById("screenRatio").innerHTML = getScreenRatio();

		// Detected database entry
		var device = deviceDetection();
		document.getElementById("name").innerHTML = device.name;
		document.getElementById("userAgentFingerprint").innerHTML = device.userAgentFingerprint;
		document.getElementById("gpu").innerHTML = device.gpu;
		document.getElementById("screenSize").innerHTML = device.screenSize;
		document.getElementById("ppi").innerHTML = device.ppi;
		document.getElementById("wRes").innerHTML = device.wRes;
		document.getElementById("hRes").innerHTML = device.hRes;
		document.getElementById("confidence").innerHTML = device.confidence;

		// Specific tests
		document.getElementById("isTouchEnabled").innerHTML = isTouchEnabled();
		document.getElementById("isTablet").innerHTML = isTablet();
		document.getElementById("isMobile").innerHTML = isMobile();
		document.getElementById("isComputer").innerHTML = isComputer();
		isLaptop().then((res) => {
			document.getElementById("isLaptop").innerHTML = res;
		});
		document.getElementById("isApple").innerHTML = isApple();
		document.getElementById("isIphone").innerHTML = isIphone();
		document.getElementById("isIpad").innerHTML = isIpad();
		document.getElementById("isMac").innerHTML = isMac();
		document.getElementById("isChromebook").innerHTML = isChromebook();
	});
