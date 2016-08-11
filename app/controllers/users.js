JiraApi = require('jira').JiraApi;
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.index = function (req, res) {

    res.json({
        title: 'Login'
    });
};

exports.create = function (req, res) {
    if (!req.body) return res.sendStatus(400);

    var jira = new JiraApi('https', 'jira.yotpo.com', '443', req.body.name, req.body.password, '2');
    jira.searchUsers(req.body.name, 0, 50, true, true, function(error, jiraUser) {
        if (error) {
            console.log('Error: ' + error)
        } else {

            console.log(jiraUser);

            var user = new User(req.body);

            user.displayName = jiraUser[0].displayName;
            user.image = jiraUser[0].avatarUrls['48x48'];
            user.jiraName = req.body.name;
            user.jiraPass = req.body.password;

            console.log(user);
            user.save();
            res.json({status: 200});

        }
    });
};

exports.search = function(req, res) {
    if (!req.body) return res.sendStatus(400);

    User.findById(req.body.user_id, function(err, user) {
        if (err === null) {
            var jira = new JiraApi('https', 'jira.yotpo.com', '443', user.jiraName, user.jiraPass, '2');
            jira.searchUsers(req.body.search_term, 0, 50, true, true, function(error, jiraUsers) {
                if (error) {
                    console.log('Error: ' + error)
                } else {
                    res.json({status: 200, users: jiraUsers});
                }
            });     
        }
    });   
}

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

