Particle[] particleArray = new Particle[500];

void setup() {
  size(1200, 700);
  for (int i = 0; i < particleArray.length; i++) {
    //particleArray[i] = new Particle ((int)random(width),(int)random(height));
    particleArray[i] = new Particle ((int)random(width), (int)random(height));  
    //particleArray[i] = new Particle (width/2, height/2);
}
}

void draw() {
  background(0);

  for (int i = 0; i < particleArray.length; i++) {
    particleArray[i].particleMove();
    particleArray[i].particleDisplay();
    particleArray[i].particleBright();
  }
}

