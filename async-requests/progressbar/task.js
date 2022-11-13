const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (event) => {
    let formData = new FormData(form);
    let request = new XMLHttpRequest();

    request.upload.onprogress = function(file){
        progress.value = (file.loaded / file.total).toFixed(2);
    }

    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');
    request.send(formData);
    event.preventDefault();
})
