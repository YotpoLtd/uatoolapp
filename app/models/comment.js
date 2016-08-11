
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = mongoose.model('User');

const CommentSchema = new Schema({
    text: { type : String, default : '', trim : true },
    status: { type : String, default : '', trim : true },
    position: { type : String, default : '', trim : true },
    replies: [{ 
    	user: { type : Schema.ObjectId, ref: 'User' }, 
    	text: {type : String, default : '' }
    }],
    createdAt  : { type : Date, default : Date.now },
    project: { type : Schema.ObjectId, ref: 'Project' },
    author: { type : Schema.ObjectId, ref: 'User' }
});


CommentSchema.methods = {

  addReply: function (reply_data) {
  	var comment = this;
	User.findById(reply_data['user_id'], function(err, response) {
		if (err === null) {
			comment.replies.push({ user: response, text: reply_data['text']})	  	
 			comment.save();
		}
	});
  },

 
  resolve: function (statusId) {
  	if (statusId === "1") {
  		this.status = "resolved";
  	} else {
  		this.status = "unresolved";
  	}
  	this.save();
  }
};


mongoose.model('Comment', CommentSchema);
