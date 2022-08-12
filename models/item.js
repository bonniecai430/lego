const mongoose = require('mongoose');
require('./theme')

const itemSchema = require('./itemSchema')

module.exports=mongoose.model('Item',itemSchema)



