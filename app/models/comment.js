
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
	var user = req.comment = this.findOne({ '_id' : reply_data['user_id'] });
	this.replies << { user: user, reply_text: reply_data['text'] }	  	
    this.save();
  },

 

  resolve: function (statusId) {
  	if (statusId === 1) {
  		this.status = "resolved";
  	} else {
  		this.status = "unresolved";
  	}
  	this.save();
  }
};


mongoose.model('Comment', CommentSchema);
