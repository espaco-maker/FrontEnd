import { API } from '../API/index.js';

addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();
  const target = event.target;
  const email = target.email.value;
  const verifyEmail = verifyEmailInput(email);
  console.log(verifyEmail);
}


async function verifyEmailInput(email) {
  const response = await API.forgetPassword(email)
  console.log(response);
}

function goBack() {
  window.history.back();
}

const goBackPage = document.querySelector('.goBack')
goBackPage.addEventListener('click', goBack)