const hole1 = document.getElementById('hole1');
const hole2 = document.getElementById('hole2');
const hole3 = document.getElementById('hole3');
const hole4 = document.getElementById('hole4');
const hole5 = document.getElementById('hole5');
const hole6 = document.getElementById('hole6');
const hole7 = document.getElementById('hole7');
const hole8 = document.getElementById('hole8');
const hole9 = document.getElementById('hole9');
const success = document.getElementById('dead');
const fail = document.getElementById('lost')

function click(){
    if(this.className.includes('hole_has-mole')){
        success.textContent++;
    } else{
        fail.textContent++;
    }

    if(+success.textContent === 10){
        alert('Победа');
        location.reload();
    }else if(+fail.textContent === 5){
        alert('Поражение');
        location.reload();
    }
}

hole1.onclick = click;
hole2.onclick = click;
hole3.onclick = click;
hole4.onclick = click;
hole5.onclick = click;
hole6.onclick = click;
hole7.onclick = click;
hole8.onclick = click;
hole9.onclick = click;

