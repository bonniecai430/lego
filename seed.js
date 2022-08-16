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
    { name: "Harry Potter™", sortOrder: 50 },
    { name: "Star War™", sortOrder: 60 },
    { name: "NINJAGO®", sortOrder: 70 },
    { name: "Frozen", sortOrder: 80 },
    { name: "LEGO®Art", sortOrder: 90 },
    { name: "LEGO®ICONS™", sortOrder: 100 },
  ]);

  await Item.deleteMany({});
const items = await Item.create([
{name:'Nano Gauntlet',image:"https://tinyurl.com/mry78kh2",theme:themes[0],price:69.99},
{name:"Thor's Hammer",image:"https://tinyurl.com/4ra4hzm7",theme:themes[0],price:54.99},
{name:'Daily Bugle',image:"https://tinyurl.com/y64rzkp6",theme:themes[0],price:349.99},
{name:'Carnage',image:"https://tinyurl.com/bn5xzkwz",theme:themes[0],price:54.99},
{name:'Minions Kung Fu Battle',image:"https://tinyurl.com/t32b4764",theme:themes[1],price:39.99},
{name:"Minions in Gru's Lab",image:"https://tinyurl.com/5c63tkf3",theme:themes[1],price:19.99},
{name:"Brick-built Minions and their Lair",image:"https://tinyurl.com/5n7kwhfu",theme:themes[1],price:49.99},
{name:"Space Ride Amusement Truck",image:"https://tinyurl.com/mwj6288a",theme:themes[2],price:34.99},
{name:"Police Station",image:"https://tinyurl.com/2p8z659f",theme:themes[2],price:89.99},
{name:"Hospital",image:"https://tinyurl.com/59ektbdw",theme:themes[2],price:89.99},
{name:"The Disney Castle",image:"https://tinyurl.com/4f2xsntc",theme:themes[3],price:309.99},
{name:"Mickey Mouse & Minnie Mouse Buildable Characters",image:"https://tinyurl.com/bdjpvv5y",theme:themes[3],price:159.99},
{name:"Woody and Bo Peep",image:"https://tinyurl.com/yf9z7n5k",theme:themes[3],price:17.99},
{name:"Hogwarts™ Icons - Collectors' Edition",image:"https://tinyurl.com/yeynmj3m",theme:themes[4],price:219.99},
{name:"Harry Potter & Hermione Granger™",image:"https://tinyurl.com/mtady34f",theme:themes[4],price:114.99},
{name:"Inquisitor Transport Scythe™",image:"https://tinyurl.com/224n2xwf",theme:themes[5],price:89.99},
{name:"Obi-Wan Kenobi™ & Darth Vader™",image:"https://tinyurl.com/4xtb5m2f",theme:themes[5],price:17.99},
{name:"Temple of the Endless Sea",image:"https://tinyurl.com/4x37njrx",theme:themes[6],price:99.99},
{name:"Kai’s Golden Dragon Raider",image:"https://tinyurl.com/2p8fxu9b",theme:themes[6],price:74.99},
{name:"Elsa's Wagon Adventure",image:"https://tinyurl.com/2z96zywu",theme:themes[7],price:24.99},
{name:"LEGO® ǀ Disney Frozen 2 Elsa Keyring",image:"https://tinyurl.com/3u9ctukp",theme:themes[7],price:4.99},
{name:"World Map",image:"https://tinyurl.com/2p9x7jd2",theme:themes[8],price:219.99},
{name:"Old Trafford - Manchester United",image:"https://tinyurl.com/2h6yrjy4",theme:themes[9],price:244.99},
])

console.log(items)

process.exit();


})();


