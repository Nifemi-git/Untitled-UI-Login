let inputs = document.querySelectorAll("input");
let email = document.getElementById("email-address");
let password = document.getElementById("pass");
let errorMessage1 = document.getElementById("err-mssg1");
let errorMessage2 = document.getElementById("err-mssg2");
let signInBtns = document.querySelectorAll("button");

let regex = /^[a-z0-9]+@[a-z]+\.com$/;

const checkEmail = () => {
    if (email.value !== "" && password.value !== ""){
        let result = regex.test(email.value);
        return result ? alert("Successfully signed in, check your inbox!") : alert("Oops! that doesn't look like an email.");    
    }
}


const showError = () => {
    inputs.forEach(input => {input.value === "" ? input.style.borderColor = "red": input.style.borderColor = "lightgray";});
    email.value === "" ? errorMessage1.style.display = "block": errorMessage1.style.display = "none";
    password.value === "" ? errorMessage2.style.display = "block": errorMessage2.style.display = "none";
    checkEmail();
}

signInBtns.forEach(btn => btn.onclick = showError);
