var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100,585,200,30);
    surface1.shapeColor = "magenta";
    surface2 = createSprite(300,585,200,30);
    surface2.shapeColor = "green";
    surface3 = createSprite(500,585,200,30);
    surface3.shapeColor = "blue";
    surface4 = createSprite(700,585,200,30);
    surface4.shapeColor = "red";

    //create box sprite and give velocity
    box = createSprite(random(20,750),300,30,30);
    box.shapeColor = "white";
    box.velocityX = 3;
    box.velocityY = 3;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites();

    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if (surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = surface1.shapeColor;
    }
    if (surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = surface2.shapeColor;
        music.play();
    }
    if (surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = surface3.shapeColor;
        music.stop();
        box.velocityX = 0;
        box.velocityY = 0;
    }
    if (surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = surface4.shapeColor;
    }

    drawSprites();
}
