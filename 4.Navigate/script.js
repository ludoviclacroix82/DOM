/*
*/

const elemSection = document.querySelector('section');
const elemPuce = elemSection.querySelector('ol');

const elemLi = elemPuce.children;
const elemLiLenght = elemLi.length;

//console.log(elemLi);

elemPuce.insertBefore(elemLi[elemLiLenght-1],elemLi[0]);


const elemBody = document.querySelector('body');
const elemTitle = elemBody.querySelectorAll('H2');
const tempArray = [];

for (let i = 0; i < elemTitle.length; i++) {
    tempArray.push(elemTitle[i].innerHTML)
}

elemTitle[1].innerHTML = tempArray[2];
elemTitle[2].innerHTML = tempArray[1];

//console.log(tempArray);

const elemSectionAll = document.querySelectorAll('section');
elemSectionAll[elemSectionAll.length-1].remove();

