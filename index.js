const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const characterNoSymbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const characterNoNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]
const characterAlphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
let passwordElOne = document.querySelector("#password-el-one")
let passwordElTwo = document.querySelector("#password-el-two")
let symbolsCheck = document.querySelector("#symbols")
let numbersCheck = document.querySelector("#numbers")
let passwordLengthSlide = document.querySelector("#password-length-slide")
let passwordLengthnum = document.querySelector("#password-length-num")

passwordLengthSlide.addEventListener("input" , syncPasswordLength)
passwordLengthnum.addEventListener("input" , syncPasswordLength)

function syncPasswordLength(e) {
  let value = e.target.value
  passwordLengthSlide.value = value
  passwordLengthnum.value = value
}

//loop through the array
//randomly generate index number
//generate character with index number



function generatePasswordFull() {
  for (let i = 0; i < passwordLengthnum.value; i++) {
   let = passwordOneIndex = Math.floor( Math.random() * characters.length )
   let = passwordTwoIndex = Math.floor( Math.random() * characters.length )
      
  passwordElOne.textContent += characters[passwordOneIndex]
  passwordElTwo.textContent += characters[passwordTwoIndex]
  }
}
function generatePasswordNoSymbols() {
  for (let i = 0; i < passwordLengthnum.value; i++) {
   let = passwordOneIndex = Math.floor( Math.random() * characterNoSymbols.length )
   let = passwordTwoIndex = Math.floor( Math.random() * characterNoSymbols.length )
      
  passwordElOne.textContent += characterNoSymbols[passwordOneIndex]
  passwordElTwo.textContent += characterNoSymbols[passwordTwoIndex]
  }
}
function generatePasswordNoNumbers() {
  for (let i = 0; i < passwordLengthnum.value; i++) {
   let = passwordOneIndex = Math.floor( Math.random() * characterNoNumbers.length )
   let = passwordTwoIndex = Math.floor( Math.random() * characterNoNumbers.length )
      
  passwordElOne.textContent += characterNoNumbers[passwordOneIndex]
  passwordElTwo.textContent += characterNoNumbers[passwordTwoIndex]
  }
}

function generatePasswordAlphabet() {
  for (let i = 0; i < passwordLengthnum.value; i++) {
   let = passwordOneIndex = Math.floor( Math.random() * characterAlphabet.length )
   let = passwordTwoIndex = Math.floor( Math.random() * characterAlphabet.length )
      
  passwordElOne.textContent += characterAlphabet[passwordOneIndex]
  passwordElTwo.textContent += characterAlphabet[passwordTwoIndex]
  }
}


function clearPassword() {
  passwordElOne.textContent = ""
  passwordElTwo.textContent = ""
  generatePassword()
}

function generatePassword() {
  if (numbersCheck.checked === false && symbolsCheck.checked === true) {
    generatePasswordNoNumbers()
  } else if (numbersCheck.checked === true && symbolsCheck.checked === false) {
    generatePasswordNoSymbols() 
  } else if (numbersCheck.checked === false && symbolsCheck.checked === false) {
    generatePasswordAlphabet()
  } else  {
    generatePasswordFull()
  }
}

// function copyToClipboard() {
//     passwordElOne.select()
//     navigator.clipboard.writeText(passwordElOne.value)
//     alert("Password copied" + passwordElOne.value)
// }
// Cannot get copy function to work