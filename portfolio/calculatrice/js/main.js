var calculette = document.createElement("div");
calculette.id = "calculette";

var affichageContent = document.createElement("div");
affichageContent.id = "affichageContent"

var affichage = document.createElement("div");
affichage.id = "affichage";
affichage.textContent = "0";

affichageContent.appendChild(affichage)
calculette.appendChild(affichageContent);

var contentChiffre = document.createElement("div");
contentChiffre.id = "contentChiffre";


var chaineAffichage = "";

document.body.addEventListener("keypress", function (e) {

    console.log(e.keyCode)
    if (e.keyCode === 100) {
        affichage.textContent = "0";
        chaineAffichage = "";
    }

    if (e.keyCode === 61) {

        affichage.innerHTML = eval(chaineAffichage);

    } else if (e.keyCode >= 48 && e.keyCode <= 57 || e.keyCode === 40 || e.keyCode === 41 ||
        e.keyCode === 43 || e.keyCode === 45 || e.keyCode === 42 || e.keyCode === 47 || e.keyCode === 46) {
        chaineAffichage = chaineAffichage + e.key;
        affichage.innerHTML = chaineAffichage;


    }

})

for (var i = 1; i <= 19; i++) {
    var buttonChiffre = document.createElement("input");
    buttonChiffre.type = "button"
    buttonChiffre.classList = "buttonChiffre";


    switch (i) {
        case 1:
            buttonChiffre.value = "1";
            break;
        case 2:
            buttonChiffre.value = "2";
            break;
        case 3:
            buttonChiffre.value = "3";
            break;
        case 4:
            buttonChiffre.value = "+";
            buttonChiffre.id = "plus";
            break;
        case 5:
            buttonChiffre.value = "4";
            break;
        case 6:
            buttonChiffre.value = "5";
            break;
        case 7:
            buttonChiffre.value = "6";
            break;
        case 8:
            buttonChiffre.value = "-";
            buttonChiffre.id = "moins";
            break;
        case 9:
            buttonChiffre.value = "7";
            break;
        case 10:
            buttonChiffre.value = "8";
            break;
        case 11:
            buttonChiffre.value = "9";
            break;
        case 12:
            buttonChiffre.value = "*";
            buttonChiffre.id = "multiple";
            break;
        case 13:
            buttonChiffre.value = "0";
            break;
        case 14:
            buttonChiffre.value = "(";
            break;
        case 15:
            buttonChiffre.value = ")";
            break;
        case 16:

            buttonChiffre.value = "/";
            buttonChiffre.id = "divison";
            break;
        case 17:
            buttonChiffre.value = "<-";
            buttonChiffre.id = "sup";
            break;
        case 18:
            buttonChiffre.value = ".";
            break;
        case 19:
            buttonChiffre.value = "=";
            buttonChiffre.id = "egal";
            buttonChiffre.style.width = "49%";
            break;
    }
    buttonChiffre.addEventListener("click", function (e) {

        if (this.value === "=") {

            affichage.innerHTML = eval(chaineAffichage);

        } else {
            chaineAffichage = chaineAffichage + this.value;
            affichage.innerHTML = chaineAffichage;


            if (this.value === "<-") {
                affichage.textContent = "0";
                chaineAffichage = "";
            }
        }

       


    })

    contentChiffre.appendChild(buttonChiffre)

}


calculette.appendChild(contentChiffre);

document.getElementById("Calculatrice").appendChild(calculette)



/*


var buttonChiffre = document.createElement("input");
buttonChiffre.type = "button";
buttonChiffre.classList = "buttonChiffre";



function showNumber(stock,chiffre) {

    for (var i = 1; i <= 19; i++) {
        
        chiffre;

        switch (i) {
            case 4:
                chiffre.value = "+";
                chiffre.id = "plus";
                break;
            case 5:
                chiffre.value = 4;
                break;
            case 6:
                chiffre.value = 5;
                break;
            case 7:
                chiffre.value = 6;
                break;
            case 8:
                chiffre.value = "-";
                chiffre.id = "moins";
                break;
            case 9:
                chiffre.value = 7;
                break;
            case 10:
                chiffre.value = 8;
                break;
            case 11:
                chiffre.value = 9;
                break;
            case 12:
                chiffre.value = "X";
                chiffre.id = "multiple";
                break;
            case 13:
                chiffre.value = 0;
                break;
            case 14:
                chiffre.value = "(";
                break;
            case 15:
                chiffre.value = ")";
                break;
            case 16:
                chiffre.value = "÷";
                chiffre.id = "divison";
                break;
            case 17:
                chiffre.value = "<-";
                chiffre.id = "sup";
                break;
            case 18:
                chiffre.value = ".";
                break;
            case 19:
                chiffre.value = "=";
                chiffre.id = "egal";
                chiffre.style.width = "49%";
                break;
            default:
                chiffre.value = i;
        }
       
        stock.appendChild(chiffre);
        
        
    }
    calculette.appendChild(stock);
    

    chiffre.addEventListener("click", function (e) {

        chaineAffichage = chaineAffichage + this.value;
        affichage.innerHTML = chaineAffichage;

        if(this.value === "="){
    
            affichage.innerHTML = eval(chaineAffichage);
            
        }

        if (this.value === "<-") {
            chaineAffichage = "";
            affichage.textContent = "0";
        }
        


    })

    
    document.getElementById("Calculatrice").appendChild(calculette)
}

showNumber(contentChiffre,buttonChiffre);


*/