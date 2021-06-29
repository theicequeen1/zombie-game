var heart1image, heart2image, heart3image, player,heart1,heart2,heart3;
var shooterimage, shootingimage, zombieimage, bgimage, bg;
var bulletgroup,zombiegroup,bullet,zombie;
var gamestate = "fight";
var bullets = 100;

function preload(){
heart1image = loadImage("heart_1.png");
heart2image = loadImage("heart_2.png");
heart3image = loadImage("heart_3.png");
shooterimage = loadImage("shooter_2.png");
shootingimage = loadImage("shooter_3.png");
zombieimage = loadImage("zombie.png");
bgimage = loadImage("bg.jpeg");

}


function setup(){
createCanvas(windowWidth, windowHeight)
bg = createSprite(displayWidth/2, displayHeight/2);
bg.addImage(bgimage)
player = createSprite(displayWidth-1000, displayHeight-300, 50, 50);
player.addImage(shooterimage) 
player.scale = 0.3;
player.debug = true;
player.setCollider("rectangle",0, 0, 300, 300);
heart1 = createSprite(displayWidth-250,40,20,20);
heart1.addImage(heart1image)
heart1.scale = 0.4;
heart1.visible = false;
heart2 = createSprite(displayWidth-200,40,20,20);
heart2.addImage(heart2image)
heart2.scale = 0.4;
heart2.visible = false;
heart3 = createSprite(displayWidth-150,40,20,20);
heart3.addImage(heart3image)
heart3.scale = 0.4;

bulletgroup = new Group();
zombiegroup = new Group();
}



function draw(){
background(0)
if(gamestate == "fight"){
  if(keyDown("UP_ARROW")){
  player.y = player.y-30;    
  }  
  if(keyDown("DOWN_ARROW")){
    player.y = player.y+30;  
  }
  if(keyDown("space")){
bullet = createSprite(displayWidth-1000,player.y-30,20,10);
bullet.velocityX = 20;
bulletgroup.add(bullet);
player.addImage(shootingimage)
bullets = bullets-1;
  }
  else if(keyWentUp("space")){
   player.addImage(shooterimage)   
  }
  if(bullets == 0){
     gamestate = "bullet" 
  }

}
zombies();
drawSprites()
}

function zombies(){
if(frameCount%50 == 0){
zombie = createSprite(random(500,1100),random(100,500),40,40);
zombie.addImage(zombieimage)
zombie.velocityX = -3;
zombie.setCollider("rectangle",0,0,400,400)
zombiegroup.add(zombie)
zombie.scale = 0.15   
}
}