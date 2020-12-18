const { Sequelize } = require("sequelize");
require('dotenv').config()

module.exports = {
  bookConnection: () => {
    let user = process.env.DB_USER;
    let pass = process.env.DB_PASSWORD;
    let database = process.env.DB_DATABASE;
    let host = process.env.DB_HOST
    let port = process.env.DB_PORT
    const sequelize = new Sequelize(
      `mysql://${user}:${pass}@${host}:${port}/${database}`,
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
