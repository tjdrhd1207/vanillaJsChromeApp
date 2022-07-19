//const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");
const link = document.querySelector("a");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

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
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const usernameThatTheUserWrote = loginInput.value;
    //greeting.innerText = "Hello" + username; 아래와 같음
    localStorage.setItem(USERNAME_KEY,usernameThatTheUserWrote);  //로컬스토리지에 저장
    paintGreetings(usernameThatTheUserWrote);
}

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
    alert("clicked!");
}

loginButton.addEventListener("click", onLoginBtnClick);
link.addEventListener("click", handleLinkClick);

function paintGreetings(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);

}

const savedUsername = localStorage.getItem(USERNAME_KEY);

//console.log(savedUsername);

if(savedUsername == null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);

}else{
    //show the greeting
    paintGreetings(savedUsername);
    }
