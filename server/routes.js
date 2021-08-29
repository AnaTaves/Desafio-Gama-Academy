const express = require('express');
const CandidatoController = require('./controllers/CandidatoController');
const routes = new express.Router();

routes.post('/registrar', CandidatoController.registrar);
routes.get('/', (req, res) => {
    res.status(200).send('Bem-vindo!');
});
module.exports = routes;