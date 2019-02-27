const User = require('./user')
const Product = require('./product')
// const Transaction = require('./transactions')
const Order = require('./order')
const Product_order = require('./product-order')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

Order.belongsTo(User)
// Order.belongsTo(Transaction)
// Order.belongsTo(Product)
// Transaction.belongsTo(User)

// Transaction.hasMany(CartItem)
User.hasMany(Order)
Product.belongsToMany(Order, {through: Product_order})

Order.belongsToMany(Product, {through: Product_order})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  User,
  Product,
  // Transaction,
  Order
}
