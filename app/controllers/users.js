
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.index = function (req, res) {

    res.json({
        title: 'Login'
    });
};

exports.create = function (req, res) {
    console.log(req.body);
    if (!req.body) return res.sendStatus(400);

    var user = new User(req.body);
    console.log(user);
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

