const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordElOne = document.querySelector("#password-el-one")
let passwordElTwo = document.querySelector("#password-el-two")


//loop through the array
//randomly generate index number
//generate character with index number
function clearPassword() {
    passwordElOne.textContent = ""
    passwordElTwo.textContent = ""
    generatePassword()
}

function generatePassword() {
    for (let i = 0; i < 15; i++) {
     let = passwordOneIndex = Math.floor( Math.random() * characters.length )
     let = passwordTwoIndex = Math.floor( Math.random() * characters.length )
        
    passwordElOne.textContent += characters[passwordOneIndex]
    passwordElTwo.textContent += characters[passwordTwoIndex]
    }
}

// function copyToClipboard() {
//     passwordElOne.select()
//     navigator.clipboard.writeText(passwordElOne.value)
//     alert("Password copied" + passwordElOne.value)
// }
// Cannot get copy function to work