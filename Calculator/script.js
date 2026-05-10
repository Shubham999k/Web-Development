
const display = document.getElementById("display");

function appendValue(value) {

    if (display.value === "0") {

        display.value = value;
    }

    else {

        display.value += value;
    }

}

function allClear() {

    display.value = "0";

}

function clearLast() {

    display.value = display.value.slice(0, -1);

    if (display.value === "") {

        display.value = "0";
    }

}

function calculateResult() {

    try {

        display.value = eval(display.value);

    }

    catch {

        display.value = "Error";
    }

}


