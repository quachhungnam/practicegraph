const mongoose = require('mongoose');

const RateSchma = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: { type: String, default: '' },
  accountId: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  star: { type: Number, min: 0, max: 5 },
  description: { type: String, default: '' },
});

module.exports = mongoose.model('Rate', RateSchma);
