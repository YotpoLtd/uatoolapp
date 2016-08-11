
const mongoose = require('mongoose');
const Project = mongoose.model('Project');
const { wrap: async } = require('co');


// exports.load = function (req, res, next, id) {
//   try {
//     req.project = yield Project.load(id);
//     if (!req.project) return next(new Error('Project not found'));
//   } catch (err) {
//     return next(err);
//   }
//   next();
// };

exports.show = function (req, res) {
    res.json(
        {
        base_url: "http://ynet.co.il",
        projectId: 123,
        title: "Hellooo",
        comments: [
        {
        id: 4444,
        position: {
             x: 145,
             y: 546,
             box_x: 156,
             box_y: 556
           },
           type: 'comment',
             comment_text: "this is a comment",
           user: {
           image: "http://phenomena.nationalgeographic.com/files/2015/06/BGYE66.jpg",
             name: "snail user"
         },
           replys: [
             {
               user_name: "billy",
               image: "user_image_url",
               text: "im a reply!"
             }
           ]
        },
        {
            id: 7878,
            position: {
                 x: 431,
                 y: 666,
                 box_x: 441,
                 box_y: 676
               },
               type: 'comment',
                 comment_text: "this is a comment",
               user: {
               image: "http://phenomena.nationalgeographic.com/files/2015/06/BGYE66.jpg",
                 name: "snail user"
             },
               replys: [
                 {
                   user_name: "billy",
                   image: "http://phenomena.nationalgeographic.com/files/2015/06/BGYE66.jpg",
                   text: "im a reply!"
                 }
                ]
        }]
    });
};

exports.create = function (req, res) {
    var project = new Project(req.body);
    project.save();
    res.json({status: 200});
};

exports.index = function (req, res) {
    res.json({
        project: "asd"
    });
};

exports.update = function (req, res, projectId) {
    res.json({
        title: 'Login'
    });
};

