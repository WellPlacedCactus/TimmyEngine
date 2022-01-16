
/////////////////////////////////////////////////////// IMPORTS

import TimmyPart from './particles/timmy-part.js';
import TimmyPartHandler from './particles/timmy-part-handler.js';

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

/////////////////////////////////////////////////////// IMPLEMENTATION

let timmyHandler = new TimmyPartHandler();

let fillAlpha = 1;
let timmy = null;
let s = 50;
let timmyWidth = 3360 / s;
let timmyHeight = 5040 / s;

async function init() {
	timmy = await loadImage('./images/timmy.jpg');
	loop();
}

let a = 0;
function loop() {
	a += 0.01;
	/////////////////////////////////////////////////// loop
	requestAnimationFrame(loop);

	/////////////////////////////////////////////////// fill
	c.fillStyle = `rgba(0, 0, 0, ${fillAlpha})`;
	c.fillRect(0, 0, canvas.width, canvas.height);

	/////////////////////////////////////////////////// DRAW TIMMMIES (PLURAL)

	timmyHandler.add(new TimmyPart(
		randint(0, canvas.width),
		-randint(25, 50),
		timmyWidth,
		timmyHeight,
		0,
		0,
		0,
		Math.random() * 0.1
	));

	timmyHandler.tick(canvas);
	timmyHandler.draw(c, timmy);

	/////////////////////////////////////////////////// DRAW TIMMMY
	// c.save();
	// c.translate(canvas.width / 2 , canvas.height / 2);
	// c.rotate(a);
	// c.drawImage(
	// 	timmy,
	// 	-timmyWidth / 2,
	// 	-timmyHeight / 2,
	// 	timmyWidth,
	// 	timmyHeight);
	// c.restore();
}

function loadImage(path) {
	return new Promise(resolve => {
		const image = new Image();
		image.onload = function() {
			resolve(image);
		}
		image.src = path;
	});
}

function randint(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}