# Movie and TV Show Management System

## Description
This project is a web-based application for managing a list of movies and TV shows. It allows users to view, add, and manage their favorite titles. The project is divided into two main parts: the backend and the frontend.

## Project Structure
```
README.md
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
    package.json
    register.html
    register.js
    src/
        util.js
```

### Backend
- **movies.db**: Database file for storing movie and TV show data.
- **package.json**: Contains dependencies and scripts for the backend.
- **src/app.js**: Main application logic for the backend.

### Frontend
- **index.html**: Main page for displaying the list of movies and TV shows.
- **index.js**: JavaScript logic for the main page.
- **login.html**: Login page for user authentication.
- **login.js**: JavaScript logic for the login page.
- **register.html**: Registration page for new users.
- **register.js**: JavaScript logic for the registration page.
- **src/util.js**: Utility functions for the frontend.

## Features
- View a list of movies and TV shows.
- Add new titles to the list.
- User authentication (login and registration).

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the backend and frontend directories and install dependencies:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

## Usage
1. Start the backend server:
   ```bash
   cd backend
   node src/app.js
   ```
2. Open the `index.html` file in the frontend directory in a web browser.

## Technologies Used
- **Backend**: Node.js, SQLite
- **Frontend**: HTML, CSS, JavaScript, Axios

## License
This project is licensed under the MIT License.