// let db = [ example of how I want my data to be
//   {
//     id: 2,
//     title: "Catalyst",
//     "ISBN-10": 123,
//     "ISBN-13": 456,
//     publisher: "",
//     author: "SJ Kincaid",
//     "published-date": "10/28/2014",
//     synopsis:
//       "Tom Raines and his friends return to the Pentagonal Spire for a new year, eager to continue their training for the elite Intrasolar Forces. But they soon discover troubling changes. Strict new regulations, suspicious agents in positions of power and the revelation that the Spire is under military control. The trainees are now cadets. What begins as an irritating adjustment soon reveals a dangerous shift in reality. Those in control have a ruthless agenda. And when the military academy begins welcoming suspicious new cadets, they reveal a plan with horrifying worldwide ramifications. Tom is desperate to stop it, and it seems he is not alone. But when the enemy comes for Tom, how much can he endure in the battle to save himself? In this exhilarating, explosive and heart-rending conclusion to the INSIGNIA trilogy, CATALYST puts Tom and his intelligent, passionate and brave young friends through stunning tests, dangerous confrontations and into an impossible future they could never have predicted.",
//     cover:
//       "https://books.google.com/books/content?id=5-oRBgAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70W4Dd81_w0TeiiCqFYmPDBp8B1qeB7ylNi8nRXwdGCCYOX1OtEGO_vGByB8374fxBRp3cVTE1mq3-eH80Wjng9IUNjJwTgZDXMTp-WndmqoB81iTzprURy-KVP7DuHJscWk_3Y",
//     rating: 5,
//   },
// ];
const { bookConnection } = require("../db");
const models = require("../controllers/models");
let query = require("../queries");
let dbConnection = bookConnection();
let bookModel = models.bookModel(dbConnection);

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
    console.log(bookModel);
    query.getBookList(bookModel, res);
  },
};
