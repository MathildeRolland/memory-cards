<?php 

/**
 * Function that generate 2 sets of runes from 1 to 10
 */
function generateRunesArray($limit) {
    $newArray = [];
    for($i = 1; $i <= $limit; $i++) {
        $newArray[] = 'rune' . ($i) . '.svg';
    }
    for($j = 1; $j <= $limit; $j++) {
        $newArray[] = 'rune' . ($j) . '.svg';
    }

    return $newArray;
}

// Generate rune array and shuffle it
$runes = generateRunesArray(10);
shuffle($runes);







