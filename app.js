//const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const loginForm = document.querySelector("#login-form");
const greeting = document.querySelector("#greeting");

const link = document.querySelector("a");
const HIDDEN_CLASSNAME = "hidden";

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
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //greeting.innerText = "Hello" + username; 아래와 같음
    localStorage.setItem("username",username);  //로컬스토리지에 저장
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

function handleLinkClick(event){
    event.preventDefault();
    console.dir(event);
    alert("clicked!");
}

loginForm.addEventListener("submit", onLoginSubmit);

loginButton.addEventListener("click", onLoginBtnClick);
link.addEventListener("click", handleLinkClick);