let keys = document.querySelectorAll('.key');
let button = document.querySelector('.button');
let sign = document.querySelector('.sign');

button.addEventListener('click', function() {
    sign.style.opacity = '0';
    sign.style.zIndex = '2';

})


for (let i = 0; i < keys.length; i++) {
    const key = keys[i],
    note = document.getElementById(key.dataset.note);
    note.currentTime = 0; 
    key.addEventListener('click', playNote);
    window.addEventListener('keydown', function playCode(event){
        if (event.key == key.innerHTML) {
            note.currentTime = 0; 
            key.classList.add('active');
            note.play();
        }
    });
    function playNote(e) {
        let key = e.target;
        key.classList.add('active');
        note.play();
    }
    
    
}



