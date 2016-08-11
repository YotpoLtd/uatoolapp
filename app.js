
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/uatool');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var jsonParser = bodyParser.json();
app.use(bodyParser.json());
app.use(cors());

require('./app/models/user');
require('./app/models/comment');
require('./app/models/project');

const users = require('./app/controllers/users');
const comments = require('./app/controllers/comments');
const projects = require('./app/controllers/projects');

// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });

// app.param('projectId', projects.load);
app.param('projectId', projects.load);
app.get('/', projects.index);
app.get('/projects', projects.index);
app.get('/projects/:projectId', projects.show);
app.post('/projects', jsonParser, projects.create);


app.post('/projects/:projectId/comments', comments.create);

app.param('commentId', comments.load);
app.post('/comments/:commentId/reply', comments.reply);
app.post('/comments/:commentId/resolve/:status_id', comments.resolve);

app.get('/users', users.index);
app.get('/users/:userId', users.show);
app.post('/users', jsonParser, users.create);
app.post('/users/search', users.search);

app.listen(process.env.port, function () {
    console.log('Example app listening on port ' + process.env.port);
});


