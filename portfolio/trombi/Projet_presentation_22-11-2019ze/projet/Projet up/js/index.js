// Affiche le bloc de saisie afin que l'utilisateur rentre son prénom
var buttonFirstName = document.getElementById("button-firstname");

// Création d'un événement "click" afin que le bouton sois intératif
buttonFirstName.addEventListener("click", function () {

    // Stockage du prénom rentré par l'utilsateur dans une variable
    var prenom = prompt("Entrez votre prénom :");



    /*
    Différentes intruction qui fonctionne pour chaque prénom valide rentré
    */
    if (prenom.toLocaleLowerCase() == "ahmed" && confirm("Bonjour " + prenom)) {

        document.location.href = "HTML/redirected-ahmed.php";

    }
    else if (prenom.toLocaleLowerCase() == "soumaya" && confirm("Bonjour " + prenom)) {

        document.location.href = "HTML/redirected-soumaya.php";

    }
    else if (prenom.toLocaleLowerCase() == "sabrina" && confirm("Bonjour " + prenom)) {

        document.location.href = "HTML/redirected-sabrina.php";

    }
    else if (prenom.toLocaleLowerCase() == "nathalie" && confirm("Bonjour " + prenom)) {

        document.location.href = "HTML/redirected-nathalie.php";

    }
    else if (prenom.toLocaleLowerCase() == "nadège" && confirm("Bonjour " + prenom)) {

        document.location.href = "HTML/redirected-nadege.php";

    }
    else if (prenom.toLocaleLowerCase() == "marie" && confirm("Bonjour " + prenom)) {

        document.location.href = "HTML/redirected-marie.php";

    }
    else if (prenom.toLocaleLowerCase() == "lory" && confirm("Bonjour " + prenom)) {

        document.location.href = "HTML/redirected-lory.php";

    }
    else if (prenom.toLocaleLowerCase() == "jeremy" && confirm("Bonjour " + prenom)) {

        document.location.href = "HTML/redirected-jeremy.php";

    }
    else if (prenom.toLocaleLowerCase() == "hugo" && confirm("Bonjour " + prenom)) {

        document.location.href = "HTML/redirected-hugo.php";

    }
    else if (prenom.toLocaleLowerCase() == "emmanuel" && confirm("Bonjour " + prenom)) {

        document.location.href = "HTML/redirected-emmanuel.php";
        
    }
    else if (prenom.toLocaleLowerCase() == "vincent" && confirm("Bonjour " + prenom)) {

        document.location.href = "HTML/redirected-vincent.php";

    }
    else if (prenom.toLocaleLowerCase() == "fleur" && confirm("Bonjour " + prenom)) {

        document.location.href = "HTML/redirected-develey.php";

    }
    else if (prenom.toLocaleLowerCase() == "nagui" && confirm("Bonjour " + prenom)) {

        document.location.href = "HTML/redirected-deliquaire.php";

    }
    else if (prenom.toLocaleLowerCase() == "corine" && confirm("Bonjour " + prenom)) {

        document.location.href = "HTML/redirected-corine.php";

    }
    else if (prenom.toLocaleLowerCase() == "benjamin" && confirm("Bonjour " + prenom)) {

        document.location.href = "HTML/redirected-benjamin.php";

    }
    else if (prenom.toLocaleLowerCase() == "benedicte" && confirm("Bonjour " + prenom)) {

        document.location.href = "HTML/redirected-benedicte.php";

    }
    else if (prenom.toLocaleLowerCase() == "axel" && confirm("Bonjour " + prenom)) {

        document.location.href = "HTML/redirected-axel.php";

    }
    else if (prenom.toLocaleLowerCase() == "audrey" && confirm("Bonjour " + prenom)) {

        document.location.href = "HTML/redirected-audrey.php";

    }
    else if (prenom.toLocaleLowerCase() == "anissa" && confirm("Bonjour " + prenom)) {

        document.location.href = "HTML/redirected-franck.php";

    }
    else if (prenom.toLocaleLowerCase() == "franck" && confirm("Bonjour " + prenom)) {

        document.location.href = "HTML/redirected-franck.php";

    }

    else if (prenom.toLocaleLowerCase() == "remi" && confirm("Bonjour " + prenom)) {

        document.location.href = "HTML/redirected-lanney.php";

    }
    // Si le prénom n'est pas stocké dans les 21 prénoms disponible alors on renvoie une erreur
    else {

        alert("Prénom indisponible");
    }

})


//Récupère le bouton
mybutton = document.getElementById("myBtn");

// Quand l'utilisateur scrool vers le bas alors on affiche le bouton top
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Quand l'utilisateur click sur le bouton alors la page scrool automatiqument vers le haut 
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0;
} // For Chrome, Firefox, IE and Opera 


// side bar dynamique JS
(function sidebar() {

	var hamburger = {
		navToggle: document.querySelector('.nav-toggle'),
		nav: document.querySelector('nav'),

		doToggle: function(e) {
			e.preventDefault();
			this.navToggle.classList.toggle('expanded');
			this.nav.classList.toggle('expanded');
		}
	};

	hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());


