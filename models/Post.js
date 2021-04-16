const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  title: {
    type: String, default: '', required: true,
  },
  hostId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
  },
  postTypeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'PostType',
  },
  province: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Province',
  },
  statusId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Status',
  },
  price: { type: Number, required: true },
  description: {
    type: String, default: '',
  },
});
module.exports = mongoose.model('Post', PostSchema);
