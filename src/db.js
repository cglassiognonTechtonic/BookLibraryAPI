const mysql = require("mysql");

module.exports = {
  connection: () => {
    return mysql.createConnection({
      host: "localhost",
      user: "username",
      password: "secret",
      database: "db",
    });
  },
  createBook: (connection, book, res) => {
      let {id, title, author, publishedDate, synopsis, rating} = book;
      //s3 image bucket process
      connection.query({
          sql: 'INSERT INTO `book` values = ?',
          values: [id, title, publishedDate, author, publishedDate,synopsis,rating],
          timeout: 40000,
      },(error, results, fields) => {
        if(error) {
            res.status(500).send("MySQL Query Error")
            throw error
        } else {
            console.logs(results)
            res.status(200).send(results)
        }
      })
  },
  getBook: (connection, id, res) => {
    connection.query({
        sql: 'SELECT * FROM book WHERE id = ?',
        values: [id],
        timeout: 40000
    }, () => {
        if(error) {
            res.status(500).send("MySQL Query Error")
        } else {
            console.logs(results)
            res.status(200).send(results)
        } 
    })
  },
  getBookList: (connection, res) => {
      connection.query({
          sql: 'SELECT id, title, author, cover FROM book'
      }, (error, results, fields) => {
          if(error) {
              res.status(500).send("MySQL Query Error")
          } else {
              console.logs(results)
              res.status(200).send(results)
          }
      })
  },
  editBook: (connection, id, book, res) => {
    let {id, title, author, publishedDate, synopsis, rating} = book;
      connection.query({
          sql: 'UPDATE book SET id = ? title = ? author = ? synopsis = ? cover = ? rating = ? publishedDate WHERE id = ?',
          values: [id, title, author, synopsis,cover,rating,publishedDate],
          timeout: 40000
      }, () => {
          
      })
  }
};
