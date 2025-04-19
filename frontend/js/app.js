// Cargar películas al iniciar
document.addEventListener('DOMContentLoaded', () => {
    loadMovies();
  });
  
  async function loadMovies() {
    try {
      const response = await fetch('/api/movies');
      const movies = await response.json();
      renderMovies(movies);
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  function renderMovies(movies) {
    const tbody = document.getElementById('moviesList');
    tbody.innerHTML = '';
  
    movies.forEach(movie => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${movie.title}</td>
        <td>${movie.year}</td>
        <td>${movie.director_name || 'Desconocido'}</td>
        <td>${movie.rating || '-'}</td>
        <td>
          <button class="btn btn-sm btn-warning" onclick="editMovie(${movie.id})">Editar</button>
          <button class="btn btn-sm btn-danger" onclick="deleteMovie(${movie.id})">Eliminar</button>
        </td>
      `;
      tbody.appendChild(tr);
    });
  }
  
  // Función para mostrar formulario
  function showMovieForm(movie = null) {
    const formHtml = `
      <form onsubmit="handleMovieSubmit(event)" class="card p-3 mb-3">
        <h4>${movie ? 'Editar' : 'Nueva'} Película</h4>
        
        <div class="mb-3">
          <label class="form-label">Título</label>
          <input type="text" class="form-control" name="title" required 
                 value="${movie?.title || ''}">
        </div>
  
        <div class="row mb-3">
          <div class="col">
            <label class="form-label">Año</label>
            <input type="number" class="form-control" name="year" 
                   min="1888" max="${new Date().getFullYear()}" 
                   value="${movie?.year || ''}" required>
          </div>
          
          <div class="col">
            <label class="form-label">Rating (0-10)</label>
            <input type="number" step="0.1" class="form-control" name="rating"
                   min="0" max="10" value="${movie?.rating || ''}">
          </div>
        </div>
  
        <div class="mb-3">
          <label class="form-label">Director</label>
          <select class="form-select" name="director_id" required>
            <option value="">Seleccionar director...</option>
            <!-- Opciones se cargarán dinámicamente -->
          </select>
        </div>
  
        <button type="submit" class="btn btn-success">Guardar</button>
        <button type="button" class="btn btn-secondary" 
                onclick="document.getElementById('movieForm').style.display = 'none'">
          Cancelar
        </button>
      </form>
    `;
  
    const formContainer = document.getElementById('movieForm');
    formContainer.innerHTML = formHtml;
    formContainer.style.display = 'block';
  
    // Cargar directores en el select
    loadDirectorsForSelect();
  }