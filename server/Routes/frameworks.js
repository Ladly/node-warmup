const express = require('express') 

const frameworksRouter = express.Router()

const frameworks = [
    {
        id: 1,
        framework: 'React',
        stars: 8
    },
    {   
        id: 2,
        framework: 'React-native',
        stars: 5
    }, 
    {
        id: 3,
        framework: 'Express',
        stars: 4
    },
    {
        id: 4,
        framework: 'Jquery',
        stars: 4
    },
    {
        id: 5,
        framework: 'Bootstrap?',
        stars: 4
    },
]

const getStars = (array) => {
    return array.map(fw => {
        const { framework } = fw
        const { stars } = fw
        const newObj = {}  
        newObj.framework = framework
        newObj.stars = stars
        return newObj
    })
}

frameworksRouter.get('/', (req, res, next) => {
    res.send(frameworks)
})

frameworksRouter.get('/stars', (req, res, next) => {
    const fwNumberOfStars = getStars(frameworks)
    res.send(fwNumberOfStars) 
})

frameworksRouter.post('/addstar/:framework', (req, res, next) => {
    const frameworkToIncreaseStar = req.params.framework
    for(let i = 0; i < frameworks.length; i ++) {
        if(frameworks[i].framework === frameworkToIncreaseStar) {
            frameworks[i].stars++
        }
    }
    res.send(frameworks)

})

module.exports = frameworksRouter