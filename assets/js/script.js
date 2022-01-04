// Assignment Code
// available characters for password
var char = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase:  "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()<>",
};

// random length for password, needs work
function passwordLength(min, max) {
  var length = Math.floor(Math.random() * (max - min + 1) + min);
  console.log("Your password length is: " + length + "!");
  return length;
}



var generatePassword = function() {
    // passwordLength(8, 128);
    // conditional password confirms
    if (confirm("Would you like uppercase letters in your password?") == true) {
        return char.upperCase[Math.floor(Math.random() * char.upperCase.length)];
      }

    char.length();
  }
  var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
