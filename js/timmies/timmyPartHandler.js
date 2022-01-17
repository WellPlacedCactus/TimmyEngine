

class TimmyPartHandler {
  
  constructor() {
    this.timmies = [];
  }

  add(part) {
    if (part instanceof TimmyPart) {
      this.timmies.push(part);
    }
  }

  tick(canvas) {
    for (let i = this.timmies.length - 1; i >= 0; --i) {
      const timmy = this.timmies[i];
      timmy.tick(canvas);
      if (timmy.dead) {
        this.timmies.splice(i, 1);
      }
    }
  }

  draw(c, image) {
    for (let i = this.timmies.length - 1; i >= 0; --i) {
      const timmy = this.timmies[i];
      timmy.draw(c, image);
    }
  }
}