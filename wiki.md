# Movie and TV Show Management System - Wiki

## Índice

1. [Descripción General](#descripción-general)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Instalación y Puesta en Marcha](#instalación-y-puesta-en-marcha)
4. [Guía de Uso](#guía-de-uso)
5. [Endpoints de la API](#endpoints-de-la-api)
6. [Gestión de Usuarios](#gestión-de-usuarios)
7. [Preguntas Frecuentes (FAQ)](#preguntas-frecuentes-faq)
8. [Licencia](#licencia)

---

## Descripción General

Este proyecto es una aplicación web para la gestión de una lista de películas y series. Permite a los usuarios visualizar, agregar, editar y eliminar títulos, así como autenticarse mediante un sistema de login sencillo.

---

## Estructura del Proyecto

```
backend/
    movies.db
    package.json
    src/
        app.js
frontend/
    index.html
    index.js
    login.html
    login.js
    register.html
    register.js
    src/
        util.js
README.md
```

- **backend/**: Lógica del servidor y base de datos.
- **frontend/**: Archivos HTML, JS y utilidades para la interfaz de usuario.

---

## Instalación y Puesta en Marcha

1. Clona el repositorio.
2. Instala dependencias en backend y frontend:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```
3. Inicia el servidor backend:
   ```bash
   cd backend
   node src/app.js
   ```
4. Abre `frontend/index.html` en tu navegador.

---

## Guía de Uso

- **Ver títulos:** La página principal muestra la lista de películas y series.
- **Agregar título:** Haz clic en “Registrar Nuevo Título” para acceder al formulario de registro.
- **Editar/Eliminar:** Usa los botones correspondientes en la tabla.
- **Login:** Accede a través de `login.html` con usuario `admin` y contraseña `1234`.

---

## Endpoints de la API

- `GET /movies` — Lista todos los títulos.
- `POST /movies` — Agrega un nuevo título.
- `PUT /movies/:id` — Edita un título existente.
- `DELETE /movies/:id` — Elimina un título.

---

## Gestión de Usuarios

Actualmente, el sistema de login es básico y solo permite el acceso con usuario y contraseña fijos (`admin` / `1234`). No hay registro ni gestión avanzada de usuarios.

---

## Preguntas Frecuentes (FAQ)

**¿Puedo cambiar el usuario y contraseña?**  
Sí, modificando el archivo `login.js` en el frontend.

**¿Dónde se almacena la información?**  
En el archivo `movies.db` usando SQLite.

**¿Puedo desplegarlo en producción?**  
Este proyecto es educativo y requiere mejoras de seguridad para producción.

---

## Licencia

Este proyecto está bajo la licencia MIT.
