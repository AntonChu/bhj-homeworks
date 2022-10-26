const chat = document.getElementsByClassName('chat-widget');
const inputText = document.getElementById('chat-widget__input');
const messages = document.getElementsByClassName('chat-widget__messages');

let timeId = null;

function getAnswer(){
    const collection = [
        'Всего плохого',
        'Нам не нужны такие клиенты',
        'Объявляю вас иноагентом',
        'Все не так однозначно',
        'Родитель №2',
        'У вас всего хватает, вы всем обеспечены'
    ]
    
    let index = Math.floor(Math.random() * collection.length);
    return collection[index];
} 

chat[0].onclick = function(){
    chat[0].className = 'chat-widget chat-widget_active';
}

inputText.onfocus = function(){
    timeId = setTimeout(() => {
        let date = new Date().toISOString().substring(11, 16);
        messages[0].innerHTML += `
            <div class="message">
            <div class="message__time">${date}</div>
                <div class="message__text">Че ждем?</div>
            </div>
        `;
        clearTimeout(timeId);
    }, 10000);
}

chat[0].addEventListener('keydown', press => {
    if(press.key === 'Enter' && inputText.checkValidity()){
        let date = new Date().toISOString().substring(11, 16);
        messages[0].innerHTML += `
            <div class="message message_client">
                <div class="message__time">${date}</div>
                <div class="message__text">${inputText.value}</div>
             </div>
        `;
        inputText.value = '';
        document.documentElement.scrollTop;

        let date2 = new Date().toISOString().substring(11, 16);
        messages[0].innerHTML += `
            <div class="message">
            <div class="message__time">${date2}</div>
                <div class="message__text">${getAnswer()}</div>
            </div>
        `;
        document.documentElement.scrollTop;
    }

    clearTimeout(timeId);
})