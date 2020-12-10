const { Sequelize } = require("sequelize");

//Centralized Error handlings
module.exports = {
  addBook: (connection, book, res) => {
    //s3 image bucket process
    connection
      .create({ ...book })
      .then((result, err) => {
        if (err) {
          throw "Error inserting data";
        } else {
          console.log(result);
          res.json(result);
        }
      })
      .catch((e) => {
        console.error("Error inserting data: ", e);
        res.status(502).send("Error inserting data");
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
          console.log(result);
          res.json(result);
        }
      })
      .catch((e) => {
        console.error("Error retrieving data: ", e);
        res.status(502).send("Error retrieving data");
      });
  },
  getBookList: (connection, res) => {
    connection
      .findAll({
        attributes: ["id", "title", "author", "cover"],
        limit: 20,
      })
      .then((result, err) => {
        if (err) {
          throw "Error retrieving data";
        } else {
          console.log(result);
          res.json(result);
        }
      })
      .catch((e) => {
        console.error("Error retrieving data: ", e);
        res.status(502).send("Error retrieving data");
      });
  },
  editBook: (connection, id, book, res) => {
    connection
      .update(
        { ...book },
        {
          where: {
            id: id,
          },
        }
      )
      .then((result, err) => {
        if ((err, result !== 1)) {
          throw "Error updating data";
        } else {
          console.log(result);
          res.status(200).end();
        }
      })
      .catch((e) => {
        console.error("Error updating data: ", e);
        res.status(500).send("Error updating data");
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
          console.log(result);
          res.status(200).end();
        }
      })
      .catch((e) => {
        console.error("Error deleting data: ", e);
        res.status(502).send("Error deleting data");
      });
  },
};
