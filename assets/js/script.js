// Assignment Code
// available characters for password

var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var number = ['0','1','2','3','4','5','6','7','8','9'];
var symbol = ['!','@','#','$','%','^','&','*','(',')','_','+','<','>','?','{','}','[',']','~'];



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
        var addUpper = confirms.concat(upperCase);
        console.log(addUpper); 
    }
    if (lowerYes == true) {
        var addLower = confirms.concat(lowerCase); 
        console.log(addLower);
    }
    if (numYes == true) {
        var addNum = confirms.concat(number);
        console.log(addNum);
    }
    if (symYes == true) {
        var addSym = confirms.concat(symbol);
        console.log(addSym);
    }
    confirms = confirms.concat(addUpper, addLower, addNum, addSym);
    console.log(confirms);
    
for (var i = 0; i < input; i++) {
      var output = "";
      output += confirms[Math.floor(Math.random() * input)];
    }
    console.log(output);
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
