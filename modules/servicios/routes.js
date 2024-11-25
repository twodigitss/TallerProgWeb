// routes/userRoutes.js
const express = require('express');
const Lavado = require('./lavado/models');
const Tenido = require('./tenido/models');
const Planchado = require('./planchado/models');

const router = express.Router();

const configbaseRoutes = require('../../routes/baseRoutes');

module.exports = function(app) {
    configbaseRoutes(router, {
        moduleName: 'servicios/lavado',
        view_list: 'list',
        view_form: 'form',
        model: Lavado,
        route: '/lavado',
        title: 'Lavado'
    });
    configbaseRoutes(router, {
        moduleName: 'servicios/tenido',
        view_list: 'list',
        view_form: 'form',
        model: Tenido,
        route: '/tenido',
        title: 'Tenido'
    });
    configbaseRoutes(router, {
        moduleName: 'servicios/planchado',
        view_list: 'list',
        view_form: 'form',
        model: Planchado,
        route: '/planchado',
        title: 'Planchado'
    });

    app.use(`/servicios`, router);
};