const mongoose = require('mongoose');

const StatusSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  code: { type: Number, required: true, unique: true },
  description: {
    type: String, default: '',
  },
}, { collection: 'status' });

module.exports = mongoose.model('Status', StatusSchema);
