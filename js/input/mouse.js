
/////////////////////////////////////////////////////// OBJECT

const mouse = {};
mouse.x = 0;
mouse.y = 0;
mouse.buttons = [];

/////////////////////////////////////////////////////// EVENTS

addEventListener('mousemove', ({x, y}) => {
  mouse.x = x;
  mouse.y = y;
});

addEventListener('mousedown', ({button}) => {
  mouse.buttons[button] = true;
});

addEventListener('mouseup', ({button}) => {
  mouse.buttons[button] = false;
});