const slides = document.getElementsByClassName('slider__item');
const arrows = document.getElementsByClassName('slider__arrow');
const dots = document.getElementsByClassName('slider__dot');

let slideArr = Array.from(slides);
let arrowArr = Array.from(arrows);
let dotArr = Array.from(dots);
let index;

arrowArr.forEach(element => {
    element.onclick = function(){
        index = slideArr.findIndex(item => item.className.includes('item_active'));
        slideArr.forEach(point => point.className = 'slider__item');
        dotArr.forEach(point => point.className = 'slider__dot');

        if(element.className.includes('slider__arrow_prev')){

            if(index === 0){
                slideArr[slideArr.length - 1].className = 'slider__item slider__item_active';
                dotArr[dotArr.length - 1].className = 'slider__dot slider__dot_active';
                return;
            }else{
                slideArr[--index].className = 'slider__item slider__item_active';
                dotArr[index].className = 'slider__dot slider__dot_active';
                return;
            }
            
        }else{

            if(index === slideArr.length - 1){
                slideArr[0].className = 'slider__item slider__item_active';
                dotArr[0].className = 'slider__dot slider__dot_active';
                return;
            }else{
                slideArr[++index].className = 'slider__item slider__item_active';
                dotArr[index].className = 'slider__dot slider__dot_active';
                return;
            }
        }
    }
})


dotArr.forEach((element, index) => {
    element.onclick = function(){
        slideArr.forEach(point => point.className = 'slider__item');
        dotArr.forEach(point => point.className = 'slider__dot');
        slideArr[index].className = 'slider__item slider__item_active';
        dotArr[index].className = 'slider__dot slider__dot_active';
    }
})