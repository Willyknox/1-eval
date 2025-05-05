// requierments of dependencies and libraries`
const express = require('express');
const app = express();
app.use(express.json());

const cors = require ('cors');
app.use(cors());

const knex= require('knex');


// Here I connect the database to the knex dependency,  as mentioned in class I useNullAsDefault to avoid errors.
const db = knex({
    client: 'sqlite3',
    connection: {
        filename: "movies.db"
    },
    useNullAsDefault: true
});


//Now I am going to create the interface to interact with the database for which cors is necessary.
//We have to use asyncronous functions to interact with the db however as I hate arrow notation I will use the traditional way.

app.get('/movies', async function (req, res) {
    const movies = await db('contentTitle').select('*').limit(200);
    res.status(200).json(movies);
});

app.post('/movies', async function(req, res){
    await db('contentTitle').insert({
        id: req.body.id,
        titleType: req.body.titleType,
        primaryTitle: req.body.primaryTitle,
        startYear: req.body.startYear,
        endYear: req.body.endYear,
        runtimeMinutes: req.body.runtimeMinutes,
        genres: req.body.genres
    });
    res.status(201).json({ message: 'Movie created' });
});
app.delete('/movies/:id', async function(req, res) {
    const deleted = await db('contentTitle').where({ id: req.params.id }).del();
    if (deleted) {
        res.status(200).json({ message: 'Movie deleted' });
    } else {
        res.status(404).json({ message: 'Movie not found' });
    }
});
app.put('/movies/:id', async function(req, res) {
    const updated = await db('contentTitle')
        .where({ id: req.params.id })
        .update({
            titleType: req.body.titleType,
            primaryTitle: req.body.primaryTitle,
            startYear: req.body.startYear,
            endYear: req.body.endYear,
            runtimeMinutes: req.body.runtimeMinutes,
            genres: req.body.genres
        });
    if (updated) {
        res.status(200).json({ message: 'Movie updated' });
    } else {
        res.status(404).json({ message: 'Movie not found' });
    }
});


app.listen(8082, function () {
    console.log('El backend ha iniciado en el puerto 8082');
});
