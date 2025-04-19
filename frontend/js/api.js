// Operaciones CRUD para películas
async function createMovie(data) {
    const response = await fetch('/api/movies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  }
  
  async function updateMovie(id, data) {
    const response = await fetch(`/api/movies/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  }
  
  async function deleteMovie(id) {
    if (confirm('¿Estás seguro de eliminar esta película?')) {
      await fetch(`/api/movies/${id}`, { method: 'DELETE' });
      loadMovies(); // Recargar listado
    }
  }
  
  // Función para manejar el envío del formulario
  async function handleMovieSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
    // Convertir tipos numéricos
    data.year = parseInt(data.year);
    data.rating = data.rating ? parseFloat(data.rating) : null;
    data.director_id = parseInt(data.director_id);
  
    try {
      if (data.id) {
        await updateMovie(data.id, data);
      } else {
        await createMovie(data);
      }
      loadMovies(); // Recargar listado
      document.getElementById('movieForm').style.display = 'none';
    } catch (error) {
      console.error('Error:', error);
      alert('Error al guardar: ' + error.message);
    }
  }