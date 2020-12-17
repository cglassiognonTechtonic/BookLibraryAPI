const { bookConnection } = require("../Database/db");
const models = require("../controllers/models");
const seed = require("../seedDB");
let query = require("../Database/queries");
let dbConnection = bookConnection();
let bookModel = models.bookModel(dbConnection);
seed.seedDB(bookModel);

module.exports = {
  response: (req, res) => {
    res.send(`Welcome to the Library Project API`);
  },
  getBook: (req, res) => {
    if (isNaN(parseInt(req.params.id, 10))) {
      res.status(404).end();
    } else {
      query.getBook(bookModel, req.params.id, res);
    }
  },
  addBook: (req, res) => {
    query.addBook(bookModel, req.body, res);
  },
  editBook: (req, res) => {
    if (isNaN(parseInt(req.params.id, 10))) {
      res.status(404).end();
    } else {
      query.editBook(bookModel, req.params.id, req.body, res);
    }
  },
  deleteBook: (req, res) => {
    if (isNaN(parseInt(req.params.id, 10))) {
      res.status(404).end();
    } else {
      query.deleteBook(bookModel, req.params.id, res);
    }
  },

  getBookList: (req, res) => {
    query.getBookList(bookModel, res);
  },
  checkIfExists: (req, res) => {
    query.checkIfExists(bookModel, req.params.title, req.params.author, res)
  }
};
