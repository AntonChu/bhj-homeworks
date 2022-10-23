const sizeMode = document.getElementsByClassName('font-size');
const book = document.getElementById('book');
const colorText = document.querySelectorAll('.book__control_color .color');
const colorBackground = document.querySelectorAll('.book__control_background .color');

let sizeModeArr = Array.from(sizeMode),
colorTextArr = Array.from(colorText),
colorBackgroundArr = Array.from(colorBackground);

function changeSize(){
    sizeModeArr.forEach(item => {
        if(item.classList.contains('font-size_active')){
            item.classList.remove('font-size_active');
        }
    });

    this.classList.add('font-size_active');

    if(this.classList.contains('font-size_small')){
        book.classList.remove('book_fs-big');
        book.classList.add('book_fs-small');
        return false;
    }

    if(this.classList.contains('font-size_big')){
        book.classList.remove('book_fs-small');
        book.classList.add('book_fs-big');
        return false;
    }

    book.classList.remove('book_fs-big', 'book_fs-small');
    return false;
}

function changeTextColor(){
    colorTextArr.forEach(item => item.classList.remove('color_active'));
    this.classList.add('color_active');

    if(this.classList.contains('text_color_black')){
        book.classList.remove('book_color-gray', 'book_color-whitesmoke');
        book.classList.add('book_color-black');
        return false;
    }else if(this.classList.contains('text_color_gray')){
        book.classList.remove('book_color-black', 'book_color-whitesmoke');
        book.classList.add('book_color-gray');
        return false;
    }else{
        book.classList.remove('book_color-black', 'book_color-gray');
        book.classList.add('book_color-whitesmoke');
        return false;
    }
}

function changeBackgroundColor(){
    colorBackgroundArr.forEach(item => item.classList.remove('color_active'));
    this.classList.add('color_active');

    if(this.classList.contains('bg_color_black')){
        book.classList.remove('book_bg-gray', 'book_bg-whitesmoke');
        book.classList.add('book_bg-black');
        return false;
    }else if(this.classList.contains('bg_color_gray')){
        book.classList.remove('book_bg-black', 'book_bg-whitesmoke');
        book.classList.add('book_bg-gray');
        return false;
    }else{
        book.classList.remove('book_bg-black', 'book_bg-gray');
        book.classList.add('book_bg-whitesmoke');
        return false;
    }
}

sizeModeArr.forEach(element => element.onclick = changeSize);
colorTextArr.forEach(element => element.onclick = changeTextColor);
colorBackgroundArr.forEach(element => element.onclick = changeBackgroundColor);