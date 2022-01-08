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
  const errors = validadeForm();
  if (errors.length > 0) {
    alert(errors.join('\n'));
    return;
  }
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
    const errorMessage = document.querySelector('.error-message');
    errorMessage.innerHTML = error.message;
    if (errorMessage.classList.contains('active')) {
      errorMessage.classList.remove('active');
    }
    errorMessage.classList.add('active');
  }

}

function saveUser(user) {
  localStorage.setItem('@EspacoMaker:user', JSON.stringify(user));
}

function saveToken(token) {
  localStorage.setItem('@EspacoMaker:token', token);
}

function validadeForm() {
  const formRef = document.querySelector('#SigninForm');
  const errors = [];
  const refValues = {
    email: formRef.querySelector('#email').value,
    password: formRef.querySelector('#password').value
  };
  const refs = Object.keys(refValues);
  refs.forEach(ref => {
    if (!refValues[ref]) {
      errors.push(`${ref} is required`);
    }
  });
  if (!validateEmail(refValues.email)) {
    errors.push('Invalid email');
  }

  if (!validatePassword(refValues.password)) {
    errors.push('Invalid password');
  }

  return errors;
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return re.test(String(password));
}