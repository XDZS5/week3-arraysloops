// Coding Art Fundamentals - Week 3: Arrays and Loops
// Redo of the class examples + my own additions

// ---------- ARRAYS (from 2_IntroToArrays) ----------
// Parallel arrays: the same index in each array = one circle
// NEW: added a 5th circle to every array
let posX = [200, 50, 100, 80, 320];
let posY = [150, 30, 200, 300, 260];
let d = [20, 40, 100, 60, 80];
let myColor = ['#02ACE0', '#A1652A', '#E07003', '#30768B', '#E0027A'];

// ---------- LOOP RECTANGLES (from 5-LoopsIntro-Rect2) ----------
let sizeW, sizeH, numShapes;
let x, y;

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);

  numShapes = 20;
  sizeW = width / numShapes;
  sizeH = height / numShapes;
  x = width / 2;
  y = height / 2;
}

function draw() {
  background(0);

  // Growing rectangles: draw from biggest to smallest so they stack
  for (let i = numShapes; i > 0; i--) {
    // NEW: alternate between two colors instead of only orange
    if (i % 2 == 0) {
      fill('orange');
    } else {
      fill('#30768B');
    }
    stroke(0);
    strokeWeight(3);
    rect(x, y, sizeW * i, sizeH * i);
  }

  // Grow every frame
  sizeW++;
  sizeH++;

  // Reset once they pass the edge of the canvas
  if (sizeW > width || sizeH > height) {
    sizeW = 0;
    sizeH = 0;
  }

  // Circles from the arrays - one loop instead of writing each circle by hand
  for (let i = 0; i < posX.length; i++) {
    // NEW: each circle pulses with sin() (from Week 1)
    let pulse = sin(frameCount * 0.05 + i) * 15;

    stroke('white');
    strokeWeight(2);
    fill(myColor[i]);
    circle(posX[i], posY[i], d[i] + pulse);
  }

  // NEW: a circle that follows the mouse, using the last color in the array
  noStroke();
  fill(myColor[myColor.length - 1]);
  circle(mouseX, mouseY, 30);
}

// Keep the canvas full-screen if the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}
