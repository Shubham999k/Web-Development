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



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < 6; i++) {
  console.log(arr[i]);
}
console.log(arr);
arr[2] = arr[2] + 10;
console.log(arr);
arr = [];
console.log(arr);

arr.push(1);

console.log(arr);

arr.pop();

console.log(arr);

arr.unshift(6);

console.log(arr);

arr.shift();

console.log(arr); 
console.log(arr.at(4));

console.log(arr.indexOf(7));
console.log(arr.includes(76));


let unr = [34,56,32,21,8,76,43,78,42]
unr.sort();
console.log(unr);

unr.reverse();
console.log(unr);

let arr1 = [2, 1,11,9, 10, 5];

arr1.sort((a, b) => a - b);

console.log(arr1);












