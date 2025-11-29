/* 
  Name: Hrigdev Thapa
  Date: 2025/11/28
  Filename: main.js
  Description: This project creates an animated bouncing balls demo using HTML, CSS, and JavaScript. 
  It sets up a full-screen canvas, uses a Ball class to build moving objects, and animates them with movement, color changes, and collision detection.
*/

// setup canvas
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// random helpers
function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

// Ball class with draw + update
class Ball {
  constructor(x, y, velX, velY, color, size) {
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
  }

  draw() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
  }

  // movement + bounce logic
  update() {
    // bounce off right and left sides
    if (this.x + this.size >= width || this.x - this.size <= 0) {
      this.velX = -this.velX; // reverse direction
    }

    // bounce off top and bottom
    if (this.y + this.size >= height || this.y - this.size <= 0) {
      this.velY = -this.velY;
    }

    // apply movement
    this.x += this.velX;
    this.y += this.velY;
  }
}
