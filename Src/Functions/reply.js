module.exports = async (msg, content, embeds, components, files, parsed) => {
    if(!msg) return;
//--------------------------------
    const finalMsg = await msg.reply({ content: content ?? null, 
        embeds: embeds ?? [], 
        components: components ?? [], 
        files: files ?? [], 
        allowedMentions: { parse: parsed ?? [] } 
    }).catch(() => {});
    return finalMsg;
//--------------------------------
}