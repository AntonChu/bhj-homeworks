const reveal = document.getElementsByClassName('reveal');

let revealArr = Array.from(reveal);

function isVisible(item){
    const {top, bottom} = item.getBoundingClientRect();
    console.log(top, bottom);

    if(bottom > window.innerHeight || top < 0){
        item.className = 'reveal';
        return false;
    }

    item.className = 'reveal reveal_active';
}

// revealArr.forEach(element => {
//     setInterval(() => {
//         isVisible(element);
//     }, 1000);
// })


revealArr.forEach(element => element.onscroll = function(){
    const {top, bottom} = element.getBoundingClientRect();
    console.log(top, bottom);

    if(bottom > window.innerHeight || top < 0){
        element.className = 'reveal';
        return false;
    }

    element.className = 'reveal reveal_active';
})
