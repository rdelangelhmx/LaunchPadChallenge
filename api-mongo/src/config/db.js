/**
 * @file data base connection
 * ----------------------------------
 * @author Rodrigo Del Angel <rdelangelhmx@gmail.com>
 * ----------------------------------
 * History
 * @creation 08-nov-2021
 */
 'use strict';
 const
     config = require('./config.json'),
     MONGO_USERNAME = config.DB.UserName,
     MONGO_PASSWORD = Buffer.from(config.DB.Password, 'base64').toString(),
     MONGO_HOSTNAME = config.DB.HostName,
     MONGO_DB = config.DB.DataBase,
     mongoose = require('mongoose');
 // Get Mongoose to use the global promise library
 mongoose.Promise = global.Promise;
 // Connect to Database
 module.exports = async () => {
     try {
         var con = await mongoose.connect(`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/${MONGO_DB}?retryWrites=true&w=majority`, { 
         useNewUrlParser: true,
         useUnifiedTopology: true
     });
         console.log(`DB Connected: ${con.connection.host}`)
     } catch (error) {
         console.error(`Error DB: ${error.message}`)
         process.exit(1)
     }
 }