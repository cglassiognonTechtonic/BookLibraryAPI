const bcrypt = require('bcrypt')

module.export = {
    verifyUser: (req, res, next) => {
        //db call on req.user
        // bcrypt.compare(req.password, /*db.passowrd,*/ () => {
        //     res.status(200).send()
        // })
    }
}