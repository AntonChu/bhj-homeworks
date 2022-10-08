const holes = document.getElementsByClassName('hole');
const success = document.getElementById('dead');
const fail = document.getElementById('lost');



function click(){
    if(this.className.includes('hole_has-mole')){
        success.textContent++;
    } else{
        fail.textContent++;
    }

    if(+success.textContent === 10){
        alert('Победа');
        success.textContent = 0;
        fail.textContent = 0;
    }else if(+fail.textContent === 5){
        alert('Поражение');
        success.textContent = 0;
        fail.textContent = 0;
    }
}

// holes.onclick = click;
hole1.onclick = click
hole2.onclick = click;
hole3.onclick = click;
hole4.onclick = click;
hole5.onclick = click;
hole6.onclick = click;
hole7.onclick = click;
hole8.onclick = click;
hole9.onclick = click;

