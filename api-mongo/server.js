/**
 * @file api server
 * ----------------------------------
 * @author Rodrigo Del Angel <rdelangelhmx@gmail.com>
 * ----------------------------------
 * History
 * @creation 19/Nov/21
 * ----------------------------------
*/
'use strict';

const 
express = require('express'),
cors = require('cors'),
config = require('./src/config/config.json'),
dbConn = require('./src/config/db');

//connect database
dbConn();

var PORT = config.App.Port || 5010;

const app = express();
// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// Parse application/json
app.use(cors());
app.use(express.json());
// Import Routes
const contactsRoutes = require('./src/routes/contactsRoute');
//Creating API routes
app.get("/", 
    function (req, res) {
        res.send(`<br><br><h2>${config.App.Description} - ver${config.App.Version}</h2><br><h3>${config.App.Author}</h3>`);
    }
);
contactsRoutes(app);

//Express js listen method to run project on http://localhost:5010
app.listen(PORT, console.log(`App is running in ${process.env.NODE_ENV} mode on port ${PORT}`))
