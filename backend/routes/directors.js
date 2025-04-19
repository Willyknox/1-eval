const express = require('express');
const router = express.Router();
const db = require('../database.js');
const { body, validationResult } = require('express-validator');

// Obtener todos los directores
router.get('/', (req, res) => {
  db.all('SELECT * FROM directors', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// Crear nuevo director (con validación)
router.post(
  '/',
  [
    body('name').trim().isLength({ min: 3 }).withMessage('Nombre mínimo 3 caracteres'),
    body('nationality').optional().trim()
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, nationality } = req.body;
    db.run(
      'INSERT INTO directors (name, nationality) VALUES (?, ?)',
      [name, nationality],
      function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ id: this.lastID });
      }
    );
  }
);

// Rutas PUT y DELETE (similares)
module.exports = router;