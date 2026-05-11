var randomNumber =
    Math.floor(Math.random() * 100) + 1;

var totalAttempts = 0;

function checkGuess() {

    var userGuess =
        Number(document.getElementById("guessInput").value);

    totalAttempts++;

    document.getElementById("attempts")
        .innerHTML =
        "Attempts : " + totalAttempts;

    if (userGuess === randomNumber) {

        document.getElementById("result")
            .innerHTML =
            "🎉 Correct Guess!";

        document.getElementById("result")
            .className =
            "alert alert-success rounded-4 mt-4 text-center fw-bold";
    }

    else if (userGuess > randomNumber) {

        document.getElementById("result")
            .innerHTML =
            "📈 Too High!";
    }

    else {

        document.getElementById("result")
            .innerHTML =
            "📉 Too Low!";
    }
}

function restartGame() {

    randomNumber =
        Math.floor(Math.random() * 100) + 1;

    totalAttempts = 0;

    document.getElementById("attempts")
        .innerHTML =
        "Attempts : 0";

    document.getElementById("result")
        .innerHTML =
        "Start guessing... 🤔";

    document.getElementById("result")
        .className =
        "alert alert-info rounded-4 mt-4 text-center fw-bold";

    document.getElementById("guessInput").value = "";
}

/* ================= ENTER KEY SUPPORT ================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        checkGuess();
    }
});