function showMessage() {
    document.getElementById("msg").innerHTML = 
    "Thank you for visiting my portfolio!";
}
document.getElementById("loginForm").addEventListener("submit", function(e){

e.preventDefault();

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;
let error = document.getElementById("error");

if(username === "" || password === ""){
    error.textContent = "All fields are required";
}
else if(password.length < 6){
    error.textContent = "Password must be at least 6 characters";
}
else{
    error.style.color="lightgreen";
    error.textContent = "Login Successful!";
}

});