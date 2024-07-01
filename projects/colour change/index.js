
function changeColor() {
    const letters = 'ABCDEF0123456789' 
let hexcode = '#'

for (let i = 0; i < 6; i++) {
    let randomIndex = Math.floor(Math.random() * 15)
    hexcode += letters[randomIndex]
}
console.log(hexcode)
document.getElementById("colorValue").innerHTML = hexcode

document.querySelector('body').style.backgroundColor = hexcode
}
