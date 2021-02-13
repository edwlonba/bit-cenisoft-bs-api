module.exports = (req, res, next) => {
  if (req.file) {
    const parts = req.file.originalname.split('.')
    req.body.cover = `${req.protocol}://${req.get("host")}/${req.file.destination}${req.file.filename}`
    next()
  }
}
