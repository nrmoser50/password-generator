// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min - 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max);
}
 

function getRandomItem(list) {
  return list[randomInt(0, list.length)];
}

function generatePassword() { //generatePassword needed a function in order to run the writePassword function

  var userInput = window.prompt("How many characters do you want your password to be?");
  console.log(typeof userInput);
  var passwordLength = parseInt(userInput);
  console.log(passwordLength);
  
  if (isNaN(passwordLength)) {//alert appears in case someone enters anything except a number
    window.alert("That is not a number.");
    return;
  } 

  if (passwordLength < 8 || passwordLength > 128) {//an alert window appears if the password length is less than 8 or greater than 128 characters
    window.alert("Password length must be between 8 and 128 characters");
    return;
  } 

  var userNumbers = window.confirm("Do you want your password to contain numbers?");
  var userSpecial = window.confirm("Do you want your password to contain special characters?");
  var userLower = window.confirm("Do you want your password to contain lowercase letters?");
  var userUpper = window.confirm("Do you want your password to contain uppercase letters?");

  var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
  var specialList = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "?", ",", "."];
  var lowerList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var optionsCart = [] // storing all the confirmed options of the above questions by being pushed to the optionsCart

  if (userNumbers === true) {
    optionsCart.push(numberList)
  }

  if (userSpecial === true) {
    optionsCart.push(specialList);
  }

  if (userLower === true) {
    optionsCart.push(lowerList);
  }

  if (userUpper === true) {
    optionsCart.push(upperList)
  }
  console.log(optionsCart);
  if (optionsCart.length === 0) {
     optionsCart.push(lowerList);
   }

var generatePassword = "" //adding a random character from the variable optionsCart list above for the for loop

for (var i = 0; i < passwordLength; i++) {
     var randomList = getRandomItem(optionsCart);
     var randomChar = getRandomItem(randomList);
     generatePassword += randomChar
  }

return generatePassword;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password"); // the 

  passwordText.value = password;


}

// Add event listener to generate button //EventListener is tied to the var generateBtn above
generateBtn.addEventListener("click", writePassword); // when the button is clicked the writePassword function will trigger and generates the random password based on the confirmed choices stored in the optionsCart

