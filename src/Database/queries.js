const { Sequelize } = require("sequelize");

module.exports = {
  addBook: (connection, book, res) => {
    // connection
    //   .findAll({
    //     where: {
    //       name: book.name,
    //       author: book.author,
    //     },
    //   })
    //   .then((result, err) => {
    //     if (err) {
    //       throw "Error retrieving data";
    //     } else {
    //       if (result !== []) {
    //         res.send(400).send("Error, Book Already exists").end();
    //       }
    //     }
    //   })
    //   .catch((e) => {
    //     console.error("Error retrieving data: ", e);
    //     res.status(502).send("Error retrieving data").end();
    //   })
    //   .then(() => {
        connection
          .create(book)
          .then((result, err) => {
            if (err != null) {
              throw err;
            } else {
              res.status(200).send(result).end();
            }
          })
          .catch((e) => {
            console.error("Error inserting data: ", e);
            res.status(400).send("Error inserting data").end();
          });
      },
  getBook: (connection, id, res) => {
    connection
      .findAll({
        where: {
          id: id,
        },
      })
      .then((result, err) => {
        if (err) {
          throw "Error retrieving data";
        } else {
          console.log(Object.values(result))
          res.json(result).end();
        }
      })
      .catch((e) => {
        console.error("Error retrieving data: ", e);
        res.status(502).send("Error retrieving data").end();
      });
  },
  getBookList: (connection, res) => {
    connection
      .findAll({
        attributes: ["id", "title", "author", "img"],
        // limit: 20,
      })
      .then((result, err) => {
        if (err) {
          throw "Error retrieving data";
        } else {
          res.json(result).end();
        }
      })
      .catch((e) => {
        console.error("Error retrieving data: ", e);
        res.status(502).send("Error retrieving data").end();
      });
  },
  editBook: (connection, id, book, res) => {
    console.log(book);
    connection
      .update(book, {
        where: {
          id: id,
        },
      })
      .then((result, err) => {
        if (err) {
          throw err;
        } else {
          res.status(200).send(result).end();
        }
      })
      .catch((e) => {
        console.error("Error updating data: ", e);
        res.status(400).send("Error updating data").end();
      });
  },
  deleteBook: (connection, id, res) => {
    connection
      .destroy({
        where: {
          id: id,
        },
      })
      .then((result, err) => {
        if ((err, result !== 1)) {
          throw "Error rdeleting data";
        } else {
          res.status(200).end();
        }
      })
      .catch((e) => {
        console.error("Error deleting data: ", e);
        res.status(502).send("Error deleting data").end();
      });
  },
  checkIfExists: (connection, title, author, res) => {
    connection
      .findAll({
        where: {
          title: title,
          author: author,
        },
      })
      .then((result, err) => {
        if (err) {
          throw "Error retrieving data";
        } else {
          if (result.length === 0) {
            res.status(101).send("Book Does Not Exist").end()
          } else {
            res.status(400).send("Book Already Created")
          }
        }
      })
      .catch((e) => {
        console.error("Error retrieving data: ", e);
        res.status(502).send("Error retrieving data").end();
      });
  },
};
