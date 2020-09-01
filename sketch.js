var dog;
var dogImg1,dogImg2;
var food;
var rect;
var milk;
var database;

function preload(){
dogImg1 = loadImage("images/dog1.png");
dogImg2 = loadImage("images/dog2.png");
}

function setup() {
  createCanvas(800, 700);
  database = firebase.database();
  dog = createSprite(400,420,50,100);
  dog.addImage(dogImg1)
  food = new Food();
  food.getfood();
  
}


function draw() {  
background("green")
noStroke();
textSize(35)
fill("white")
text("Food remaining : " + milk, width-550, 200);

noStroke();
textSize(35)
fill("white")
text("Virtual pet game ",width-540, 50);

//if(milk === -1){
  //rect = createSprite(520,200,550,50);
  //rect.shapeColor = "green"
  //noStroke();
///textSize(35)
//fill("white")
//text("Happy dog", width-490, 250);
//}

drawSprites(); 
}

function keyPressed(){
  if(keyCode === 32){
      milk = milk-1;
      food.update(milk);
      dog.addImage(dogImg2) 
  }
}



