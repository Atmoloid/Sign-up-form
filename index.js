const passWord = document.getElementById("password");
const conPassword = document.getElementById("password-confirm");
const button = document.getElementById("button");

function checkPasswords() {
    if (passWord.value !== conPassword.value) {
        conPassword.style.borderColor = "red";
    } else {
        conPassword.style.borderColor = "green"; 
    }
}

button.addEventListener("click",checkPasswords);