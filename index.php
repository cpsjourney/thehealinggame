<?php

$db = new SQLite3('/tmp/gm_scores.sqlite');

$db->exec("CREATE TABLE IF NOT EXISTS gm_scores (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT,
    punteggio INTEGER
)");

$result = $db->query("SELECT * FROM gm_scores");
$scores = [];

while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
    $scores[] = [$row["nome"], $row["punteggio"]];
}

echo "<script> let listapunteggi = ". json_encode($scores) . "; </script>";

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["nametosave"]) && isset($_POST["scoretosave"])) {

    $nome = $_POST["nametosave"];
    $punteggio = $_POST["scoretosave"];

    $stmt = $db->prepare("INSERT INTO gm_scores (nome, punteggio) VALUES (:nome, :punteggio)");
    $stmt->bindValue(":nome", $nome, SQLITE3_TEXT);
    $stmt->bindValue(":punteggio", $punteggio, SQLITE3_INTEGER);

    $stmt->execute();

}

$db->close();

?>

<html>
    <head>
        <title>The Healing Minigame</title>
        <meta charset="UTF-8">
        <meta name="viewport"  content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
        <!--bg = background, gm = game-->
        <link rel="stylesheet" href="style.css">
        </link>
    </head>
    <body>
        <div class="bg_title" id="title">
            THE HEALING MINIGAME
        </div>
        <div class="bg_lll_cont" id="bg_lll_cont_1">
            <div class="bg_lll">
                <div class="bg_l">
                    |
                </div>
                <div class="bg_l">
                    |
                </div>
                <div class="bg_l">
                    |
                </div>
            </div>
            <div class="bg_logo_small">
                <img src="./4.png">
            </div>
            <div class="bg_logo_middle">
                <img src="./4.png">
            </div>
            <div class="bg_logo">
                <img src="./4.png">
            </div>
            <div class="bg_logo_middle">
                <img src="./4.png">
            </div>
            <div class="bg_logo_small">
                <img src="./4.png">
            </div>
            <div class="bg_lll">
                <div class="bg_l">
                    |
                </div>
                <div class="bg_l">
                    |
                </div>
                <div class="bg_l">
                    |
                </div>
            </div>
        </div>
        <div class="bg_infobox" id="infobox">
            HOW TO PLAY: Click on EVERY health symbol ASAP and try to make some points before they get too small!
        </div>
        <div class="bg_lll_cont" id="bg_lll_cont_2">
            <div class="bg_lll">
                <div class="bg_l">
                    |
                </div>
                <div class="bg_l">
                    |
                </div>
                <div class="bg_l">
                    |
                </div>
            </div>
            <div class="bg_logo_small">
                <img src="./4.png">
            </div>
            <div class="bg_logo_middle">
                <img src="./4.png">
            </div>
            <div class="bg_logo">
                <img src="./4.png">
            </div>
            <div class="bg_logo_middle">
                <img src="./4.png">
            </div>
            <div class="bg_logo_small">
                <img src="./4.png">
            </div>
            <div class="bg_lll">
                <div class="bg_l">
                    |
                </div>
                <div class="bg_l">
                    |
                </div>
                <div class="bg_l">
                    |
                </div>
            </div>
        </div>
        <form method="post" action="index.php" id="finalform">
            <div class="gm_cont" id="game">
                <div class="gm_main" id="main">
                    <div class="gm_playbtn" id="playbtn">
                        <b>PLAY</b>
                    </div>
                </div>
                <div class="gm_secondary" id="secondary">

                </div>
            </div>
        </form>
        <div class="bg_credits" id="credits">
            <a class="bg_creditstext" href="https://www.linkedin.com/in/franco-capossela-b82096287/">credits: Franco Capossela</a>
        </div>
        <script src="script.js">
        </script>
    </body>
</html>
