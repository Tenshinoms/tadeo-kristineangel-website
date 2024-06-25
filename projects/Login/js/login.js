function login() {
    var username = document.getElementById("username").value;
    var pass = document.getElementById("pass").value;
    
    var real_username = "Tenshi";
    var real_password = "333";

    if(username === "" || pass === "") {
        document.getElementById("alert").innerHTML = "Username and Password are required!";
    }
    else {
        if (username === real_username && pass === real_password) {
            document.getElementById("alert").innerHTML = "Welcome " + username;
    
        }
        else {
            document.getElementById("alert").innerHTML = "Invalid Username or Password.";
        }
    }
}
function forgot() {
    alert("You clicked forgot password");
}