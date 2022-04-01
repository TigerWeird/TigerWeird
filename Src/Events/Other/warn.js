const Discord = require('discord.js');

module.exports = async (client, warning) => {
    try {
        logsChannel.send(`> **__Client Warn__**: \`\`\`js\n${warning}\`\`\``);
    } catch (error) {
        console.warn(warning);
    }
}