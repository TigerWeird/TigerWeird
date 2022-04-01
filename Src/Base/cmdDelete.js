const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });
const fs = require("fs");
client.commands = new Discord.Collection();
client.cmds = new Discord.Collection();
client.context = new Discord.Collection();

//-------------------------------------
fs.readdirSync("../../Messages").forEach(async(categorys) => {
    const commandFiles = fs.readdirSync(`../../Messages/${categorys}`)
    .filter((archivo) => archivo.endsWith(".js"));
    for(const archivo of commandFiles) {
        delete require.cache[require.resolve(`../../Messages/${categorys}/${archivo}`)];
        console.log(`(!) | ${archivo} descargado correctamente.`);
    }
});
//-------------------------------------
fs.readdirSync("../Commands").forEach(async(categorys) => {
    const commandFiles = fs.readdirSync(`../Commands/${categorys}`)
    .filter((archivo) => archivo.endsWith(".js"));
    for(const archivo of commandFiles) {
        delete require.cache[require.resolve(`../Commands/${categorys}/${archivo}`)];
        console.log(`(/) | ${archivo} descargado correctamente.`);
    }
});
//-------------------------------------
fs.readdirSync("../Context").forEach(async(categorys) => {
    const commandFiles = fs.readdirSync(`../Context/${categorys}`)
    .filter((archivo) => archivo.endsWith(".js"));
    for(const archivo of commandFiles) {
        delete require.cache[require.resolve(`../Context/${categorys}/${archivo}`)];
        console.log(`(C) | ${archivo} descargado correctamente.`);
    }
});
//-------------------------------------
fs.readdirSync("../Events").forEach(async(category) => {
    const eventFiles = fs.readdirSync(`../Events/${category}`)
    .filter((file) => file.endsWith(".js"));
    for(const file of eventFiles) {
        delete require.cache[require.resolve(`../Events/${category}/${file}`)];
        console.log(`(E) | ${archivo} descargado correctamente.`);
    }
});