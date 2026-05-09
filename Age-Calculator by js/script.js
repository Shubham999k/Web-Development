document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const dob = document.getElementById("DOB").value;
    const curDate = document.getElementById("CurrentDate").value;

    const Age = Number(curDate.split("-")[0] - dob.split("-")[0]);



    document.getElementById("DOB").value = "";
    document.getElementById("CurrentDate").value = "";
    document.getElementById("Age").innerText =
        `Your Age is : ${Age} Years`;

    document.querySelector("div").addEventListener("mouseleave", () => {

        location.reload();

    });

})