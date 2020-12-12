const { Sequelize, DataTypes } = require("sequelize");

module.exports = {
  bookModel: (dbConnection) => {
    let Book = dbConnection.define("Book", {
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
        type: DataTypes.DATEONLY,
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
      pages: {
        type: DataTypes.INTEGER,
      }
    });
    Book.sync()
      .then((result, err) => {
        if (err) {
          throw err;
        }
      })
      .catch((e) => {
        console.error("Error syncing DB");
      });
    return Book;
  },
};
