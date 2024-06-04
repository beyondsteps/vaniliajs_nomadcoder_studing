

// #################################################################

const clock = document.querySelector('#clock');


// #################################################################

// function
function getClock() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = String(date.getSeconds()).padStart(2,"0");

    clock.innerText=`${hours}:${minutes}:${seconds}`
    
}



// main
console.log(getClock())
setInterval(getClock, 1000);