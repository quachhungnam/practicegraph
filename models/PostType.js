const mongoose = require('mongoose');

const PostTypeSchema = mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  name: {
    type: String, required: true,
  },
  description: {
    type: String, default: '',
  },

}, { collection: 'posttype' });
module.exports = mongoose.model('PostType', PostTypeSchema);
