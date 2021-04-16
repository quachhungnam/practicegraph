// const Book = require('./models/Book');
// const Author = require('./models/Author');
const Account = require('./models/Account');

const mongoDataMethods = {

  getAllBooks: async () => {
    const books = await Account.find();
    return books;
  },
//   getBookById: async id => await Book.findById(id),
//   getAllAuthors: async () => await Author.find(),
//   getAuthorById: async id => await Author.findById(id),
//   createAuthor: async args => {
//     const newAuthor = new Author(args);
//     return await newAuthor.save();
//   },
//   createBook: async args => {
//     const newBook = new Book(args);
//     return await newBook.save();
//   },
};
module.exports = mongoDataMethods;
