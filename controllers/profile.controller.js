function getProfile(req,res){
    try{
        res.json(req.user)
    }catch(err){
        throw Error("error")
    }
}

module.exports = getProfile