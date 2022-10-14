const tabs = document.getElementsByClassName('tab');
const content = document.getElementsByClassName('tab__content');

const tabArr = Array.from(tabs);
const contentArr = Array.from(content);

tabArr.forEach((element, index) => element.onclick = function(){
    tabArr.forEach(item => item.className = 'tab');
    element.className = 'tab tab_active';
    contentArr.forEach(item => item.className = 'tab__content');
    contentArr[index].className = 'tab__content tab__content_active';
})