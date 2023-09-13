
let run = function(){
    let div = document.querySelectorAll('div');
    div[0].style.backgroundColor = color1 ;
    div[1].style.backgroundColor = color2 ;
};

let button = document.querySelector('input[type=button]');
button.style.marginBottom='2em';

button.addEventListener('click', run);

let init = function(){
    let div = document.querySelectorAll('div');
    div[0].style.backgroundColor = "#38FFF8" ;
    div[1].style.backgroundColor = "#FFC43B" ;
}();