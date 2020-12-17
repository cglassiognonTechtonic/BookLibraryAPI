const { DataTypes } = require("sequelize");
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
      published_date: {
        type: DataTypes.DATEONLY,
      },
      synopsis: {
        type: DataTypes.TEXT,
      },
      img: {
        type: DataTypes.STRING(200),
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
        process.exit(1)
      });
    return Book;
  },
};
