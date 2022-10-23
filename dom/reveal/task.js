const reveal = document.getElementsByClassName('reveal');

let revealArr = Array.from(reveal);

function isVisible(item){
    const {top, bottom} = item.getBoundingClientRect();

    if(bottom > window.innerHeight || top < 0){
        item.className = 'reveal';
        return false;
    }

    item.className = 'reveal reveal_active';
}

revealArr.forEach(element => {
    setInterval(() => {
        isVisible(element);
    }, 1000);
})