//Agradecimentos ao Sujeito Programador -> https://www.youtube.com/watch?v=i6t2jaRxos4&t=749s&ab_channel=Sujeitoprogramador
//Alem de inspiração para criar projetos, esse foi um bem legal de fazer!! ;)
// let body = document.querySelector('body');
// let all_h2 = document.querySelectorAll('h2');
// let all_span = document.querySelectorAll('span');
// let tooltip = document.querySelector('.tooltip');
// let darkMode = true;

// let sliderElement = document.querySelector('#slider');
// let buttonElement = document.querySelector('#button');
// let sizePassword = document.querySelector('#value');
// let Password = document.querySelector('#password');

// let containerPassword = document.querySelector('#container-password');
// let clipText = document.querySelector('#tooltip');

// let charset = 'abcdefghijklmopqrstuvwyzABCDEFGHIJKLMNOPQRSTUVWYZ123456789@!#_-';
// let newPass = '';

// sizePassword.innerHTML = sliderElement.value;

// slider.oninput = function() {
//   sizePassword.innerHTML = this.value;
// };

// function timeChange() {
//   clipText.innerHTML = 'Clique na senha para copiar.';
// }
// function geradorDeSenha() {
//   let pass = '';
//   for (let i = 0, n = charset.length; i < sliderElement.value; i += 1) {
//     pass += charset.charAt(Math.floor(Math.random() * n));
//   }
//   containerPassword.classList.remove('hide');
//   Password.innerHTML = pass;
//   newPass = pass;
// }

// function copyPassword() {
//   navigator.clipboard.writeText(newPass);
//   clipText.innerHTML = 'Copied!';
//   setTimeout(timeChange, 2000);
// }

// function changeTheme() {
//   darkMode = !darkMode
//   body.style = '#18181b'
//   all_h2.forEach((elmnt)=>{
//     elmnt.style.color = '#fff'
//   });
  
//   all_span.forEach((elmnt)=>{
//     elmnt.style.color = '#fff'
//   });

//   if (darkMode === false) { 
//     body.style.background = 'rgb(190 203 196)'
//     all_h2.forEach((elmnt)=>{
//       elmnt.style.color = '#18181b'
//     });

//     all_span[0].style.color = 'rgb(24 24 27)'
//     all_span[0].style.fontWeight = 'bold'
//     all_span[1].style.color = 'rgb(24 24 27)'
//     all_span[2].style.color = 'rgb(24 24 27)'
//     all_span[2].style.fontWeight = 'bold'
//     all_span[3].style.color = 'rgb(24 24 27)'
//   }

// };


//Logo abaixo esta o codigo do script que gera senhas mais seguras e com fuincionalidades a mais. Projeto de JavaScript de Matheus Battista - Hora de codar | https://www.youtube.com/watch?v=dHPP83T9dAs&ab_channel=MatheusBattisti-HoradeCodar |

console.log('test');