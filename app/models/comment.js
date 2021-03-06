
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = mongoose.model('User');

const CommentSchema = new Schema({
    text: { type : String, default : '', trim : true },
    status: { type : String, default : '', trim : true },
    position: {
    	x: { type : String, default : '', trim : true },
    	y: { type : String, default : '', trim : true },
    	x_box: { type : String, default : '', trim : true },
    	y_box: { type : String, default : '', trim : true },

	},
    replies: [{ 
    	user: { type : Schema.ObjectId, ref: 'User' }, 
    	text: {type : String, default : '' },
    	createdAt : { type : Date, default : Date.now }
    }],
    createdAt  : { type : Date, default : Date.now },
    project: { type : Schema.ObjectId, ref: 'Project' },
    user: { type : Schema.ObjectId, ref: 'User' }
});


CommentSchema.methods = {

// was moved to controller
  //addReply: function (reply_data) {
	//var text = reply_data['text'];
  //	var username = /(@.*?)(\w+)/.exec(text);
  //	if (username !== null) {
  //		text = text.replace(username[0], "[~" + username[2] + "]" );
  //	}
  //	var comment = this;
	//User.findById(reply_data['user_id'], function(err, response) {
	//	if (err === null) {
	//		comment.replies.push({ user: response, text: text });
 	//		comment.save();
	//	}
	//});
  //},

 
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
