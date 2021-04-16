const mongoose = require('mongoose');

const ProvinceSchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  name: { type: String },
  code: { type: Number },

}, { collection: 'province' });
module.exports = mongoose.model('Province', ProvinceSchema);
