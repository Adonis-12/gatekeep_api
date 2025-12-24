function loggerMiddleware(req,res,next){
    console.log(`Header: ${req.header}, URL: ${req.url}, Timestamp: ${Date.now()}`)
    next()
}
module.exports = loggerMiddleware