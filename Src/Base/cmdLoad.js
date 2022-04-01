const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });
const fs = require("fs");
client.commands = new Discord.Collection();
client.cmds = new Discord.Collection();
client.context = new Discord.Collection();
const context = [];

//---------------------------------- (!) Handler
fs.readdirSync("../../Messages").forEach(async(categorys) => {
    const commandFiles = fs.readdirSync(`../../Messages/${categorys}`)
    .filter((archivo) => archivo.endsWith(".js"))
    for(const archivo of commandFiles) {
        const cmd = require(`../../Messages/${categorys}/${archivo}`)
        client.cmds.set(cmd.name, cmd)
        console.log(`(!) | ${archivo} cargó correctamente.`)
    }
})
//---------------------------------- (/) Handler
fs.readdirSync("../Commands").forEach(async(categorys) => {
    const commandFiles = fs.readdirSync(`../Commands/${categorys}`)
    .filter((archivo) => archivo.endsWith(".js"))
    for(const archivo of commandFiles) {
        const command = require(`../Commands/${categorys}/${archivo}`)
        client.commands.set(command.data.name, command)
        console.log(`(/) | ${archivo} cargó correctamente.`)
    }
})
//---------------------------------- (C) Handler
fs.readdirSync("../Context").forEach(async(categorys) => {
    const commandFiles = fs.readdirSync(`../Context/${categorys}`)
    .filter((archivo) => archivo.endsWith(".js"))
    for(const archivo of commandFiles) {
        const ctx = require(`../Context/${categorys}/${archivo}`);
        client.context.set(ctx.name, ctx);
        context.push(ctx);
        console.log(`(C) | ${archivo} cargó correctamente`)
        await client.application.commands.set(context);
    }
})
//---------------------------------- (E) Handler
fs.readdirSync("../Events").forEach(async(category) => {
    const eventFiles = fs.readdirSync(`../Events/${category}`)
    .filter((file) => file.endsWith(".js"))
    for(const file of eventFiles) {
        let fileName = file.substring(0, file.length - 3)
        let fileContents = require(`../Events/${category}/${file}`)
        client.on(fileName, fileContents.bind(null, client))
        console.log(`(E) | ${file} cargado correctamente.`)
    }
})
console.log(`(R) | ${client.user.tag} Relodeado correctamente`)