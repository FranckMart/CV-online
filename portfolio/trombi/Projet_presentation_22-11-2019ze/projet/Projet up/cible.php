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
    <header>
            <a href="accueil.html">
                <h1>Trombinoscope</h1>
            </a>
        </header>
    <main>
        <!--
        <section id="section-first">
            <div class="bloc-image">
                <img src="images/Ahmed.png" alt="image Ahmed">
                <h2>KARA</h2>
                <h2 class="firstname" name="ahmed">Ahmed</h2>
                <p>"AMD"</p>
            </div>
        </section>
-->
        <section>
            <div class="aa_htmlTable">
                <h2 class="aa_h2">Vos compétences</h2>
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
                                        <?php echo $_POST["competence1"] ?>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Réaliser une interface utilisateur web statique et adaptable</td>
                                <td>
                                <?php echo $_POST["competence2"] ?>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Développer une interface utilisateur dynamique</td>
                                <td>
                                <?php echo $_POST["competence3"] ?>
                                </td>
                            </tr>
                        </tbody>
                        <tbody>
                            <tr>
                                <td>Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce</td>
                                <td>
                                <?php echo $_POST["competence4"] ?>
                                </td>
                            </tr>
                        </tbody>

                        <body>
                            <tr>
                                <td>Créer une base données</td>
                                <td>
                                <?php echo $_POST["competence5"] ?>
                                </td>
                            </tr>
                            <tbody>
                                <tr>
                                    <td>Développer les composants d'accés aux données</td>
                                    <td>
                                    <?php echo $_POST["competence6"] ?>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>Développer la partie Backend d'une application web ou web mobile</td>
                                    <td>
                                    <?php echo $_POST["competence7"] ?>
                                    </td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>Elaborer et mettre en oeuvre des composants dans une applications de gestion de contenu ou e-commerce</td>
                                    <td>
                                    <?php echo $_POST["competence7"] ?>
                                    </td>
                                </tr>
                        </body>
                </table>
            </div>
            </form>
            <section id="gif-element">
            <iframe src="https://giphy.com/embed/4Z3DdOZRTcXPa" width="480" height="367" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/chuck-approves-norris-4Z3DdOZRTcXPa">via GIPHY</a></p>
            </section>
</body>

</html>