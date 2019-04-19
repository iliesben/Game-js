
//// MENU OF THE GAME /////

let continueToMaps = document.querySelector(".continueToMaps")
let jonSnow = document.querySelector("div.jonSnow")
let daenerys = document.querySelector("div.daenerys")
let cersei = document.querySelector("div.cersei")
let mainMenu = document.querySelector(".mainMenu")
let characters = document.querySelector(".charactersMenu")
let mapsMenu = document.querySelector(".mapsMenu")
let pausedMenu= document.querySelector(".pausedMenu")
let castle = document.querySelector(".castle img")
let desert = document.querySelector(".desert img")
let neige = document.querySelector(".ice img")
let canvas =  document.querySelector("canvas")

mainMenu.addEventListener('click', selectionCharacters)
function selectionCharacters() {
  characters.style.display='block'
}

// player1.addEventListener('click', characters1)
// if (player1.character){
//   function characters1() {
//   jonSnow.style.display='block'
// }
// }

let clickJonSnow = 0
jonSnow.addEventListener('click', function(){
  clickJonSnow++
  console.log(clickJonSnow)
}
)

let clickCersei = 0
cersei.addEventListener('click', function(){
  clickCersei++
  console.log(clickCersei)
}
)

let clickDaenerys = 0
daenerys.addEventListener('click', function(){
  clickDaenerys++
  console.log(clickDaenerys)
}
)

jonSnow.addEventListener('click', charactersJonSnow)
    function charactersJonSnow() {
    if(clickJonSnow < 3){
      if (clickJonSnow == 1) {
        player1.character = "1"
        jonSnow.style.borderColor='red'
        clickCersei++
        clickDaenerys ++
        clickJonSnow++
        // clickCersei++
        // clickDaenerys ++
        clickJonSnow++
        console.log(player1.character)
        console.log(clickJonSnow)
      }
      else if (clickJonSnow == 2){
        jonSnow.style.borderColor='blue'
        clickCersei++
        clickDaenerys ++
        clickJonSnow++
        clickJonSnow++
        player2.character = "1"
        console.log(player2.character)
      }
    }
}
cersei.addEventListener('click', charactersCersei, false)
function charactersCersei() {
    if(clickCersei < 3){
      if (clickCersei == 1) {
      player1.character = "3"
      cersei.style.borderColor='red'
      clickCersei++
      clickDaenerys ++
      clickJonSnow++
      clickCersei++
      console.log(player1.character)
    }
      else if (clickCersei == 2 ){
      player2.character = "3"
      cersei.style.borderColor='blue'
      clickCersei++
      clickDaenerys ++
      clickJonSnow++
      clickCersei++
    }
  }
}
daenerys.addEventListener('click', charactersDaenerys)
function charactersDaenerys() {
      if ( clickDaenerys < 3 ) {
        if(clickDaenerys == 1){
          player1.character = "2"
          daenerys.style.borderColor='red'
          clickCersei++
          clickDaenerys ++
          clickJonSnow++
          console.log(player1.character)
          clickDaenerys ++
        }
        else if (clickDaenerys == 2 ){
          player2.character = "2"
          daenerys.style.borderColor='blue'
          clickCersei++
          clickDaenerys ++
          clickJonSnow++
          clickDaenerys ++
      }
  }
}


    continueToMaps.style.display='block'



 continueToMaps.addEventListener('click', toMaps)
  function toMaps() {
    mapsMenu.style.display='block'
 }

castle.addEventListener('click', game)
desert.addEventListener('click', game)
neige.addEventListener('click', game)

function game() {
  canvas.style.display='block'
}












let context, controller1, player1, loopPlayer1


context = document.querySelector("canvas").getContext("2d");
context.canvas.width = 1600;
context.canvas.height = 1000;

const xPlatformLeft = 50
const xPlatformRight = 1100
const xPlatformMiddle = 300
const yPlatformLeft = 500
const yPlatformRight = 500
const yPlatformMiddle = 800
const wPlatformLeft = 450
const wPlatformRight = 450
const wPlatformMiddle = 1000
const hPlatformLeft = 60
const hPlatformRight = 60
const hPlatformMiddle = 80
const bgSong = new Audio('music/bg_sound.mp3')


document.addEventListener('keydown', function(){
  bgSong.play()
})

let ballFired = false;
let ballFired2 = false;
let rightBall = 0;
let leftBall = 0;
let rightBall2 = 0;
let leftBall2 = 0;
let imgPlatform = new Image();


