// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];


// Function to prompt user for password options


function getPasswordOptions() {
  var passwordLen = prompt("How many characters would you like your password to have?");          
     if (passwordLen < 8 || passwordLen > 128) {
     alert("I'm sorry, your password must be between 8 and 128 characters long");
     getPasswordOptions();
  } else {
    var anyLowercase = confirm("Next, click 'OK' to include lowercase characters. Click 'Cancel' to pass");
    var anyUppercase = confirm("Sure! Now click 'OK' to include uppercase characters or 'Cancel' to pass");
    var anyNumbers = confirm("Got it! Now click 'OK' to include numbers or 'Cancel' to pass");
    var anySpecial = confirm("Lastly, click 'OK' to include special characters or 'Cancel' to pass");
    
   // Create password character array based on user input 

    var password="";
    var passwordArray = [];
    if (anyLowercase === true){
      passwordArray=passwordArray.concat(lowerCasedCharacters)
    }
    if (anyUppercase === true){
      passwordArray=passwordArray.concat(upperCasedCharacters)
    }
    if (anyNumbers === true){
      passwordArray=passwordArray.concat(numericCharacters)
    }
    if (anySpecial === true){
      passwordArray=passwordArray.concat(specialCharacters)
    }
// Function for getting a random element from an array
    if (passwordArray < 1) {
      alert("You must select at least one of the four character types");
      getPasswordOptions();
    }
    for (var i = 0; i < passwordLen; i++) {
    function getRandom(passwordArray){
      return passwordArray[Math.floor(Math.random()*passwordArray.length)];}
      password = password + getRandom(passwordArray)
      }
      var passwordText = document.querySelector("#password");

      passwordText.value = password;
    }
 
}
  

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button. Makes the 'Generate' button clickable.
generateBtn.addEventListener("click", getPasswordOptions);
