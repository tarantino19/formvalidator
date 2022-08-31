`use strict`;
`use strict`;

// VERSION 2

const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

// console.log(form, username, email, password, confirmPassword);
//debugging

//FUNCTIONS

//showerror
function showError(input, message) {
  // input  - the username below the form ... and message is the string "x is required"
  const formControl = input.parentElement; //parent element of the input
  formControl.className = `form-control error`;
  const small = formControl.querySelector("small"); // dont use queryselectorall
  small.innerText = message;
  //to show the actual error, not just "error  message"
}

//isvalid email function
function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>( )\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(String(email).toLowerCase());
  if (re.test(input.value.trim())) {
    //dot trim removes whitespace in the string
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}

//showsuccess
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = `form-control success`;
} //shows green in the  username input field

//CHECK INPUT FIELD FUNCTION

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    // console.log(input.value);
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//CHECK INPUT LENGTH

function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters}`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

//chheck password match

function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

// Get field name

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
} // for uppercasing, lowercasing cutting text

// Event listeners DRY
form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});
