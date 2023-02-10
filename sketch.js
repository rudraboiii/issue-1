var mario, mario_running, mario_collieded

var obstacle, obstacleAnimation, obstacleGroup

var ground, groundImg
var bg, bgImg

var gameState = "PLAY"
var gameState = "END"

function preload()
{

    groundImg = loadImage("ground2.png")
    bgImg = loadImage("bg.png")

    mario_running = loadAnimation("Jack00.png", "Jack01.png", "Jack03.png")
    mario_collieded = loadImage("JackCollided.png")

    obstacleAnimation = loadAnimation("obstacle1.png", "obstacle2.png", "obstacle3.png", "obstacle4.png")
}

function setup()
{
createCanvas(600, 400)

ground = createSprite(200, 360, 600, 10)
ground.addImage(groundImg)
ground.x = ground.width/2
ground.velocityX = -6

mario = createSprite(50, 300, 20, 50)
mario.addAnimation("running", mario_running)
mario.addAnimation("collided", mario_collieded)
mario.scale = 1.5 

obstacleGroup = new Group()


}

function draw()
{
    background(bgImg)

    if(gameState === "PLAY")
    {

    

    if(ground.x < 0 )
    {
        ground.x = ground.width/2
    }

    if(keyDown("space"))
    {
        mario.velocityY = -8
    }

    mario.velocityY = mario.velocityY +0.8
    mario.collide(ground)

    if(obstacleGroup.isTouching(mario))
    {
        gameState = "END"
    }

    spawnObstacles();
}

else if(gameState === "END")
{
ground.velocityX = 0
mario.changeAnimation("collided", mario_collieded)
}
    drawSprites();
}

function spawnObstacles()
{
    if(frameCount %75 === 0)
    {
        obstacle = createSprite(500, 300, 10, 30)
        obstacle.addAnimation("Animation", obstacleAnimation)
        obstacle.velocityX = -5

        obstacle.setlifetime(300)

        obstacleGroup.add(obstacle)
    }  

}