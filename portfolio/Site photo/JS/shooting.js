var bouton = [{

    boutonPremuim: document.getElementById("bouton_premuim"),
    boutonEco: document.getElementById("bouton_eco"),
    boutonMinimal: document.getElementById("bouton_minimal")

}];

var form = document.getElementById("formulaire");
var titreForm = document.getElementById("titre_formulaire");

bouton.forEach(function typeBouton(type) {
    type.boutonPremuim.addEventListener("click", function clickBouton() {
        titreForm.textContent = "Réservation Premuim";
        type.boutonPremuim.hidden = true; // Cache le boutonAjouter
        type.boutonMinimal.hidden = false;
        type.boutonEco.hidden = false;

        form.hidden = false;

        annuler();

    })

    type.boutonEco.addEventListener("click", function clickBouton() {
        titreForm.textContent = "Réservation Eco";
        type.boutonEco.hidden = true; // Cache le boutonAjouter
        type.boutonPremuim.hidden = false;
        type.boutonMinimal.hidden = false;

        form.hidden = false;

        annuler();

    })

    type.boutonMinimal.addEventListener("click", function clickBouton() {
        titreForm.textContent = "Réservation Minimal";
        type.boutonMinimal.hidden = true; // Cache le boutonAjouter
        type.boutonPremuim.hidden = false;
        type.boutonEco.hidden = false;

        form.hidden = false;

        annuler();

    })

    function annuler() {
        var inputReset = document.getElementById("reset");
        inputReset.addEventListener("click", function () {

            if (type.boutonMinimal.hidden = true) {

               
                type.boutonMinimal.hidden = false; // ne cache pas la div de saisie
                form.hidden = true;

            }
            if (type.boutonEco.hidden = true) {

                
                type.boutonEco.hidden = false; // ne cache pas la div de saisie
                form.hidden = true;

            }
            if (type.boutonPremuim.hidden = true) {

                type.boutonPremuim.hidden = false; // ne cache pas la div de saisie
                form.hidden = true;

            }
        })
    }

})

// Code en boucle à corriger si j'ai le temps //

/*
var bouton = [{

    boutonPremuim: document.getElementById("bouton_premuim"),
    boutonEco: document.getElementById("bouton_eco"),
    boutonMinimal: document.getElementById("bouton_minimal")

}];

var titreForm = document.getElementById("titre_formulaire");
bouton.forEach(function typeBouton(type) {

    ajoutFormulaire(type);

    function ajoutFormulaire() {

        var boutonElts = document.querySelectorAll("button");
        for (var i = 0; i < boutonElts.length; i++) {

            boutonElts[i].addEventListener("click", function clickBouton() {

                if (boutonElts[i] = type.boutonMinimal) {
                    titreForm.textContent = "Réservation Minimal";
                }if(boutonElts[i] = type.boutonEco){
                    titreForm.textContent = "Réservation Eco";
                }if(boutonElts[i] = type.boutonPremuim){
                    titreForm.textContent = "Réservation Prémuim"
                }

                document.getElementById("formulaire").hidden = false;

                annuler();
            })
        }

    }

    function annuler() {
        var inputReset = document.getElementById("reset");
        inputReset.addEventListener("click", function () {
            if (type.boutonMinimal.hidden = true) {

                type.boutonMinimal.hidden = false; // ne cache pas la div de saisie
                document.getElementById("formulaire").hidden = true;
               
            }
            if (type.boutonEco.hidden = true) {

                type.boutonEco.hidden = false; // ne cache pas la div de saisie
                document.getElementById("formulaire").hidden = true;
                
            }
            if (type.boutonPremuim.hidden = true) {
                type.boutonPremuim.hidden = false; // ne cache pas la div de saisie
                document.getElementById("formulaire").hidden = true;
                
            }
        })
    }

})
*/