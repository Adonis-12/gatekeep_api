const users = require("../data/users")

function authMiddleware(req,res,next){
    const authHeader = req.headers.authorization
    if(!authHeader || authHeader != "Bearer abc123"){
        res.status(401).json({
            "error" : "Unauthorized"
        })
    }else{
        req.user = {
            id : 1,
            role : 'admin'
        }
        next()
    }
}

module.exports = authMiddleware