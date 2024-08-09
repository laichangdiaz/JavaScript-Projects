const passwordBox = document.getElementById("password");
const lenght = 12; //lenght of the password

const upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerrCase = "qwertyuiopasdfghjklzxcvbnm";
const number = "0123456789";
const symbol = "@#$%^&*()_~|}{[]></-=";

const allChars =upperCase+lowerrCase+number+symbol

function createPassword(){
    let password ="";
    password+= upperCase[Math.floor(Math.random() * upperCase.length)];
    password+= lowerrCase[Math.floor(Math.random() * lowerrCase.length)];
    password+= number[Math.floor(Math.random() * number.length)];
    password+= symbol[Math.floor(Math.random() * symbol.length)];

    while (lenght>password.length){
        password+= allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value =password;
}

function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}