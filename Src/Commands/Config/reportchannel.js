const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ee, ev, noPermsEn, noPermsEs } = require("../../Json/used.json");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("reportchannel")
  .setDescription("Establish the channel where the reports will be sent.")
  .addChannelOption(option => option.setName("channel").setDescription("Channel where the reports will be sent.").setRequired(true) ),

async execute(client, interaction, guildC) {

  const canal = interaction.options.getChannel("channel");
  const perms = interaction.member.permissions.has("MANAGE_CHANNELS");
  //---------------------------------
  const channelIsText = canal.isText();
  const permsFor = canal.permissionsFor(interaction.guild.me).has("VIEW_CHANNEL");
  const permsFor2 = canal.permissionsFor(interaction.guild.me).has("SEND_MESSAGES");
  const permsFor3 = canal.permissionsFor(interaction.guild.me).has("EMBED_LINKS");


//------------------------------------------------------------------------
  if(guildC?.config?.lang == "en") {
    if(!perms) return interaction.reply({ content: noPermsEn.noPerms + `\`Manage Channels\`.`, ephemeral: true });
    if(!channelIsText) return interaction.reply({ content: ee + "\`You must mention a valid channel to send the reports\`.", ephemeral: true });
    //-----------------------------------------------------
    if(!permsFor) return interaction.reply({ content: 
      ee + `I need \`View Channel\` permission on channel <#${canal.id}> to run this command.`, ephemeral: true });
    if(!permsFor2) return interaction.reply({ content: 
      ee + `I need \`Send Messages\` permission on channel <#${canal.id}> to run this command.`, ephemeral: true });
    if(!permsFor3) return interaction.reply({ content: 
      ee + `I need \`Embed Links\` permission on channel <#${canal.id}> to run this command.`, ephemeral: true });
    //-----------------------------------------------------
    guildC.config.reports = canal.id;
    await guildC.save();
    interaction.reply({ content: ev + `*Now the reports will be sent to <#${canal.id}>! <3*` });
  } else 
//------------------------------------------------------------------------
  if(guildC?.config?.lang == "es"){
    if(!perms) return interaction.reply({ content: noPermsEs.noPerms + `\`Manage Channels\`.`, ephemeral: true });
    if(!channelIsText) return interaction.reply({ content: ee + "\`Debes mencionar un canal válido para enviar los reportes\`.", ephemeral: true });
    //-----------------------------------------------------
    if(!permsFor) return interaction.reply({ content: 
      ee + `Necesito el permiso \`View Channel\` en el canal <#${canal.id}> para ejecutar este comando.`, ephemeral: true });
    if(!permsFor2) return interaction.reply({ content: 
      ee + `Necesito el permiso \`Send Messages\` en el canal <#${canal.id}> para ejecutar este comando.`, ephemeral: true });
    if(!permsFor3) return interaction.reply({ content: 
      ee + `Necesito el permiso \`Embed Links\` en el canal <#${canal.id}> para ejecutar este comando.`, ephemeral: true });
    //-----------------------------------------------------
    guildC.config.reports = canal.id;
    await guildC.save();
    interaction.reply({ content: ev + `*Ahora los reportes se enviarán a <#${canal.id}>! <3*` });
  }
//------------------------------------------------------------------------
  }
}