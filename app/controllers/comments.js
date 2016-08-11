
const mongoose = require('mongoose');
const Comment = mongoose.model('Comment');
const Project = mongoose.model('Project');
const User = mongoose.model('User');
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
    var comment = req.comment;
    var reply_data = req.body;


    var text = reply_data['text'];
    var username = /(@.*?)(\w+)/.exec(text);
    if (username !== null) {
        text = text.replace(username[0], "[~" + username[2] + "]" );
    }

    User.findById(reply_data['user_id'], function(err, user) {
        if (err === null) {
            comment.replies.push({ user: user, text: text });
            comment.save();

            Project.findById(comment.project, function(err, project) {
                user.addJiraReply(comment, project.jiraId);
            });
        }
    });

    //req.comment.addReply(req.body);
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

