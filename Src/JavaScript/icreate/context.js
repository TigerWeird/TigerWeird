const ctxmenu = async (Discord, client, interaction, guildC, devC, err, ev, ee) => {
//--------------------------------------------------------------------------------
    if(interaction.isContextMenu()){
        const command = client.context.get(interaction.commandName);
        if(!command) return;
//--------------------------------------------------------------------------------
        const evnt = async () => {
            try {
                await command.execute(client, interaction);
            } catch (error) {
                return client.channels.cache.get("857363044055908362").send({ embeds: [err
                    .addField("➮ | Info:", `- **__Command__**: \`${interaction.commandName}\`
- **__GuildID__**: \`${interaction.guild.id}\`\n- **__UserID__**: \`${interaction.user.id}\``, false)
                    .addField("➮ | Error:", `\`\`\`js\n${error}\`\`\``, false)
                ] });
            }
        }
//-------------------------------------------------------------
        if(devC?.config?.devList?.includes(interaction.user.id)) return evnt();
        if(devC?.config?.blacklist(interaction.user.id)?.bTed == true) {
            let rpen = ee + `I'm sorry, you can't use me. :(\nReason: \`You've got blacklisted\`.\nYou've any question?
            > Join at our support server: https://discord.gg/uZDNSxSPcV`;
            let rpes = ee + `Lo siento, no puedes usarme. :(\nMotivo: \`Te encuentras blacklisteado\`.\n¿Tienes alguna duda?
            > Únete a nuestro servidor de soporte: https://discord.gg/uZDNSxSPcV`;
            if(guildC?.config?.lang == "en") { return interaction.reply({ content: rpen, ephemeral: true }); } else 
            if(guildC?.config?.lang == "es") { return interaction.reply({ content: rpes, ephemeral: true }); }
        } else { 
            if(maintenance?.mMode == true) {
                let rpen = ee + `I'm sorry, you can't use me. :(\nReason: \`I'm under maintenance\`.\nYou've any question?
                > Join at our support server: https://discord.gg/uZDNSxSPcV`;
                let rpes = ee + `Lo siento, no puedes usarme. :(\nMotivo: \`Estoy en mantenimiento\`.\n¿Tienes alguna duda?
                > Únete a nuestro servidor de soporte: https://discord.gg/uZDNSxSPcV`;
                if(guildC?.config?.lang == "en") { return interaction.reply({ content: rpen, ephemeral: true }); } else 
                if(guildC?.config?.lang == "es") { return interaction.reply({ content: rpes, ephemeral: true }); }
            } else { return evnt(); }
        }
//--------------------------------------------------------------------------------
    }
}
//--------------------------------------------------------------------------------   Export
module.exports = {
    ctxmenu
}