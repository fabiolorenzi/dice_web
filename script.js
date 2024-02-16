let amplified_possibilities = false;

function roll_dice() {
    document.getElementById("dice_value").innerHTML = `<h1>Rolling...</h1>`;
    let dice_value = Math.floor(Math.random() * 10000) + 1;
    while (dice_value > 6) {
        dice_value -= 6;
    };

    setTimeout(() => {
        if (amplified_possibilities) {
            if (dice_value % 2 == 0) {
                document.getElementById("dice_value").innerHTML = `<img src="images/6.png" alt="value" />`;
            } else {
                document.getElementById("dice_value").innerHTML = `<img src="images/${(Math.floor(Math.random() * 6) + 1).toString()}.png" alt="value" />`;
            };
        } else {
            document.getElementById("dice_value").innerHTML = `<img src="images/${dice_value.toString()}.png" alt="value" />`;
        };
    }, 1000);
};

function manage_possibilities() {
    amplified_possibilities = !amplified_possibilities;
    document.getElementById("dice_hidden_button").innerHTML = `<p>${amplified_possibilities ? "1.0" : ""}</p>`;
};