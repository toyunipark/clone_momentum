const clockContainer=document.querySelector(".js-clock"),
    clockTitle=clockContainer.querySelector("h1");


function getTime(){
    const date=new Date();
    var hour=date.getHours();
    hours = hour % 12;
    const minutes=date.getMinutes();
    const seconds=date.getSeconds();
    clockTitle.innerText
    =`${hour>12? `PM`:`AM`}  ${hours<10? `0${hours}`:hours}:${minutes<10?`0${minutes}`:minutes}:${seconds<10 ?`0${seconds}`: seconds}`;
}


function init(){
    getTime();
    setInterval(getTime, 1000);
}

init();



