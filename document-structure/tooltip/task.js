const links = document.getElementsByClassName('has-tooltip');

let linksArr = Array.from(links);

linksArr.forEach(el => {
    let promt = document.createElement('div');
    promt.className = 'tooltip';
    promt.textContent = el.title;
    el.insertAdjacentElement('afterend', promt);
})

document.addEventListener('scroll', clean);

function clean(){
    if(document.getElementsByClassName('tooltip_active').length){
        let promts = document.getElementsByClassName('tooltip_active');
        promts[0].className = 'tooltip';
    }
}

function position(element){
    let heigth = document.documentElement.clientHeight;
    let {top, left} = element.getBoundingClientRect();
    if(top + 100 < heigth){
        element.nextElementSibling.style = `left: ${left}px; top: ${top + 20}px`;
    }else{
        element.nextElementSibling.style = `left: ${left}px; top: ${top - 30}px`;
    }
}

linksArr.forEach(element => {
    element.onclick = () => {
        clean();
        element.nextElementSibling.classList.add('tooltip_active');
        position(element);
        return false;
    };
});
