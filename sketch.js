var pc,pcimg
var door ,doorimg

function preload(){
pcimg=loadImage("imgz/pc.png");
doorimg=loadImage("imgz/door.png");
}

function setup() {
  createCanvas(displayWidth-50,displayHeight-50);

 

 door=createSprite(displayWidth-300,displayHeight-300,10,10);
 door.addImage(doorimg);
 door.scale=0.3

 pc= createSprite(displayWidth-200, displayHeight-200, 10, 10);
 pc.addImage(pcimg);
 pc.scale=0.3;
}

function draw() {
  background(255,255,255);  
  if(keyDown('a')){
  pc.x=pc.x-2
  }
  if(keyDown("d")){
    pc.x=pc.x+2
  }
  
  drawSprites();
}