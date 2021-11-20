/**
 * @file Clients Routes
 * ----------------------------------
 * @author Rodrigo del Angel <rdelangelhmx@gmail.com>
 * ----------------------------------
 * History
 * @creation 19/Nov/21
 * ----------------------------------
*/

'use strict';

const
controller = require('../controllers/contactsController');
//authenticateJWT = require('../config/validateToken'); if add security token
 
module.exports = (app) => {
    // get List 
    app.route('/contactsAll')
        .get(controller.list);
//        .get(authenticateJWT, apiController.list);  if add security token
    // get Record by id
    app.route('/contactById/:id')
        .get(controller.id);
//        .get(authenticateJWT, apiController.id); if add security token
};