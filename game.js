// background;

//FUNCTIONS

function soundef(sd) {
    switch (sd) {
        case "green":
            var green = new Audio("green.mp3");
            green.play();
            $("#green").addClass("pressed");
            setTimeout(function() {
                $("#green").removeClass("pressed");
            }, 100);
            break;
        case "blue":
            var blue = new Audio("blue.mp3");
            blue.play();
            $("#blue").addClass("pressed");
            setTimeout(function() {
                $("#blue").removeClass("pressed");
            }, 100);
            break;
        case "red":
            var red = new Audio("red.mp3");
            red.play();
            $("#red").addClass("pressed");
            setTimeout(function() {
                $("#red").removeClass("pressed");
            }, 100);
            break;

        case "yellow":
            var yellow = new Audio("yellow.mp3");
            yellow.play();
            $("#yellow").addClass("pressed");
            setTimeout(function() {
                $("#yellow").removeClass("pressed");
            }, 100);
            break;

        default:
            var wrong = new Audio("wrong.mp3");
            wrong.play();
            $("body").addClass("game-over");
            setTimeout(function() {
                $("body").removeClass("game-over");
            }, 100);
            break;
    }
}

function randomColor() {
    ppl = [];
    level++;
    $("h1").text("level " + level);
    var randumID = $(".btn")[Math.floor(Math.random() * 4)].id;
    soundef(randumID);
    cpt.push(randumID);
    console.log(cpt);
}

function checkAnswer(currentLevel) {
    if (cpt[currentLevel] === ppl[currentLevel]) {
        if (cpt.length === ppl.length) {
            setTimeout(function() {
                randomColor();
            }, 1000);
        }
    } else {
        soundef();
        $("h1").text("ĐỤT LẮM, Press A Key to Start");
        startOver();
    }
}

function startOver() {
    level = 0;
    cpt = [];
    started = false;
}

var started = false;
var cpt = [];
var ppl = [];
var level = 0;

$(document).keydown(function() {
    if (!started) {
        $("h1").text("level " + level);
        randomColor();
        started = true;
    }
});

$(".btn").click(function(e) {
    var COLOR = e.target.id;
    soundef(COLOR);
    ppl.push(COLOR);
    console.log(ppl);
    checkAnswer(ppl.length - 1);
});
