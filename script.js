var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let chara = ["!", "#", "/", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];
  var allChar = [];
  var guaranteedChar = [];
  let password = [];

  var passwordText = document.querySelector("#password");


  var numberChara = parseInt(prompt("How many characters do you want (8 to 128)?"));
  
  if(isNaN(numberChara)) {
    alert("Please choose a number between 8 and 128.")
    return;
  }
  console.log(numberChara);
    if (numberChara < 8 || numberChara > 128) {
      alert("Please choose a number between 8 and 128.")
      return;
    }

  var confirmUpper = confirm("Do you want to use upper case letters?");
  var confirmLower = confirm("Do you want to use lower case letters?");
  var confirmNumber = confirm("Do you want to use numbers?");
  var confirmSpecial = confirm("Do you want to use special characters?");

  if (confirmUpper) {
    allChar = allChar.concat(upper)
    guaranteedChar.push(pickRandom(upper));
  }

  if (confirmLower) {
    allChar = allChar.concat(lower)
    guaranteedChar.push(pickRandom(lower));
  }

  if (confirmNumber) {
    allChar = allChar.concat(number)
    guaranteedChar.push(pickRandom(number));
    }

  if (confirmSpecial) {
    allChar = allChar.concat(chara)
    guaranteedChar.push(pickRandom(chara) );
  }

  for (var i = 0; i < numberChara; i++) {
    // var num = Math.floor(Math.random() * upper.length);
    // password = password + chara[num];
    password.push(pickRandom(allChar));
    

}
  for (let i = 0; i < guaranteedChar.length; i++) {
    password[i] = guaranteedChar[i];

  }
  passwordText.value = password.join("");
  console.log(guaranteedChar, password);
}
function pickRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

