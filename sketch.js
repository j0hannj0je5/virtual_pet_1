//Create variables here
var dog, happyDog, database, foodS,foodStock

function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png")
  happyDog = loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(325,325,20,20)
  dog.addImage(dogImg)
  dog.scale=0.5;
  database = firebase.database();
  foodStock= database.ref( 'food')
  foodStock.on("value",readStock);

  
}


function draw() {  
 background (46, 139, 87)
if (keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog)
}
  drawSprites();
  //add styles here
  textSize(17)
  text ("feed your pet more milk by pressing the up arrow!!!", 100 ,125)
  


}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0
  }else {
    x=x-1
  }

  database.ref('/').update({
    food:x
  })
}

