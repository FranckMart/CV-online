<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="../css/tableauAxel.css" />
    <link rel="shortcut icon" href="test_image.jpg" />
    <title>Remi Lanney - Trombinoscope</title>
</head>
<body>
 <section>
  <header>
      <a href="../accueil.html"><h1>Trombinoscope</h1></a>
      </header>
      <div class="bloc-image">
          <img src="../images/Remi.jpg.png" alt="image Lanney">
          <h2>LANNEY</h2>
          <h2 class="firstname">Rémi</h2>
          <p>"Wolf"</p>
      </div>
</section>
    <hr>
    <!-- Le tableau a une mise en forme basique ( table, thead (titre des différentes section du tableau), 
                          tr,tbody(corps du tableau) un choix possible est également proposé afin de séléctionner l'humeur quotidienne
                         de l'utilisateur grace à la balise select qui regroupes les (choix)options-->
    <div class="aa_htmlTable">
        <h2 class="aa_h2">Humeur Journalière</h2>
        <form action="../cible-humeur.php" method="post" class="form-example">
          <table>
            <thead>
              <tr>
                <th>Jours</th>
                <th>Humeur</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lundi</td>
                <td>
                  <select name="emoji1" id="emoji-select">
                    <option value="">--Comment était ta journée ?--</option>
                    <option value="&#x1F601;">&#x1F601;</option>
                    <option value="&#x1F621;">&#x1F621;</option>
                    <option value="&#x1F62D;">&#x1F62D;</option>
                  </select>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Mardi</td>
                <td>
                  <select name="emoji2" id="emoji-select">
                    <option value="">--Comment était ta journée ?--</option>
                    <option value="&#x1F601;">&#x1F601;</option>
                    <option value="&#x1F621;">&#x1F621;</option>
                    <option value="&#x1F62D;">&#x1F62D;</option>
                  </select>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Mercredi</td>
                <td>
                  <select name="emoji3" id="emoji-select">
                    <option value="">--Comment était ta journée ?--</option>
                    <option value="&#x1F601;">&#x1F601;</option>
                    <option value="&#x1F621;">&#x1F621;</option>
                    <option value="&#x1F62D;">&#x1F62D;</option>
                  </select>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Jeudi</td>
                <td>
                  <select name="emoji4" id="emoji-select">
                    <option value="">--Comment était ta journée ?--</option>
                    <option value="&#x1F601;">&#x1F601;</option>
                    <option value="&#x1F621;">&#x1F621;</option>
                    <option value="&#x1F62D;">&#x1F62D;</option>
                  </select>
                </td>
              </tr>
            </tbody>
    
            <body>
              <tr>
                <td>Vendredi</td>
                <td>
                  <select name="emoji5" id="emoji-select">
                    <option value="">--Comment était ta journée ?--</option>
                    <option value="&#x1F601;">&#x1F601;</option>
                    <option value="&#x1F621;">&#x1F621;</option>
                    <option value="&#x1F62D;">&#x1F62D;</option>
                  </select>
                </td>
              </tr>
    
          </table>
      </div>
    
      <input type="submit" value="valider">
      </form>
      
</body>
</html>