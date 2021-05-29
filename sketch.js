//Create variables here
var dog, dog1, happyDog, database, foods, foodStock
var feed, addFood
var fedTime, lastFed
var foodObj
function preload() {
  dog1 = loadImage("Dog.png")
  happyDog = loadImage("HappyDog.png")

  //load imaes here
}


function setup() {
  createCanvas(1000, 500);
  database = firebase.database()
  dog = createSprite(500, 330, 20, 20)
  dog.addImage(dog1)
  dog.scale = 0.3

  feed = createButton("Feed")
  feed.position(450, 5)
  feed.mousePressed(feedDog)

  addFood = createButton("Add Food")
  addFood.position(500,5)
  foodObj = new FoodF
}

// function readStock(data) {
//   foods = data.val()
// }

// function writeStock(x) {

//   if (x <= 0) {
//     x = 0
//   } else {
//     x = x - 1
//   }
//   database.ref('/').update({
//     Food: x
//   })
// }
// foodObj = new Food()
function feedDog(){
  dog.addImage(happyDog)
 // foods = data.val()
  foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  database.ref('/').update({
    foods:foodObj.getFoodStock()
  })

  
}

function getFoodStock(){
  foods = database.ref("Food")
        foods.on("value",function(data){
            foods = data.val()
           
  })
}

function updateFoodStock(){
  database.ref('/').update({
    foods: foods-1
  })
}
function draw() {
  background(46, 139, 87)
  // foodStock = database.ref('Food')
  // foodStock.on("value", Food.getFoodStock)
  // if (keyDown(UP_ARROW)) {
  //   writeStock(foods)
  //   dog.addImage(happyDog)
  // }
  // fill("white")
  // textSize(20)
  // text("Food Remaining:" + foods, 410, 200)
  // textSize(15)
  // text("Press up arrow key to feed this.dog!", 140, 20)
  fedTime=database.ref('FeedTime')
  fedTime.on("value", function(data){
    lastFed = data.val();
  })
  drawSprites();
  //foodObj.display();
  //add styles here

}



