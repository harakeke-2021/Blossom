const express = require('express')
const router = express.Router()


module.exports = router

//main
router.get('/', (req, res) => {
    res.send('home')
      })

//submit button
router.post('/', (req, res) => {
        const body = req.body
        //
      })    

//matching results
router.get('/results', (req, res) => {
    db.getResults({bathrooms,})
    .then(properties => {
        res.render('results', properties)
    })


