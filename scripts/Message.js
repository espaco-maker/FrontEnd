document.querySelector('.Form').addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const arrayElements = form.elements;
  const values = {};
  for (let i = 0; i < arrayElements.length; i++) {
    if (arrayElements[i].type === 'submit') {
      continue;
    }
    values[arrayElements[i].name] = arrayElements[i].value;
  }
  // submit to server
  const xhr = new XMLHttpRequest();

  xhr.open('POST', 'http://localhost/espaco-maker/api/message.php');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(values));
  xhr.onload = function () {
    if (xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      if (response.success) {
        alert('Mensagem enviada com sucesso!');
        form.reset();
      } else {
        alert('Erro ao enviar mensagem!');
      }
    }
  }
}