const country1 =
    document.getElementById("country1");

const country2 =
    document.getElementById("country2");

const flag1 =
    document.getElementById("flag1");

const flag2 =
    document.getElementById("flag2");

const convertBtn =
    document.getElementById("convertBtn");

/* Load Countries */

window.addEventListener(
    "DOMContentLoaded",
    loadCountries
);

async function loadCountries() {

    const response =
        await fetch("./codes.json");

    const data =
        await response.json();

    data.forEach((item) => {

        if (!item.Currency_Code) {

            return;

        }

        let option1 =
            document.createElement("option");

        option1.value =
            `${item.Currency_Code.toLowerCase()},${item.Country_Code}`;

        option1.innerText =
            `${item.Country} (${item.Currency_Code})`;

        country1.appendChild(option1);

        let option2 =
            document.createElement("option");

        option2.value =
            `${item.Currency_Code.toLowerCase()},${item.Country_Code}`;

        option2.innerText =
            `${item.Country} (${item.Currency_Code})`;

        country2.appendChild(option2);

    });

    country1.value = "usd,US";

    country2.value = "inr,IN";

    updateFlags();

}

/* Update Flags */

function updateFlags() {

    const countryCode1 =
        country1.value.split(",")[1];

    const countryCode2 =
        country2.value.split(",")[1];

    flag1.src =
        `https://flagsapi.com/${countryCode1}/flat/64.png`;

    flag2.src =
        `https://flagsapi.com/${countryCode2}/flat/64.png`;

}

country1.addEventListener(
    "change",
    updateFlags
);

country2.addEventListener(
    "change",
    updateFlags
);

/* Swap */

document.getElementById("swapBtn")
    .addEventListener(
        "click",
        () => {

            let temp =
                country1.value;

            country1.value =
                country2.value;

            country2.value =
                temp;

            updateFlags();

        }
    );

/* Convert */

convertBtn.addEventListener(
    "click",
    convertCurrency
);

async function convertCurrency() {

    const amount =
        document.getElementById("amount").value;

    const error =
        document.getElementById("error");

    const btnText =
        document.getElementById("btnText");

    const loader =
        document.getElementById("loader");

    if (amount === "" || amount <= 0) {

        error.innerText =
            "Please enter valid amount";

        return;

    }

    error.innerText = "";

    btnText.innerText =
        "Loading...";

    loader.classList.remove("d-none");

    convertBtn.disabled = true;

    const fromCurrency =
        country1.value.split(",")[0];

    const toCurrency =
        country2.value.split(",")[0];

    try {

        const response =
            await fetch(
                `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`
            );

        const data =
            await response.json();

        const rate =
            data[fromCurrency][toCurrency];

        const finalAmount =
            amount * rate;

        document.getElementById("newAmount")
            .innerText =
            `${finalAmount.toFixed(2)} ${toCurrency.toUpperCase()}`;

        document.getElementById("exchangeRate")
            .innerText =
            `1 ${fromCurrency.toUpperCase()} = ${rate} ${toCurrency.toUpperCase()}`;

    }

    catch (err) {

        error.innerText =
            "Something went wrong";

    }

    finally {

        btnText.innerText =
            "Convert Currency";

        loader.classList.add("d-none");

        convertBtn.disabled = false;

    }

}