imgPlatform.onload = function() {
    context.drawImage(imgPlatform, xPlatformLeft, yPlatformLeft, wPlatformLeft, hPlatformLeft);
    context.drawImage(imgPlatform, xPlatformRight, yPlatformRight, wPlatformRight, hPlatformRight);
    context.drawImage(imgPlatform, xPlatformMiddle, yPlatformMiddle, wPlatformMiddle, hPlatformMiddle);
}

imgPlatform.src = 'tilesets/icePlatform.png'

setInterval(  () => {
let imgPlayer1 = new Image();
imgPlayer1.onload = function() {
  context.drawImage(imgPlayer1, 20, 20, 63, 58)
}
imgPlayer1.src = `sprites/${player1.dir}head${player1.headNumber}.png`

let imgPlayer2 = new Image();
imgPlayer2.onload = function() {
  context.drawImage(imgPlayer2, 1520, 20, 63, 58)
}
imgPlayer2.src = `sprites/${player2.dir}head${player2.headNumber}.png`
},1
)
// PLAYER1

context.fillStyle = "green"
context.fillRect(75,30,400,25)
context.fillRect(1130,30,400,25)


player1 = {
  x:70, // center of the canvas
  y:375,
  xNew : 0,
  x_velocity:0,
  y_velocity:0,
  jumping:true,
  speed : 2,
  directionRight : true,
  power : false,
  dir: "right",
  life : 400,
  Newlife : 0,
  headNumber : "1",
  character: "1",
};

let imageLeft = new Image()
imageLeft.onload = function(){
context.drawImage(imageLeft, player1.x, player1.y)
}
imageLeft.src = player1.directionLeft
imageLeft.src = `sprites/${player1.dir}${player1.character}.png`

controller1 = {

  left:false,
  right:false,
  up:false,
  attack : false,
  keyListener:function(event) {

    let key_state1 = (event.type == "keydown")?true:false;

    switch(event.keyCode) {

      case 81:// left key
        controller1.left = key_state1;
      break;
      case 90:// up key
        controller1.up = key_state1;
      break;
      case 68:// right key
        controller1.right = key_state1;
      break;
      case 69: // attack key
      controller1.attack = key_state1;
      break;
    }

  }
}

loopPlayer1 = function() {

  if (controller1.up && player1.jumping == false) {
    context.clearRect(player1.x, player1.y, 100,125)
    player1.y_velocity -= 55;
    context.drawImage(imageLeft, player1.x, player1.y)
    imageLeft.src = `sprites/${player1.dir}${player1.character}.png`
    player1.jumping = true;

  }

  if (controller1.left) {
    context.clearRect(player1.x, player1.y, 100,125)
    player1.x_velocity -= 1.0;
    context.drawImage(imageLeft, player1.x, player1.y)
    player1.dir = "left";
    imageLeft.src = `sprites/${player1.dir}${player1.character}.png`
  }

  if (controller1.right) {
    context.clearRect(player1.x, player1.y, 100,125)
    player1.x_velocity += 1.0;
    context.drawImage(imageLeft, player1.x, player1.y)
    player1.dir = "right";
    imageLeft.src = `sprites/${player1.dir}${player1.character}.png`
  }
  player1.y_velocity += 1.5;// gravity
  player1.x += player1.x_velocity;
  context.clearRect(player1.x, player1.y, 100,125)
  context.drawImage(imgPlatform, xPlatformMiddle, yPlatformMiddle, wPlatformMiddle, hPlatformMiddle)
  context.drawImage(imgPlatform, xPlatformLeft, yPlatformLeft, wPlatformLeft, hPlatformLeft);
  context.drawImage(imgPlatform, xPlatformRight, yPlatformRight, wPlatformRight, hPlatformRight);
  player1.y += player1.y_velocity;
  player1.x_velocity *= 0.9;// friction
  player1.y_velocity *= 0.9;// friction
  context.drawImage(imageLeft, player1.x, player1.y)
  imageLeft.src = `sprites/${player1.dir}${player1.character}.png`


  // if player1 is going off the middlePlatform
  if ((player1.x > 230 && player1.x < 1269) && (player1.y > 675) && (player1.y < 675+80)) {
      player1.jumping = false;
      context.clearRect(player1.x, player1.y, 100,125)
      player1.y_velocity = 0;
      player1.y = 675
      context.drawImage(imageLeft, player1.x, player1.y)
      imageLeft.src = `sprites/${player1.dir}${player1.character}.png`
      context.drawImage(imgPlatform, xPlatformMiddle, yPlatformMiddle, wPlatformMiddle, hPlatformMiddle);
    }

  // if player1 is going off the leftPlatform
  if ((player1.x +80> 50 && player1.x < 450) && (player1.y + 125 > 500 && player1.y < 500 + 20))
    {
      player1.jumping = false;
      context.clearRect(player1.x, player1.y, 100,125)
      player1.y_velocity = 0;
      player1.y = 500-125;
      context.drawImage(imageLeft, player1.x, player1.y)
      imageLeft.src = `sprites/${player1.dir}${player1.character}.png`
      context.drawImage(imgPlatform, xPlatformLeft, yPlatformLeft, wPlatformLeft, hPlatformLeft);
    }

 // if player1 is going off the rightPlatform
  if ((player1.x+80 > 1120 && player1.x < 1520) && (player1.y+ 125 > 500 && player1.y < 500 + 20)){
      player1.jumping = false;
      context.clearRect(player1.x, player1.y, 100,125)
      player1.y_velocity = 0;
      player1.y = 500-125;
      context.drawImage(imageLeft, player1.x, player1.y)
      imageLeft.src = `sprites/${player1.dir}${player1.character}.png`
      context.drawImage(imgPlatform, xPlatformRight, yPlatformRight, wPlatformRight, hPlatformRight);

    }

  // call update when the browser is ready to draw again
  window.requestAnimationFrame(loopPlayer1);
}

