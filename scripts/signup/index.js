import { API } from '../API/index.js';
import { TogglePassword, formUtils as formClass } from '../utils/form.js';
import { goBack } from '../utils/goBack.js';
import { To } from '../utils/promise.js';
import { ifLoggedIn } from '../utils/verifyLogin.js';

const inputPassword = document.querySelector('#password');
const ImagePasswordIcon = document.querySelector('.eye-icon');
const form = document.querySelector('#SignupForm');
const goBackEl = document.querySelector('.goBack');

goBackEl.addEventListener('click', goBack);
inputPassword.addEventListener('keyup', () => changePassword());

ImagePasswordIcon.addEventListener('click', () => {
  TogglePassword.togglePassword(inputPassword, ImagePasswordIcon);
});

form.addEventListener('submit', event => {
  formUtils.handleSubmit(event);
});


ifLoggedIn(() => window.location.href = '/');

const utils = {
  showErrors(errors) {
    const errorsRef = document.querySelector('.error-message');
    errorsRef.innerHTML = '';
    const classList = errorsRef.classList;
    if (classList.contains('active')) {
      classList.remove('active');
    }
    classList.add('active');
    errors.forEach(obj => {
      const errorRef = document.createElement('p');
      errorRef.textContent = `${obj.name ? obj.name + " :" : ""} ${obj.message}`;
      errorsRef.appendChild(errorRef);
    });

  },
  clearErrors() {
    const errorsRef = document.querySelector('.error-message');
    errorsRef.innerHTML = 'Preencha todos os campos abaixo para começar';
    const classList = errorsRef.classList;
    if (classList.contains('active')) {
      classList.remove('active');
    }
  },
}

const formUtils = {
  getData() {
    const formRef = document.querySelector('#SignupForm');
    const refValues = [];
    const refs = formRef.querySelectorAll('input');
    refs.forEach(ref => {
      refValues.push({
        name: ref.name,
        value: ref.value,
      });
    });
    return refValues;
  },
  async handleSubmit(event) {
    event.preventDefault();
    const errors = formClass.validadeForm("SignupForm");
    if (errors.length > 0) {
      utils.showErrors(errors);
      return;
    }
    utils.clearErrors();
    const dataArray = this.getData();
    const data = {};
    dataArray.reduce((acc, curr) => {
      acc[curr.name] = curr.value;
      return acc;
    }, data);
    await formUtils.fetchAPI(data);
  },
  async fetchAPI(data) {
    const [error] = await To(API.signup(data));
    if (error) {
      utils.showErrors([{
        name: '',
        message: error.message ? error.message : "Erro ao cadastrar"
      }]);
      return;
    }
    window.location.href = '../pages/Signin.html';
  },

}

function changePassword() {
  const modalRef = document.querySelector('.modalPassword');
  const { length, lowerCase, number, specialChar, upperCase } = formClass.validatePassword(inputPassword.value);
  modalRef.innerHTML = `
  <p>
    <img src="../images/icons/${upperCase ? "check" : "close"}.svg" alt="X" />
    <span>Letra maiúscula</span>
  </p>
  <p>
    <img src="../images/icons/${lowerCase ? "check" : "close"}.svg" alt="X" />
    <span>Letra minúscula</span>
  </p>
  <p>
    <img src="../images/icons/${number ? "check" : "close"}.svg" alt="X" />
    <span>Número</span>
  </p>
  <p>
    <img src="../images/icons/${specialChar ? "check" : "close"}.svg" alt="X" />
    <span>Caractere especial</span>
  </p>
  <p>
    <img src="../images/icons/${length ? "check" : "close"}.svg" alt="X" />
    <span>Mais de 8 caracteres</span>
  </p>
  `;
}
