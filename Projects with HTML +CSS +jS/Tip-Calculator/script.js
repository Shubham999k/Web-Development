function calculateTip() {

    var billAmount =
        Number(document.getElementById("billAmount").value);

    var service =
        Number(document.getElementById("service").value);

    var people =
        Number(document.getElementById("people").value);

    if (
        billAmount <= 0 ||
        service <= 0 ||
        people <= 0
    ) {
        alert("Please fill all fields properly");

        return;
    }

    var tip =
        (billAmount * service) / 100;

    var total =
        billAmount + tip;

    var perPerson =
        total / people;

    document.getElementById("result")
        .classList.remove("d-none");

    document.getElementById("tipAmount")
        .innerHTML =
        "Tip Amount : ₹" + tip.toFixed(2);

    document.getElementById("totalAmount")
        .innerHTML =
        "Total Amount : ₹" + total.toFixed(2);

    document.getElementById("perPerson")
        .innerHTML =
        "Per Person : ₹" + perPerson.toFixed(2);
}

/* ================= ENTER KEY SUPPORT ================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        calculateTip();
    }
});