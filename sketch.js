var database;
var gameState = 0;
var playerCount;
var form,player,game;
var allPlayers;
var distance = 0;
var cars,car1,car2,car3,car4;
var track,car1img,car2img,car3img,car4img;

function preload(){
    track = loadImage("images/track.jpg");
    car1img = loadImage("images/car1.png");
    car2img = loadImage("images/car2.png");
    car3img = loadImage("images/car3.png");
    car4img = loadImage("images/car4.png");
}
function setup(){
    database = firebase.database();
    createCanvas(displayWidth,displayHeight);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
  if(playerCount === 4){
      game.update(1);
  } 
  if(gameState === 1){
      clear ();
      game.play();
  }
}

