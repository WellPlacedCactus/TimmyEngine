
class TimmyDebugger {

  constructor(timmyHandler) {
    this.timmyHandler = timmyHandler;
    this.selectedTimmy = null;
  }

  tick() {
    
    /////////////////////////////////////////////////////// CHECK IF MOUSE OVER
  }

  draw(c) {
    
    /////////////////////////////////////////////////////// DRAW BOUNDS

    this.timmyHandler.timmies.forEach(timmy => {
      timmy.drawBounds(c);
    });
  }
}