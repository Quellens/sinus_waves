const canvas = document.getElementById('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const wave ={
    y: canvas.height / 2,
    length: 0.01,
    amplitude: 100,
    frequency: 0.001
}

const mouse = {
  x: innerWidth / 2,
  y: innerHeight / 2
}

addEventListener('mousemove', (event) => {
  mouse.x = event.clientX
  mouse.y = event.clientY
})

addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight
})

class Line {
  constructor(x1, y1, color) {
    this.x1 = x1
    this.y1 = y1
    this.color = color
  }

  draw() {
    c.beginPath()
    c.moveTo(this.x1,this.y1);
    for(var i =0;i < canvas.width; i++){
     c.lineTo(i , mouse.y + Math.sin(i * wave.length + wave.frequency) * wave.amplitude ) ;   
    }
    c.lineWidth = 9;
    c.strokeStyle = this.color
    c.stroke()
    wave.frequency = wave.frequency + 0.005;
    wave.length = wave.length +0.0001;
    wave.amplitude+=1;
    if(wave.length > 0.04){
    wave.length = -wave.length ;
    }
    if(wave.amplitude > 250){
     wave.amplitude= 0;
    }
    c.closePath()
  }

}

function drawBall(){
    c.beginPath();
    c.arc(mouse.x,mouse.y,10,0,2*Math.PI);
    c.fillStyle = "rgba(255,60,0,0.4)";
    c.fill();
    c.closePath();
}

function animate() {
  requestAnimationFrame(animate)
  let lineA = new Line(0,canvas.height / 2,	"#282828")
  c.clearRect(0, 0, canvas.width, canvas.height)
  lineA.draw();
  drawBall();
}

animate()
console.log("UPDATE");
