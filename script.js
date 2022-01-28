// alert("Create a secure password.");

// Cast of characters
var uppercase = "ABCDEFGHIJKLMNOPQRSTTUVWXYZ";
var lowercase = "abcdefghilklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()`~_-=+/\|.,<>?;:'[]{}'";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// 1 Click the button
function generatePassword() {
  //console.log("This is the button click")

  var password = "";
  var passwordChar = "";

  //Prompt user for character length
  var length = prompt("Enter the number of characters for your new password. It should be between 8 and 128 characters.");
  // This loop should specify the length of the password
    while (length < 8 || length > 128) {
      length = prompt("Please choose a minimum of 8 and maximum of 128 character.");
    }

// Validate the input characters
    var confirmUppercase = confirm("Do you want to use uppercase letters?")
    var confirmLowercase = confirm("Do you want to use lowercase letters?")
    var confirmNumbers = confirm("Do you want to use numbers?")
    var confirmSymbols = confirm("Do you want to use symbols?")

    if (confirmUppercase) {
      passwordChar += uppercase;
    }

    if (confirmLowercase) {
      passwordChar += lowercase;
    }

    if (confirmNumbers) {
      passwordChar += numbers;
    }

    if (confirmSymbols) {
      passwordChar += symbols;
    }

    if (!confirmUppercase && !confirmLowercase && !confirmNumbers && !confirmSymbols) {
      alert("You must choose one valid character set.")

    }

    // Edited password here twice
    for (var i = 0; i < length; i++) {
      password += passwordChar[Math.floor(Math.random() * passwordChar.length)];
    }


  return password;
};




// Write password to the #password display field
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//*****************************************************************
// // Click the button to generate prompts
// function generatePassword() {
//   //console.log("This is the button click")
//   var password = "";
//   var passwordChar = uppercase + lowercase + number + symbol;

//   //Prompt user for character length
//   var length = prompt("Your password should be between 8 and 128 characters.");
//   // This loop should specify the length of the password
//     while (length < 8 || length > 128) {
//       length = prompt("Please choose a minimum of 8 and maximum of 128 character.");
//     }
//   };


// // 2 Prompt the  for character types
//     var confirmUppercase = confirm("Return uppercase letters?")
//     var confirmLowercase = confirm("Return lowercase letters?")
//     var confirmNumber = confirm("Return number?")
//     var confirmSymbol = confirm("Return symbol?")



// // Validate input

//     if (confirmUppercase) {
//       passwordChar += uppercase;
//     }

//     if (confirmLowercase) {
//       passwordChar += lowercase;
//     }

//     if (confirmNumber) {
//       passwordChar += number;
//     }

//     if (confirmSymbol) {
//       passwordChar += symbol;
//     }

//     if (!confirmUppercase && !confirmLowercase && !confirmNumber && !confirmSymbol) {
//       alert("You must choose at least one valid character set.")

//     }

//     for (var i = 0; i < length; i++) {
//       password += passwordChar[Math.floor(Math.random() * passwordChar.length)];
//     }
  
//   return password;
//   }

//   // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Generate password
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }
  

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);


