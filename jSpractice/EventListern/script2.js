document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const fn = document.getElementById("firstName").value;
    const em = document.getElementById("email").value;
    const ps = document.getElementById("password").value;

    const dataPacket = {
        firstName: fn,
        lastName: em,
        password: ps

    }
    console.log(dataPacket);
    document.getElementById("firstName").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";



})

document.querySelector("form").addEventListener("reset", (event) => {
    event.preventDefault();

    confirm("Are you sure") && window.location.reload();


})


document.addEventListener("keydown", (event) => {
    let keyPress = (event.key);
    keyPress === "Escapse" && window.location.reload();

})

