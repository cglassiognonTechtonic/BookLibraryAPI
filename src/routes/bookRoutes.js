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
    //if there is an image in the body, also seperate this aws stuff so you can do this for edit
    //img key based on book-title-author
    // AWS.config.update({ region: "us-east-2" });
    // s3 = new AWS.S3({ apiVersion: "2006-03-01" });
    // s3.upload(
    //   {
    //     Bucket: "libraryapibookcovers",
    //     Key: "testimg32",
    //     ContentType: "image/jpeg",
    //     Body: req.body.img,
    //     ACL: "public-read"
    //   },
    //   (err, data) => {
    //     if (err) {
    //       console.log("Error uploading", err);
    //     }
    //     if (data) {
    //       console.log(data.Location);
    //     }
    //   }
    // );d
    console.log(req.body)
    //uploadImage(req.body.cover).then(data => console.log(data))
    query.addBook(bookModel, req.body, res);
  },
  editBook: (req, res) => {
    console.log(req.body)
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
