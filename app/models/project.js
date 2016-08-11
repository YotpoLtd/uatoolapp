
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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


};


mongoose.model('Project', ProjectSchema);
