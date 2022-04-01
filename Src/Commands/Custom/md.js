const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ev, wrongEn, wrongEs } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("dm")
    .setDescription("Send an md to someone with me.")
    .addUserOption(option => option.setName("target").setDescription("Person to send the md.").setRequired(true) )
    .addStringOption(option => option.setName("message").setDescription("Message to send to the person.").setRequired(true) ),

async execute(client, interaction, guildC) {

    const user = interaction.options.getUser("target");
    const msg = interaction.options.getString("message");
    const resolve = interaction.guild.members.resolve(per.id);
    const userFetched = client.users?.fetch(user.id);

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        if(userFetched.bot || !resolve || 
            userFetched.id == interaction.user.id) return interaction.reply({ content: 
                wrongEn + `\`You must mention a valid user to dm\`.`, ephemeral: true});
        if(msg.length >= 1024) return interaction.reply({ content: wrongEn + "\`You cannot send more than 1024 characters\`.", ephemeral: true });
        try {
            userFetched.send({ content: `${msg}\n\n> \`${interaction.user.tag}\`` });
        } catch (e) {
            return interaction.reply({ content: wrongEn + `I can't DM \`${userFetched.tag}\`.`, ephemeral: true });
        }
        interaction.reply({ content: ev + `*I successfully sent the md to \`${userFetched.tag}\`! <3*`, ephemeral: true });
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        if(userFetched.bot || !resolve || 
            userFetched.id == interaction.user.id) return interaction.reply({ content: 
                wrongEs + `\`Debes mencionar a un usuario válido para enviar el md\`.`, ephemeral: true});
        if(msg.length >= 1024) return interaction.reply({ content: wrongEs + "\`No puedes enviar más de 1024 caracteres\`.", ephemeral: true });
        try {
            userFetched.send({ content: `${msg}\n\n> \`${interaction.user.tag}\`` });
        } catch (e) {
            return interaction.reply({ content: wrongEs + `No pude enviarle el md a \`${userFetched.tag}\`.`, ephemeral: true });
        }
        interaction.reply({ content: ev + `*Le envié correctamente el md a \`${userFetched.tag}\`! <3*`, ephemeral: true });
    }
//------------------------------------------------------------------------
    }
}