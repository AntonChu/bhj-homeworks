const title = document.getElementById('poll__title');
const answers = document.getElementById('poll__answers');

let xhr = new XMLHttpRequest(); 
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.responseType = 'json'; 
xhr.send();
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4){
        setTitle();
        setAnswers();
        click()
    } 
};

function setTitle(){
    title.innerHTML = xhr.response.data.title;
}

function setAnswers(){
    let arrAnswers = xhr.response.data.answers;
    
    for(let i = 0; i < arrAnswers.length; i++){
        let button = document.createElement('button');
        button.className = 'poll__answer';
        button.textContent = arrAnswers[i];
        answers.appendChild(button);
    };
}

function click(){
    const buttons = document.getElementsByClassName('poll__answer');

    let buttonsArr = Array.from(buttons);
    
    buttonsArr.forEach((el, index) => el.onclick = () => {
        alert('«Спасибо, ваш голос засчитан!»');

        const request = new XMLHttpRequest();
        request.open('POST', 'https://netology-slow-rest.herokuapp.com/poll.php');
        request.responseType = 'json'; 
        request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        request.send(`vote=1&answer=${index}`);    
     
        request.onreadystatechange = function () {
            if(request.readyState === 4){
                console.log(request);
                let statistic = request.response.stat;
                let total = statistic.reduce((acc, el) => el.votes + acc, 0);
                
                for(let i = 0; i < statistic.length; i++){
                    // answers.remove();
                    let statPoint = document.createElement('div');
                    statPoint.textContent = `${statistic[i].answer}: ${(statistic[i].votes / total * 100).toFixed(3)}%`
                    answers.appendChild(statPoint);
                }
            } 
        };

    })
}