var canvas = document.getElementsByClassName('myCanvas');
var raduis = 75;
var ctx1EndPercent = 0;
var ctx2EndPercent = 0;
var curPer1 = 0;
var curPer2 = 0;
var circ = Math.PI * 2;
var quart = Math.PI / 2;


for (var i = 0; i < canvas.length; i++) {
  var ctx1 = canvas[0].getContext('2d');
  var ctx2 = canvas[1].getContext("2d");
  
  

    ctx1.lineWidth = "5";
    ctx1.strokeStyle = "#8e1aed";
    ctx1.shadowOffsetX = 0;
    ctx1.shadowOffsetY = 0;
    ctx1.shadowBlur = 0.2;
    ctx1.shadowColor = "#656565";
    ctx1EndPercent = 50;
    ctx1.font = "oblique 30px sans-serif";
    ctx1.fillStyle = "#e7ab28";
    ctx1.textAlign = "center"; 
    ctx1.fillText(ctx1EndPercent + "%", 152, 160);



    ctx2.lineWidth = "5";
    ctx2.strokeStyle = "#a15adb";
    ctx2.shadowOffsetX = 0;
    ctx2.shadowOffsetY = 0;
    ctx2.shadowBlur = 0.2;
    ctx2.shadowColor = "#656565";
    ctx2EndPercent = 50;
    ctx2.font = "oblique 30px sans-serif";
    ctx2.fillStyle = "#e7ab28";
    ctx2.textAlign = "center"; 
    ctx2.fillText(ctx2EndPercent + "%", 152, 160);

}


function draw(currentPerc) {

  ctx1.clearRect(0, 0, canvas.width, canvas.height);
  ctx1.beginPath();
  ctx1.arc("150", "150", raduis, -quart, (circ * currentPerc) - quart, false);
  ctx1.stroke();


  curPer1++;


  if (curPer1 <= ctx1EndPercent) {

    requestAnimationFrame(function () {
      draw(curPer1 / 100);
    })

  }
}
draw();



function drawSecond(currentPerc) {



  ctx2.clearRect(0, 0, canvas.width, canvas.height);
  ctx2.beginPath();
  ctx2.arc("150", "150", raduis, -quart, (circ * currentPerc) - quart, false);
  ctx2.stroke();


  curPer2++;


  if (curPer2 <= ctx2EndPercent) {

    requestAnimationFrame(function () {
      drawSecond(curPer2 / 100);
    })

  }




}
drawSecond();






/*
var websideElt = document.getElementsByClassName("webside");

for(var i = 0; i <= websideElt.length; i++) {
    var webSideElts = websideElt[i];

    webSideElts.addEventListener("mouseover", function(e) {
        console.log("okay")
        this.animate([
            // keyframes
            { transform: 'translateX(800px)' }, 
            { transform: 'translateY(0px)' }

        
          ], { 
            // timing options
            duration: 3000,
            iterations: 1
          });
    })
}
*/