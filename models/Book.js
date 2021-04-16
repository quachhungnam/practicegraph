const mongoose = require('mongoose');

const { Schema } = mongoose;

const BookSchema = new Schema({
  title: {
    type: String,
  },
  author: {
    type: String,
  },
  // authorId: {
  //   type: String,
  // },
}, {
  collection: 'book',
});

module.exports = mongoose.model('book', BookSchema);
