const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  clientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' },
  locked: { type: Boolean, default: false },
  createdAt: { type: Date, default: new Date() },
});

module.exports = mongoose.model('Transaction', TransactionSchema);
