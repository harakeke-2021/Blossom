const express = require('express')
const router = express.Router()
const db = require('./db')

module.exports = router

//main
router.get('/', (req, res) => {
    res.render('home')
      })

//matching results
router.get('/', (req, res) => {
    return res.render('results')
 })

//submit button
router.post('/', (req, res) => {
    const rooms = req.body.rooms
    db.getResults(rooms)
    .then((results) =>{
        res.redirect('/results')
    })
    .catch((err) => {
        if (err) {
          res.status(500).send('internal error')
        }
      })
  })    

