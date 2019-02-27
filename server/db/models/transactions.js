const Sequelize = require('sequelize')
const db = require('../db')

const Transaction = db.define('transaction', {
  total: {
    type: Sequelize.DECIMAL
  }
})

module.exports = Transaction
