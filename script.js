let errorMsg = 0;

function windowAlert() {
  const inputUser = document.querySelector('#user-email-phone');
  alert(inputUser.value);
}

const btnLogin = document.querySelector('#button-login');
btnLogin.addEventListener('click', windowAlert);

function errorChecker() {
  const input = document.querySelectorAll('.form-register input');
  for (let index = 0; index < input.length - 3; index += 1) {
    if (input[index].value === '') {
      errorMsg += 1;
    }
  }
}

function createElement() {
  if (document.querySelector('.form-register p') === null) {
    const element = document.createElement('p');
    document.querySelector('.form-register').appendChild(element);
  }
}

function validate(event) {
  event.preventDefault();
  const input = document.querySelectorAll('.form-register input');

  errorChecker();
  createElement();

  if (!input[5].checked && !input[6].checked && !input[7].checked) {
    errorMsg += 1;
  }
  if (errorMsg > 0) {
    document.querySelector('.form-register p').innerText = 'Campos inválidos';
    errorMsg = 0;
  } else {
    writeValues();
  }
}

const btnRegister = document.querySelector('#facebook-register');
btnRegister.addEventListener('click', validate);

function customGenderVerify() {
  const genderCustom = document.getElementsByName('gender-custom');
  if (genderCustom[0] !== undefined) {
    genderCustom[0].remove();
  }
}

function customGender(event) {
  const radios = document.querySelector('.radios');
  if (event.target.value === 'Personalizado') {
    customGenderVerify();
    const element = document.createElement('input');
    element.name = 'gender-custom';
    element.id = 'gender-custom';
    element.placeholder = 'Gênero';
    radios.appendChild(element);
  } else {
    customGenderVerify();
  }
}

const radios = document.querySelectorAll('.radios input');
for (let index = 0; index < radios.length; index += 1) {
  radios[index].addEventListener('click', customGender);
}

function writeValues() {
  const hidden = document.querySelector('#hidden');
  hidden.classList.toggle('hidden');
  const input = document.querySelectorAll('.form-register input');
  const writeValues = document.querySelector('.write-values');
  writeValues.innerText = 'Olá,';
  for (let index = 0; index < input.length; index += 1) {
    if (index === 3 || (index > 4 && !input[index].checked)) {
      continue;
    }
    writeValues.innerText += ` ${input[index].value}`;
  }
}
