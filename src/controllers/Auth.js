const bcrypt = require('bcrypt')
const JWT = require('jsonwebtoken')

module.exports = {
    verifyUser: (req, res) => {
        req.header.authorization
        // db call on req.user
        //make secret key
        bcrypt.compare(req.body.password, /*db.passowrd,*/ (err, result) => {
            if(err) {
                res.status(500).end()
            } else {
                if (result === true) {
                    // check if perms line up w db
                    // if perms line up
                    JWT.sign({"name":req.body.name, "permissions": req.body.perms}, /*secretkey*/, {algorithim: 'RS256'}, (err, token) => {
                        res.json({"token":token}).status(200)
                    }) 
                } else {
                    res.status(403).json({"message": "Access Denied"})
                }
            }
        })
    },
    verifyRequest: (req, res, next) => {
        JWT.verify(req.header.authorization, /*secret key*/, {"permissions": true}, (err, decoded) => {
            if(err) {
                res.status(500).end()
            } else {
                if (decoded.permissions === true) {
                    next()
                } else {
                    res.status(403).json({"message": "Access Denied"})
                }
            }
        })

    }
}