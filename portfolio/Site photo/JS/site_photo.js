var formElt = document.querySelector("form");
var mailElt = document.getElementById("courriel");
var mailAide = document.getElementById("aideMail");

formElt.addEventListener("submit", function (e) {
    e.preventDefault()
    var mail = formElt.elements.courriel.value;
    var verificationMail = "";
    var regex = /.+@.+\.+/;
    if (!regex.test(mail)) {
        verificationMail = "Adresse Mail invalide (xxx.@domaine.xxx)"; // Erreur à regler
        mailAide.style.color = "red";
    }
    mailAide.textContent = verificationMail;

    
    

    formElt.reset()

    
})

var boutonElt = document.getElementById("bouton");

var nomUtilisateur = document.getElementById("nom");
var prenomUtilisateur = document.getElementById("prenom");
var objetUtilisateur = document.getElementById("objet");
var textUtilisateur = document.getElementById("text");
var aideText = document.getElementById("aideText");

boutonElt.addEventListener("click", function () {
    if (formElt.elements.nom.value === "" || formElt.elements.prenom.value === "" || formElt.elements.objet.value === "" || formElt.elements.text.value === "") {
        nomUtilisateur.required = true;
        prenomUtilisateur.required = true;
        objetUtilisateur.required = true;
        textUtilisateur.required = true;
    }

})

