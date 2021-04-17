function setup() {
  //create a canvas
  createCanvas(400,400);
  //angle mode = degrees
  angleMode(DEGREES);
}

function draw() {
  //background is black
  background(0); 
  
  //making the clock the right way up
  translate(200, 200);
  rotate(-90);

  //variables that store hours, minutes and seconds which are predefined functions in p5js
  let hr = hour();
  let mn = minute();
  let sc = second();

  //making the arcs
  //arc for seconds
  strokeWeight(8);
  stroke(237, 8, 2);
  noFill();
  let scAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, scAngle);

  //arc for minutes
  stroke(11, 249, 3);
  let mnAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, mnAngle);

  //arc for hours
  stroke(0, 0, 252);
  let hrAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hrAngle);

  //hand for seconds
  push();
  rotate(scAngle);
  stroke(237, 8, 2);
  line(0, 0, 100, 0);
  pop();

  //hand for minutes
  push();
  rotate(mnAngle);
  stroke(11, 249, 3);
  line(0, 0, 75, 0);
  pop();

  //hand for hours
  push();
  rotate(hrAngle);
  stroke(0, 0, 252);
  line(0, 0, 50, 0);
  pop();

  //point in the center
  stroke(255);
  point(0, 0);

  //draw the sprites
  drawSprites();
}