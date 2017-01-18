'use strict'

const db = require('APP/db')
const api = module.exports = require('express').Router()

api
  .get('/heartbeat', (req, res) => res.send({ok: true}))
  .use('/auth', require('./auth'))
  .use('/users', require('./users'))
  .use('/orders', require('./orders'))
  .use('/albums', require('./albums'))
  .use('/reviews', require('./album_reviews'))

// Send along any errors
api.use((err, req, res, next) => {
  console.log(err)
  res.status(500).send(err)
})

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
