const jwt = require('jsonwebtoken')
const db = require('./model/database')

const attachDb = (req, res, next) => {
    req.db = db
    next();
}

module.exports = {attachDb}