const express = require('express')

const languagesRouter = express.Router()

const languages = ['Javascript', 'Node.js', 'HTML5', 'CSS3']

languagesRouter.get('/', (req, res, next) => {
    res.send(languages)
})

module.exports = languagesRouter