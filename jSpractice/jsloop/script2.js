function Submit(){
    const fn = document.getElementById("fullName").value;

    document.getElementById("myData").innerText= fn;
    document.getElementById("fullName").value="";
}