
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.index = function (req, res) {
    res.json({
        title: 'Login'
    });
};

exports.create = function (req, res) {
    var user = new User(req.body);
    user.save();
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

