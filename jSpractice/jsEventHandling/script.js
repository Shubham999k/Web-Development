function BulbOn() {
    document.getElementById("bulb1").style.backgroundColor = "yellow";
}

function BulbOff() {
    document.getElementById("bulb1").style.backgroundColor = "red";
}


document.getElementById("bulb1Color").addEventListener("change", ChangeBulbColor);

function ChangeBulbColor() {
    var color = document.getElementById("bulb1Color").value;
    document.getElementById("bulb1").style.backgroundColor = color;
}

document.getElementById("bgColor").addEventListener("change", ChangeBgColor);

function ChangeBgColor() {
    var color = document.getElementById("bgColor").value;
    document.getElementById("Heading").style.backgroundColor = color;
}

document.getElementById("textColor").addEventListener("change", ChangeTextColor);

function ChangeTextColor() {
    var color = document.getElementById("textColor").value;
    document.getElementById("H1").style.color = color;
}

document.getElementById("paraColor").addEventListener("change", ChangeParaColor);

function ChangeParaColor() {
    var color = document.getElementById("paraColor").value;
    document.getElementById("para1").style.color = color;
}





function resetAll() {
    window.location.reload();
}