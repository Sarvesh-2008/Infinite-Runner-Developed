var PLAY = 1;
var END = 0;
var START = 2
var gameState = START;
var life = 2;
var ground,ground_image,invisible_ground;
var girl,girl_running,girl_collided,girlImage,zombie,zombie_running,zombie_attack;
var obstaclesGroup,obstacle1,obstacle2,obstacle3,obstacle4;
var jumpSound,dieSound,checkpointSound;
var score;
var gameOver,restart,gameOverImage,restartImage;
var witch,skeleton,ghost,pumpkin;
var gummyGroup,gummy,gummyImage;
var gummyScore = 0;
var score = 0;
var highscore = localStorage.getItem("highscore");
var bgSound;

function preload(){
ground_image=loadImage("Background.png");
  girl_running=loadAnimation("Run (1).png","Run (2).png","Run (3).png","Run (4).png","Run (5).png","Run (6).png","Run (7).png","Run (8).png","Run (9).png","Run (10).png","Run (11).png","Run (12).png","Run (14).png","Run (15).png","Run (16).png","Run (17).png","Run (18).png","Run (19).png","Run (20).png");
  zombie_running=loadAnimation("Walk (1).png","Walk (2).png","Walk (3).png","Walk (4).png","Walk (5).png","Walk (6).png","Walk (7).png","Walk (8).png","Walk (9).png","Walk (10).png");
  zombie_attack=loadAnimation("Attack (2).png","Attack (3).png","Attack (4).png","Attack (5).png","Attack (6).png","Attack (7).png","Attack (8).png");
  obstacle1=loadImage("obstacle1.png");
  zombie_idle=loadImage("Stand.png");
  jumpSound = loadSound("jump.mp3")
  dieSound = loadSound("die.mp3")
  checkPointSound = loadSound("checkPoint.mp3")
  gameOverImage=loadImage("gameOver1.png");
  restartImage=loadImage("restart1.png");
  girl_collided=loadImage("Dead (30).png");
  girlImage=loadImage("Idle (1).png");
  witch = loadImage("witch.gif");
  skeleton = loadImage("skeleton.gif");
  ghost = loadImage("ghost.gif");
  pumpkin = loadImage("pumpkin.gif");
  gummyImage = loadImage("gummy.gif")
  bgSound = loadSound("bgSound.ogg");
  
}

function setup() {
 createCanvas(1700,700);
  
ground=createSprite(0,0,0,0);
  ground.shapeColor="white";
ground.addImage("ground_image",ground_image);
ground.scale=1.4;
   
  
   girl=createSprite(300,420,600,10);
  girl.addAnimation("girl_running",girl_running);
  girl.addImage("girl_collided",girl_collided);
  girl.addImage("girlImage",girlImage);
  girl.scale=0.2;
 // girl.velocityX=2;
  girl.debug=false;
  girl.setCollider("rectangle",0,0,girl.width,girl.height)
  
  
  zombie=createSprite(50,410,600,10);
  zombie.addAnimation("zombie_running",zombie_running);
  zombie.addAnimation("zombie_attack",zombie_attack);
  zombie.addImage("zombie_idle",zombie_idle);
  zombie.scale=0.2;
  zombie.debug=false;
 // zombie.velocityY=-13;
 // zombie.velocityX=Math.round(random(1,2));
  
  invisible_ground=createSprite(300,470,600,10);
  invisible_ground.visible=false;
  
   gameOver = createSprite(300,100);
  gameOver.addImage(gameOverImage);
  
  restart = createSprite(300,180);
  restart.addImage(restartImage);
  
  obstaclesGroup=new Group();
  
  score=0;
  
  gummyGroup = new Group();
}

