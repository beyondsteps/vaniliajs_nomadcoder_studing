const loginForm = document.getElementById('login-form');
const loginbutton = loginForm.querySelector('button');
const logininput=loginForm.querySelector('input')
const link = document.querySelector('#greeting');
const Savedusedname=localStorage.getItem('username');



const HIDDEN_CLASS="hidden"; // String 만으로 표현된 value 는 보통 대문자로 표시함 ++별로 중요하지 않은 변수들도 !
const USERNAME_KEY="userName";



function onLoginSubmit(tomato) {

if (Savedusedname == null) {
    tomato.preventDefault();
    const valueid=logininput.value
    localStorage.setItem('username',USERNAME_KEY);

}
else if (Savedusedname != null)
    console.log(`ID 정보 : ${USERNAME_KEY}`)
    console.log(`저장된 계정정보 : ${Savedusedname} `)
    loginForm.classList.add(HIDDEN_CLASS)
    link.classList.remove(HIDDEN_CLASS)
    link.innerText=  `Hello ${USERNAME_KEY}`

    
//    if (valueid ==="") { 
//        alert("please enter your id");
//    }else if(valueid.length>15) {
//alert('id is too long');
//}}
}
loginForm.addEventListener("submit",onLoginSubmit);

// link.addEventListener("click",linkfunction);
// function linkfunction(event) {
// event.preventDefault();
// console.dir(event) ;
// alert("asdff");

// }
function logined(event) {
    loginForm.classList.add(HIDDEN_CLASS)
    link.classList.remove(HIDDEN_CLASS)
    link.innerText=  `Hello ${USERNAME_KEY}`
}
