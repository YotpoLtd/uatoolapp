
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

  /**
   * Add comment
   *
   * @param {User} user
   * @param {Object} comment
   * @api private
   */

  addComment: function (comment_params) {
  	var comment = new Comment(comment_params);
    comment.project = this.id;
    comment.save();
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
