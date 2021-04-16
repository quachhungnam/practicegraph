const mongoose = require('mongoose');

const FeedBackSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  accountId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Account',
    reuquired: true,
  },
  description: {
    type: String,
    reuquired: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model('FeedBack', FeedBackSchema);
