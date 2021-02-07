<?php
    $win = $_POST["win"];
    $sc = $_POST["sc"];
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <span class="text" id="text"><?php echo $win ?></span>
    <span class="text text2">Score: <?php echo $sc ?></span>
    <a href="game.html" id="play">Play again</a>
</body>
</html>