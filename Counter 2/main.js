const valor = document.getElementById('value');
const aumentar = document.getElementById('increase');
const diminuir = document.getElementById('decrease');
const resetar = document.getElementById('reset');

let count = 0;

aumentar.addEventListener('click', function(event) {
    count++;
    valor.textContent = count;
});

reset.addEventListener('click', function(event) {
    count = 0
    valor.textContent = count;
});

diminuir.addEventListener('click', function(event) {
    count--;
    valor.textContent = count;
});