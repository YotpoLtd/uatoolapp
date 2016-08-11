
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    text: { type : String, default : '', trim : true },
    status: { type : String, default : '', trim : true },
    position: { type : String, default : '', trim : true },
    replies: { type : String, default : '', trim : true },
    createdAt  : { type : Date, default : Date.now }
});


CommentSchema.methods = {


};


mongoose.model('Project', CommentSchema);
