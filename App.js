const express = require('express');
const app = express();
const {response, getBook, addBook, editBook, deleteBook} = require('./src/routes.js')

app.use(express.json())

app.get('/', response)
app.get('/book/:id', getBook)
app.post('/book/add/', addBook)
app.post('/book/edit/:id', editBook)
app.delete('/book/delete/:id', deleteBook)


app.listen(4567, () => {
    console.log("App Started")
})