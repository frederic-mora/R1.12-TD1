
let run = function(){
    let str = document.querySelectorAll('strong');
    str[0].textContent = nom ;
    str[1].textContent = prenom;
    str[2].textContent = age;
};

let button = document.querySelector('input[type=button]');
button.style.marginBottom='2em';

button.addEventListener('click', run);
