// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
var passwordLength = prompt("Password length?")

if (passwordLength < 8 || passwordLength > 128) {
  alert("invalid password length");
  generatePassword()
}

var numeric = confirm("numbers?")
var lowerCase = confirm("lower case?")
var upperCase = confirm("upper case?")
var specialCharacters = confirm("special characters?")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
