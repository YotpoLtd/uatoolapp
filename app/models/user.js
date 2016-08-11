
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


};


mongoose.model('User', UserSchema);
