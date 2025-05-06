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
var apiAPOD = 'https://api.nasa.gov/planetary/apod?api_key=IQbbiCsPrSlNVxGuqyljBrJyxbgqqjK5SfpsvdZI';
// Function to fetch and display NASA APOD
function getAPOD() {
  fetch(apiAPOD)
      .then(function(response) {
          return response.json();
      })
      .then(function(data) {
          var photoTitle = document.getElementById("photoTitle");
          var photoExplanation = document.getElementById("photoExplanation");
          var photoURL = document.getElementById("photoURL");

          if (photoTitle) photoTitle.textContent = data.title;
          if (photoExplanation) photoExplanation.textContent = data.explanation;
          if (photoURL) photoURL.src = data.url;
      })
      .catch(function(error) {
          console.error("Error fetching APOD:", error);
          var apodSection = document.getElementById("apod");
          apodSection.innerHTML = "<p>Error loading APOD. Please try again later.</p>";
      });
}
getAPOD();