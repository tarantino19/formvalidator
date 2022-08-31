`use strict`;

//ADDING SIMPLE VALIDATION - VERSION 1

const form = document.getElementById("form");
const username = document.getElementById("username");
const Email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("password2");

// console.log(form, username, email, password, confirmPassword);
//debugging

//functions

//showerror

function showError(input, message) {
  // input  - the username below the form ... and message is the string "x is required"
  const formControl = input.parentElement; //parent element of the input
  formControl.className = `form-control error`;
  const small = formControl.querySelector("small"); // dont use queryselectorall
  small.innerText = message;
  //to show the actual error, not just "error  message"
}

//showsuccess

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = `form-control success`;
} //shows green in the username input field

//Making sure email is valid

function isValidEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>( )\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Event listeners (was written first)
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === "") {
    showError(username, "Username is required");
  } else {
    showSuccess(username);
  }

  if (email.value === "") {
    showError(email, "Email is required");
  } else if (!isValidEmail(email.value)) {
    showError(email, `Email is not valid`);
  } else {
    showSuccess(email);
  }

  if (password.value === "") {
    showError(password, "Password is required");
  } else {
    showSuccess(password);
  }

  if (confirmPassword.value === "") {
    showError(confirmPassword, "Password must match");
  } else {
    showSuccess(confirmPassword);
  }
});
