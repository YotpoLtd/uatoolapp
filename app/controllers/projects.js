
const mongoose = require('mongoose');
const Project = mongoose.model('Project');
const Comment = mongoose.model('Comment');
const { wrap: async } = require('co');


exports.load = async(function* (req, res, next, id) {
  try {
    req.project = yield Project.findOne({ '_id' : id });
    if (!req.project) return next(new Error('Project not found'));
  } catch (err) {
    return next(err);
  }
  next();
});

exports.show = function (req, res) {
    var project = req.project;
    var comments = Comment.find({'project' : project.id}, function(err, response) {
        if (err === null) {
            res.json(
                {
                    base_url: project.baseUrl,
                    title: project.title,
                    jiraId: project.jiraId,
                    owner: project.owner,
                    productOwner: project.productOwner,
                    designer: project.designer,
                    createdAt  : project.createdAt,
                    comments : response
                }
            )
        }
    });
};

exports.create = function (req, res) {
    var project = new Project(req.body);
    project.save();
    res.json({status: 200, project: project});
};

exports.index = function (req, res) {
    Project.find({}, function(err, objects) {
        var map = {};

        objects.forEach(function(obj) {
            map[obj._id] = obj;
        });

        res.send(map);
    });
};

exports.update = function (req, res, projectId) {
    res.json({
        title: 'Login'
    });
};

