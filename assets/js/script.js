// Assignment Code
// available characters for password

const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const number = ['0','1','2','3','4','5','6','7','8','9'];
const symbol = ['!','@','#','$','%','^','&','*','(',')','_','+','<','>','?','{','}','[',']','~'];



// length for password
function passwordRange() {
  var userInput = window.prompt("Please enter the number of characters in your password, between 8 and 128.");
  console.log(userInput);

  if (userInput >= 8 && userInput <= 128)  {
    return userInput;
  } else {
    alert("Please input between 8 and 128 characters.");
    return passwordRange;
  }
}

var generatePassword = function() {
    var input = passwordRange();
    // conditional password confirms
    var upperYes = confirm("Would you like uppercase letters in your password?");
    var lowerYes = confirm("Would you like lowercase letters in your password?");
    var numYes = confirm("Would you like numbers in your password?");
    var symYes = confirm("Would you like symbols in your password?");
    var confirms = [];  
    if (upperYes == true) {
        confirms.concat(upperCase);
    }
    if (lowerYes == true) {
      confirms.push(lowerCase);
    }
    if (numYes == true) {
      confirms.push(number);
    }
    if (symYes == true) {
      confirms.push(symbol);
    }
    // else {
    //   alert("Please choose at least one parameter");
    //  return generatePassword();
    // };
    var output = "";
for (var i = 0; i < input; i++) {
      output += confirms[Math.floor(Math.random() * input)];
    }
    return output;
};
  var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
