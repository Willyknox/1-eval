document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const messageDiv = document.getElementById('loginMessage');

  form.addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '1234') {
      messageDiv.textContent = '¡Inicio de sesión exitoso!';
      messageDiv.style.color = 'green';
      window.location.href = 'index.html';
    } else {
      messageDiv.textContent = 'Usuario o contraseña incorrectos.';
      messageDiv.style.color = 'red';
    }
  });
});