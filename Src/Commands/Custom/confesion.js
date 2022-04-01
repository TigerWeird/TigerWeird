const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ev, wrongEn, wrongEs } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("confesion")
    .setDescription("Make a secret confession.")
    .addStringOption(option => option.setName("confesion").setDescription("What you want to confess.").setRequired(true) ),

async execute(client, interaction, guildC) {

    const confesion = interaction.options.getString("confesion");
    const confessionChannel = guildC?.config?.confessions;
    const canal = client.channels.cache?.get(confessionChannel);
    const permsFor = canal.permissionsFor(interaction.guild.me).has("VIEW_CHANNEL");
    const permsFor2 = canal.permissionsFor(interaction.guild.me).has("SEND_MESSAGES");
    const permsFor3 = canal.permissionsFor(interaction.guild.me).has("EMBED_LINKS");
    const embed = new Discord.MessageEmbed()
    .setDescription(`\`\`\`> ${confesion}\`\`\``)
    .setTimestamp()
    .setColor("RANDOM")

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        if(!canal) return interaction.reply({ content: wrongEn + `\`This server does not have a confession channel\`.`, ephemeral: true });
        //-----------------------------------------------------------
        if(!permsFor) return interaction.reply({ content: 
            wrongEn + `I need \`View Channel\` permission on channel <#${canal.id}> to run this command.`, ephemeral: true });
        if(!permsFor2) return interaction.reply({ content: 
            wrongEn + `I need \`Send Messages\` permission on channel <#${canal.id}> to run this command.`, ephemeral: true });
        if(!permsFor3) return interaction.reply({ content: 
            wrongEn + `I need \`Embed Links\` permission on channel <#${canal.id}> to run this command.`, ephemeral: true });
        if(confesion.length >= 1024) return interaction.reply({ content: wrongEn + "\`You cannot send more than 1024 characters\`.", ephemeral: true });
        //-----------------------------------------------------------
        canal.send({ embeds: [embed
            .setTitle(`\`Anonymous\` confess:`)
            .setFooter({ text: `By: Anonymous` })
        ] }).catch(() => {});
        interaction.reply({ content: ev + "*Your confession was sent correctly! <3*", ephemeral: true });
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        if(!canal) return interaction.reply({ content: wrongEs + `\`Este servidor no tiene canal de confesiones\`.`, ephemeral: true });
        //-----------------------------------------------------------
        if(!permsFor) return interaction.reply({ content: 
            wrongEs + `Necesito el permiso \`View Channel\` en el canal <#${canal.id}> para ejecutar este comando.`, ephemeral: true });
        if(!permsFor2) return interaction.reply({ content: 
            wrongEs + `Necesito el permiso \`Send Messages\` en el canal <#${canal.id}> para ejecutar este comando.`, ephemeral: true });
        if(!permsFor3) return interaction.reply({ content: 
            wrongEs + `Necesito el permiso \`Embed Links\` en el canal <#${canal.id}> para ejecutar este comando.`, ephemeral: true });
        if(confesion.length >= 1024) return interaction.reply({ content: wrongEs + "\`No puedes enviar más de 1024 caracteres\`.", ephemeral: true });
        //-----------------------------------------------------------
        canal.send({ embeds: [embed
            .setTitle(`\`Anónimo\` confiesa:`)
            .setFooter({ text: `Por: Anónimo` })
        ] }).catch(() => {});
        interaction.reply({ content: ev + "*Tu confesión fue enviada correctamente! <3*", ephemeral: true });
    }
//------------------------------------------------------------------------
    }
}