
const mongoose = require('mongoose');
const Project = mongoose.model('Project');

exports.index = function (req, res) {
    res.json({
        title: 'Login'
    });
};

exports.create = function (req, res) {
    var project = new Project(req.body);
    project.save();
    res.json({status: 200});
};

exports.show = function (req, res, projectId) {
    res.json({
        title: 'Login'
    });
};

exports.update = function (req, res, projectId) {
    res.json({
        title: 'Login'
    });
};

