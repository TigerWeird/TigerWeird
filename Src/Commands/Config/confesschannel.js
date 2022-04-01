const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ev, noPermsEn, noPermsEs, wrongEn, wrongEs } = require("../../Json/used.json");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("confessionchannel")
  .setDescription("Set the channel to send the confessions.")
  .addChannelOption(option => option.setName("channel").setDescription("The channel where the confessions will be sent.").setRequired(true) ),

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
    if(!channelIsText) return interaction.reply({ content: wrongEn + "\`You must mention a valid channel to send the confessions\`.", ephemeral: true });
    //---------------------------------------------------------
    if(!permsFor) return interaction.reply({ content: 
      wrongEn + `I need \`View Channel\` permission on channel <#${canal.id}> to run this command.`, ephemeral: true });
    if(!permsFor2) return interaction.reply({ content: 
      wrongEn + `I need \`Send Messages\` permission on channel <#${canal.id}> to run this command.`, ephemeral: true });
    if(!permsFor3) return interaction.reply({ content: 
      wrongEn + `I need \`Embed Links\` permission on channel <#${canal.id}> to run this command.`, ephemeral: true });
    //---------------------------------------------------------
    guildC.config.confessions = canal.id;
    await guildC.save();
    interaction.reply({ content: ev + `*Now the confessions will be sent to <#${canal.id}>! <3*` });
  } else 
//------------------------------------------------------------------------
  if(guildC?.config?.lang == "es"){
    if(!perms) return interaction.reply({ content: noPermsEs.noPerms + `\`Manage Channels\`.`, ephemeral: true });
    if(!channelIsText) return interaction.reply({ content: wrongEs + "\`Debes mencionar un canal válido para enviar las confesiones\`.", ephemeral: true });
      //---------------------------------------------------------
    if(!permsFor) return interaction.reply({ content: 
      wrongEs + `Necesito el permiso \`View Channel\` en el canal <#${canal.id}> para ejecutar este comando.`, ephemeral: true });
    if(!permsFor2) return interaction.reply({ content: 
      wrongEs + `Necesito el permiso \`Send Messages\` en el canal <#${canal.id}> para ejecutar este comando.`, ephemeral: true });
    if(!permsFor3) return interaction.reply({ content: 
      wrongEs + `Necesito el permiso \`Embed Links\` en el canal <#${canal.id}> para ejecutar este comando.`, ephemeral: true });
    //---------------------------------------------------------
    guildC.config.confessions = canal.id;
    await guildC.save();
    interaction.reply({ content: ev + `*Ahora todas las confesiones serán enviadas a <#${canal.id}>! <3*` });
  }
//------------------------------------------------------------------------
  }
}