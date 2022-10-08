const element = document.getElementById('cookie');
const clicks = document.getElementById('clicker__counter');
const speed = document.getElementById('clicker__speed');

let arr = [];

element.onclick = function(){
    element.width = 250;
    clicks.textContent++;
    arr.push(new Date());
    speed.textContent = ((arr[(arr.length - 1)] - arr[0]) / 1000 / clicks.textContent).toFixed(3);
    setTimeout(() => {
       element.width = 200; 
    }, 50);
}