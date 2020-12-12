const { Sequelize } = require("sequelize");

module.exports = {
  bookConnection: () => {
    const sequelize = new Sequelize(
      "mysql://username:ThisPasswordIsTemporary@localhost:3306/Library",
      {
        logging: console.log,
        logQueryParameters: true,
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
    return sequelize;
  },
};
