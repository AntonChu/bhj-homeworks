const rotatorSet = document.getElementsByClassName('rotator__case');
const rotator = document.getElementsByClassName('rotator');

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

// setInterval(() => {
//     let index = rotatorSetArr.findIndex(element => element.className === 'rotator__case rotator__case_active');
//     rotatorSetArr.forEach(item => item.className = 'rotator__case');

//     if(index === rotatorSetArr.length - 1){
//         index = -1;
//     }

//     rotatorSetArr[++index].className = 'rotator__case rotator__case_active';
//     rotatorSetArr[index].style.color = color();
// }, 1000);


setInterval(() => {
    let element = rotatorSetArr[rotatorSetArr.findIndex(element => element.className === 'rotator__case rotator__case_active')];
    rotatorSetArr.forEach(item => item.className = 'rotator__case');
    console.log(element.textContent);
    console.log(element.firstElementChild.textContent);

    if(element.nextElementSibling){
        element = rotator.firstElementChild;
    }

    rotatorSetArr[++index].className = 'rotator__case rotator__case_active';
    rotatorSetArr[index].style.color = color();
}, 1000);