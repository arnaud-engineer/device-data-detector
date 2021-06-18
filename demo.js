
	/*  ----------------------------------------
		 FULLSCREEN MODE
		---------------------------------------- */

		function goFullScreen()
		{
			// Go fullscreen
			var body = document.getElementsByTagName("body")[0];
			body.requestFullscreen();
			// Fullscreen button evolves into end fullscreen button
			document.getElementById("fullscreen-button").setAttribute("onmousedown", "endFullScreen();");
		}

		function endFullScreen()
		{
			// End fullscreen
			document.exitFullscreen();
			// End fullscreen button evolves into fullscreen button
			document.getElementById("fullscreen-button").setAttribute("onmousedown", "goFullScreen();");
		}


/*  =========================================================================
	 MAIN
	========================================================================= */

	document.addEventListener('DOMContentLoaded', function(event)
	{
		document.getElementById("dUserAgent").innerHTML = window.navigator.userAgent;
		document.getElementById("dGpu").innerHTML = getGPU();
		document.getElementById("dGpuVendor").innerHTML = getGPUVendor();
		document.getElementById("dW").innerHTML = window.screen.width;
		document.getElementById("dH").innerHTML = window.screen.height;
		document.getElementById("dPixelRadio").innerHTML = window.devicePixelRatio;
		document.getElementById("dtW").innerHTML = window.screen.width * window.devicePixelRatio;
		document.getElementById("dtH").innerHTML = window.screen.height * window.devicePixelRatio;
		isLaptop().then((res) => {
			document.getElementById("isLap").innerHTML = res;
		});






		var device = deviceDetection();
		document.getElementById("name").innerHTML = device.name;
		document.getElementById("userAgentFingerprint").innerHTML = device.userAgentFingerprint;
		document.getElementById("gpu").innerHTML = device.gpu;

		document.getElementById("screenSize").innerHTML = device.screenSize;
		document.getElementById("ppi").innerHTML = device.ppi;
		document.getElementById("wRes").innerHTML = device.wRes;
		document.getElementById("hRes").innerHTML = device.hRes;
		document.getElementById("confidence").innerHTML = device.confidence;

 
	});
