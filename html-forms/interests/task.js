const headCheckbox = document.getElementsByTagName('input');
console.log(headCheckbox);

let headCheckboxArr = Array.from(headCheckbox);
console.log(headCheckboxArr);

function clicked(){

    if(this.closest('li').getElementsByTagName('input').length > 1){
        let checked = this.checked;
        Array.from(this.closest('li').getElementsByTagName('input')).forEach(el => {
            el.checked = checked;
        });
        return;
    }else{
        let checked = this.checked;
        this.checked = checked;
        if(Array.from(this.closest('ul').getElementsByTagName('input')).every(el => el.checked === checked)){
            this.parentElement.parentElement.parentElement.parentElement.getElementsByTagName('input')[0].checked = checked;
            return;
        }else{
            this.parentElement.parentElement.parentElement.parentElement.getElementsByTagName('input')[0].checked = false;
            return;
        }
    }
}

headCheckboxArr.forEach(item => {
    item.addEventListener('change', clicked);
})

