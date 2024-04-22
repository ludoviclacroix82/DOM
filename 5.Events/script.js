const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

var elemSection = document.querySelector('.displayedsquare-wrapper');
var log = document.querySelector('ul');
var body = document.querySelector('body');


//console.log(elemSection);

const clickOnSquare = (e) => {
  console.log(e.target.classList[1])
  console.log(getElapsedTime())

  // creation square
  const div = document.createElement('div');
  elemSection.appendChild(div); 
  div.classList.add('actionsquare');
  div.classList.add(e.target.classList[1]);

  // ajout event log
  const infoLog = document.createElement('li');
  log.appendChild(infoLog);
  infoLog.innerText= "["+ getElapsedTime()+"] Created en new "+e.target.classList[1]+" square.";
}

const actionSquares = document.querySelectorAll('.actionsquare')

for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}


/**
 * Keybord Event
 * Key Space => change background-color
 * key l => delete log
 * key S => delete Square Clone 
 */
window.addEventListener("keydown",(event) => {

  switch (event.key) {
    case " ": 
        changeBackgroundColor();
    break;
    case "l": 
      deleteLog();
    break;
    case "s": 
      deleteSaqueClone();
    break;
  
    default:
    break;
  }
});

/**
 * function permet de changer le background-color du body.
 */
function changeBackgroundColor(){
  const arrayRgb = [];
  
  for (let i = 0; i < 3; i++) {
    
    const randomColor = Math.floor(Math.random()*256);
    arrayRgb.push(randomColor);    
  }

  const colorRgb = "rgb("+arrayRgb[0]+","+arrayRgb[1]+","+arrayRgb[2]+")";
  body.style.backgroundColor = colorRgb;

  // ajout event log
  const infoLog = document.createElement('li');
  log.appendChild(infoLog);
  infoLog.innerText= "["+ getElapsedTime()+"] Change Background-Color : "+ colorRgb;

}
/**
 * Suppresion des log 
 */
function deleteLog(){
  const logList = log.children;
  //console.log(logList);

  while (logList.length) {
    const infoLog = log.querySelector('li');
    infoLog.remove();
  }

}
/**
 * Delete le square Clone
 */
function deleteSaqueClone(){
  const squareList = elemSection.children;
    //console.log(logList);
  while (squareList.length) {
    const suqareClone = elemSection.querySelector('div');
    suqareClone.remove();
  }

}

/**
 * Montre la couleur du Square Clone survoler avec un title
 */

const actionSquaresClone = elemSection.querySelectorAll('.actionsquare');

elemSection.addEventListener('mouseover',event =>{
  //console.log(event.target.nodeName);
  if(event.target.nodeName === 'DIV')
    //alert(event.target.classList[1]);
    event.target.setAttribute('title', event.target.classList[1]);

    elemSection.addEventListener('mouseout',event =>{
      if(event.target.nodeName === 'DIV')
        event.target.removeAttribute('title');  
    });
    
});



