// script.js

document.getElementById("loginForm").addEventListener("submit", function(event)
{

    event.preventDefault();

    let username = document.getElementById("username").value;

    let password = document.getElementById("password").value;

    let message = document.getElementById("message");

    if(username === "admin" && password === "12345")
    {
        message.innerText = "Login Successful";
        message.classList.remove("text-danger");
        message.classList.add("text-success");
    }
    else
    {
        message.innerText = "Invalid Username or Password";
        message.classList.remove("text-success");
        message.classList.add("text-danger");
    }

});