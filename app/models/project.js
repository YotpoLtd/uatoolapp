
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    title: { type : String, default : '', trim : true },
    jiraId: { type : String, default : '', trim : true },
    owner: { type : String, default : '', trim : true },//{ type : Schema.ObjectId, ref : 'User' },
    productOwner: { type : String, default : '', trim : true },//{ type : Schema.ObjectId, ref : 'User' },
    designer: { type : String, default : '', trim : true },//{ type : Schema.ObjectId, ref : 'User' },
    createdAt  : { type : Date, default : Date.now }
});


ProjectSchema.methods = {


};


mongoose.model('Project', ProjectSchema);
