const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const bookRoutes= require('./src/routes/bookRoutes.js')
const imgRoutes = require('./src/routes/imgRoutes')

const bookRouter = express.Router();
const imgRouter = express.Router();

bookRouter.get(bookRoutes.response)
bookRouter.get('/book/list', bookRoutes.getBookList)
bookRouter.get('/book/:id', bookRoutes.getBook)
bookRouter.post('/book/add/', bookRoutes.addBook)
bookRouter.post('/book/edit/:id',bookRoutes.editBook)
bookRouter.delete('/book/delete/:id', bookRoutes.deleteBook)
imgRouter.post('/upload/:key', imgRoutes.upload)

const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

app.use(express.json({limit: "50mb"}))
app.use(bodyParser.text({type: "text/plain", limit: "100mb"}))
app.use(allowCrossDomain);
app.use('/api/', bookRouter)
app.use('/img/', imgRouter)

app.listen(4567, () => {
    console.log("App Started")
})