$('#exampleModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
/*
var blocAppend = document.createElement("div");
blocAppend.id = "websideInfo";
blocAppend.style.width = "100%";


var pWebSideInfo = document.createElement("h3");
pWebSideInfo.textContent = "Clickez pour découvrir plus d'informations sur mon portfolio concerné";
pWebSideInfo.style.color = "white";
blocAppend.appendChild(pWebSideInfo);

$titleWebside = $(".titleWebside");


$(".webside").on('mouseover', function () {

  //$titleWebside.css("display", "none");
  blocAppend.style.display = "inline";
  $(this).append(blocAppend);
  console.log(blocAppend);
  
});
$(".webside").on("mouseout", function () {

  //$titleWebside.css("display", "inline")
  blocAppend.style.display = "none";

});
*/
/*
<div id="parentElement">
   <span id="childElement">foo bar</span>
</div>

<script>
// Crée un nouveau noeud à insérer
var newNode = document.createElement("span");

// Obtient une référence sur le noeud parent
var parentDiv = document.getElementById("childElement").parentNode;

// Commence le cas test [ 1 ] : un childElement existe --> tout fonctionne correctement
var sp2 = document.getElementById("childElement");
parentDiv.insertBefore(newNode, sp2);
*/