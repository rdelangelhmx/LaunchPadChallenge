/**
 * @file Validation for JWT Token
 * ----------------------------------
 * @author Rodrigo del Angel <rdelangelhmx@gmail.com>
 * ----------------------------------
 * History
 * @creation 19/Nov/21
 * ----------------------------------
*/

 'use strict';
 const 
    jwt = require('jsonwebtoken'),
    msg = require('../config/messages'),
    config = require('../config/config.json'),
    response = require('../models/responseModel');

 module.exports = (req, res, next) => {
    const authorizationHeaader = req.headers.authorization;
    if (authorizationHeaader) {
        const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
        const options = { expiresIn: config.Auth.TokenDuration, issuer: config.Auth.Issuer };
        const secret = config.Auth.Secret;
        let result;
        try {
            // verify makes sure that the token hasn't expired and has been issued by us
            result = jwt.verify(token, secret, options);
            // Let's pass back the decoded token to the request object
            req.decoded = result;
            // We call next to pass execution to the subsequent middleware
            next();
        } catch (err) {
            // Throw an error just in case anything goes wrong with verification
            console.Error(`Error: ${err}`);
            response.mensaje = msg.NoToken;
            response.exito = false;
            res.status(401).send(response);
            // throw new Error(err);
        }
    } else {
        response.mensaje = msg.NoToken;
        response.exito = false;
        res.status(401).send(response);
    }
};