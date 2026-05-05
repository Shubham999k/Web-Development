// function Submit(){
//     const fn = document.getElementById("fullName").value;

//     document.getElementById("myData").innerText= fn;
//     document.getElementById("fullName").value="";

//     document.getElementById("dataCard").classList.add("divShow");
//     document.getElementById("dataCard").classList.remove("divHide");

    
// }

// ================= ASSIGNMENT 1 =================
function submit1() {

  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;

  document.getElementById("result1").innerText =
    "Name: " + name + " | City: " + city;

  document.getElementById("result1").classList.remove("hide");
  document.getElementById("result1").classList.add("show");
}


// ================= ASSIGNMENT 2 =================
function submit2() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  document.getElementById("result2").innerText =
    email + " | " + password;

  document.getElementById("result2").classList.add("result2");

  document.getElementById("formBox").style.backgroundColor = "lightblue";
}


// ================= ASSIGNMENT 3 =================
function submit3() {

  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;

  const fullName = fname + " " + lname;

  document.getElementById("result3").innerText = fullName;

  document.getElementById("result3").classList.add("result3");
}