const element = document.getElementById('cookie');
const clicks = document.getElementById('clicker__counter');
const speed = document.getElementById('clicker__speed');

const startTime = new Date();

element.onclick = function(){
    element.width = 250;
    clicks.textContent++;
    let finishTime = new Date;
    speed.textContent = ((finishTime - startTime) / 1000 / clicks.textContent).toFixed(3);
    setTimeout(() => {
       element.width = 200; 
    }, 50);
}