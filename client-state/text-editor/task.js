const editor = document.getElementById('editor');
const cleaner = document.getElementById('btn');

if(localStorage.text){
    editor.value = localStorage.text;
}

editor.addEventListener('keydown', () => {
    localStorage.text = editor.value;
})

cleaner.onclick = function(){
    editor.value = '';
    localStorage.clear();
}