let img;
// let clicked = false;

function preload() {
  img = loadImage('../assets/lips.png');

}

function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
}

function draw() {
  background('#33A4FF');
  drawBackground(200,200);
  // translate(200,200)
  drawTurtle (200,200);
  drawLips (200,200);
  
}
function drawBackground(x, y) {
    //background pattern
    push()
    translate(x, y);
    fill('#4DA0AF')
    stroke('#4FF4E9 ')
    strokeWeight(10)
    line(-400, 400, 400, -400);
    strokeWeight(1)
    pop();
  }


  //all creature code

function drawTurtle(x, y){
push()
translate(x, y);
   //legs
   fill('#398D1A ')
stroke('#C7DE50')
ellipse(55,-45,90,30) 
 ellipse(-55,-45,90,30)
  ellipse(55,35,90,30)
  ellipse(-60,35,90,30)
  
  //head
  stroke('#C7DE50')
  ellipse(0,-110,75,75)
  
  //eyes
  fill('white')
  noStroke('0')
    ellipse(15,-117,15,15)
    ellipse(-15,-117,15,15)

  
  fill('black')
  ellipse(-15,-120,8,7)
  ellipse(15,-120,8,7)
  
   //body
   fill('#398D1A ')
  stroke('#C7DE50')
  ellipse(0,0,150,200)
  
  //body pattern
  fill('#24612C ')
  ellipse(0,0,130,180)
  noStroke('0')
    fill('#2A6C32 ')
  quad(0,60,60,0,0,-60,-60,0)
  fill('#23732D ')
noStroke(0)
   quad(0,30,30,0,0,-30,-30,0)
  
   //smile
  stroke('black')
  noFill('0')
  arc(0,-137,8,5,180,0)
  
  //eyebrows
  stroke('black')
  noFill('0')
  arc(15,-108,10,5,0,PI)
  arc(-15,-108,10,5,0,PI)
  
    pop()
}

function drawLips(x, y) {
  push()
  translate(x, y);
  image(img, -110, -60, 300, 200);

  pop()
}