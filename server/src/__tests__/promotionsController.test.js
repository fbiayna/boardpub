/* eslint-disable node/no-callback-literal */
const Promotions = require('../models/promotionsModel')
const Users = require('../models/usersModel')
const PromotionsController = require('../controllers/PromotionsController')(Users, Promotions)

jest.mock('../models/usersModel')
jest.mock('../models/promotionsModel')

describe('PromotionsController', () => {
  test('should call response json on getMethod', () => {
    const req = { query: { type: 'menu' } }
    const res = {
      json: jest.fn()
    }
    Promotions.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(false, 'PromotionsList')
    })

    PromotionsController.getMethod(req, res)

    expect(res.json).toHaveBeenCalled()
  })

  test('should call response error on getMethod', () => {
    const req = { query: { type: 'menu' } }
    const res = {
      send: jest.fn()
    }
    Promotions.find = jest.fn().mockImplementationOnce((query, callback) => {
      callback(true, 'errorFindPromotions')
    })

    PromotionsController.getMethod(req, res)

    expect(res.send).toHaveBeenCalled()
  })
})
