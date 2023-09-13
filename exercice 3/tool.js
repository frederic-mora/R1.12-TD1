
let update = function(){
    let spans = document.querySelectorAll('span');
    return function(){
        spans[0].textContent = heures;
        spans[1].textContent = minutes;
        spans[2].textContent = secondes;
        spans[3].textContent = total_en_secondes;
    }
}();

let button = document.querySelector('input[type=button]');
button.style.marginBottom='2em';

button.addEventListener('click', update);