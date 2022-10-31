const reveal = document.getElementsByClassName('reveal');

let revealArr = Array.from(reveal);

let isVisible = () => {
    revealArr.forEach(item => {
        const {top, bottom} = item.getBoundingClientRect();

        if(bottom > window.innerHeight || top < 0){
            item.className = 'reveal';
            return false;
        }

        item.className = 'reveal reveal_active';
    })
}

document.addEventListener('scroll', isVisible);