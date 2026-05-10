var display = document.getElementById("display");

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

/* ================= KEYBOARD SUPPORT ================= */

document.addEventListener("keydown", function (event) {

    var key = event.key;

    /* Numbers */

    if (
        key >= "0" && key <= "9"
    ) {
        appendValue(key);
    }

    /* Operators */

    else if (
        key === "+" ||
        key === "-" ||
        key === "*" ||
        key === "/" ||
        key === "%" ||
        key === "."
    ) {
        appendValue(key);
    }

    /* Enter */

    else if (key === "Enter") {
        calculateResult();
    }

    /* Backspace */

    else if (key === "Backspace") {
        clearLast();
    }

    /* Escape */

    else if (key === "Escape") {
        allClear();
    }
});