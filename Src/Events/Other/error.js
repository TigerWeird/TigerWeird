const Discord = require('discord.js');

module.exports = async (client, err) => {
    try {
        logsChannel.send(`> **__Client Error__**: \`\`\`js\n${err}\`\`\``);
    } catch (error) {
        console.warn(warning);
    }
}