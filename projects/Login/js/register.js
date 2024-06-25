function reg() {
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var pass = document.getElementById("pass").value;
    
    if(username === "" || name === "" || gender === "" || pass === "") {
        document.getElementById("alert").innerHTML = "Items are required!";
    }
    else {
        document.getElementById("alert").innerHTML = "Registered Successfully!";
    }
}