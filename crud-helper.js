// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Item = require('./models/item');
const Theme = require('./models/theme');
// const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, item, theme, order;
let users, items, themes, orders;