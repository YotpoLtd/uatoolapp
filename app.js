
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/uatool');

var express = require('express');
var app = express();


require('./app/models/project');
require('./app/models/comment');

const projects = require('./app/controllers/projects');
const comments = require('./app/controllers/comments');






app.get('/', function (req, res) {
    res.send('Hello World!');
});

app.get('/projects', projects.index);
app.get('/projects/:projectId', projects.show);
app.post('/projects', projects.create);

app.listen(3123, function () {
    console.log('Example app listening on port 3000!');
});


