const express = require('express');
const app = express();
const bookRoutes= require('./src/routes/bookRoutes.js')

let bookRouter = express.Router();

app.use(express.json())

/*app.all('*', (req, res, next) => {

})*/

bookRouter.get(bookRoutes.response)
bookRouter.get('/book/list', bookRoutes.getBookList)
bookRouter.get('/book/:id', bookRoutes.getBook)
bookRouter.post('/book/add/', bookRoutes.addBook)
bookRouter.patch('/book/edit/:id', bookRoutes.editBook)
bookRouter.delete('/book/delete/:id', bookRoutes.deleteBook)

app.use('/api/', bookRouter)
app.listen(4567, () => {
    console.log("App Started")
})