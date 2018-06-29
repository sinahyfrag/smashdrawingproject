var p5Canvas;
var myName;

function setup() {
  p5Canvas=createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Teacher");
}

// Write all your code inside the draw() function below!
function draw() {
  background(0, 255, 0);

  // head
  fill(255, 204, 0);
  ellipse(width / 2, height / 2 - 100, 200, 200);

  // eyes
  fill(0, 100, 100);
  ellipse(width / 2 - 40, height / 2 - 110, 20, 20);
  ellipse(width / 2 + 40, height / 2 - 110, 20, 20);

  // mouth
  arc(width / 2, height / 2 - 60, 100, 60, radians(0), radians(180));

  // body
  line(width / 2, height / 2, width / 2, height / 2 + 180);

  // arms
  line(width / 2, height / 2 + 60, width / 2 - 80, height / 2 - 20);
  line(width / 2, height / 2 + 60, width / 2 + 80, height / 2 - 20);

  // legs
  line(width / 2, height / 2 + 180, width / 2 - 80, height / 2 + 220);
  line(width / 2, height / 2 + 180, width / 2 + 80, height / 2 + 220);
}
