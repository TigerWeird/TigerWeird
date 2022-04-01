const Discord = require('discord.js');
const devConfig = require("../../Models/devConfig.js");
const { er, ee, ev, noPermsEn, noPermsEs, wrongEn, wrongEs } = require('../../Json/used.json');
const guildConfig = require("../../Models/guildConfig.js");
const reply = require("../../Functions/reply.js");
const editReply = require("../../Functions/editReply.js");
const send = require("../../Functions/editReply.js");

module.exports = async (client, message) => {

  const devC = await devConfig.findOne({ clientID: client.user.id });
  const guildC = await guildConfig.findOne({ guildID: message.guild.id });
  const prefix = "z!"; // guildC?.config?.prefix;
  if(message.author.bot || !message.guild || !message.content.startsWith(prefix)) return;
  if(!message.channel.permissionsFor(client.user.id).has(["VIEW_CHANNEL", "SEND_MESSAGES"])) return;

//--------------------------------------------------------------------------------
  const evnt = async () => {
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = client.cmds.find((c) => c.name == command || c.alias && c.alias.includes(command));
    let missingBotPerms = [];
    let missingUserPerms = [];
    let botPerms = cmd.botPerms ?? [];
    let userPerms = cmd.userPerms ?? [];

    if(!cmd) return;
    if(!devC) {
      const devConfiguration = new devConfig({ clientID: client.user.id });
      await devConfiguration.save();
    }
    // ----------------------------------------
    const handlerPerms = async (type, array, msg) => {
      if(type.length >= 1) {
        for(let i = 0; i < type; i++){
          if(!message.member.permissions.has(type[i])) array.push(`${type[i]}`);
        }
          return reply(message, `${msg}\`${type.join("\`, \`")}\`.`);
      }
    }
    if(!message.member.permissions.has(userPerms)) {
      return await handlerPerms(cmd.userPerms, missingUserPerms, noPermsEn.noPerms);
    } else {
    try {
      await cmd.execute(client, message, args, guildC, reply, editReply, send);
    } catch (error) {
      if(guildC?.config?.lang == "en") { await reply(message, wrongEn + `\`Error al ejecutar el comando\`.`); } else 
      if(guildC?.config?.lang == "es") { await reply(message, wrongEs + `\`Error al ejecutar el comando\`.`); }

      client.channels.cache.get("857363044055908362").send({ content: `> (!) Command error in \`${message.guild.name}\` (\`${message.guild.id}\`)
- **__Author__**: \`${message.author.tag}\` (\`${message.author.id}\`)\n- **__Command__**: \`${cmd.name}\`
- **__Mensaje__**: ${message.content}\n- **__Error__**: \`\`\`js\n${error}\`\`\``
      });
      return;
    }
  }
  // ----------------------------------------
  }
//-------------------------------------------------------------
  if(!guildC) {
    const guildConfiguration = new guildConfig({ guildID: message.guild.id });
    await reply(message, er + "*Wait a minute, I'm configuring me in this server...*")
    .then(async msg => {
      await guildConfiguration.save();
      setTimeout(async () => {
        await editReply(msg, ev + "*Done! I've got successfully configured in this server! <3*");
      }, 3000);
    });
  } else {
//-------------------------------------------------------------
    if(devC?.config?.devList?.includes(message.author.id)) return evnt();
    //-------------------------------------------
    const canUseMeEn = ee + `I'm sorry, you can't use me now. :(
      > **__Reason__**: `;
    const canUseMeEs = ee + `Lo siento, no puedes usarme ahora. :(
      > **__Motivo__**: `;
      //-------------------------------
    const dudasEn = `➮ **| You've any question?**
      > \`Support Server\`: https://discord.gg/uZDNSxSPcV`;
    const dudasEs = `➮ **| ¿Tienes alguna duda?**
      > \`Servidor de Soporte\`: https://discord.gg/uZDNSxSPcV`;
    //-------------------------------------------
    if(devConfig?.config?.blacklist?.message.author.id?.blacklisted == true) {
      const blacklistReason = devC?.config?.blacklist?.message.author.id?.blacklistReason
      const blacklistEn = canUseMeEn + `\`Blacklist\` (\`${blacklistReason}\`).\n${dudasEn}`;
      const blacklistEs = canUseMeEs + `\`Blacklist\` (\`${blacklistReason}\`).\n${dudasEs}`;
      if(guildC?.config?.lang == "en") { await reply(message, blacklistEn); } else 
      if(guildC?.config?.lang == "es") { await reply(message, blacklistEs); }
      return;
    }
    if(devC?.config?.maintenance == true) {
      const maintenanceEn = canUseMeEn + `\`Maintenance\`.\n${dudasEn}`;
      const maintenanceEs = canUseMeEs + `\`Mantenimiento\`.\n${dudasEs}`;
      if(guildC?.config?.lang == "en") { await reply(message, maintenanceEn); } else
      if(guildC?.config?.lang == "es") { await reply(message, maintenanceEs); }
      return;
    } else { return evnt(); }
  }
//--------------------------------------------------------------------------------
}