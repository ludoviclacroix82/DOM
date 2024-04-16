/*
*/
const elemImportant =  document.querySelectorAll('.important');
for (let i = 0; i < elemImportant.length; i++) {
    elemImportant[i].innerHTML = "This is an important item.";
}

const allImg = document.querySelectorAll('img')
for (let i = 0; i < allImg.length; i++) {
    
    if(allImg[i].className !="important")
        allImg[i].style.display = "none";
}

const paragraph = document.querySelectorAll('p')
for (let i = 0; i < paragraph.length; i++) {

    if(paragraph[i].classList.length > 0){
        console.log(            
            paragraph[i].className+"\n",
            paragraph[i].innerHTML
        );
    }else{
        console.log(
            paragraph[i].innerHTML,           
        );
    }     
}

for (let i = 0; i < paragraph.length; i++) {
    if(paragraph[i].classList.length == 0){
        paragraph[i].style.color = rgbColor();
    }    
}


/**
 * Couleur Random en RGB
 * @returns la couleur en rgb
 */
function rgbColor(){
    let arrayColor = []
    for (let i = 0; i < 3; i++){
        const numRandom = Math.floor(Math.random() * 256);
        arrayColor.push(numRandom) ;    
    }   
   return Color = "rgb(" + arrayColor[0] + "," + arrayColor[1] + "," + arrayColor[2] + ")";
}