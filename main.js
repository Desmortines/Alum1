
    function generateMatches() {
        for (var i = 0; i < 12; i++) {
            $('.main-image').append('<img class="col-1" src="Alumette.png" id="' + i + '">');
        }
    }

//document.querySelector("row main-image").addEventListener("click");
function removeMatch() {
    let matches = $('.main-image').children();

    let number = -Math.abs(Math.floor(Math.random() % 4);

    if (matches.length == 2) {
        number = -1
    }
    else if (matches.length == 3) {
        number = -2
    }
    else if (matches.length == 4) {
        number = -3
    }
    else if (matches.length == 1) {
        alert('Vous avez gagné');
        location.reload();
    }
    else if (matches.length < 1) {
        alert('Vous avez perdu');
        location.reload();
    }
    matches.slice(number).fadeOut("normal", function () {
        $(this).remove();
    });
}

    window.onload = generateMatches;


