'use strict';


const displayTime = document.getElementById('time');
function myTime (){
    let mainTime = new Date();
    let localTime = mainTime.toLocaleTimeString();

    displayTime.textContent = localTime;
}



// myTime();

// setInterval is an in built function that
// takes a function as an argument and a time
// in milliseconds. The function is executed
// and delayed the time specified and then
// execute it again.
setInterval(myTime, 1000);