//const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");

function onLoginBtnClick(){
   //console.dir(loginInput);
   //console.log("click"); 
   const username = loginInput.value;
    console.log(username);
   if(username===""){
    alert("please write your name");
   }else if(username.length > 15){
    alert("please write user name less than 15 length");
   }

}

function onLoginSubmit(tomato){
    tomato.preventDefault();
    //const username = loginInput.value;
    //console.log(usernae);
    console.log(tomato);
}

loginForm.addEventListener("submit", onLoginSubmit);

loginButton.addEventListener("click", onLoginBtnClick);