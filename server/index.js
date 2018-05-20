const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

const frameworksRouter = require('./routes/frameworks')
const languageRouter = require('./routes/languages')
const animalsRouter = require('./routes/animals')

const PORT = process.env.PORT || 4001
 
app.use(bodyParser.json())
app.use(morgan('dev'))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use('/languages', languageRouter)
app.use('/frameworks', frameworksRouter)
app.use('/animals', animalsRouter)


app.listen(PORT, () => {
    console.log(`App is up and ready on port ${PORT}`)
})