fireBall1 = {
  xBall: player1.x+100, // pos x of balle
  xBall_velocity: 50, // velocity of balle
  yBall : 0, // y ball
  activBall : false, // bal activation
  dirBall : 'left', // direction of blle
};

let imageBall1 = new Image()
imageBall1.onload = function(){
}
imageBall1.src = fireBall1.dirBall
imageBall1.src = `sprites/power${player1.character}.png`


// function of attack

loopBall = function(){
        // if player controller "P"
     if(controller1.attack && !ballFired){
       // interval of ball in right direcrion
       ballFired = true;
        // if the player is in right direction
       if(player1.dir == "right"){
         fireBall1.dirBall = 'right'
         fireBall1.yBall = player1.y
         fireBall1.xBall = player1.x
         rightBall = setInterval(rightDirBall, 25)
      }
      if(player1.dir == "left"){
        fireBall1.dirBall = 'left'
        fireBall1.yBall = player1.y
        fireBall1.xBall = player1.x
        leftBall = setInterval(leftDirBall, 25)
      }
  }

    if ( fireBall1.xBall >= player2.x && fireBall1.xBall < player2.x+100 && fireBall1.yBall >= player2.y && fireBall1.yBall < player2.y+125 && fireBall1.dirBall == 'right' )  {
    //life of player 2 - 10
    player2.life = player2.life - 10
    context.clearRect(1130,0,400-player2.life,100)
    // pos of play2 + 10
    player2.xNew = player2.x + 10
    player2.x = player2.xNew
    console.log("collision")
  }

  if ( fireBall1.xBall >= player2.x && fireBall1.xBall < player2.x+100 && fireBall1.yBall >= player2.y && fireBall1.yBall < player2.y+125 && fireBall1.dirBall == 'left'){
    player2.life = player2.life - 10
    context.clearRect(1130,0,400-player2.life,100)
    player2.xNew = player2.x - 10
    player2.x = player2.xNew

  }

  if ( player1.y > 1000){
    player1.life = player1.life - 400
    context.clearRect(78,0,398,100)
    imgPlayer1.onload = function() {
      context.drawImage(imgPlayer1, 20, 20, 63, 58)
    }
  }

   window.requestAnimationFrame(loopBall);
}


window.addEventListener("keydown", controller1.keyListener);
window.addEventListener("keyup", controller1.keyListener);
window.requestAnimationFrame(loopPlayer1);
window.requestAnimationFrame(loopBall);

/////<------------------------ PLAYYYER 2 ------------------------->////

let controller2, player2, loopPlayer2


player2 = {
  x:1440, // center of the canvas
  y:375,
  xNew: 0,
  xNew2 : 0,
  x_velocity:0,
  y_velocity:0,
  jumping:true,
  speed : 2,
  directionRight : true,
  power : false,
  dir: "left",
  life : 400,
  Newlife : -10,
  character : "3",
  headNumber : "3",
};
let imageRight = new Image()
imageRight.onload = function(){
context.drawImage(imageLeft, player2.x, player2.y)
}
imageRight.src = player2.directionRight
imageRight.src = `sprites/${player2.dir}${player2.character}.png`

