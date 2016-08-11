
const mongoose = require('mongoose');
const Comment = mongoose.model('Comment');

exports.index = function (req, res) {
    res.json({
        title: 'Login'
    });
};

exports.create = function (req, res) {
    var comment = new Comment(req.body);
    comment.save();
    res.json({status: 200});
};

exports.show = function (req, res, commentId) {
    res.json({
        title: 'Login'
    });
};

exports.update = function (req, res, commentId) {
    res.json({
        title: 'Login'
    });
};

