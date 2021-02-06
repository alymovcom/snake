const
    canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    maxBox = 29,
    box = 20

let 
    go = "",
    bal = 1


let food = {
    x: Math.floor(Math.random() * maxBox),
    y: Math.floor(Math.random() * maxBox)
}
let snake = []
snake[0] = {
    x: 15,
    y: 15
}
snake[1] = {
    x: 15,
    y: 15
}

jQuery("body").keydown(function(e){
    let key = e.which
    if (key == 87 && go != "down") {go="up"}
    if (key == 65 && go != "right") {go="left"}
    if (key == 83 && go != "up") {go="down"}
    if (key == 68 && go != "left") {go="right"}
})

function pr(head, tail){
    for(let i = 0; i < tail.length; i++) {
        if (head.x == tail[i].x && head.y == tail[i].y && go != "") {
            setTimeout(function(){document.location.href = "index.html"}, 100)
        }
    }
}

function draw(){
    ctx.fillStyle = "#333"
    ctx.fillRect(0, 0, 700, 700)
    
    ctx.fillStyle = "red"
    ctx.fillRect(food.x*box, food.y*box, box, box)

    ctx.fillStyle = "white"
    ctx.font = "50px arial"
    ctx.fillText(bal, 15, 55)

    for (let i = 0; i < snake.length; i++){
        ctx.fillStyle = "yellowgreen"
        ctx.fillRect(snake[i].x*box, snake[i].y*box, box, box)
    }

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if (go == "up"){snakeY -= 1}
    if (go == "down"){snakeY += 1}
    if (go == "right"){snakeX += 1}
    if (go == "left"){snakeX -= 1}

    if (snakeX > maxBox){snakeX = 0}
    if (snakeX < 0){snakeX = maxBox}
    if (snakeY > maxBox){snakeY = 0}
    if (snakeY < 0){snakeY = maxBox}

    if (snakeX == food.x && snakeY == food.y){
        bal ++
        food = {
            x: Math.floor(Math.random() * maxBox),
            y: Math.floor(Math.random() * maxBox)
        }
    }else{
        snake.pop()
    }

    let head = {
        x: snakeX,
        y: snakeY
    }

    pr(head, snake)

    snake.unshift(head)
}
setInterval(draw, 100)