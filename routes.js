const express = require('express')
const router = express.Router()
const db = require('./db')

module.exports = router

//main page
router.get('/', (req, res) => {
  res.render('home')
})

//submit button
router.post('/', (req, res) => {
  const { type, rooms, bathrooms } = req.body
  res.redirect(`/results?rooms=${rooms}&type=${type}&bathrooms=${bathrooms}`)
})

//get all property info
router.get('/results*', (req, res) => {
  const { type, rooms, bathrooms } = req.query
  db.getResults(rooms, bathrooms, type)
    .then(result => {
      res.render('results', {result: result})
    })
  })