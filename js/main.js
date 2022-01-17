
(function(){

	/////////////////////////////////////////////////////// ENGINE

	const canvas = document.querySelector('canvas');
	const c = canvas.getContext('2d');

	/////////////////////////////////////////////////////// EVENTS

	addEventListener('load', () => {
		canvas.width = innerWidth;
		canvas.height = innerHeight;
		init();
	});

	addEventListener('resize', () => {
		canvas.width = innerWidth;
		canvas.height = innerHeight;
	});

	/////////////////////////////////////////////////////// SETTINGS

	let debug = true;
	let fillAlpha = 0.1;
	let timmyImage = null;
	let timmyHandler = null;
	let timmyDebugger = null;

	/////////////////////////////////////////////////////// INIT

	async function init() {
		timmyImage = await loadImage('./images/timmy.jpg');
		timmyHandler = new TimmyPartHandler();
		timmyHandler.add(new TimmyPart(
			canvas.width / 2,
			canvas.height / 2,
			0.1,
			0,
			0,
			0,
			0.01
		));
		timmyDebugger = new TimmyDebugger(timmyHandler);

		loop();
	}

	/////////////////////////////////////////////////////// LOOP

	function loop() {

		/////////////////////////////////////////////////// FILL

		c.fillStyle = `rgba(0, 0, 0, ${fillAlpha})`;
		c.fillRect(0, 0, canvas.width, canvas.height);

		/////////////////////////////////////////////////// HANDLE ALL THOSE TIMMIES

		timmyHandler.tick(canvas);
		timmyHandler.draw(c, timmyImage);
		if (debug) {
			timmyDebugger.tick();
			timmyDebugger.draw(c);
		}

		/////////////////////////////////////////////////// LOOP

		requestAnimationFrame(loop);
	}

	// takes a path and returns an image in the form of a promise

	function loadImage(path) {
		return new Promise(resolve => {
			const image = new Image();
			image.onload = function() {
				resolve(image);
			}
			image.src = path;
		});
	}

	// copyrighted function

	function randint(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	// returns either -1 or 1

	function rands() {
		return Math.random() < 0.5 ? -1 : 1;
	}

})();