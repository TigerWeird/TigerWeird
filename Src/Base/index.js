const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });
const mongoHandler = require("../Handlers/mongoHandler");
const processHandler = require("../Handlers/processHandler");
const commandHandler = require("../Handlers/cmdHandler");
require("dotenv").config();

if(!process.env.TOKEN) {
    console.log(`[ENV] Missing process.env.TOKEN\nShutting Down...`);
} else
if(!process.env.MONGO) {
    console.log(`[ENV] Missing process.env.MONGO\nShutting Down...`);
} else {
    mongoHandler.mongoHandler(Discord, client);
    commandHandler.commandHandler(Discord, client);
    //------------------------------------ Login
    client.login(process.env.TOKEN);
    // processHandler.processHandler(Discord, client);
}