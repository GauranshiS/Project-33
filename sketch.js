

var score=0;
var particle,gameState,count;
var turn=0;

function setup() {
  createCanvas(480, 800);
  createSprite(400, 200, 50, 50);
}


ground = new Ground(760, 400, 300, 20);

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

for (var k = 0; k <= width; k = k + 80) {
  divisions.push(new Divisions(k, height - divisionHeight / 2, 10, divisionHeight));
}

for (var j = 0; j < particles.length; j++) {
  particles[j].display();
}

for (var k = 0; k < divisions.length; k++) {

  divisions[k].display();
}

for (var j = 40; j <= width; j = j + 50) {

  plinkos.push(new Plinko(j, 75));

}

for (var j = 15; j <= width - 10; j = j + 50) {

  plinkos.push(new Plinko(j, 175));

}



function draw() {
  background(255, 255, 255);

  ground.display();
  stroke("yellow");
  fill("green");
  
  text("Score= "+ score,120,80);
      particles();
      play();
  drawSprites();
}
 
function particles (){

  if (frameCount % 90 === 0) {

    particles.push(new Particle(random(width / 2 + 10), 10, 10))

    if(particle!=null){
      particle.display();

    if(particle.body.position.x<300){

      score=score+500;
      particle=null;
      if(count>=5) gameState="END";
      stroke("yellow");
  fill("blue");
  
  text("Game Over",240,280)
    
    }

    }

    if(particle!=null){
      particle.display();

    if(particle.body.position.x>301&&particle.body.position.x<600 ){

      score=score+100;
      particle=null;
      if(count>=5) gameState="END";
      stroke("yellow");
  fill("blue");
  
  text("Game Over ",240,280)
    
    }

    }

    if(particle!=null){
      particle.display();

    if(particle.body.position.x>601&&particle.body.position.x<900 ){

      score=score+200;
      particle=null;
      if(count>=5) gameState="END";
      stroke("yellow");
      fill("blue");
      textSize(20)
     text("Game Over ",240,280)
    
    }

    }
}


}

function play(){
  if(gameState=="PLAY"){
  }
}

function mousePressed(){
if(gameState!=="END"){

  count++;
  particle=new Particle(mouseX,10,10,10);
}
}