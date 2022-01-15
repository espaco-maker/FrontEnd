import { API } from '../API.js';
import { TogglePassword, formUtils } from '../form.js';

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


function showMessages(messages = [], success = true) {
  const divEl = document.querySelector('.error-message');
  divEl.innerHTML = "";
  const paragraphs = messages.map(message => {
    const pEl = document.createElement('p');
    pEl.textContent = message;
    return pEl;
  });
  divEl.append(...paragraphs);
  if (success) {
    divEl.classList.add('success');
  }
}

async function handleSubmit(event) {
  event.preventDefault();
  const Email = document.querySelector('#email').value;
  const Password = document.querySelector('#password').value;
  const remember = document.querySelector('#remember').checked;
  const errors = formUtils.validadeForm("SigninForm");
  if (errors.length > 0) {
    showMessages(errors, false);
    return;
  }
  const data = {
    Email,
    Password,
    remember
  };
  try {
    const response = await API.signin(data);
    if (!response.message) {
      throw new Error("Erro ao realizar login");
    }
    showMessages(["Login realizado com sucesso"], false);
  } catch (error) {
    showMessages([error.message], false);
  }
}