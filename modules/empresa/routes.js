
const express = require('express');
const router = express.Router();

const Info = require('./info/models');
const Contacto = require('./contacto/models');

const usersBaseRoutes = require('../../routes/baseRoutes');

module.exports = function(app) {
    usersBaseRoutes(router, {
        moduleName: 'empresa/info',
        view_list: 'users_list',
        view_form: 'form',
        model: Info,
        route: '/info',
    });
    usersBaseRoutes(router, {
        moduleName: 'empresa/contacto',
        view_list: 'users_list',
        view_form: 'form',
        model: Contacto,
        route: '/contacto',
    });

    app.use(`/empresa`, router);
}
