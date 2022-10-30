const btn = document.getElementById('tasks__add');
const tasks = document.getElementById('tasks__list');
const input = document.getElementsByTagName('input');

// let closerArr = [];
let result = '';

input[0].addEventListener('input', () => {
    result = input[0].value;
    return;
})

let enter = () => {
    tasks.insertAdjacentHTML('beforeend', this.element);
}

btn.addEventListener('click', (e) => {
    e.preventDefault();
    if(result.length){
        input[0].value = '';
        this.element = `
            <div class="task">
                <div class="task__title">
                    ${result}
                </div>
                <a href="#" class="task__remove">&times;</a>
            </div>
        `;
        enter();
        // closerArr = Array.from(document.getElementsByClassName('task__remove'));
        Array.from(document.getElementsByClassName('task__remove')).forEach(el => {
            el.onclick = () => {
                el.closest('.task').remove();
                return false;
            }
        });
    }
})

// closerArr.forEach(el => {
//     el.onclick = () => {
//         el.closest('.task').remove();
//         return false;
//     }
// })
