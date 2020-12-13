const { bookConnection } = require("../db");
const models = require("../controllers/models");
let query = require("../queries");
let dbConnection = bookConnection();
let bookModel = models.bookModel(dbConnection);
const {uploadImage} = require("../s3");
const {Base64} = require('js-base64');
const AWS = require("aws-sdk");
const fs = require("fs");

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
