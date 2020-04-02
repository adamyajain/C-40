class Form{
 constructor(){
 this.input  = createInput("name");
 this.button = createButton('play');
 this.greeting = createElement('h1');
 }
 hide(){
     this.input.hide();
     this.button.hide();
     this.greeting.hide();
 }
 display(){
  var title = createElement('h1'); 
  fill("blue");
  stroke(20)
  title.html("MULTIPLAYER GAME");
 title.position(displayWidth/2,0);
  fill("blue");
  this.input.position(displayWidth/2-30,displayHeight/2);
  this.button.position(displayWidth/2+110,displayHeight/2);
  this.button.mousePressed(() =>{
      this.input.hide();
     this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("welcome "+player.name);
      this.greeting.position(displayWidth/2,displayHeight/4);
  })
 }
}