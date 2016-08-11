
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
    comments: [{
    body: { type : String, default : '' },
    user: { type : Schema.ObjectId, ref : 'User' },
    createdAt: { type : Date, default : Date.now }
  	}],
    createdAt  : { type : Date, default : Date.now },
    project: { type : Schema.ObjectId, ref: 'Project' },
    author: { type : Schema.ObjectId, ref: 'User' }
});


CommentSchema.methods = {


};


mongoose.model('Comment', CommentSchema);
