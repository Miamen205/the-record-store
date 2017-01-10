'use strict'

const db = require('APP/db')
const Shipping = require('../models/shipping')
const {expect} = require('chai')


describe('The `Shipping` model', () => {

  /**
   * First we clear the database and recreate the tables before beginning a run
   */

  before('wait for the db', () => db.didSync)

  /**
   * Next, we create an (un-saved!) article instance before every spec
   */
  var modelBody = {
    shipping_address: '20 main st',
    shipping_city: 'New York',
    shipping_state: 'NY',
    shipping_zip_code: '10017'
  }

  var location
  beforeEach(function(){
    location = Shipping.build(modelBody)
  })

  /**
   * Also, we empty the tables after each spec
   */
  afterEach(function () {
    return Promise.all([
      Shipping.truncate({ cascade: true })
    ])
  })

  describe('attributes definition', function(){

    /**
     * Your model should have two fields (both required): `title` and `content`.
     *
     * http://docs.sequelizejs.com/en/v3/docs/models-definition/#validations
     */
    it('includes `shipping_address`, `shipping_city` and `shipping_state` shipping_zip_code', function () {

      return location.save()
      .then(function (place) {
        expect(place.shipping_address).to.equal('20 main st')
        expect(place.shipping_city).to.equal('New York')
        expect(place.shipping_state).to.equal(modelBody.shipping_state)
        expect(place.shipping_zip_code).to.equal(modelBody.shipping_zip_code)
      })

    })

    it('requires `state`', function () {

      location.shipping_state = null

      return location.validate()
      .then(function(result) {
        expect(result).to.be.an.instanceOf(Error)
        expect(result.message).to.contain('shipping_state cannot be null')
      })

    })

    it('requires `shipping_zip_code` (in a more strict way than for `shipping_city`)', function () {

      location.shipping_zip_code = '122'

      return location.validate()
      .then(function (result) {
        expect(result).to.be.an.instanceOf(Error)
        expect(result.message).to.contain('Validation error')
      })

    })
  })
})
