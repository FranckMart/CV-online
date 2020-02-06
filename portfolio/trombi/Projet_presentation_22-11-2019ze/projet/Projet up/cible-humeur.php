<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="css/tableauAxel.css" />
    <title>Ahmed - Trombinoscope</title>
</head>

<body>
    <section>
        <header>
            <a href="accueil.html">
                <h1>Trombinoscope</h1>
            </a>
        </header>
        <!--
        <div class="bloc-image">
            <img src="images/Ahmed.png" alt="image Ahmed">
            <h2>KARA</h2>
            <h2 class="firstname" name="ahmed">Ahmed</h2>
            <p>"AMD"</p>
        </div>
    </section>
    <hr>
-->
    <div class="aa_htmlTable">
        <h2 class="aa_h2">Humeur Journalière</h2>
        <form action="cible-humeur.php" method="post" class="form-example"></form>
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

                        <?php echo $_POST["emoji1"] ?>
                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Mardi</td>
                    <td>
                        <?php echo $_POST["emoji2"] ?>

                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Mercredi</td>
                    <td>
                        <?php echo $_POST["emoji3"] ?>

                    </td>
                </tr>
            </tbody>
            <tbody>
                <tr>
                    <td>Jeudi</td>
                    <td>
                        <?php echo $_POST["emoji4"] ?>

                    </td>
                </tr>
            </tbody>

            <tbody>
                <tr>
                    <td>Vendredi</td>
                    <td>
                        <?php echo $_POST["emoji5"] ?>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>





</body>

</html>