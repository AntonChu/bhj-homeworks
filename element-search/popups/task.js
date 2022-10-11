const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const danger = document.getElementsByClassName('btn_danger');
const closer = document.getElementsByClassName('modal__close_times');

modalMain.className = 'modal modal_active';
let closersArr = Array.from(closer);

danger[0].onclick = function(){
    modalMain.className = 'modal';
    modalSuccess.className = 'modal modal_active';
}

closersArr.forEach((element) => {
    element.onclick = function(){
        modalMain.className = 'modal';
        modalSuccess.className = 'modal';
    };
}) 


// const button = document.getElementsByClassName('btn');
// let buttonArr = Array.from(button);

// buttonArr.forEach = ((element) => {
//     element.onclick = function(){
//         alert('dsfgb');
//         modalMain.className = 'modal';
//         modalSuccess.className = 'modal modal_active';
//     };
// })

// Уважаемый преподаватель, пожалуйста, объясните почему такой код не сработал??