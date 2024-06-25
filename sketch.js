let x = 0.01;
let y = 0;
let z = 0;

let a = 10;
let b = 28;
let c = 8.0 / 3.0;

let dt = 0.01;

let points = [];

function setup() {
  createCanvas(windowWidth - 25, windowHeight - 25, WEBGL);
  colorMode(HSB);
  textFont('Arial', 16);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);

  let dx = (a * (y - x)) * dt;
  x = x + dx;

  let dy = (x * (b - z) - y) * dt;
  y = y + dy;

  let dz = (x * y - c * z) * dt;
  z = z + dz;

  points.push(new p5.Vector(x, y, z));

  // Enable mouse orbit control
  //Left click and drag to rotate\nScroll wheel to zoom in and out
  orbitControl(5, 5, 5);

  translate(0, 0, -80);

  scale(7.5);

  // Draw the 3D trajectory
  stroke(255);
  noFill();

  let hu = 0;
  beginShape();
  for (let v of points) {
    stroke(hu, 255, 255);
    vertex(v.x, v.y, v.z);
    hu += 1;
    if (hu > 255) {
      hu = 0;
    }
  }
  endShape();
}