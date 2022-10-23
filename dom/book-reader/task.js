const sizeMode = document.getElementsByClassName('font-size');
const book = document.getElementById('book');

let sizeModeArr = Array.from(sizeMode);

function checkSize(){
    sizeModeArr.forEach(item => {
        if(item.classList.contains('font-size_active')){
            item.classList.remove('font-size_active');
        }
    });

    this.classList.add('font-size_active');

    if(this.classList.contains('font-size_small')){
        book.classList.add('book_fs-small')
        return;
    }

    if(this.classList.contains('font-size_big')){
        book.classList.add('book_fs-big')
        return;
    }

    return;
}


sizeModeArr.forEach(element => element.onclick = checkSize);