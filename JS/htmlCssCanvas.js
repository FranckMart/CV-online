var canvas = document.getElementsByClassName('myCanvas');
var raduis = 75;
var htmlProgressEndPercent = 0;
var cssProgressEndPercent = 0;
var jsProgressEndPercent = 0;
var phpProgressEndPercent = 0;
var mysqlProgressEndPercent = 0;
var wpProgressEndPercent = 0;
var elementorProgressEndPercent = 0;
var diviProgressEndPercent = 0;
var curPer1 = 0;
var curPer2 = 0;
var curPer3 = 0;
var curPer4 = 0;
var curPer5 = 0;
var curPer6 = 0;
var curPer7 = 0;
var curPer8 = 0;
var circ = Math.PI * 2;
var quart = Math.PI / 2;


for (var i = 0; i < canvas.length; i++) {
  console.log(canvas[i]);

  // variable de chaque cercle de compétences 
  var htmlProgress = canvas[0].getContext('2d');
  var cssProgress = canvas[1].getContext("2d");
  var jsProgress = canvas[2].getContext("2d");
  var phpProgress = canvas[3].getContext("2d");
  var mysqlProgress = canvas[4].getContext("2d");
  var wpProgress = canvas[5].getContext("2d");
  var elementorProgress = canvas[6].getContext("2d");
  var diviProgress = canvas[7].getContext("2d");
  
  

  htmlProgress.lineWidth = "2";
  htmlProgress.strokeStyle = "red";
  htmlProgress.shadowOffsetX = 0;
  htmlProgress.shadowOffsetY = 0;
  htmlProgress.shadowBlur = 0.2;
  htmlProgress.shadowColor = "#656565";
  htmlProgressEndPercent = 90;
  htmlProgress.font = "oblique 20px sans-serif";
  htmlProgress.fillStyle = "#e7ab28";
  htmlProgress.textAlign = "center"; 
  htmlProgress.fillText("90%", 102, 110);



  cssProgress.lineWidth = "2";
  cssProgress.strokeStyle = "blue";
  cssProgress.shadowOffsetX = 0;
  cssProgress.shadowOffsetY = 0;
  cssProgress.shadowBlur = 0.2;
  cssProgress.shadowColor = "#656565";
  cssProgressEndPercent = 85;
  cssProgress.font = "oblique 20px sans-serif";
  cssProgress.fillStyle = "#e7ab28";
  cssProgress.textAlign = "center"; 
  cssProgress.fillText("85%", 102, 110);


  jsProgress.lineWidth = "2";
  jsProgress.strokeStyle = "yellow";
  jsProgress.shadowOffsetX = 0;
  jsProgress.shadowOffsetY = 0;
  jsProgress.shadowBlur = 0.2;
  jsProgress.shadowColor = "#656565";
  jsProgressEndPercent = 80;
  jsProgress.font = "oblique 20px sans-serif";
  jsProgress.fillStyle = "#e7ab28";
  jsProgress.textAlign = "center"; 
  jsProgress.fillText("80%", 102, 110);

  phpProgress.lineWidth = "2";
  phpProgress.strokeStyle = "#8403fc";
  phpProgress.shadowOffsetX = 0;
  phpProgress.shadowOffsetY = 0;
  phpProgress.shadowBlur = 0.2;
  phpProgress.shadowColor = "#656565";
  phpProgressEndPercent = 70;
  phpProgress.font = "oblique 20px sans-serif";
  phpProgress.fillStyle = "#e7ab28";
  phpProgress.textAlign = "center"; 
  phpProgress.fillText("70%", 102, 110);

  mysqlProgress.lineWidth = "2";
  mysqlProgress.strokeStyle = "#fc9403";
  mysqlProgress.shadowOffsetX = 0;
  mysqlProgress.shadowOffsetY = 0;
  mysqlProgress.shadowBlur = 0.2;
  mysqlProgress.shadowColor = "#656565";
  mysqlProgressEndPercent = 60;
  mysqlProgress.font = "oblique 20px sans-serif";
  mysqlProgress.fillStyle = "#e7ab28";
  mysqlProgress.textAlign = "center"; 
  mysqlProgress.fillText("60%", 102, 110);

  wpProgress.lineWidth = "2";
  wpProgress.strokeStyle = "#7d807e";
  wpProgress.shadowOffsetX = 0;
  wpProgress.shadowOffsetY = 0;
  wpProgress.shadowBlur = 0.2;
  wpProgress.shadowColor = "#656565";
  wpProgressEndPercent = 75;
  wpProgress.font = "oblique 20px sans-serif";
  wpProgress.fillStyle = "#e7ab28";
  wpProgress.textAlign = "center"; 
  wpProgress.fillText("75%", 102, 110);

  

  elementorProgress.lineWidth = "2";
  elementorProgress.strokeStyle = "#a503fc";
  elementorProgress.shadowOffsetX = 0;
  elementorProgress.shadowOffsetY = 0;
  elementorProgress.shadowBlur = 0.2;
  elementorProgress.shadowColor = "#656565";
  elementorProgressEndPercent = 90;
  elementorProgress.font = "oblique 20px sans-serif";
  elementorProgress.fillStyle = "#e7ab28";
  elementorProgress.textAlign = "center"; 
  elementorProgress.fillText("90%", 102, 110);

  diviProgress.lineWidth = "2";
  diviProgress.strokeStyle = "#6703fc";
  diviProgress.shadowOffsetX = 0;
  diviProgress.shadowOffsetY = 0;
  diviProgress.shadowBlur = 0.2;
  diviProgress.shadowColor = "#656565";
  diviProgressEndPercent = 80;
  diviProgress.font = "oblique 20px sans-serif";
  diviProgress.fillStyle = "#e7ab28";
  diviProgress.textAlign = "center"; 
  diviProgress.fillText("80%", 102, 110);

  

}


