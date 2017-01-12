'use strict'

const db = require('APP/db')
const User = require('APP/db/models/user')
const Album = require('APP/db/models/album')
const ShoppingCartItem = require('../models/shopping_cart')
const {expect} = require('chai')
const Promise = require('bluebird')

describe('The Shopping Cart model', () => {

  before('wait for the db', () => db.didSync)

  beforeEach(function(){

  })

  afterEach(function () {
    return Promise.all([
      ShoppingCart.truncate({ cascade: true }),
      Album.truncate({ cascade: true }),
      User.truncate({ cascade: true })
    ])
  })

  describe('attributes definition', function(){
    it('includes an item quantity, user_id, and album_id', function () {
          const user = User.create({
            firstName: 'Adam',
            lastName: 'Intrator',
            email: 'adam@adam.adam',
            password: 'ok',
            DOB: '1980/4/3'
        })
        const album = Album.create({
            title: 'Bad',
            artist: 'Michael Jackson',
            genre: 'Pop',
            release_year: 1986,
            description: 'Awesome!',
            cost: 10,
            quantity_available: 1
        })

        Promise.all([user, album])
        .spread((user, album) => {
            return ShoppingCartItem.create({
                quantity: 1,
                user_id: user.id,
                album_id: album.id
            })
        })
    })
  })
})
