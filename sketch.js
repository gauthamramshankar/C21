var movingrect, gameobject1, gameobject2, gameobject3, gameobject4;

function setup() {
  createCanvas(1200,800);
gameobject1= createSprite(100, 100, 50, 50);
gameobject2 = createSprite(200, 200, 50, 50);
gameobject3 = createSprite(300, 300, 50, 50);
gameobject4 = createSprite(400, 400, 50, 50);

 gameobject1.shapeColor = "green";
gameobject2.shapeColor = "green";
gameobject3.shapeColor = "green";
gameobject4.shapeColor = "green";


movingrect = createSprite (400,200,80,30);
movingrect.shapeColor = "green";
movingrect.debug = true;
}

function draw() {
  background(0);
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;
  if (isTouching(movingrect, gameobject1)){
    movingrect.shapeColor = "white";
    gameobject1.shapeColor = "white";
  
  }
  

  
  else {
    movingrect.shapeColor = "green";
    gameobject1.shapeColor = "green";
    
  }
    
  drawSprites();
}

function isTouching(object1, object2){
  if (object1.x-object2.x < object2.width/2 + object1.width/2 &&
   object2.x - object1.x < object2.width/2 + object1.width/2 &&
   object1.y-object2.y < object2.height/2 + object1.height/2 &&
   object2.y - object1.y < object2.height/2 + object1.height/2 )
      
   {
    return true;
   }
   else {
     return false;
   }
  
}