document.getElementById("redBox").addEventListener("mouseover", fillRedColor)
document.getElementById("redBox").addEventListener("mouseout", fillBaseColor)


document.getElementById("greenBox").addEventListener("mouseover", fillGreenColor)
document.getElementById("greenBox").addEventListener("mouseout", fillBaseColor)


document.getElementById("blueBox").addEventListener("mouseover", fillBlueColor)
document.getElementById("blueBox").addEventListener("mouseout", fillBaseColor)

function fillRedColor() {
    document.getElementById("bulb").style.backgroundColor = "red"
}

function fillGreenColor() {
    document.getElementById("bulb").style.backgroundColor = "rgb(25, 237, 54)"
}

function fillBlueColor() {
    document.getElementById("bulb").style.backgroundColor = "blue"
}

function fillBaseColor() {
    document.getElementById("bulb").style.backgroundColor = "white"

}