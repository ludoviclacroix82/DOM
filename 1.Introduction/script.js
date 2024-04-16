/*

*/
const title = document.title;
console.log(title);
document.title = "Modifying the DOM";

const body = document.querySelector('body');
body.style.backgroundColor = "#FF69B4";

/**
 * Changement du style BeckgroundColor
 * @param {*} balise -- Element u noued selectionner pour le changemet
 */
function changeBackgroundColor(balise) {
    const arrayBgColor = [];
    const sltElement = document.querySelector(balise);

    for (let i = 0; i < 3; i++){
        const numARandom = Math.floor(Math.random() * 256);
        arrayBgColor.push(numARandom) ;    
    }

    sltElement.style.backgroundColor = "rgb(" + arrayBgColor[0] + "," + arrayBgColor[1] + "," + arrayBgColor[2] + ")";
}

setInterval(() => changeBackgroundColor('body'), 3000);

for (const child of body.children) {
    console.log(child.tagName);
  }
