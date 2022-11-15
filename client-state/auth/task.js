const form = document.getElementById('signin__form');
const signin = document.getElementById('signin');
const welcome = document.getElementById('welcome');
const user = document.getElementById('user_id');
const exit = document.getElementById('exit__btn');
const control = document.getElementsByClassName('control');

let controlArr = Array.from(control);

form.addEventListener('submit', (event) => {
    const formData = new FormData(form);
    const request = new XMLHttpRequest();
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/auth.php');
    request.send(formData);
   
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status === 200){
            if(localStorage.id){
                welcome.className = 'welcome welcome_active';
                user.textContent = localStorage.id;
                signin.className = 'signin';
                return;
            }

            if(!(JSON.parse(request.response)).success){
                alert('Неверный логин/пароль');
            }else{
                localStorage.setItem('id', `${(JSON.parse(request.response)).user_id}`); 
                welcome.className = 'welcome welcome_active';
                user.textContent = (JSON.parse(request.response)).user_id
                signin.className = 'signin';
            }
        }
        controlArr.forEach(el => el.value = '');
    };
    event.preventDefault();
})

exit.onclick = function(){
    localStorage.clear();
    welcome.className = 'welcome';
    signin.className = 'signin signin_active';
}