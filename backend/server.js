const express = require('express');
const cors = require('cors');
const { body, validationResult } = require('express-validator');
const db = require('./database.js');

const app = express();
app.use(express.json());
app.use(cors());

// Importar rutas
const moviesRouter = require('./routes/movies');
const directorsRouter = require('./routes/directors');

// Configurar rutas
app.use('/api/movies', moviesRouter);
app.use('/api/directors', directorsRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});