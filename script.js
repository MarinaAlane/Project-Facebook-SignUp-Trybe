const getInputsLogin = document.querySelectorAll(".loginInput");

function verifyEmpty(x) {
  let count = 0;
  if (x === 0) {
    count = count + 1;
  }
  return count;
}

function signalAlert() {
  alert("Email ou telefone");
}

function loginEmptyAlert(value) {
  if (value === 0 || value === 1) {
    document.getElementById('button-login').addEventListener('click', signalAlert)
  }
}

function alertMissingInfoLogin() {
  const missingInfo = 0;
  for (let index = 0; index < getInputsLogin.length; index += 1) {
    missingInfo += verifyEmpty(getInputsLogin[index]);
  }
  return loginEmptyAlert(missingInfo);
}
