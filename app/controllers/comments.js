
const mongoose = require('mongoose');
const Comment = mongoose.model('Comment');
const { wrap: async } = require('co');


exports.load = async(function* (req, res, next, id) {
  try {
    req.comment = yield Comment.findOne({ '_id' : id });
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
    const project = req.project;
    project.addComment(req.body);
    res.json({status: 200});
};

exports.show = function (req, res) {
    res.json({
        title: 'Login'
    });
};

exports.update = function (req, res) {
    res.json({
        title: 'Login'
    });
};

exports.reply = function (req, res) {
    req.comment.addReply(req.body['reply']);
    res.json({
        status: '200'
    });
};

exports.resolve = function (req, res) {
    req.comment.resolve(req.params.status_id);
    res.json({
        status: '200'
    });
};

