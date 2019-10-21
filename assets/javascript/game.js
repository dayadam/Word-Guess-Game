$(document).ready(function() {
    let wins = 0;
    let losses = 0;
    let guessesLeft = 13;
    const wordBank = ["market", "pop", "dull", "obsequious", "push", "laughable", "duck", "bike", "protest", "symptomatic", "hulking", "sponge"];
    $(".guesses-left").text(guessesLeft);

    function chooseWord () {
        return wordBank[Math.floor(Math.random()*(wordBank.length))];
    }; 

    let chosenWord = chooseWord();
    let space = "";

    for (i=0; i < chosenWord.length; i++ ) {
        space = space + "<span class='letter-"+i+"'>_ </span>";
    };

    console.log(chosenWord);
    console.log(space);

    $(".secret-word").append(space);
    
    let chosenArray = chosenWord.split("");

    console.log(chosenArray);

    for (i=0; i < chosenWord.length; i++) {
        $(".letter-" + i).attr("title", chosenArray[i]);
        $(".letter-" + i).addClass("char");
    };

/*      $(".char").each(function () {
        console.log( $(this).attr("title") );
    }); //looping thru attr

    console.log( $("[title='s']") ) */ //directly selecting attr

    $(document).keyup( function () {

        if (chosenArray.indexOf(event.key) > -1) {
            $("[title='"+event.key+"']").text(event.key);
        };
        $(".letters-guessed").append(event.key + " ");
        guessesLeft--;
        if ((guessesLeft < 0) || ($(".char").text() === chosenWord ) ) {
            if (guessesLeft < 0) {
                losses ++;
                $(".losses-span").text(losses);
            };
            if ($(".char").text() === chosenWord ) {
                wins++;
                $(".wins-span").text(wins);
            };
            guessesLeft = 13;
            chosenWord = chooseWord();
            space = "";
            $(".secret-word").empty();
            $(".letters-guessed").empty();
            for (i=0; i < chosenWord.length; i++ ) {
                space = space + "<span class='letter-"+i+"'>_ </span>";
            };
            $(".secret-word").append(space);
            chosenArray = chosenWord.split("");
            for (i=0; i < chosenWord.length; i++) {
                $(".letter-" + i).attr("title", chosenArray[i]);
                $(".letter-" + i).addClass("char");
            };
        };
        $(".guesses-left").text(guessesLeft);
    });

});