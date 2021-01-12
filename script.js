let emptyInputs = 0;

function alertEmailOrPhone() {
  const inputEmail = document.querySelector('#user-email-phone');
  alert(inputEmail.value);
}

const button = document.querySelector('#button-login');
button.addEventListener('click', alertEmailOrPhone);

function buttonSignUp(event) {
  event.preventDefault();
  const form = document.querySelector('.personal-infos');
  const infoClass = document.querySelectorAll('.info');
  const message = document.createElement('p');
  for (let index = 0; index < infoClass.length; index += 1) {
    if (infoClass[index].value === '') {
      emptyInputs += 1;
    }
  }
  if (emptyInputs > 0) {
    form.appendChild(message);
    message.innerText = 'Campos inválidos';
  }
}

const btnSignUp = document.querySelector('#facebook-register');
btnSignUp.addEventListener('click', buttonSignUp);
