const users = require('../data/users')
function getUsers(_,res){
    res.status(200).json(users)
}
module.exports = getUsers