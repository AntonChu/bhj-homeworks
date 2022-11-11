const loader = document.getElementById('loader');
const items = document.getElementById('items')

let request = new XMLHttpRequest();
request.open('GET', 'https://netology-slow-rest.herokuapp.com');
request.responseType = "json";
request.send();
request.onreadystatechange = function () {
    if(request.readyState === request.DONE){
        loader.className = 'loader';
        getCurencyRatio();
    }
}

function getCurencyRatio(){
    let currencyArr = Object.values(request.response.response.Valute);

    for(let i = 0; i < currencyArr.length; i++){
        let item = document.createElement('div');
        item.className = 'item';

        let code = document.createElement('div');
        code.className = 'item__code';
        code.textContent = `${currencyArr[i].CharCode}`;
        item.appendChild(code);

        let value = document.createElement('div');
        value.className = 'item__value';
        value.textContent = `${currencyArr[i].Value}`;
        item.appendChild(value);

        let currency = document.createElement('div');
        currency.className = 'item__code';
        currency.textContent = 'руб.';
        item.appendChild(currency);
        
        items.appendChild(item);
    }
}