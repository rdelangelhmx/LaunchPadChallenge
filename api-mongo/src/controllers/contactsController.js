/**
 * @file Contacts Controller
 * ----------------------------------
 * @author Rodrigo del Angel <rdelangelhmx@gmail.com>
 * ----------------------------------
 * History
 * @creation 19/Nov/21
 * ----------------------------------
*/

'use strict';
var
contacts = require('../models/contactsModel'),
msg = require('../config/messages'),
response = require('../models/responseModel');
 
exports.list = (req, res) => {
    // req it's filters
    contacts.find({ active: true })
    .exec((err, records) => {
        if (err) {
            response.success = false;
            response.message = `${msg.NoRecords}\n\r${err}`;
            res.status(400).send(response);
        } else {
            response.success = true;
            response.message = msg.ExitoRecords;
            response.data = records;
            res.status(200).send(response);
        }
    });
};

exports.id = (req, res) => {
    contacts.findOne({ id: req.params.id })
    .exec((err, registro) => {
        if (err) {
            response.success = false;
            response.message = `${msg.NoRecords}\n\r${err}`;
            res.status(400).send(response);
        } else {
            response.success = true;
            response.message = msg.ExitoRecords;
            response.data = registro;
            res.status(200).send(response);
        }
    });
};