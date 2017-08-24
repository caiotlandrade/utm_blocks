const   express = require('express'),
        bodyParser = require('body-parser'),
        app = express(),
        PORT = process.env.PORT || 8080; //default port is 8080

//Tell app to use bodyParser when receiving requests
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, DELETE")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const   account_routes = require('./routes/account_routes'),
        user_routes = require('./routes/user_routes'),
        website_routes = require('./routes/website_routes'),
        source_routes = require('./routes/source_routes'),
        medium_routes = require('./routes/medium_routes'),
        url_routes = require('./routes/url_routes');

app.use('/api/account', account_routes);
app.use('/api/user', user_routes);
app.use('/api/website', website_routes);
app.use('/api/source', source_routes);
app.use('/api/medium', medium_routes);
app.use('/api/url', url_routes);




// Defining port using setup for Heroku
app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})