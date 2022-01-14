import { API_URL } from '../constants.js';
import { TogglePassword, formUtils, OptionsFetch } from '../form.js';

const checkbox = document.querySelector('.checkboxContainer');
const inputPasswordImage = document.querySelector('.eye-icon');

inputPasswordImage.addEventListener('click', () => {
  const inputPassword = document.querySelector('#password');
  TogglePassword.togglePassword(inputPassword, inputPasswordImage);
});

checkbox.addEventListener('click', () => checkInput(checkbox));

function checkInput(element) {
  const input = element.children[0];
  const isChecked = input.checked;
  input.checked = !isChecked;
}

const form = document.querySelector('#SigninForm');
form.addEventListener('submit', handleSubmit);


async function handleSubmit(event) {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const remember = document.querySelector('#remember').checked;
  const errors = formUtils.validadeForm("SigninForm");
  if (errors.length > 0) {
    alert(errors.join('\n'));
    return;
  }
  const data = {
    email,
    password,
    remember
  };
  const url = `${API_URL}/user/login`;
  const options = OptionsFetch.getOptions('POST', data);
  try {
    if (!navigator.onLine) {
      throw new Error('Sem conexão com a internet');
    }
    const response = await fetch(url, options);
    const json = await response.json();
    if (!json.success) {
      throw new Error(json.error);
    }
    const { user, token } = json.response;
    console.log(user);
    saveUser(user);
    saveToken(token);
    window.location.href = '../index.php';
  } catch (error) {
    const errorMessage = document.querySelector('.error-message');
    formUtils.showErrors(error, errorMessage);
  }

}

function saveUser(user) {
  localStorage.setItem('@EspacoMaker:user', JSON.stringify(user));
}

function saveToken(token) {
  localStorage.setItem('@EspacoMaker:token', token);
}