function setup() {
    createCanvas(400, 400);
    background("black")
  }
  
  function draw() {
    stroke("white");
    fill("rgb(255,0,248)");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }