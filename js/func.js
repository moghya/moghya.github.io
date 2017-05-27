window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/60)}}();

var c = document.getElementById('c');
var ctx = c.getContext('2d');
var cw = c.width = window.innerWidth;
var ch = c.height = window.innerHeight*.7;
var rand = function(a,b){return ~~((Math.random()*(b-a+1))+a);}
    
updateAll = function(a){
  var i = a.length;
  while(i--){
    a[i] && a[i].update(i);  
  }
}
      
renderAll = function(a){
  var i = a.length;
  while(i--){
    a[i] && a[i].render(i);  
  }
}

var stars = [];

Star = function(x, y, radius, speed){
  this.x = x;
  this.y = y;
  this.speed = (speed/25);
  this.radius = radius;
  this.saturation = (20+(this.radius)*5);
  this.lightness = (20+this.radius*4);
}
  
Star.prototype = {
  update: function(i){
    this.x += this.speed;
    if(this.x - this.radius >= cw){
      this.x = rand(0, ch-this.radius)
      this.x = -this.radius;
    }
},
render: function(){
  ctx.beginPath();
  ctx.arc(this.x, this.y, (this.radius < 0) ? 0 : this.radius, 0, Math.PI *2, false);
  var flickerAdd = (rand(0, 140) === 0) ? rand(5, 20) : 0;
  ctx.fillStyle = 'hsl(240, '+this.saturation+'%, '+(this.lightness+flickerAdd)+'%)';
  ctx.fill();
  }
}
    
makeStarfield = function(){
  var base = .75;
  var inc = .2;
  var count = 40;
  var per = 6;
  while(count--){
    var radius = base + inc;
    var perTime = per;
    while(perTime--){
    	radius += inc;
    	stars.push(new Star(rand(0, cw-radius), rand(0, ch-radius), radius, radius*3));
    }
  }
}

var loop = function(){
  window.requestAnimFrame(loop);
  updateAll(stars);
  ctx.clearRect(0, 0, cw, ch);  
  renderAll(stars);
}
    
makeStarfield();      
loop();