const dropdown = document.getElementsByClassName('dropdown__value');
const list = document.getElementsByClassName('dropdown__list');
const items = document.getElementsByClassName('dropdown__link'); 

itemsArr = Array.from(items);

dropdown[0].onclick = function(){
    if(list[0].className === 'dropdown__list'){
        list[0].className = 'dropdown__list dropdown__list_active';
    }else{
        list[0].className = 'dropdown__list';
    }
}

itemsArr.forEach(element => element.onclick = function(){
    dropdown[0].textContent = element.textContent;
    list[0].className = 'dropdown__list';
    return false;
})
