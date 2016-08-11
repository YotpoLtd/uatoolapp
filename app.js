
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/uatool');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var jsonParser = bodyParser.json();
app.use(bodyParser.json());

require('./app/models/user');
require('./app/models/comment');
require('./app/models/project');

const users = require('./app/controllers/users');
const comments = require('./app/controllers/comments');
const projects = require('./app/controllers/projects');




app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/projects', projects.index);
app.get('/projects/:projectId', projects.show);
app.post('/projects', jsonParser, projects.create);


app.get('/users', users.index);
app.get('/users/:userId', users.show);
app.post('/users', jsonParser, users.create);

app.listen(process.env.port, function () {
    console.log('Example app listening on port ' + process.env.port);
});


