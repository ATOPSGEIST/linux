let x = 150;
let y = 150;
let r = 200;
let g = 100;
let b = 100;
let T = 8; // Velocity in the x-direction
let h = 6; // Velocity in the y-direction
let img;
let img1;
let img2;
let img3;
let imgs = ['img', 'img1', 'img2', 'img3'];
let currentTexture; // Variable to store the current texture

function preload(){
  img = loadImage('cb86ca7f-2c05-4496-85a8-eee92c600307.jpg')
  img1 = loadImage('DCP_7.JPG')
  img2 = loadImage('image1853.jpeg')
  img3 = loadImage('image44.jpeg')
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  // Initialize the current texture with the first image
  currentTexture = img;
}

function getRandomImage() {
  // Generate a random index based on the array length
  var randomIndex = Math.floor(Math.random() * imgs.length);

  // Return the image at the random index
  return eval(imgs[randomIndex]);
}

function draw() {
  // Update the position of the ellipse
  x += T;
  y += h;

  // Set background color to white
  background(3);
  ambientLight(200)
  pointLight(250, 200, 180, -2000, -2000, 400);

  

  // Change the color of the ellipse when it hits the edge
  if (x <= 150 || x >= windowWidth - 150 || y <= 150 || y >= windowHeight - 150) {
    currentTexture = getRandomImage();
    r = random(255);
    g = random(255);
    b = random(255);
  }

  // Draw the ellipse with the current color and texture
  fill(r, g, b);
  translate(-width/2, -height/2);
  translate(x, y);
  noStroke();
  texture(currentTexture);
  rotateY(90)
  sphere(150);

  // Reverse direction if the ellipse hits the edge
  if (y >= windowHeight - 150 || y <= 150) {
    h = -h;
  }
  if (x >= windowWidth - 150 || x <= 150) {
    T = -T;
  }
}
