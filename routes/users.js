const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json({users: users})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getUser(id)
    .then(user => {
      res.json({user: user})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/', (req, res) => {
  db.addUser(req.body)
    .then(users => {
      res.json(users[0])
    })
    .catch(err => {
      res.json({
        message: 'NOPE THAT DID NOT WORK',
        error: err.message
      })
    })
})

router.put('/:id', (req, res) => {
  const id = Number(req.params.id)
  const updatedUser = req.body

  db.updateUser(id, updatedUser)
    .then((obj) => {
      res.json(obj ? 'Yay, it worked!' : 'User doesn\'t exist :(')
    })
    .catch(err => {
      res.json({
        message: 'NOPE THAT DID NOT WORK',
        error: err.message
      })
    })
})

module.exports = router
