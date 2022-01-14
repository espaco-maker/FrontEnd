import { OptionsFetch } from "./form.js";
import { API_URL } from './constants.js';
import { user as User } from "./user.js";

const form = document.querySelector('#Message')
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const arrayElements = form.elements;
  const values = {};
  try {
    for (let i = 0; i < arrayElements.length; i++) {
      const type = arrayElements[i].type;
      const value = arrayElements[i].value;
      const name = arrayElements[i].name;
      if (type === 'submit') {
        continue;
      }

      if (value.trim().length === 0) {
        throw new Error('Preencha todos os campos');
      }
      values[name] = value;
    }
  } catch (error) {
    const divEl = document.querySelector('.error');
    divEl.innerHTML = "";
    const pEl = document.createElement('p');
    pEl.textContent = error.message ? error.message : "";
    divEl.append(pEl);
    return;
  }
  sendMessage(values);
}

async function sendMessage(values = {}) {
  const options = OptionsFetch.getOptions("POST", values);
  try {
    const response = await fetch(`${API_URL}/user/Messages`, options);
    const data = await response.json();
    if (!data.success) {
      throw new Error(data.message);
    }
    const divEl = document.querySelector('.error');
    divEl.innerHTML = "";
    divEl.classList.add('success');
    const pEl = document.createElement('p');
    pEl.textContent = data.message;
    divEl.appendChild(pEl);
  } catch (error) {
    console.log(error);
  }
}

window.addEventListener('load', () => {
  const Name = document.querySelector('#Name');
  const Email = document.querySelector('#Email');
  const user = User.get();
  if (!user) {
    return;
  }
  Name.value = user.FirstName + ' ' + user.LastName;
  Email.value = user.Email;
});