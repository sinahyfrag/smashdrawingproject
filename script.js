var p5Canvas;
var myName;

function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Sinahy"); // enter your name here!
}

function draw() {
  background(65, 105, 225); 
  fill(255, 204, 0);    // Always call fill() before the shape you want to fill in.
  ellipse(30, 20, 120, 120); 
    stroke(255, 204, 0);
    strokeWeight(2);
    line(65, 68, 130, 140);
    fill('yellow');
    line(20, 80, 50, 170);
    fill('yellow');
    line(89, 20, 210, 100);
    fill('yellow');
    line(5, 75, 5, 140);
    fill('yellow');
    line(44, 78, 75, 135);
    fill('yellow');
    line(140, 90, 82, 47);
    fill('yellow');
    line(88, 2, 167, 20);
    if (keyIsPressed === true) {
    stroke(0);
    } else {
    stroke('yellow');
    }
  line(65, 68, 130, 140);
    if (keyIsPressed === true) {
    fill(0);
    } else {
    fill('yellow');
    }
  ellipse(30, 20, 120, 120);
    if (keyIsPressed === true) {
    fill(0);
    } else {
    fill('yellow');
    }
  line(20, 80,50,170);
    if (keyIsPressed === true) {
    fill(0);
    } else {
    fill('yellow');
    }
  line(89, 20, 210, 100);
    if (keyIsPressed === true) {
    fill(0);
    } else {
    fill('yellow');
    }
  line(30, 20, 120, 120);
    
}  

