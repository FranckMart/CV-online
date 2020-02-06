var largeur = window.innerWidth;

var slide = document.createElement("img");
slide.width = "510";
slide.height = "800";
slide.style.justifyContent = "center";
slide.name = "slide";
slide.className = "slider";


var pic1 = document.getElementsByClassName("pic1");
for (var i = 0; i < pic1.length; i++){
    var pictures = pic1[i];


pic1[i].addEventListener("mouseover", function (e) {
    if (e.target.value = true) {


        
        var i = 0; // Start Point
        var images = []; // Images Array
        var time = 3000; // Time Between Switch

        var picture = document.getElementsByClassName("pic");
        
        
        
        
        for (var i = 0; i < picture.length; i++) {
        
        images.push(picture[i])
        }
       
        // Image List
        
        
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
        console.log(slide)
    
    
        // Run function when page loads
        window.onload = changeImg;
        document.getElementById("content-left").appendChild(slide)
        
    } else {
        slide.style.display = "none";
        
    }
    
})
}