export const TogglePassword = {
  togglePassword(input, image) {
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    this.alterIconImage(isPassword, image);
  },

  alterIconImage(isShow, image) {
    const src = isShow ? "show" : "hide";
    image.src = `../images/icons/${src}.svg`;
  }
}

export const formUtils = {
  validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },

  validatePassword(password) {
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
  },

  getMessageErrorsPassoword(password) {
    const errors = this.validatePassword(password);
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
  },

  validadeForm(id) {
    const formRef = document.querySelector(`#${id}`);
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

    if (!this.validateEmail(email)) {
      errors.push({
        name: 'email',
        message: 'Email inválido'
      });
    }

    if (!this.validatePassword(password)) {
      errors.push({
        name: 'password',
        message: this.getMessageErrorsPassoword(password)
      });
    }


    return errors;
  },

  showErrors(error = {
    message: '',
  },
    element) {
    const errorMessage = element;
    errorMessage.textContent = error.message ? error.message : "Erro ao realizar login";
    if (errorMessage.classList.contains('active')) {
      errorMessage.classList.remove('active');
    }
    errorMessage.classList.add('active');
  }
}