var hasDocked=false
var bg,issImage,img1,img2,img3,img4,iss,spaceCraft
function preload(){
bg=loadImage("spacebg.jpg")
  issImage=loadImage("iss.png")
  img1=loadImage("spacecraft1.png")
  img2=loadImage("spacecraft2.png")
  img3=loadImage("spacecraft3.png")
  img4=loadImage("spacecraft4.png")

}

function setup() {
  createCanvas(600,350);

  spaceCraft=createSprite(285,240)
  spaceCraft.addImage(img1)
  spaceCraft.scale=0.15

  iss=createSprite(330,130)
  iss.addImage(issImage)
  iss.scale=0.25
}

function draw() {
  background(bg);  
  spaceCraft.addImage(img1)
  if (!hasDocked){
    spaceCraft.x=spaceCraft.x+random(-1,1)
 // }
  if (keyDown("UP_ARROW")){
    spaceCraft.y=spaceCraft.y-2
  }

  if (keyDown("LEFT_ARROW")){
    spaceCraft.addImage(img4)
    
    spaceCraft.x=spaceCraft.x-2
  }

  if (keyDown("RIGHT_ARROW")){
    spaceCraft.addImage(img3)
    
    spaceCraft.x=spaceCraft.x+2
  }

  if (keyDown("DOWN_ARROW")){
    spaceCraft.addImage(img2)
    
  }
}
if(spaceCraft.y <= (iss.y+70) && spaceCraft.x <= (iss.x-10)){
   hasDocked = true; 
  textSize(25); 
  fill("white")
 text("Docking Successful!", 200, 300); 
  
}
drawSprites();
}