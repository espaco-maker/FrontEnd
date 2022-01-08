const form = document.querySelector('#SignupForm');
form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const errors = validadeForm();
  if (errors.length > 0) {
    showErrors(errors);
    return;
  }
  clearErrors();
  const dataArray = getDataValues();
  const dataObject = {};
  dataArray.forEach(data => {
    dataObject[data.name] = data.value;
  });
  await fetchAPI(dataArray);
}

async function fetchAPI(data) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  const url = 'http://localhost:8000/user/singup';
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    if (!json.success) {
      showErrors([{
        name: '',
        message: json.message
      }])
      return;
    }
    window.location.href = './pages/success.html';
  } catch (error) {
    console.error(error);
  }
}

function getDataValues() {
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
}

function validadeForm() {
  const formRef = document.querySelector('#SignupForm');
  const errors = [];
  const refValues = [];
  const refs = formRef.querySelectorAll('input');
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  refs.forEach(ref => {
    const key = ref.name;
    const value = ref.value;
    refValues.push({
      [key]: value
    });
  });

  refValues.forEach(ref => {
    const key = Object.keys(ref)[0];
    const value = ref[key];
    if (String(value).trim().length === 0) {
      errors.push({
        name: key,
        message: 'Campo obrigatório'
      });
    }
  });

  if (!validateEmail(email)) {
    errors.push({
      name: 'email',
      message: 'Email inválido'
    });
  }

  if (!validatePassword(password)) {
    errors.push({
      name: 'password',
      message: getMessageErrorsPassoword(password)
    });
  }


  return errors;
}

function showErrors(errors) {
  const errorsRef = document.querySelector('.error-message');
  errorsRef.innerHTML = '';
  const classList = errorsRef.classList;
  if (classList.contains('active')) {
    classList.remove('active');
  }
  classList.add('active');
  errors.forEach(obj => {
    const errorRef = document.createElement('p');
    errorRef.innerHTML = `${obj.name}: ${obj.message}`;
    errorsRef.appendChild(errorRef);
  });
}

function clearErrors() {
  const errorsRef = document.querySelector('.error-message');
  errorsRef.innerHTML = 'Preencha todos os campos abaixo para começar';
  const classList = errorsRef.classList;
  if (classList.contains('active')) {
    classList.remove('active');
  }
}

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
  const errors = {
    upperCase: false,
    lowerCase: false,
    number: false,
    specialChar: false,
    length: false,
  };
  if (password.match(/[A-Z]/g)) errors.upperCase = true;
  if (password.match(/[a-z]/g)) errors.lowerCase = true;
  if (password.match(/\d/g)) errors.number = true;
  if (password.match(/[!@#$%^&*()_+?|[\]{};:><,'"]/g))
    errors.specialChar = true;
  if (password.length > 8) errors.length = true;
  const { upperCase, lowerCase, number, specialChar, length } = errors;
  return {
    upperCase,
    lowerCase,
    number,
    specialChar,
    length,
  };
}

function getMessageErrorsPassoword(password) {
  const errors = validatePassword(password);
  if (!errors.upperCase) {
    return 'Sua senha precisa ter pelo menos uma letra maiúscula.';
  }
  if (!errors.lowerCase) {
    return 'Sua senha precisa ter pelo menos uma letra minuscula.';
  }
  if (!errors.number) {
    return 'Sua senha precisa ter pelo menos um número.';
  }
  if (!errors.specialChar) {
    return 'Sua senha precisa ter pelo menos um caractere especial.';
  }
  if (!errors.length) return 'Sua senha precisa ter mais de 8 caracteres.';
  return '';
}

function changePassword() {
  const passwordRef = document.querySelector('#password').value;
  const modalRef = document.querySelector('.modalPassword');
  const { length, lowerCase, number, specialChar, upperCase } = validatePassword(passwordRef);
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