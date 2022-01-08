function togglePassword() {
  const input = document.getElementById('password');
  const isPassword = input.type === 'password';
  input.type = isPassword ? 'text' : 'password';
  alterIconImage(isPassword);
}

function alterIconImage(isShow) {
  const image = document.querySelector('.eye-icon');
  const src = isShow ? "show" : "hide";
  image.src = `../images/icons/${src}.svg`;
}