controller2 = {

  left:false,
  right:false,
  up:false,
  attack : false,
  keyListener:function(event) {

    let key_state2 = (event.type == "keydown")?true:false;

    switch(event.keyCode) {

      case 75:// left key
        controller2.left = key_state2;
      break;
      case 79:// up key
        controller2.up = key_state2;
      break;
      case 77:// right key
        controller2.right = key_state2;
      break;
      case 80: // attack key
      controller2.attack = key_state2;
      break;
    }

  }
}

loopPlayer2 = function() {

  if (controller2.up && player2.jumping == false) {
    context.clearRect(player2.x, player2.y, 100,125)
    player2.y_velocity -= 55;
    context.drawImage(imageRight, player2.x, player2.y)
    imageRight.src = `sprites/${player2.dir}${player2.character}.png`
    player2.jumping = true;

  }

  if (controller2.left) {
    context.clearRect(player2.x, player2.y, 100,125)
    player2.x_velocity -= 1.0;
    context.drawImage(imageRight, player2.x, player2.y)
    player2.dir = "left";
    imageRight.src = `sprites/${player2.dir}${player2.character}.png`
  }

  if (controller2.right) {
    context.clearRect(player2.x, player2.y, 100,125)
    player2.x_velocity += 1.0;
    context.drawImage(imageRight, player2.x, player2.y)
    player2.dir = "right";
    imageRight.src = `sprites/${player2.dir}${player2.character}.png`
  }
  player2.y_velocity += 1.5;// gravity
  player2.x += player2.x_velocity;
  context.clearRect(player2.x, player2.y, 100,125)
  context.drawImage(imgPlatform, xPlatformMiddle, yPlatformMiddle, wPlatformMiddle, hPlatformMiddle)
  context.drawImage(imgPlatform, xPlatformLeft, yPlatformLeft, wPlatformLeft, hPlatformLeft);
  context.drawImage(imgPlatform, xPlatformRight, yPlatformRight, wPlatformRight, hPlatformRight);
  player2.y += player2.y_velocity;
  player2.x_velocity *= 0.9;// friction
  player2.y_velocity *= 0.9;// friction
  context.drawImage(imageRight, player2.x, player2.y)
  imageRight.src = `sprites/${player2.dir}${player2.character}.png`


  // if player2 is going off the middlePlatform
  if ((player2.x > 230 && player2.x < 1269) && (player2.y > 675) && (player2.y < 675+80)) {
      player2.jumping = false;
      context.clearRect(player2.x, player2.y, 100,125)
      player2.y_velocity = 0;
      player2.y = 675
      context.drawImage(imageRight, player2.x, player2.y)
      imageRight.src = `sprites/${player2.dir}${player2.character}.png`
      context.drawImage(imgPlatform, xPlatformMiddle, yPlatformMiddle, wPlatformMiddle, hPlatformMiddle);
    }

  // if player2 is going off the leftPlatform
  if ((player2.x +80> 50 && player2.x < 450) && (player2.y + 125 > 500 && player2.y < 500 + 20))
    {
      player2.jumping = false;
      context.clearRect(player2.x, player2.y, 100,125)
      player2.y_velocity = 0;
      player2.y = 500-125;
      context.drawImage(imageRight, player2.x, player2.y)
      imageRight.src = `sprites/${player2.dir}${player2.character}.png`
      context.drawImage(imgPlatform, xPlatformLeft, yPlatformLeft, wPlatformLeft, hPlatformLeft);
    }

 // if player2 is going off the rightPlatform
  if ((player2.x+80 > 1120 && player2.x < 1520) && (player2.y+ 125 > 500 && player2.y < 500    + 20))
  {
      player2.jumping = false
      context.clearRect(player2.x, player2.y, 100,125)
      player2.y_velocity = 0
      player2.y = 500-125

      context.drawImage(imageRight, player2.x, player2.y)

      imageRight.src = `sprites/${player2.dir}${player2.character}.png`

      context.drawImage(imgPlatform, xPlatformRight, yPlatformRight, wPlatformRight, hPlatformRight)

    }


  // call update when the browser is ready to draw again
  window.requestAnimationFrame(loopPlayer2);
}

fireBall2 = {
  xBall2: player2.x+100,
  xBall2_velocity: 50,
  yBall2 : 0,
  activBall : false,
  dirBall2 : 'left',
};

let imageBall2 = new Image()
imageBall2.onload = function(){
// context.drawImage(imageBall2, player2.x, player2.y)
}
imageBall2.src = fireBall2.dirBall2
imageBall2.src = `sprites/power${player2.character}.png`


