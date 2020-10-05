// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// All possible letters, numbers and special characters to be chosen by the user.
var userCharacters = [];
var upperCaseLetters = "ABCDEFHGIJKLMNOPQRSTUVWXYZ";
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
var numericalValues = "0123456789";
var specialCharacters = "!@#$%^&*()_-=+[]{}";

// A series of confirms to ask the user for preferred types of characters.
function getUserOptions() {
  var lowerCaseOption = confirm("Would you like to include lowercase letters?");
  var upperCaseOption = confirm("Would you like to include uppercase letters?");
  var numericalValueOption = confirm("Would you like to include numerical values?");
  var specialCharacterOption = confirm("Would you like to include special characters?");
  
  // Conditional statements to store the user's choices in the variable: userCharacters.
  if (lowerCaseOption) {
    lowerCaseLetters;
    userCharacters.push(lowerCaseLetters);
  }
  if (upperCaseOption) {
    upperCaseLetters;
    userCharacters.push(upperCaseLetters);
  }
  if (numericalValueOption) {
    numericalValues;
    userCharacters.push(numericalValues);
  }
  if (specialCharacterOption) {
    specialCharacters;
    userCharacters.push(specialCharacters);
  }
  return;
}

//This function will generate the password requested.
function generatePassword() {
  getUserOptions();
  var length = prompt("What will the length of your password be?");
  var splitCharacters = userCharacters.join("");
  var retVal = "";
  
  //Conditional statement to ensure that the chosen password length matches criteria. 
  if (isNaN(length) === true || length > 128 || length < 8) {
    alert("Password length must be provided with a number between 8 and 128");
    return;
  }
  
  // This loop runs n times, where n is the numerical value of the password length that the user chooses. Each iteration generates a random index and concatenates the value at that index to the password text (retVal).
  for (var i = 0; i < length; ++i) {
    var randomIndex = Math.floor(Math.random() * splitCharacters.length);
    retVal += splitCharacters[randomIndex];
  }
  console.log(retVal);
  return retVal;
}
var generateBtn = document.querySelector("#generate");
// Write password to the password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// This is to add event listener by clicking the button
generateBtn.addEventListener("click", writePassword);