
const mongoose = require('mongoose');
const Comment = mongoose.model('Comment');
const { wrap: async } = require('co');


exports.load = async(function* (req, res, next, id) {
  try {
    req.comment = yield Comment.load(id);
    if (!req.comment) return next(new Error('Comment not found'));
  } catch (err) {
    return next(err);
  }
  next();
});

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

exports.reply = function (req, res) {
    res.json({
        status: '200'
    });
};

exports.resolve = function (req, res) {
    res.json({
        status: '200'
    });
};