loopBall2 = function(){
     if(controller2.attack && !ballFired2){
       ballFired2 = true;

       if(player2.dir == "right"){
         fireBall2.dirBall2 = 'right'
          fireBall2.yBall2 = player2.y
          fireBall2.xBall2 = player2.x
          rightBall2 = setInterval(rightDirBall2, 25)
        }
          if(player2.dir == "left"){
            fireBall2.dirBall2 = 'left'
            fireBall2.yBall2 = player2.y
            fireBall2.xBall2 = player2.x
            leftBall2 = setInterval(leftDirBall2, 25)
    }
  }

// ---------------- colllision --------------

    if (fireBall2.xBall2 >= player1.x && fireBall2.xBall2 < player1.x+100 && fireBall2.yBall2 >= player1.y && fireBall2.yBall2 < player1.y+125 && fireBall2.dirBall2 == 'left'){
      //life of player1 - 10
      player1.Newlife = player1.life - 10
      context.clearRect(player1.life,0,400,100)
      player1.life =  player1.Newlife
      // pos of play1 + 10
      player1.xNew = player1.x - 10
      player1.x = player1.xNew
      console.log("collision2")
    }

    if ( fireBall2.xBall2 >= player1.x && fireBall2.xBall2 < player1.x+100 && fireBall2.yBall2 >= player1.y && fireBall2.yBall2 < player1.y+125 && fireBall2.dirBall2 == 'right'){
      player1.life = player1.life - 10
      context.clearRect(player1.life,0,400,100)
      player1.xNew = player1.x + 10
      player1.x = player1.xNew
      console.log("collision4")
    }

    if ( player2.y > 1000){
      player2.life = player2.life - 400
      context.clearRect(1130,0,392,100)
    }

   window.requestAnimationFrame(loopBall2);
}

     function rightDirBall(){

     context.clearRect(fireBall1.xBall, fireBall1.yBall, 120,120)
     // x of ball take the velocity x of the ball
     fireBall1.xBall += fireBall1.xBall_velocity

     context.drawImage(imageBall1, fireBall1.xBall, fireBall1.yBall)

     context.clearRect(fireBall1.xBall, player1.y, 0,80)

 }

 function leftDirBall(){
      context.clearRect(fireBall1.xBall, fireBall1.yBall, 100,120)
      fireBall1.xBall -= fireBall1.xBall_velocity
      context.drawImage(imageBall1, fireBall1.xBall-12, fireBall1.yBall)
      context.clearRect(fireBall1.xBall, player1.y, 40,80)
      if (fireBall1.xBall < -150){
        clearInterval(leftBall)
        ballFired = false;
      }
}
function rightDirBall2(){
      context.clearRect(fireBall2.xBall2, fireBall2.yBall2, 100,120)
      fireBall2.xBall2 += fireBall2.xBall2_velocity
      context.drawImage(imageBall2, fireBall2.xBall2+12, fireBall2.yBall2)
      context.clearRect(fireBall2.xBall2, player2.y, 60,80)
      if (fireBall2.xBall2> 1700){
        clearInterval(rightBall2)
        ballFired2 = false;
    }
  }
  function leftDirBall2(){
       context.clearRect(fireBall2.xBall2, fireBall2.yBall2, 100,120)
       fireBall2.xBall2 -= fireBall2.xBall2_velocity
       context.drawImage(imageBall2, fireBall2.xBall2-12, fireBall2.yBall2)
       context.clearRect(fireBall2.xBall2, player2.y, 40,80)
       if (fireBall2.xBall2 < -150){
         clearInterval(leftBall2)
         ballFired2 = false;
       }
}
/*
var endGame

processor.doLoad = function doLoad() {
  if (player1.life < 0){
    this.video = document.querySelector(`${}Death);
  }
  if (player2.life < 0){
    this.video = document.querySelector('jonSnowDeath');

  }
}

var processor;

  processor.doLoad = function doLoad() {
    this.video = document.getElementById('video');
    this.c1 = document.getElementById('c1');
    this.ctx1 = this.c1.getContext('2d');
    this.c2 = document.getElementById('c2');
    this.ctx2 = this.c2.getContext('2d');
    let self = this;
    this.video.addEventListener('play', function() {
        self.width = self.video.videoWidth / 2;
        self.height = self.video.videoHeight / 2;
        self.timerCallback();
      }, false);
  },
*/
window.addEventListener("keydown", controller2.keyListener);
window.addEventListener("keyup", controller2.keyListener);
window.requestAnimationFrame(loopPlayer2);
window.requestAnimationFrame(loopBall2);
