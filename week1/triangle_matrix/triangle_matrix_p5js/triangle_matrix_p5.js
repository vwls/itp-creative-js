// Fletcher Bach
// 2013
function draw(){
createCanvas(500,500);
for (var y = 0; y < height+45; y += 40) {   //draws grid pattern
  for (var x = 0; x < width+45; x += 40) {
    fill (0);
    rect(x, y, 40, 40);

    // randomly assigns each triangle a number
    var choice = round(random(1));      //selects either 0 or 1 as a random number. rounds to nearest integer.
        var R = round(random(50,100));  //sets up RGB constrained random color variation
          var G = round(random(75,125));
            var B = round(random(100,200));
    pushMatrix();                       //lets the program know that 0, 0 is about to be reset
    translate(x, y);                    //translates 0, 0 to x, y
    fill(255);
    fill(R,G,B);
    noStroke();
    if (choice == 0) {                  //if choice is set to 0 for this triangle
      triangle(0, 20, 20, 40, 40, 20);  //draw a triangle facing up
    } else {
      triangle(0,20, 20, 0, 40, 20);    //draw a triangle facing down
    }
    popMatrix();                        //resets coordinates so that 0, 0 is once again 0, 0
  }
}
}
