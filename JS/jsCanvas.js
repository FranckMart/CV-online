var canvas = document.getElementById('myCanvasJS');
var raduis = 75;
var ctxEndPercent = 0;
var curPer = 0;
var circ = Math.PI * 2;
var quart = Math.PI / 2;


  var ctx = canvas.getContext("2d");
  
 if(ctx) {
  ctx.lineWidth = "5";
  ctx.strokeStyle = "Yellow";
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;
  ctx.shadowBlur = 0.2;
  ctx.shadowColor = "#656565";
  ctxEndPercent = 60;
  ctx.font = "bold 30px sans-serif";
  ctx.fillStyle = "#e7ab28";
  ctx.textAlign = "center"; 
  ctx.fillText("60%", 155, 162);
  
 }

  

function draw(currentPerc) {

  ctx.clearRect(0, 400, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc("150", "150", raduis, -quart, (circ * currentPerc) - quart, false);
  ctx.stroke();


  curPer++;


  if (curPer < ctxEndPercent) {

    requestAnimationFrame(function () {
      draw(curPer / 100);
    })

  }
}
draw();
