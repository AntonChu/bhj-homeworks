const modal = document.getElementById('subscribe-modal');
const closer = document.getElementsByClassName('modal__close');

if(!document.cookie){
    setTimeout(() => {
        modal.className = 'modal modal_active';
    }, 2000);
}

closer[0].onclick = function(){
    document.cookie = "closed=true";
    modal.className = 'modal';
}