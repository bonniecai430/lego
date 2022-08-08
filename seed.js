require("dotenv").config();
require("./config/database");

const Theme = require("./models/theme");
const Item = require("./models/item");

(async function () {
  await Theme.deleteMany({});
  const themes = await Theme.create([
    { name: "Marvel", sortOrder: 10 },
    { name: "Minion", sortOrder: 20 },
    { name: "City", sortOrder: 30 },
    { name: "Disney", sortOrder: 40 },
    { name: "Harry Potter", sortOrder: 50 },
    { name: "Star War™", sortOrder: 60 },
    { name: "NINJAGO®", sortOrder: 70 },
    { name: "Frozen", sortOrder: 80 },
    { name: "LEGO®Art", sortOrder: 90 },
    { name: "LEGO®ICONS™", sortOrder: 100 },
  ]);

  await Item.deleteMany({});
const items = await Item.create([
{name:'Nano Gauntlet',image:'',theme:themes[0],price:69.99},
{name:"Thor's Hammer",image:'',theme:themes[0],price:54.99},
{name:'Daily Bugle',image:'',theme:themes[0],price:349.99},
{name:'Carnage',image:'',theme:themes[0],price:54.99},
{name:'Minions Kung Fu Battle',image:'',theme:themes[1],price:39.99},
{name:"Minions in Gru's Lab",image:'',theme:themes[1],price:19.99},
{name:"Brick-built Minions and their Lair",image:'',theme:themes[1],price:49.99},
])

console.log(items)

process.exit();


})();


