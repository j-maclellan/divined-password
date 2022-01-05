// Assignment Code
// available characters for password
// var char = [
  
//   upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
//   lowerCase =  "abcdefghijklmnopqrstuvwxyz",
//   number = "0123456789",
//   symbol = "!@#$%^&*()<>",
//   // all: upperCase + lowerCase + number + symbol,
// ];
const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const number = ['0','1','2','3','4','5','6','7','8','9'];
const symbol = ['!','@','#','$','%','^','&','*','(',')','_','+','<','>','?','{','}','[',']','~'];

// const randomUpper = Math.floor(Math.random() * upperCase.length);

// random length for password, needs work
function passwordRange(userInput, min, max) {
  var userInput = window.prompt("Please enter the number of characters in password, between 8 and 128.");
  console.log(userInput);

  if (userInput >= min && userInput <= max)  {
    userInput.value = passwordRange;
    return true;
  } else {
    alert("Please input between " + min + " and " + max + " characters.");
    return passwordRange();
  }
}



var generatePassword = function() {
    passwordRange("", 8, 128);
    // conditional password confirms
    var upperYes = confirm("Would you like uppercase letters in your password?");
    if (upperYes == true) {
      return Math.floor(Math.random() * upperCase.value);
    }
    // var lowerYes = confirm("Would you like lowercase letters in your password?");
    // var numYes = confirm("Would you like numbers in your password?");
    // var symYes = confirm("Would you like symbols in your password?");
    // if (upperYes == true) {
    //     return upperCase[Math.floor(Math.random() * passwordRange.length)];
    //   }
    // if (lowerYes == true) {
    //   return char.lowerCase[Math.floor(Math.random() * passwordRange.length)];
    //   }
    // if (numYes == true) {
    //   return char.number[Math.floor(Math.random() * passwordRange.length)];
    // }
    // if (symYes == true) {
    //   return char.symbol[Math.floor(Math.random() * passwordRange.length)];
    // }
    // if (upperYes == true && lowerYes == true) {

    // }
    
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
