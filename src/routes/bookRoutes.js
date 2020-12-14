const { bookConnection } = require("../db");
const models = require("../controllers/models");
const seed = require('../seedDB')
let query = require("../queries");
let dbConnection = bookConnection();
let bookModel = models.bookModel(dbConnection);
seed.seedDB(bookModel)

module.exports = {
  response: (req, res) => {
    res.send(`Welcome to the Library Project API`);
  },
  getBook: (req, res) => {
    query.getBook(bookModel, req.params.id, res);
  },
  addBook: (req, res) => {
    query.addBook(bookModel, req.body, res);
  },
  editBook: (req, res) => {
    query.editBook(bookModel, req.params.id, req.body, res);
  },
  deleteBook: (req, res) => {
    query.deleteBook(bookModel, req.params.id, res);
  },

  getBookList: (req, res) => {
    query.getBookList(bookModel, res);
  },
};
