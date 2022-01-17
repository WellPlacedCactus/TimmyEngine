

class TimmyPart {

  constructor(x, y, scale, vx, vy, rotation, spin) {
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.vx = vx;
    this.vy = vy;
    this.rotation = rotation;
    this.spin = spin;
    this.width = 3360 * this.scale;
    this.height = 5040 * this.scale;
    this.dead = false;
  }

  tick(canvas) {
    // this.vy += 0.1; // GRAVITYYYYY
    this.x += this.vx;
    this.y += this.vy;
    this.rotation += this.spin;
    if (this.y > canvas.height) {
      this.vy *= -1;
      this.y += this.vy;
    }
    let s = 0.1;
    this.w -= s;
    this.h -= s;
    if (this.w < 0 || this.h < 0) {
      this.dead = true;
    }
  }

  draw(c, image) {
    c.save();
    c.translate(this.x, this.y);
    c.rotate(this.rotation);
    c.drawImage(
      image,
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    );
    c.restore();
  }
}