function drawHtml(currentPerc) {

  htmlProgress.clearRect(0, 0, canvas.width, canvas.height);
  htmlProgress.beginPath();
  htmlProgress.arc("100", "100", raduis, -quart, (circ * currentPerc) - quart, false);
  htmlProgress.stroke();


  curPer1++;


  if (curPer1 <= htmlProgressEndPercent) {

    requestAnimationFrame(function () {
      drawHtml(curPer1 / 100);
    })

  }
}
drawHtml();



function drawCss(currentPerc) {



  cssProgress.clearRect(0, 0, canvas.width, canvas.height);
  cssProgress.beginPath();
  cssProgress.arc("100", "100", raduis, -quart, (circ * currentPerc) - quart, false);
  cssProgress.stroke();


  curPer2++;


  if (curPer2 <= cssProgressEndPercent) {

    requestAnimationFrame(function () {
      drawCss(curPer2 / 100);
    })

  }




}
drawCss();


function drawJs(currentPerc) {



  jsProgress.clearRect(0, 0, canvas.width, canvas.height);
  jsProgress.beginPath();
  jsProgress.arc("100", "100", raduis, -quart, (circ * currentPerc) - quart, false);
  jsProgress.stroke();


  curPer3++;


  if (curPer3 <= jsProgressEndPercent) {

    requestAnimationFrame(function () {
      drawJs(curPer3 / 100);
    })

  }




}
drawJs();

function drawPhp(currentPerc) {



  phpProgress.clearRect(0, 0, canvas.width, canvas.height);
  phpProgress.beginPath();
  phpProgress.arc("100", "100", raduis, -quart, (circ * currentPerc) - quart, false);
  phpProgress.stroke();


  curPer4++;


  if (curPer4 <= phpProgressEndPercent) {

    requestAnimationFrame(function () {
      drawPhp(curPer4 / 100);
    })

  }




}
drawPhp();

function drawMysql(currentPerc) {



  mysqlProgress.clearRect(0, 0, canvas.width, canvas.height);
  mysqlProgress.beginPath();
  mysqlProgress.arc("100", "100", raduis, -quart, (circ * currentPerc) - quart, false);
  mysqlProgress.stroke();


  curPer5++;


  if (curPer5 <= mysqlProgressEndPercent) {

    requestAnimationFrame(function () {
      drawMysql(curPer5 / 100);
    })

  }




}
drawMysql();

function drawMysql(currentPerc) {



  mysqlProgress.clearRect(0, 0, canvas.width, canvas.height);
  mysqlProgress.beginPath();
  mysqlProgress.arc("100", "100", raduis, -quart, (circ * currentPerc) - quart, false);
  mysqlProgress.stroke();


  curPer5++;


  if (curPer5 <= mysqlProgressEndPercent) {

    requestAnimationFrame(function () {
      drawMysql(curPer5 / 100);
    })

  }




}
drawMysql();

function drawWp(currentPerc) {



  wpProgress.clearRect(0, 0, canvas.width, canvas.height);
  wpProgress.beginPath();
  wpProgress.arc("100", "100", raduis, -quart, (circ * currentPerc) - quart, false);
  wpProgress.stroke();


  curPer6++;


  if (curPer6 <= wpProgressEndPercent) {

    requestAnimationFrame(function () {
      drawWp(curPer6 / 100);
    })

  }




}
drawWp();

function drawElementor(currentPerc) {



  elementorProgress.clearRect(0, 0, canvas.width, canvas.height);
  elementorProgress.beginPath();
  elementorProgress.arc("100", "100", raduis, -quart, (circ * currentPerc) - quart, false);
  elementorProgress.stroke();


  curPer7++;


  if (curPer7 <= elementorProgressEndPercent) {

    requestAnimationFrame(function () {
      drawElementor(curPer7 / 100);
    })

  }




}
drawElementor();

function drawDivi(currentPerc) {



  diviProgress.clearRect(0, 0, canvas.width, canvas.height);
  diviProgress.beginPath();
  diviProgress.arc("100", "100", raduis, -quart, (circ * currentPerc) - quart, false);
  diviProgress.stroke();


  curPer8++;


  if (curPer8 <= diviProgressEndPercent) {

    requestAnimationFrame(function () {
      drawDivi(curPer8 / 100);
    })

  }




}
drawDivi();






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