//Fletcher Bach
//April 08 2014

var locX;
var locY;

var cR;
var cG;
var cB;

var r =  50 + Math.round((Math.random()*50));     //generates (constrained) random RGB values
var g =  75 + Math.round((Math.random()*50));
var b =  100 + Math.round((Math.random()*100));

function setup(){
  createCanvas(250, 250);
  background(150);

  displayF(25,25, r, g, b);     //how do I get each "F" shape to fill with a different RGB value from the r,g,v, math?
  displayF(35,35, r, g, b);
  displayF(45,45, r, g, b);


  console.log("Value of R:" + r);    //print to console the values of r, g, and b for this page load
  console.log("Value of G:" + g);
  console.log("Value of B:" + b);


}

function displayF(locX, locY, cR, cG, cB){    //function for creating the "F" shape

  fill(r, g, b);

  var tempLocX = locX;
  var tempLocY = locY;

  beginShape();
  vertex(tempLocX, tempLocY);  //20, 0
  vertex(tempLocX + 120, tempLocY);
  vertex(tempLocX + 120, tempLocY + 40);
  vertex(tempLocX + 40, tempLocY + 40);
  vertex(tempLocX + 40, tempLocY + 60);
  vertex(tempLocX + 100, tempLocY + 60);
  vertex(tempLocX + 100, tempLocY + 100);
  vertex(tempLocX + 40, tempLocY + 100);
  vertex(tempLocX + 40, tempLocY + 160);
  vertex(tempLocX + 0, tempLocY + 160);
  vertex(tempLocX, tempLocY);
  endShape(CLOSE);

}

function draw(){


}
