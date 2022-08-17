const express = require('express')
const router = express.Router()
const ordersCtrl= require('../../controllers/api/orders')


router.get('/cart',ordersCtrl.cart)
router.post('/cart/items/:id',ordersCtrl.addToCart)
router.post('/cart/checkout',ordersCtrl.checkout)
router.put('/cart/qty',ordersCtrl.setItemQtyInCart)
// router.post('/cart/:id',ordersCtrl.deleteItem)

module.exports=router