//Agradecimentos ao Sujeito Programador -> https://www.youtube.com/watch?v=i6t2jaRxos4&t=749s&ab_channel=Sujeitoprogramador
//Alem de inspiração para criar projetos, esse foi um bem legal de fazer!! ;)
let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');

let sizePassword = document.querySelector('#value');
let Password = document.querySelector('#password');

let containerPassword = document.querySelector('#container-password');
let clipText = document.querySelector('#tooltip');

let charset = 'abcdefghijklmopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWYZ123456789@!#_-';
let newPass = '';

sizePassword.innerHTML = sliderElement.value;

slider.oninput = function() {
  sizePassword.innerHTML = this.value;
};

function timeChange() {
  clipText.innerHTML = 'Clique na senha para copiar.';
}
function geradorDeSenha() {
  let pass = '';
  for (let i = 0, n = charset.length; i < sliderElement.value; i += 1) {
    pass += charset.charAt(Math.floor(Math.random() * n));
  }
  containerPassword.classList.remove('hide');
  Password.innerHTML = pass;
  newPass = pass;
}

function copyPassword() {
  navigator.clipboard.writeText(newPass);
  clipText.innerHTML = 'Copied!';
  setTimeout(timeChange, 2000);
}
