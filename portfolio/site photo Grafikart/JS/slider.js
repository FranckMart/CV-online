var largeur = window.innerWidth;

var slide = document.createElement("img");
slide.width = "400";
slide.height = "200";
slide.style.justifyContent= "center";
slide.name = "slide";
slide.className = "slider";



 if (largeur  <= 980) {



    var i = 0; 			// Start Point
    var images = [];	// Images Array
    var time = 3000;	// Time Between Switch

    // Image List
    images[0] = document.getElementById("pic1").src;
    images[1] =  document.getElementById("pic2").src;
    images[2] =  document.getElementById("pic3").src;
    images[3] =  document.getElementById("pic4").src;

    // Change Image
    function changeImg() {
        slide.src = images[i];

        // Check If Index Is Under Max
        if (i < images.length - 1) {
            // Add 1 to Index
            i++;
        } else {
            // Reset Back To O
            i = 0;
        }

        // Run function every x seconds
        setTimeout("changeImg()", time);
    }
    

    // Run function when page loads
    window.onload = changeImg;
    document.getElementById("article-inspiration").appendChild(slide)
}  

else  {
    slide.style.display = "none";
}

console.log(slide.innerHTML)