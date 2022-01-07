// Assignment Code

// available characters for password
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var number = ['0','1','2','3','4','5','6','7','8','9'];
var symbol = ['!','@','#','$','%','^','&','*','(',')','_','+','<','>','?','{','}','[',']','~'];

// length criteria for password
function passwordRange() {
  var userInput = window.prompt("Please enter the number of characters in your password, between 8 and 128.");
  console.log(userInput);

  if (userInput >= 8 && userInput <= 128)  {
    return userInput;
  } else {
    alert("Please input between 8 and 128 characters.");
    return passwordRange();
  }
}

var generatePassword = function() {
  // password length input criteria
  var input = passwordRange();
  // password character criteria confirms
  var upperYes = confirm("Would you like uppercase letters in your password?");
  var lowerYes = confirm("Would you like lowercase letters in your password?");
  var numYes = confirm("Would you like numbers in your password?");
  var symYes = confirm("Would you like symbols in your password?");
  
    // empty array to accept character arrays
    var confirms = []; 

    // if statements to check for the characters wanted in password 
    if (upperYes == true) {
        var addUpper = confirms.concat(upperCase);
        confirms = addUpper
        
    } else {}
    if (lowerYes == true) {
        var addLower = confirms.concat(lowerCase); 
        confirms = addLower
        
    } else {}
    if (numYes == true) {
        var addNum = confirms.concat(number);
        confirms = addNum
        
    } else {}
    if (symYes == true) {
        var addSym = confirms.concat(symbol);
        confirms = addSym
        
    } else {}
    if (upperYes == false && lowerYes == false && numYes == false && symYes == false) {
      alert("Please select at least one parameter.");
      return generatePassword();
    }
    // log to show confirms array filled with new variables
    console.log(confirms);

    let output = "";
    // for loop to return generated password
for (i = 1; i < input; i++) {
      output += confirms[Math.floor(Math.random() * confirms.length)];
      // log to show password generation
      console.log(output);
    }
    // return password
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
