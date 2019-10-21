$(document).ready(function() {
    let wins = 0;
    let guessesLeft = 13;
    const wordBank = ["market", "pop", "dull", "obsequious", "push", "laughable", "duck", "bike", "protest", "symptomatic", "hulking", "sponge"];

    function chooseWord () {
        return wordBank[Math.floor(Math.random()*(wordBank.length))];
    }; 

    let chosenWord = chooseWord();
    let space = "";

    for (i=0; i < chosenWord.length; i++ ) {
        space = space + "<span class='letter-"+i+"'>_ </span>";
    }

    console.log(chosenWord);
    console.log(space);

    $(".secret-word").append(space);
    
    let chosenArray = chosenWord.split("");

    console.log(chosenArray);

    for (i=0; i < chosenWord.length; i++) {
        $(".letter-" + i).attr("title", chosenArray[i]);
        $(".letter-" + i).addClass("char");
    }

    $(".char").each(function () {
        console.log( $(this).attr("title") );
    });

    console.log( $("[title='s']") )

    $(document).keyup( function () {
/*         if ($(".char").attr("title") === event.key) {
            console.log("yes");
        }
 */

        if (chosenArray.indexOf(event.key) > -1) {
            $("[title='eventkey???']")


        } else {

        }
        guessesLeft--;


    });








});