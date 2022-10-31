const increase = document.getElementsByClassName('product__quantity-control_inc');
const decrease = document.getElementsByClassName('product__quantity-control_dec');
const btn = document.getElementsByClassName('product__add');

let increaseArr = Array.from(increase);
let decreaseArr = Array.from(decrease);
let btnArr = Array.from(btn);


increaseArr.forEach(el => {
    el.onclick = function(){
        +el.previousElementSibling.innerText++;
    }
})

decreaseArr.forEach(el => {
    el.onclick = function(){
        if(+el.nextElementSibling.innerText <= 1){
            return;
        }
        +el.nextElementSibling.innerText--;
    }
})

// function closerFunc(){
//     closerArr.forEach(el => {
//         el.onclick = function(){
//             el.closest('cart__product').remove();
//         }
//     })
// }

btnArr.forEach(el => {
    el.onclick = function(){
        const basket = document.getElementsByClassName('cart__product');
        let basketArr = Array.from(basket);
        let basketIdArr = basketArr.map(el => el.dataset.id);

        if(basketIdArr.includes(el.closest('.product').dataset.id)){
            let target = basketArr.find(item => item.dataset.id === el.closest('.product').dataset.id);
            target.lastChild.innerText = +target.lastChild.innerText + +el.closest('.product').getElementsByClassName('product__quantity-value')[0].innerText; 
        }else{
            let clone = el.closest('.product').cloneNode(false);
            clone.className = 'cart__product';
            let img = el.closest('.product').getElementsByTagName('img')[0];
            img.className = 'cart__product-image';
            clone.insertAdjacentHTML("beforeEnd", img.outerHTML);
            let innerText = el.closest('.product').getElementsByClassName('product__quantity-value')[0].innerText;
            clone.insertAdjacentHTML('beforeEnd', `<div class="cart__product-count">${innerText}</div>`);
            clone.insertAdjacentHTML('afterBegin', `<div class="close">X</div>`);
            el.closest('body').getElementsByClassName('cart')[0].className = 'cart';
            document.getElementsByClassName('cart__products')[0].insertAdjacentHTML('beforeend', clone.outerHTML);
            // closerFunc();
            let closer = document.getElementsByClassName('close');
            let closerArr = Array.from(closer);
            closerArr.forEach(el => {
                el.onclick = function(){
                    el.closest('.cart__product').remove();
                }
            });
        }
    }
})

// function closerFunc(){
//     closerArr.forEach(el => {
//         el.onclick = function(){
//             el.closest('cart__product').remove();
//         }
//     })
// }