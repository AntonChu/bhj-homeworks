const headCheckbox = document.getElementsByClassName('interest__check');

let headCheckboxArr = Array.from(headCheckbox);

let clicked = () => {

    console.log(this.className)

    if(this.className === "interest__check"){
        this.checked = !this.checked;
        // установить всем детям такую же позицию как у родителя
        Array.from(this.childNodes).forEach(el => el.checked === this.checked);
    }else{
        this.checked = !this.checked;
        return;
    }
}

headCheckboxArr.forEach(item => {
    item.addEventListener('change', clicked);
})