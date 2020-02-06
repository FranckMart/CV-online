document.getElementById("saisie").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        var sectionElt = document.createElement("section")
        sectionElt.id = "section"

        // création d'une liste à puces 
        var donneeElt = document.createElement("li")

        // Création d'une checkbox sur l'élément "li"
        var checkboxElt = document.createElement("input")
        checkboxElt.addEventListener("change", check)
        checkboxElt.id = "checkbox"
        checkboxElt.type = "checkbox"
        donneeElt.appendChild(checkboxElt)
        sectionElt.appendChild(donneeElt)

        // Création d'un élément "span" pour stocker les saisie de l'utilisateur
        var spanElt = document.createElement("span")
        spanElt.appendChild(document.createTextNode(event.target.value))
        // Création d'un événement "dblcick" qui va permettre de modifier le saisie de l'utilisateur
        spanElt.addEventListener("dblclick", modifier)
        spanElt.classList = "userInput"
        event.target.value = ""
        donneeElt.appendChild(spanElt)
        sectionElt.appendChild(donneeElt)

        // Ajout d'un événement "click" avec "input boutton"
        var buttonElt = document.createElement("input")
        buttonElt.addEventListener("click", Supprimer)
        buttonElt.id = "buttonrouge"
        buttonElt.type = "button"
        donneeElt.appendChild(buttonElt)
        sectionElt.appendChild(donneeElt)

        // Modifier le saisie de l'utilisateur
        var modifElt = document.createElement("input")
        modifElt.id = "dbl"
        modifElt.type = "text"
        modifElt.className = "inputModif"
        modifElt.style.display = "none"
        modifElt.value = event.target.value
        modifElt.addEventListener("keyup", changeTask)
        donneeElt.appendChild(modifElt)
        sectionElt.appendChild(donneeElt)
        document.getElementById("liste").appendChild(sectionElt)


        // Création d'un élément "li" sur le "ul" du footer 
        var footer = document.getElementById("footer");
        footer.style.visibility = "visible";
        footer.style.display = "block";
        var incrementation = document.createElement("p")
        incrementation.id = "increment"
        incrementation.textContent = ""
        var liFooterElt = document.createElement("li")
        liFooterElt.style.listStyleType = "none"




        var allElt = document.getElementById("all")
        allElt.addEventListener("click", boutonAll)
        var activeElt = document.getElementById("active")
        activeElt.addEventListener("click", boutonActive)
        var completedElt = document.getElementById("completed")
        completedElt.addEventListener("click", boutonCompleted)
        var clearCompletedElt = document.getElementById("clears")
        clearCompletedElt.addEventListener("click", clear)



        liFooterElt.appendChild(incrementation)
        liFooterElt.appendChild(allElt)
        liFooterElt.appendChild(activeElt)
        liFooterElt.appendChild(completedElt)
        liFooterElt.appendChild(clearCompletedElt)
        document.getElementById("footerList").appendChild(liFooterElt)
        increment()
    }
})





// ajouter une propiété CSS "line-Through/phrase barré" quand la checkbox est coché 
function check(e) {
    if (e.target.checked) {
        e.target.nextElementSibling.classList.add("addLineThrough")
    } else {
        e.target.nextElementSibling.classList.remove("addLineThrough")
    }
    increment()
}
// Sauvegardé la modification du saisie de l'utilisateur une fois "entrer" tapé 
function changeTask(event) {
    if (event.keyCode === 13) {
        var nodes = event.target.parentNode.children
        for (var i = 0; i < nodes.length; i++) {
            var element = nodes[i]
            console.log(nodes[i])
            if (element.className === "userInput") {
                element.innerHTML = event.target.value
            }
            if (element.style.display === "none") {
                element.style.display = "inline"
            } else {
                element.style.display = "none"
            }
        }
    }

}

function modifier(e) {
    // On ne supprime pas les éléments du <li> mais on les caches
    e.target.previousElementSibling.style.display = "none"
    e.target.nextElementSibling.style.display = "none"
    e.target.style.display = "none"
    // on récupère le <li> pour avoir accès à tous ses éléments dans le querySelector
    e.target.parentNode.querySelector(".inputModif").style.display = "inline"
}



function boutonAll(event) {
    if (event.target.click) {
        var tableau = document.querySelectorAll("span")

        for (var i = 0; i < tableau.length; i++) {
            var elements = tableau[i]
            if (elements.className === "userInput") {
                elements.nextElementSibling.style.display = "inline"
                elements.previousElementSibling.style.display = "inline"
                elements.style.display = "inline"

            }
            if (elements.className === "userInput addLineThrough") {
                elements.nextElementSibling.style.display = "inline"
                elements.previousElementSibling.style.display = "inline"
                elements.style.display = "inline"

            }
        }
    }
}



function boutonActive(event) {
    if (event.target.click) {
        var tableau = document.querySelectorAll("span")
        for (var i = 0; i < tableau.length; i++) {
            var elements = tableau[i]
            if (elements.className === "userInput addLineThrough") {
                elements.nextElementSibling.style.display = "none"
                elements.previousElementSibling.style.display = "none"
                elements.style.display = "none"
            } else {
                elements.nextElementSibling.style.display = "inline"
                elements.previousElementSibling.style.display = "inline"
                elements.style.display = "inline"
            }
        }
    }

}

function boutonCompleted(event) {
    if (event.target.click) {
        var tableau = document.querySelectorAll("span")
        console.log(tableau)
        for (var i = 0; i < tableau.length; i++) {
            var elements = tableau[i]


            if (elements.className != "userInput addLineThrough") {
                elements.nextElementSibling.style.display = "none"
                elements.previousElementSibling.style.display = "none"
                elements.style.display = "none"
            } else {
                elements.nextElementSibling.style.display = "inline"
                elements.previousElementSibling.style.display = "inline"
                elements.style.display = "inline"
            }
        }
    }
}

function increment() {

    var tableau = document.querySelectorAll("span")
    var text = 0
    for (var i = 0; i < tableau.length; i++) {
        var elements = tableau[i]
    
        if (elements.className === "userInput") {
            text = text + 1
            var phrase = text + "items left"
        }
        if (elements.className === "userInput addLineThrough") {
            text = text--
                var phrase = text + "items left"
        }

    }
    document.querySelector("p").innerHTML = phrase
}

function clear(event) {

    var tableau = document.querySelectorAll("span")
    for (var i = 0; i < tableau.length; i++) {
        var elements = tableau[i]
        if (event.target.click && elements.className === "userInput addLineThrough") {

            elements.nextElementSibling.remove()
            elements.previousElementSibling.remove()
            elements.remove()

            
        }

        


        
    }

}


// Supprimer l'élement si le "bouton" est cliqué
function Supprimer(e) {
    event.target.parentNode.remove()
}