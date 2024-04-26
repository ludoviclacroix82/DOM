const elemUl = document.querySelector("ul");
let listLi = elemUl.childNodes;

let listTemp = Array.from(listLi);

for (const list of listLi) {

    for (let i = 1; i < listTemp.length-1; i++) {
        
        if(list.nodeType === 1){

            if(list.innerHTML === "Fast and Furious"){
                list.classList.add('important');
                elemUl.prepend(list);
                
                //console.log(list);
            }     
            /*if(list.innerHTML.isEqualNode(listTemp[i].innerHTML) != true)
                elemUl.remove(list);*/
               //console.log(listTemp[i].innerHTML+"=="+list.innerHTML); 
        }   
    }   
    list.addEventListener('click', event =>{

        if(list.innerHTML === "Fast and Furious")
            alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
        else    
            alert(event.target.innerHTML);
    });

}

const elemDiv = document.createElement('div')
elemUl.parentNode.insertBefore(elemDiv,elemUl);
const elemSelect = document.createElement('select');
elemDiv.appendChild(elemSelect);

const elemOption = document.createElement('option');
elemSelect.appendChild(elemOption);
elemOption.innerText="all";

const elemOption1 = document.createElement('option');
elemSelect.appendChild(elemOption1);
elemOption1.innerText="important franchises";

const elemOption2 = document.createElement('option');
elemSelect.appendChild(elemOption2);
elemOption2.innerText="normal franchises";

elemSelect.addEventListener('change',event =>{
    const listeLiChange = document.querySelectorAll('li');
    const select = event.target.selectedIndex;

    for (const listChange of listeLiChange) {

        if(event.target.value == "normal franchises"){
            listChange.style.visibility = (listChange.classList.contains("important"))?"hidden":"visibility";
            console.log(listChange.className == "important");       

        }else if(event.target.value == "important franchises"){
            listChange.style.visibility = (listChange.classList.contains("important"))?"visbility":"hidden";    
            console.log(listChange.classList == "important");       

        }else{
            listChange.style.visibility ="visibility";
        }
    }
});
