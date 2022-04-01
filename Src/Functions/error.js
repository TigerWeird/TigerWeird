/* const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });
module.exports = async (msg, content, embeds, components, files, parsed) => {
    if(!msg) return;
    client.channels.cache.get("")
//--------------------------------
    const finalMsg = await msg.reply({ content: content ?? null, 
        embeds: embeds ?? [], 
        components: components ?? [], 
        files: files ?? [], 
        allowedMentions: { parse: parsed ?? [] } 
    }).catch(() => {});
    return finalMsg;
//--------------------------------
} */