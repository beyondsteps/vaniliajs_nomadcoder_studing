const loginForm = document.getElementById('login-form');
const loginbutton = loginForm.querySelector('button');
const logininput=loginForm.querySelector('#idinput')
const greeting = document.querySelector('#greeting');
const Savedusedname=localStorage.getItem('username');



const HIDDEN_CLASS="hidden"; // String 만으로 표현된 value 는 보통 대문자로 표시함 ++별로 중요하지 않은 변수들도 !
const USERNAME_KEY="username";


// ----------------------------------------------------------------
// ----------------------------function----------------------------
// ----------------------------------------------------------------

function loginsubmitted(event) { // login function'
    const username = logininput.value;
    event.preventDefault();
    localStorage.setItem(USERNAME_KEY,username);
    loginForm.classList.add('hidden');
    greetingmsg(username);
}

function greetingmsg(username){ // after login, greeting msg
greeting.innerText=`Hello ${username} `;
greeting.classList.remove(HIDDEN_CLASS)
}

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------


// ----------------------------------------------------------------
// ------------------------------main------------------------------
// ----------------------------------------------------------------


// login 로직
// #################################################################
if (Savedusedname === null) {
    // show login form
    loginForm.classList.remove(HIDDEN_CLASS)
    loginForm.addEventListener("submit",loginsubmitted);
    }
    else{
    // show login greeting
    greetingmsg(Savedusedname);
    }

// ----------------------------------------------------------------
// ----------------------------------------------------------------
// ----------------------------------------------------------------





// #################################################################







///function

// function onLoginSubmit(tomato) {

//     if (Savedusedname == null) {
//         // showing the login form
//         const valueid=logininput.value
//         localStorage.setItem(USERNAME_KEY,valueid);
//     }
//     else if (Savedusedname != null){
//         // show the greeting msg
//         console.log(`ID 정보 : ${USERNAME_KEY}`)
//         console.log(`저장된 계정정보 : ${Savedusedname} `)
//         logined();
//     }
//     tomato.preventDefault();
    
//     //    if (valueid ==="") { 
//     //        alert("please enter your id");
//     //    }else if(valueid.length>15) {
//     //alert('id is too long');
//     //}}
//     }
    
//     loginForm.addEventListener("submit",onLoginSubmit);
    
//     // greeting.addEventListener("click",linkfunction);
//     // function linkfunction(event) {
//     // event.preventDefault();
//     // console.dir(event) ;
//     // alert("asdff");
//     // }
//     function logined(event) {
//         loginForm.classList.add(HIDDEN_CLASS)
//         greeting.classList.remove(HIDDEN_CLASS)
//         greeting.innerText=  `Hello ${Savedusedname}`
//     }
