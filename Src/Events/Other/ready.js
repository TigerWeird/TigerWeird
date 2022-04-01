const Discord = require('discord.js');

module.exports = async (client) => {

    const estados = [`${client.guilds.cache.size} servers! ✨ | k!help`]

    await client.user.setActivity(estados[0], {
        type: "WATCHING",
    })

    console.log(`» (R) - ${client.user.username} is ready.`)
}