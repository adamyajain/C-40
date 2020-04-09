class Game{
    constructor(){
    
    }
    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
         gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
     async start(){
        if(gameState===0){
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                player.getCount();  
            }           
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200);
        car1.addImage("car1",car1img)
        car2 = createSprite(300,200);
        car2.addImage("car2",car2img);
        car3 = createSprite(500,200);
        car3.addImage("car3",car3img)
        car4 = createSprite(700,200);
        car4.addImage("car4",car4img);
        cars = [car1,car2,car3,car4];
    }
    play(){
        form.hide();
        Player.getPlayerInfo();
        player.getPlayerRank();
        if(allPlayers !== undefined){
          background("white");
          image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
          //index of the array
          var index = 0;
          // x and y positions of cars
          var x = 350;
          var y;
          for(var plr in allPlayers){
            //add 1 to the index for every for loop
            index = index+1
            //position :the cars are away from each other in x direction
            x = x+250;
            //use the data from the database to change the Y position
            y = displayHeight-allPlayers[plr].distance;
            cars[index-1].x = x;
            cars[index-1].y = y;
            if(index ===player.index){
              fill(15,252,181)
              ellipse(x,y,75,125);
              cars[index-1].shapeColor = rgb(15,252,181);
              camera.position.x = displayWidth/2;
              camera.position.y = cars[index-1].y;

            }
          }
        }
    
        if(keyIsDown(UP_ARROW) && player.index !== null){
          player.distance +=10
          player.update();

        }
        if(player.distance>4000){
          gameState = 2;
          player.rank+=1;
          Player.updatePlayerRank(player.rank);
          
        }
        
        drawSprites();
      }
      end(){
        console.log("game Ended");
        console.log(player.rank);
        text("RANK:"+player.rank,displayWidth/2-50,y-200);
      }
    }