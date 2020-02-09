const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

var gravity = -1;
var friction = 0.8;

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

const colors = ["#247BA0","#74D3FC","#3DDB6F","#F3FFBD","#FF7C35"]

// Event Listeners
addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight
  init()
})

// Objects
class Part {
  constructor(x, y,dx,dy, radius, color) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.color = color
  }

  draw() {
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.fillStyle = this.color
    c.fill()
    c.closePath()
  }

  update() {
    this.draw()
    this.x += this.dx;
    this.y += this.dy;
  }
}

// Implementation
let par
function init() {
  par = []
  for (let i = 0; i < 100; i++) {
var radius = Math.random() * 60;
var col = colors[Math.floor(Math.random() * colors.length) ];
var x = randomIntFromRange(radius, canvas.width - radius );
var y = randomIntFromRange(radius, canvas.height - radius);
var dx = randomIntFromRange(-2,2)
var dy = randomIntFromRange(-2,2)
     par.push(new Part(x,y,dx,dy,radius, col))
  }
}

// Animation Loop
function animate() {
  requestAnimationFrame(animate)
  c.clearRect(0, 0, canvas.width, canvas.height)
   par.forEach(object => {
    object.update()
    if(object.y + object.radius > canvas.height ||object.y - object.radius < 0){
       object.dy *= -1 * friction;
    } else{
      object.dy += gravity;
    }
   })

}

init()
animate()



//calculate the distance between 2 points
function distance(x1,y1,x2,y2){
    const xDist = x2 - x1;
    const yDist = y2 - y1;
    return Math.sqrt(Math.pow(xDist,2) + Math.pow(yDist,2))
}

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

