var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var gameState = "play"

function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;

 ghost = createSprite(200,200,30,30);
 ghost.addImage(ghostImg);
 ghost.scale = 0.4

 doorsGroup = new Group();
 climbersGroup = new Group();
}

function draw() {
  background(200);
  if(gameState === "play"){
    if(tower.y > 400){
        tower.y = 300
    }

    if(keyDown("space")){ 

      ghost.velocityY = -10
    }
      ghost.velocityY = ghost.velocityY + 0.5

    if(keyDown("a")){
      ghost.velocityX = -5

    }
    
    if(keyDown("d")){
      ghost.velocityX = 5

    }

    if(climbersGroup.isTouching(ghost)){
      ghost.velocityY = 0;
      ghost.destroy();
      climber.velocityY = 0;
      door.velocityY = 0;
      climber.destroy();
      door.destroy();
      tower.velocityY = 0;
      gameState = "End"

   }
   drawSprites();
  }

   
    if(gameState === "End"){
       background("black")

       stroke("red"); 
       textSize(40);
       text("game Over",200,200);
       
    }
      

    
    obstacles();
    
    
}
   function obstacles(){
     if(frameCount %150 == 0){ 
      door = createSprite(200,-50);
      door.addImage(doorImg);
      climber = createSprite(200,10);
      climber.addImage(climberImg);
      door.x = Math.round(random(200,400));
      climber.x = door.x 
      door.velocityY = 2;
      climber.velocityY = 2;
      climbersGroup.add(climber);
     }
   }