const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (click) => {
    let formData = new FormData(form);
    let request = new XMLHttpRequest();
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    
    request.addEventListener('readystatechange', function(){

        if(this.readyState === request.OPENED){
            progress.value = 0.25;  
        }else if(this.readyState === request.HEADERS_RECEIVED){
            progress.value = 0.5;  
        }else if(this.readyState === request.LOADING){
            progress.value = 0.75;  
        }else if(this.readyState === request.DONE){
            progress.value = 1;  
        }
    })

    request.send(formData);
    click.preventDefault();
})