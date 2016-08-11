JiraApi = require('jira').JiraApi;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    displayName: { type : String, default : '', trim : true },
    image: { type : String, default : '', trim : true },
    jiraName: { type : String, default : '', trim : true },
    jiraPass: { type : String, default : '', trim : true },
    createdAt  : { type : Date, default : Date.now }
});


UserSchema.methods = {

    addJiraComment: function (comment, project) {
        var jira = new JiraApi('https', 'jira.yotpo.com', '443', this.jiraName, this.jiraPass, '2');

        jira.addComment(project.jiraId, comment.text, function(error) {
            if (error)
            {
                console.log('Error: ' + error)
            }
        });
    },
    addJiraReply: function (comment, jiraId) {
        var jira = new JiraApi('https', 'jira.yotpo.com', '443', this.jiraName, this.jiraPass, '2');

        jira.addComment(jiraId, comment.text, function(error) {
            if (error)
            {
                console.log('Error: ' + error)
            }
        });
    },
};


mongoose.model('User', UserSchema);
