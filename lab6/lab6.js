document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault();
    validatePassword();
});
document.getElementById("password").addEventListener("keyup", function() {
    updateMessageStyle();
});
document.getElementById("password").addEventListener("mouseover", function(event) {
    if (event.target === document.getElementById("password")) {
        showPasswordConditions();
    }
});
document.getElementById("password").addEventListener("mouseout", function(event) {
    if (event.target === document.getElementById("password")) {
        hidePasswordConditions();
    }
});
function hidePasswordConditions() {
    var passwordConditions = document.getElementById("passwordConditions");
    passwordConditions.style.display = "none";
}


function showPasswordConditions() {
    var passwordConditions = document.getElementById("passwordConditions");
    passwordConditions.style.display = "block";
}
function validatePassword() {
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var message = document.getElementById("message");

    // Expresión regular para verificar si la contraseña contiene al menos un número y un carácter especial
    var numberRegex = /\d/;
    var specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

    if (password.length < 8) {
        message.innerHTML = "Password must be at least 8 characters long.";
        message.className = "invalid";
        return;
    }

    if (!numberRegex.test(password)) {
        message.innerHTML = "La contraseña debe tener por lo menos un número.";
        message.className = "invalid";
        return;
    }

    if (!specialCharRegex.test(password)) {
        message.innerHTML = "La contraseña debe contener por lo menos un caracter especial";
        message.className = "invalid";
        return;
    }

    if (password !== confirmPassword) {
        message.innerHTML = "Passwords do not match.";
        message.className = "invalid";
        return;
    }

    message.innerHTML = "Passwords match and are valid.";
    message.className = "valid";
    updateMessageStyle();
}
function updateMessageStyle() {
    var message = document.getElementById("caja");
    message.style.color = "blue";
    message.style.fontWeight = "bold";

}
document.getElementById("mostrarBoton").addEventListener("click", function() {
    var div = document.getElementById("texto");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
})
