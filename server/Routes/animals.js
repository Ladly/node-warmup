const express = require('express')

const animalsRouter = express.Router()

const animals = ['ant', 'cat', 'chainsaw?']

animalsRouter.get('/', (req, res, next) => {
    res.send(animals)
})

animalsRouter.get('/:id', (req, res, next) => {
    const id = req.params.id
    res.send(animals[id])
})

module.exports = animalsRouter