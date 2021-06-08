<?php require __DIR__ . "/datas/runes.php"; ?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Hind:wght@500&display=swap" rel="stylesheet">

    <!-- CSS -->
    <link rel="stylesheet" href="assets/css/style.css">
    
    <title>Memory Cards</title>
</head>
<body>
    <main class="container">
        <h1>Memory Cards</h1>
        <div class="timer"></div>
        <div class="game-wrapper">
        <?php foreach($runes as $rune): ?>
            <div class="card__container">
                <div class="card">
                    <div class="card__face card__face--recto">
                        <div class="card__logo"></div>
                    </div>
                    <div class="card__face card__face--verso">
                        <div class="card__image-container">
                            <img src="images/runes/<?= $rune; ?>" alt="" class="card__image">
                        </div>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
        </div>
    </main>

    <script src="assets/js/app.js"></script>
</body>
</html>