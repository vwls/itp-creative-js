// Fletcher Bach
// 2013
size(900,700);
for (int y = 0; y < height+45; y += 40) {   //draws grid pattern
  for (int x = 0; x < width+45; x += 40) {
    fill (0);
    rect(x, y, 40, 40);
    
    
    //variable that randomly assigns each triangle a number, also variables for color.
    int choice = round(random(1)); //selects either 0 or 1 as a random number. rounds to nearest integer.
        int R = round(random(50,100));
          int G = round(random(75,125));
            int B = round(random(100,200));
    pushMatrix(); //lets the program know that 0, 0 is about to be reset
    translate(x, y); //translates 0, 0 to x, y
    fill(255);
    fill(R,G,B);
    noStroke();
    if (choice == 0) { //if choice is set to 0 for this triangle
      triangle(0, 20, 20, 40, 40, 20); //draw a triangle facing up
    } else { 
      triangle(0,20, 20, 0, 40, 20); //draw a triangle facing down
    }
    popMatrix(); //resets coordinates so that 0, 0 is once again 0, 0
  }
}