function draw() {
 background("black");
  ground.velocityX = -(6 +score / 100)
  drawSprites();
   camera.position.y= girl.position.y
   if(localStorage.getItem("highscore")<score){
        localStorage["highscore"] = score;
     textSize(20);
      fill("yellow");   
     
     text("OMG! U broke the Record",200,400)
     
   }
  if (gummyScore<16&&score > 400){
       
        gameState = END;
    textSize(18);
      fill("red");
    text("During The long Journey She Lost Her Energy And Her Speed Got Slowed. ",5,350) 
        }
     if(gummyScore <32&&score > 800){
 gameState = END;
       textSize(18);
      fill("red");
    text("During The long Journey She Lost Her Energy And Her Speed Got Slowed. ",5,350)
       
     }
     if(gummyScore <48&&score > 1200){
 gameState = END;
       textSize(18);
      fill("red");
    text("During The long Journey She Lost Her Energy And Her Speed Got Slowed. ",5,350)
     }
     if(gummyScore <64&&score > 1600){
 gameState = END;
       textSize(18);
      fill("red");
    text("During The long Journey She Lost Her Energy And Her Speed Got Slowed. ",5,350);
     }
     if(gummyScore <80&&score > 2000){
 gameState = END;
       textSize(18);
      fill("red");
    text("During The long Journey She Lost Her Energy And Her Speed Got Slowed. ",5,350)
     }
     if(gummyScore <96&&score > 2400){
 gameState = END;
       textSize(18);
      fill("red");
    text("During The long Journey She Lost Her Energy And Her Speed Got Slowed. ",5,350)
     }
     if(gummyScore <112&&score > 2800){
 gameState = END;
       textSize(18);
      fill("red");
    text("During The long Journey She Lost Her Energy And Her Speed Got Slowed. ",5,350)
     }
     if(gummyScore <138&&score > 3200){
 gameState = END;
       textSize(18);
      fill("red");
    text("During The long Journey She Lost Her Energy And Her Speed Got Slowed. ",5,350)
     }
     if(gummyScore <144&&score > 3600){
 gameState = END;
       textSize(18);
      fill("red");
    text("During The long Journey She Lost Her Energy And Her Speed Got Slowed. ",5,350)
     }
     if(gummyScore <160&&score > 4000){
 gameState = END;
       textSize(18);
      fill("red");
    text("During The long Journey She Lost Her Energy And Her Speed Got Slowed. ",5,350)
     }
     if(gummyScore <176&&score > 4400){
 gameState = END;
       textSize(18);
      fill("red");
    text("During The long Journey She Lost Her Energy And Her Speed Got Slowed. ",5,350)
     }
 if (gameState === START){
   girl.visible = false;
   zombie.visible = false;
   gameOver.visible = false;
   restart.visible = false;
   ground.visible = false
  if (keyDown("space")){
    gameState =PLAY
   bgSound.play();
    bgSound.loop();
  }
    textSize(40)

    fill("red")
    text("Press Space To Start!",550,450);
    textSize(25);
    fill("Lightgreen");
    

    
    text("1) A poor Girl has lost her way to HOME, help her to  ",550,100);
    text("get back home safely.",650,125)
    text("2) She has lost her way in an UNDEAD forest in ",550,180);
    text(" which a ZOMBIE is trying to EAT her.",550,205);
    text("3)Don't let her TOUCH ANY CREATURE or else ",550,255);
    text("4) Collect the gummy Bears ",600,340);
   
 }
 // console.log(girl.y);
   //Gravity
girl.velocityY = girl.velocityY + 0.8;
girl.collide(invisible_ground); 
  
   //Gravity
zombie.velocityY = zombie.velocityY + 0.8;
zombie.collide(invisible_ground); 
  
  
   if (gameState===PLAY){
    
     gameOver.visible=false;
  restart.visible=false;
     girl.visible = true;
   zombie.visible = true;
   ground.visible = true;


       
     
    //  zombie.y=girl.y;
   score = score + Math.round(getFrameRate()/60);
    
      fill("lightpink");
  textSize(20);
   text("Survival Time : "+ score, 400,50);
  text("Score: "+gummyScore,100,50);
  text("Highest Survival Time of all TIME :"+localStorage.getItem("highscore"),125,300)
 
    spawnObstacles();
     if(girl.isTouching(gummyGroup)){
       gummyScore = gummyScore +2
       gummyGroup.destroyEach();
     }
   if (obstaclesGroup.isTouching(zombie)){
     zombie.velocityY=-12;
   }

     
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
     if(score>0 && score%100 === 0){
       checkPointSound.play() 
    }
    
 if((keyWentDown("space")&& girl.y >= 380)) {
   girl.velocityY = -20;
    jumpSound.play();
  }  
  
  if (girl.isTouching(obstaclesGroup)){
life = life -1
  obstaclesGroup.destroyEach();
  }
     if(life === 1){
       zombie.x = 200;   
     }
     if(life === 0){
     gameState=END;
     dieSound.play();
     obstaclesGroup.destroyEach();
     }
     spawnGummy();
  }
else if ( gameState===END) {
  bgSound.stop();
  gameOver.visible=true;
  restart.visible=true;
  ground.velocityX = 0;
     girl.velocityY = 0
    girl.changeImage("girlImage",girlImage);
  zombie.changeAnimation("zombie_attack",zombie_attack);
     zombie.x=girl.x;
     girl.y = zombie.y
 
  if (zombie.isTouching(girl)) {
    girl.changeImage("girl_collided",girl_collided);
    zombie.changeImage("zombie_idle",zombie_idle);
  }
      //set lifetime of the game objects so that they are never destroyed
    
  
    if(mousePressedOver(restart)) {
      reset();
      bgSound.play();
    }
obstaclesGroup.destroyEach();
  gummyGroup.destroyEach();
} 
  
 
}

function reset(){
  gameState=START;
gameOver.visible=false;
restart.visible=false;
girl.changeAnimation("girl_running",girl_running);
  obstaclesGroup.destroyEach();
  score=0;
  zombie.x=50;
  ground.velocityX = -(6 + score/100)
  life = 2
  gummyScore = 0;
 
}

function spawnObstacles() {
   if (frameCount % 300 === 0||frameCount % 801===0){
   var obstacle = createSprite(600,400,10,40);
   obstacle.velocityX =  -(6 +score/100);
   
    //generate random obstacles
   var rand = Math.round(random(1,4));
    
   obstacle.scale=0.1;
      obstaclesGroup.add(obstacle);
    //obstacle.debug=true;
obstacle.setCollider("circle",0,0,60);
   switch(rand)
    {
        
        case 1: obstacle.addImage(witch);obstacle.scale=0.8;
        break;
        case 2: obstacle.addImage(skeleton);obstacle.scale=0.2
        break;
        case 3: obstacle.addImage(pumpkin);obstacle.scale=0.5
        break;
        case 4: obstacle.addImage(ghost);obstacle.scale=0.4
        break;
        
        default: break;
    }
   }
     
}
function spawnGummy(){
   if (frameCount % 100 === 0||frameCount % 643 === 0){
   var gummy = createSprite(600,200,10,40);
   gummy.velocityX = -(6 + score/100);
   gummy.addImage(gummyImage)
    //generate random obstacles
   var rand = Math.round(random(1,4));
    
   gummy.scale=0.2;
      gummyGroup.add(gummy);
   // gummy.debug=true;
gummy.setCollider("circle",0,0,60);
}
}
