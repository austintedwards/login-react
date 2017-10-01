var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var index = require('./routes/index');
var login = require('./routes/login');

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

app.use('/', index);
app.use('/login', login);



app.use(function(req, res, next) {
    res.status(404);
    res.send('404 file not found!');
});


app.use(function(err, req, res , next) {
    console.log(err);
    res.status(500);
    res.send('500 internal server error');
    res.send(err);
});

app.listen(8000, function() {
        console.log("server is started: http://localhost:8000 ⚡️");
});




module.exports = app;