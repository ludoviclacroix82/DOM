/*
*/
const apprends = ['Denis','Mohamed','Adrien','Ludovic'];
/*apprends.sort();*/
const elemMain = document.querySelector('main');
const elemArtcile = elemMain.querySelector('article');
const elemArtcileTitle = elemArtcile.querySelector('h2');

for (let i = 0; i < apprends.length; i++) {

    const { bgColor, colorLigther } = rgbColor();
    const colortext = (colorLigther >=128 )?"#000":"#fff";
    elemSection = document.createElement('section');
    elemSection.style.backgroundColor = bgColor;   

    /* utilisation insertAdjacentElement */
    /*
    const numRandom = Math.floor(Math.random() * 2);
    console.log(numRandom);

    if(i>0 && numRandom ===0 )
        elemArtcileTitle.insertAdjacentElement('afterend',elemSection);
    else
        elemArtcile.appendChild(elemSection);*/

    const numRandom = Math.floor(Math.random() * elemArtcile.children.length-1);
    console.log(numRandom);

    if(i > 0 )
        elemArtcile.insertBefore(elemSection, elemArtcile.children[numRandom]);
    else
        elemArtcile.appendChild(elemSection);

    elemArtcile.insertBefore(elemArtcileTitle, elemArtcile.children[0]);

    const elemParagraph = document.createElement('p')
    elemSection.appendChild(elemParagraph);    
    const apprendName = document.createTextNode(apprends[i]);
    elemParagraph.appendChild(apprendName);
    elemParagraph.style.color = colortext;   

   console.log(
    apprends[i],
    colorLigther 
    ); 
}

/**
 * Creé une couleur aléatoir et check si celle-ci est claire ou sombre
 *@const colorLigther -- Int:: calcule si celle-ci est claire ou sombre
 *@const color -- couleur en format RGB
 * @returns les 2 const.
 */
function rgbColor(){
    let arrayColor = []
    for (let i = 0; i < 3; i++){
        const numRandom = Math.floor(Math.random() * 256);
        arrayColor.push(numRandom) ;    
    }   
    const colorLigther = (0.3 * arrayColor[0]) + (0.59 * arrayColor[1]) + (0.11 * arrayColor[2]);
    const Color = "rgb(" + arrayColor[0] + "," + arrayColor[1] + "," + arrayColor[2] + ")";

    return { bgColor: Color , colorLigther: colorLigther};
}
