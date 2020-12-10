const { text } = require("body-parser");
const e = require("express");
const mysql = require("mysql2");
const { Sequelize, DataTypes } = require("sequelize");

module.exports = {
  connection: () => {
    const sequelize = new Sequelize(
      "mysql://username:ThisPasswordIsTemporary@localhost:3306/Library",
      {
        logging: console.log,
      }
    );
    sequelize
      .authenticate()
      .then((result, err) => {
        if (err) {
          throw err;
        } else {
          console.log("Connection to DB good");
        }
      })
      .catch((e) => console.error("DB Connection Error: ", e));
    const Book = sequelize.define("Book", {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      author: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      publish_date: {
        type: DataTypes.DATE,
      },
      synopsis: {
        type: DataTypes.TEXT,
      },
      cover: {
        type: DataTypes.STRING(100),
      },
      rating: {
        type: DataTypes.INTEGER,
      },
    });
    try {
      Book.sync().then((result, err) => {
        if (err) {
          throw err;
        }
      });
    } catch (e) {
      console.error("Error syncing DB: ", e);
    }
    return Book;
  },

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
  // connection.query(
  //   {
  //     sql: "INSERT INTO `book` values = ?",
  //     values: [
  //       id,
  //       title,
  //       publishedDate,
  //       author,
  //       publishedDate,
  //       synopsis,
  //       rating,
  //     ],
  //     timeout: 40000,
  //   },
  //   (error, results, fields) => {
  //     if (error) {
  //       res.status(500).send("MySQL Query Error");
  //       throw error;
  //     } else {
  //       console.logs(results);
  //       res.status(200).send(results);
  //     }
  //   }
  // );
  // },
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

    // connection.query(
    //   {
    //     sql: "SELECT * FROM book WHERE id = ?",
    //     values: [id],
    //     timeout: 40000,
    //   },
    //   () => {
    //     if (error) {
    //       res.status(500).send("MySQL Query Error");
    //     } else {
    //       console.logs(results);
    //       res.status(200).send(results);
    //     }
    //   }
    // );
  },
  getBookList: (connection, res) => {
    connection
      .findAll({
        attributes: ["id", "title", "author", "cover"],
        limit: 20
      },)
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

    // connection.query(
    //   {
    //     sql: "SELECT id, title, author, cover FROM book",
    //   },
    //   (error, results, fields) => {
    //     if (error) {
    //       res.status(500).send("MySQL Query Error");
    //     } else {
    //       console.logs(results);
    //       res.status(200).send(results);
    //     }
    //   }
    // );
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

    // connection.query(
    //   {
    //     sql:
    //       "UPDATE book SET id = ? title = ? author = ? synopsis = ? cover = ? rating = ? publishedDate WHERE id = ?",
    //     values: [id, title, author, synopsis, cover, rating, publishedDate],
    //     timeout: 40000,
    //   },
    //   (d) => {}
    // );
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
