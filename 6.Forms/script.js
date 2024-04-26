/*
*/

const firstName = document.querySelector('#firstname');
const age = document.querySelector('#age');
const error = document.createElement("p");

firstName.addEventListener('keyup', event =>{

        const firstNameValue = event.target.value;
        const dispfirstName = document.querySelector('#display-firstname');

        dispfirstName.innerHTML = firstNameValue;
});

age.addEventListener('keyup',event =>{
    const ageValue = event.target.value;
    const aHardTruth = document.querySelector("#a-hard-truth");

    if(parseInt(ageValue) >= 18){}
        aHardTruth.style.visibility = 'visible';
        
});

const pwd = document.querySelector("#pwd");
const pwdConfirm = document.querySelector("#pwd-confirm");

/**
 * verifier si le mdp est de plus de 6 carateres
 */
pwd.addEventListener('keyup', event =>{

    const pwdLength = event.target.value.length;
    const pwdParent = pwd.parentNode;

    if(parseInt(pwdLength) < 6 ){
        event.target.style.borderColor = "red";
        pwdParent.insertBefore(error,pwd);
        error.innerHTML="Choose a password thats at least 6 characters long";
        error.style.color = "red";

    }else{
        event.target.style.borderColor = "";
        pwdParent.removeChild(error);
    }

});

/**
 * compare le mdp et le mdp confirm
 */
pwdConfirm.addEventListener('keyup', event =>{

    const pwdLength = event.target.value.length;
    const pwdParent = pwdConfirm.parentNode;

    if(parseInt(pwdLength) < 6 ){
        event.target.style.borderColor = "red";
        pwdParent.insertBefore(error,pwdConfirm);
        error.innerHTML="enter the same password twice";
        error.style.color = "red";
    }else{
        event.target.style.borderColor = "";
        pwdParent.removeChild(error);
    }
});

/**
 * Switch le dark mode
 */
const toogleMode = document.querySelector('#toggle-darkmode');
const body = document.querySelector("body");

toogleMode.addEventListener("change", event =>{
        body.style.backgroundColor = (event.target.value === "dark") ?"#000":"#fff";
        body.style.color = (event.target.value === "dark") ?"#fff":"#000";
});