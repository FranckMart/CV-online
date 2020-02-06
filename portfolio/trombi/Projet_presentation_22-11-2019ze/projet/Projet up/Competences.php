<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/tableauemojis.css">
    <title>Document</title>
</head>
<body>
        <main>
                <section>
                    <header>
                        <a href="accueil.html"><h1>Trombinoscope</h1></a>
                        </header>
    <div class="aa_htmlTable">
        <h2 class="aa_h2">Compétences du titre</h2>
        <!-- La mise en page a été faite avec des "table", des "option" et une balise "textarea" accompagné d'un bouton "submit" et le tout dans une balise "form".
        le formulaire n'est pas encore relié en php. -->
        <table>
          <thead>
            <tr>
              <th>Étapes du Projet</th>
              <th>Évaluation du Projet</th>
            </tr>
          </thead>
          <!-- debut du formulaire -->
          <form action="cible.php" method="post" class="form-example">
          <tbody>
            <tr>
              <td>Maquetter une application</td>
               <td>
               <select name="competence1" id="evaluation">
    <option value="">--Cette étape est respectée ?--</option>
    <option value="Oui">Oui</option>
    <option value="Non">Non</option>
</select>
</td>
            </tr>
          </tbody>
            <tbody>
            <tr>
              <td>Réaliser une interface utilisateur web statique et adaptable</td>
              <td>
              <select name="competence2" id="evaluation">
    <option value="">--Cette étape est respectée ?--</option>
    <option value="Oui">Oui</option>
    <option value="Non">Non</option>
</select>
                      </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Développer une interface utilisateur dynamique</td>
                   <td>
             <select name="competence3" id="evaluation">
    <option value="">--Cette étape est respectée ?--</option>
    <option value="Oui">Oui</option>
    <option value="Non">Non</option>
</select>
                      </td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce</td>
                   <td>
              <select name="competence4" id="evaluation">
    <option value="">--Cette étape est respectée ?--</option>
    <option value="Oui">Oui</option>
    <option value="Non">Non</option>
</select>
                      </td>
            </tr>
          </tbody>
          <body>
            <tr>
              <td>Créer une base données</td>
                   <td>
             <select name="competence5" id="evaluation">
    <option value="">--Cette étape est respectée ?--</option>
    <option value="Oui">Oui</option>
    <option value="Non">Non</option>
</select>
                      </td>
            </tr>
             <tbody>
            <tr>
              <td>Développer les composants d'accés aux données</td>
                   <td>
             <select name="competence6" id="evaluation">
    <option value="">--Cette étape est respectée ?--</option>
    <option value="Oui">Oui</option>
    <option value="Non">Non</option>
</select>
                      </td>
            </tr>
          </tbody>
           <tbody>
            <tr>
              <td>Développer la partie Backend d'une application web ou web mobile</td>
                   <td>
             <select name="competence7" id="evaluation">
    <option value="">--Cette étape est respectée ?--</option>
    <option value="Oui">Oui</option>
    <option value="Non">Non</option>
</select>
                      </td>
            </tr>
          </tbody> 
          <tbody>
            <tr>
              <td>Elaborer et mettre en oeuvre des composants dans une applications de gestion de contenu ou e-commerce</td>
                   <td>
             <select name="competence8" id="evaluation">
    <option value="">--Cette étape est respectée ?--</option>
    <option value="Oui">Oui</option>
    <option value="Non">Non</option>
</select>
                      </td>
            </tr>       
          </body>
        </table>
      </div>
        <div>
          <!-- zone de saisie d'observations -->
          <label for="Observations"><h2>Observations :</h2></label>
          <textarea id="Observations" name="Message" rows="10" cols="40" maxlength="140" placeholder="Entrez votre message ici."></textarea>
          <br>
          <input type="text" name="prenom" id="" value="Entrez votre prénom">

          <!-- bouton submit-->
          <br><input type="submit"value="Envoyer">
         
        </div>
      </form>
        <footer>
          <!-- lien renvoyant sur nos pages indiviuelles-->
        <p>Created by <a href="HTML/redirected-jeremy.html">Jérémy</a>, <a href="HTML/redirected-deliquaire.html">Nagui</a>, <a href="HTML/redirected-franck.html">Franck</a> & <a href="HTML/redirected-axel.html">Axel</a></p>
        </footer>
</body>
</html>