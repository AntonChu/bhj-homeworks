const rotatorSet = document.getElementsByClassName('rotator__case');

let rotatorSetArr = Array.from(rotatorSet);

function color(){
    const colors = [
        'red',
        'orange',
        'yellow',
        'green',
        'turquoise',
        'blue',
        'purple'
    ],
    index = Math.floor(Math.random() * colors.length);
    return colors[index];
}

setInterval(() => {
    let index = rotatorSetArr.findIndex(element => element.className === 'rotator__case rotator__case_active');
    rotatorSetArr.forEach(item => item.className = 'rotator__case');

    if(index === rotatorSetArr.length - 1){
        index = -1;
    }

    rotatorSetArr[++index].className = 'rotator__case rotator__case_active';
    rotatorSetArr[index].style.color = color();
}, 1000);