import { API } from "./API.js";
import { User } from "./user.js";

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
  try {
    response = await API.sendMessage(values);
    if (response.error) throw new Error("Erro ao enviar mensagem");
    showMessage("Mensagem enviada com sucesso");
  } catch (error) {
    showMessage("Não foi possível enviar a mensagem", false);
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


function showMessage(message, success = true) {
  const paragraph = document.createElement('p');
  paragraph.textContent = message;
  const divEl = document.querySelector('.error');
  divEl.innerHTML = "";
  if (success) {
    divEl.classList.add('success');
  }
  divEl.append(paragraph);
}