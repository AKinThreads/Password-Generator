const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let buttonOne = document.getElementById('pass1')
let buttonTwo = document.getElementById('pass2')
let randChar

function passwordGenerator(){
    buttonOne.textContent = ""
    buttonTwo.textContent = ""

    for(i=0; i<15; i++){
        randChar = Math.floor(Math.random() * characters.length)
        buttonOne.textContent += characters[randChar]
    }
    for(i=0; i<15; i++){
        randChar = Math.floor(Math.random() * characters.length)
        buttonTwo.textContent += characters[randChar]
    }
}

function copyOne(){
    navigator.clipboard.writeText(buttonOne.textContent)
}

function copyTwo(){
    navigator.clipboard.writeText(buttonTwo.textContent)
}
