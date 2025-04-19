const sqlite3 = require('sqlite3').verbose();

// Crear/conectar a la base de datos
const db = new sqlite3.Database('./database.db', (err) => {
  if (err) console.error(err.message);
  console.log('Conectado a la base de datos SQLite');
});

// Crear tablas
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS directors (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      nationality TEXT
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS movies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      year INTEGER,
      director_id INTEGER,
      rating REAL CHECK(rating BETWEEN 0 AND 10),
      FOREIGN KEY(director_id) REFERENCES directors(id)
    )
  `);
});

module.exports = db;