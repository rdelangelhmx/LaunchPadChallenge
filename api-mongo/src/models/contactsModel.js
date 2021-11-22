/**
 * @global
 * @file Schema for Contacts
 * ----------------------------------
 * @author Rodrigo del Angel <rdelangelhmx@gmail.com>
 * ----------------------------------
 * History
 * @creation 19/Nov/21
 * ----------------------------------
*/

'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Contacts = new Schema(
{
    id: { type: Number, required: true, index: { unique: true } },
    name: { type: String, required: true },
    email: { type: String, required: true },
    position: { type: String, required: true },
    area: { type: String, required: true },
    status: { type: Number, required: true, default: 0 }, // 0=None  1=Active  2=Bussy
    pinned: { type: Boolean, required: true, default: false },
    active: { type: Boolean, required: true, default: false },
});

const model = mongoose.model('Contacts', Contacts);

module.exports = model;