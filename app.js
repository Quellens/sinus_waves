var canvas = document.getElementById("canvas");
canvas.height = innerHeight;
canvas.width = innerWidth;
var cxt =canvas.getContext("2d");

var color = ["#247BA0","#74D3FC","#3DDB6F","#F3FFBD","#FF7C35"];
var gravity = 1;
var friction = 0.8;


document.addEventListener("resize",()=>{
    canvas.width = innerWidth;
    canvas.height = innerHeight;
  
})


function Circle (x,y,dx,dy,radius,color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = color;
    
    this.update = function(){
    cxt.beginPath();
    cxt.arc(this.x,this.y,this.radius,0,2* Math.PI);
    cxt.fillStyle = this.color;
    cxt.fill();
    cxt.closePath();
    
    }
 
}

var allCircles;
function init(){
 allCircles =[];   
for(var i =0;i < 100;i++){
var radius = Math.random() * 60;
var rand = color[Math.round(Math.random() * color.length)];
var dx = 0;//Math.random()  * 4 - 4;
var dy = Math.random()  * 4 - 4;    
allCircles.push(new Circle(Math.random() * canvas.width - radius,
                           radius + (Math.random() * canvas.height -radius ) ,
                           dx,dy,
                           radius, rand));
}
}

function animate(){
    cxt.clearRect(0,0,canvas.width,canvas.height);
    
    //this is for gravity
    for(var j=0;j < allCircles.length; j++){
    allCircles[j].x += allCircles[j].dx;
    allCircles[j].y += allCircles[j].dy;
    if(allCircles[j].y + allCircles[j].radius > canvas.height){
      allCircles[j].dy = - allCircles[j].dy * friction;
    } else{
      allCircles[j].dy += gravity; 
    }
    }
   
    allCircles.forEach(circle => {circle.update()})
    requestAnimationFrame(animate);  
}

init();
animate();



//calculate the distance between 2 points
function distance(x1,y1,x2,y2){
    const xDist = x2 - x1;
    const yDist = y2 - y1;
    return Math.sqrt(Math.pow(xDist,2) + Math.pow(yDist,2))
}







