
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/uatool');

var express = require('express');
var app = express();


require('./app/models/user');
require('./app/models/comment');
require('./app/models/project');

const projects = require('./app/controllers/projects');
const comments = require('./app/controllers/comments');
const users = require('./app/controllers/users');






app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/projects', projects.index);
app.get('/projects/:projectId', projects.show);
app.post('/projects', projects.create);


app.get('/users', users.index);
app.get('/users/:userId', users.show);
app.post('/users', users.create);

app.listen(process.env.port, function () {
    console.log('Example app listening on port ' + process.env.port);
});


