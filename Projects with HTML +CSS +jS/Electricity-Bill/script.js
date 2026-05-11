function calculateBill() {

    var units =
        Number(document.getElementById("units").value);

    var totalBill = 0;

    if (units <= 0) {

        alert("Please enter valid units");

        return;
    }

    /* ================= BILL LOGIC ================= */

    if (units <= 100) {

        totalBill =
            units * 5;
    }

    else if (units <= 300) {

        totalBill =
            (100 * 5) +
            ((units - 100) * 7);
    }

    else {

        totalBill =
            (100 * 5) +
            (200 * 7) +
            ((units - 300) * 10);
    }

    /* ================= SHOW RESULT ================= */

    document.getElementById("result")
        .classList.remove("d-none");

    document.getElementById("result")
        .innerHTML =
        `
        ⚡ Total Electricity Bill <br><br>
        ₹ ${totalBill.toFixed(2)}
        `;
}

/* ================= ENTER KEY SUPPORT ================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        calculateBill();
    }
});