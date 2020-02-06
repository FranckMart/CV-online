<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="../css/tableauAxel.css" />
  <title>Ahmed - Trombinoscope</title>
</head>

<body>
  <section>
    <header>
      <a href="../accueil.html">
        <h1>Trombinoscope</h1>
      </a>
    </header>
    <div class="bloc-image">
      <img src="../images/Ahmed.png" alt="image Ahmed">
      <h2>KARA</h2>
      <h2 class="firstname" name="ahmed">Ahmed</h2>
      <p>"AMD"</p>
    </div>
  </section>
  <hr>
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