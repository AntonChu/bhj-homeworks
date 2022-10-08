const elementDiv = document.getElementById('timer');

function timeFormat(seconds){
    let date = new Date(null);
    date.setSeconds(seconds);
    elementDiv.textContent = date.toISOString().substring(11, 19); 
    return elementDiv.textContent;    
}

function timeToSeconds(stringTime){
    let arr = stringTime.split(':');
    let seconds = arr[0] * 360 + arr[1] * 60 + +arr[2];
    return seconds;
}

let seconds,
stringTime, 
initialTime = elementDiv.textContent,
timerId = null;

timeFormat(initialTime);

timerId = setInterval(() => {
    stringTime = elementDiv.textContent;
    seconds = timeToSeconds(stringTime) - 1;
    timeFormat(seconds);

    if(seconds === 0){
        clearInterval(timerId);
        // alert('Вы победили в конкурсе!');
        location = 'https://meduza.io';
    }

}, 1000);