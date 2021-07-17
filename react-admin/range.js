module.exports = (req, res, next) => {
    res.header('Content-Range', 'coinpay 0-20/20')
    next()

}