let NUM_OF_PARTICLES = 18; // Decide the initial number of particles.

let particles = [];
let snowpiles1 = 0;
let thick = 40

function setup() {
  createCanvas(600, 600);

  // Generate particles
  for (let i = 0; i < NUM_OF_PARTICLES; i++) {
    particles[i] = new Particle(random(width), random(height), random(4, 10));
  }
}

function draw() {
  background(50);

  // Update and display particles
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.update();
    p.display();
  }

 if (snowpiles1 >= 10) {
    noStroke();
    ellipse(0, height, 1300, thick);
    noStroke();
    ellipse(200, height, 400, thick);
    noStroke();
    ellipse(550, height, 400, thick);
  }

  if (snowpiles1 >= 20) {
    noStroke();
    ellipse(0, height, 1300, thick + 100);
    noStroke();
    ellipse(200, height, 400, thick + 100);
    noStroke();
    ellipse(550, height, 400, thick + 100);
  }
    if (snowpiles1 >= 30) {
    fill(255)
    noStroke();
    ellipse(100, 500, 100, 100);
    noStroke();
    }
    if (snowpiles1 >= 40) {
    ellipse(100, 430, 80, 80);
    noStroke();
    if (snowpiles1 >= 45) {
    fill(0)
    ellipse(80, 430, 15, 15);
    fill(255)
    }
    if (snowpiles1 >= 46) {
    fill(0)
    ellipse(110, 430, 15, 15);
    fill(255)
    }
    if (snowpiles1 >= 47) {
    fill("orange")
    triangle(100,450,100,440,50,445)
    fill(255)
    }
  }
}

class Particle {
  constructor(startX, startY, startR) {
    this.x = startX;
    this.y = startY;
    this.r = startR;
    this.speed = random(1, 5);
  }

  update() {
    this.y += this.speed;

    if (this.y > height) {
      snowpiles1 += 0.5;
      this.y = 0;
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    ellipse(0, 0, this.r * 2);
    pop();
  }
}
