function checkInput(element) {
  const input = element.children[0];
  const isChecked = input.checked;
  input.checked = !isChecked;

}

function togglePassword() {
  const input = document.getElementById('password');
  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';
  alterIconImage(isPassword);
}

function alterIconImage(isShow) {
  const image = document.querySelector('#eye-icon');
  const src = isShow ? "show" : "hide";
  image.src = `../images/icons/${src}.svg`;
}

const form = document.querySelector('#SigninForm');
form.addEventListener('submit', handleSubmit);


async function handleSubmit(event) {
  event.preventDefault();
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  const remember = document.querySelector('#remember').checked;
  const data = {
    email,
    password,
    remember
  };
  const url = 'http://localhost:8000/user/login';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    if (!json.success) {
      throw new Error(json.error);
    }
    const { user, token } = json.response;
    saveUser(user);
    saveToken(token);
    window.location.href = '../index.html';
  } catch (error) {
    const errorMessage = document.querySelector('#error-message');
    errorMessage.innerHTML = error.message;
  }

}

function saveUser(user) {
  localStorage.setItem('@EspacoMaker:user', JSON.stringify(user));
}

function saveToken(token) {
  localStorage.setItem('@EspacoMaker:token', token);
}