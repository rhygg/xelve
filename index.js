const Discord = require("discord.js");
const Xelve = require("./handler/ClientBuilder.js");
const client = new Xelve();

require("./handler/module.js")(client);
require("./handler/Event.js")(client);

require('dotenv').config(); // npm install dotenv

client.package = require("./package.json");
client.on("warn", console.warn); 
client.on("error", console.error);
client.login(process.env.TOKEN).catch(console.error);
