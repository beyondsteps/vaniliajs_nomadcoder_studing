const tdform = document.querySelector('#todo-form');
const tdlist = document.querySelector('#todo-list');
const tdvalue = document.querySelector('#todo-form input');
let toDos = [];
const toDos_KEY = "toDos";


// ----------------------------------------------------------------
// ----------------------------------------------------------------
// Main function

tdform.addEventListener('submit', tdsubmitf)
const savetodos = localStorage.getItem(toDos_KEY);
if (savetodos !== null) {
    todos=JSON.parse(savetodos);
    todos.forEach(painttodo)
}



// ----------------------------------------------------------------
// ----------------------------------------------------------------
// function
function savetodo(){
    
    localStorage.setItem(toDos,JSON.stringify(toDos))
}


function tdsubmitf(event) {
    event.preventDefault();
    const tdnew=tdvalue.value
     painttodo(tdnew);    
    // savetodo();
    tdvalue.value="";

}



function painttodo(tdnew){
    // todo 객체 구현
    const liList=document.createElement('li');
    const spanList=document.createElement('span');
    const buttonList=document.createElement('button');

    spanList.innerText=tdnew;
    buttonList.innerText="❌";

    buttonList.addEventListener('click', tdRemoveFunction);

// 객체를 만든 후 추가하는 것은 맨 마지막에 한다
    liList.appendChild(spanList);
    liList.appendChild(buttonList);
    
    //ul 에 위 list span 형식으로 추가
    tdlist.appendChild(liList);
    //toDOs Array 에 순차적으로 저장
    const newTodo = {"id" : newDate() , "data" : tdnew}
    toDos.push(newTodo);
    localStorage.setItem(toDos_KEY,JSON.stringify(toDos));
}
//to-do remove button 구현
function tdRemoveFunction(event){
    event.preventDefault();
    console.log(`removing span ${tdvalue}`)
    const liList=event.target.parentElement;
    liList.remove();


}