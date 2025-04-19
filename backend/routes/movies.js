const express = require('express');
const router = express.Router();
const db = require('../database.js');
const { body, validationResult } = require('express-validator');

// Obtener todas las películas con información de director
router.get('/', (req, res) => {
  const sql = `
    SELECT movies.*, directors.name as director_name 
    FROM movies
    LEFT JOIN directors ON movies.director_id = directors.id
  `;
  
  db.all(sql, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Crear película con validaciones
router.post(
  '/',
  [
    body('title').trim().isLength({ min: 2 }).withMessage('Título requerido'),
    body('year').isInt({ min: 1888, max: new Date().getFullYear() }),
    body('director_id').isInt(),
    body('rating').optional().isFloat({ min: 0, max: 10 })
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { title, year, director_id, rating } = req.body;
    db.run(
      'INSERT INTO movies (title, year, director_id, rating) VALUES (?, ?, ?, ?)',
      [title, year, director_id, rating],
      function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: this.lastID });
      }
    );
  }
);

// Resto de operaciones CRUD
module.exports = router;