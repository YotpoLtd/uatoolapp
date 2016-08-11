
const mongoose = require('mongoose');
const Comment = mongoose.model('Comment');
const Schema = mongoose.Schema;
const User = mongoose.model('User');

const ProjectSchema = new Schema({
    title: { type : String, default : '', trim : true },
    jiraId: { type : String, default : '', trim : true },
    owner: { type : Schema.ObjectId, ref: 'User' },
    productOwner: { type : Schema.ObjectId, ref: 'User' },
    designer: { type : Schema.ObjectId, ref: 'User' },
    baseUrl: { type : String, default : '', trim : true },
    createdAt  : { type : Date, default : Date.now }
});


ProjectSchema.methods = {

  addComment: function (comment_params) {
  	var comment = new Comment(comment_params);
  	console.log(comment.text);
  	var username = /(@.*?)(\w+)/.exec(comment.text)
  	if (username !== null) {
  		console.log(username);
  		comment.text = comment.text.replace(username[0], "[~" + username[2] + "]" );	
  	}
  	var project = this;
  	User.findById(comment_params['user_id'], function(err, response) {
		if (err === null) {
			comment.project = project;
    		comment.user = response;
    		comment.save();
		}
	});
  },

  /**
   * Remove comment
   *
   * @param {commentId} String
   * @api private
   */

  removeComment: function (commentId) {
    const index = this.comments
      .map(comment => comment.id)
      .indexOf(commentId);

    if (~index) this.comments.splice(index, 1);
    else throw new Error('Comment not found');
    return this.save();
  }
};


mongoose.model('Project', ProjectSchema);
