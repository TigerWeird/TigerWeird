const Discord = require("discord.js");
const { ev, wrongEn, wrongEs } = require("../../Src/Json/used.json");

module.exports = {
  name: "unban",
  alias: ["ub", "unbanear", "desbanear", "pardon"],
  botPerms: ["BAN_MEMBERS"],
  userPerms: ["BAN_MEMBERS"],

async execute (client, message, args) {

  const user = args[0];
  const reason = args.slice(1).join(" ");
  const userFetched = await client.users?.fetch(user);
  //---------------------------------
  const channel = guildC?.config?.sanctions;
  const canal = client.channels.cache.get(channel);
  //---------------------------------
  const embed = new Discord.MessageEmbed()
  .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL()})
  .setColor("GREEN")
  .setTimestamp()
  .setFooter({ text: `Staff ID: ${message.author.id}.` })

//------------------------------------------------------------------------
  if(guildC?.config?.lang == "en") {
    message.guild.bans.fetch().then(async bans => {
      if(bans.size == 0) return await reply(message, wrongEn + `\`This server has no active bans\`.`);
      let userBanned = bans.find(e => e.user.id == userFetched);
      if(!userBanned) return await reply(message, wrongEn + `\`You must mention a valid user to unban\`.`);
    });
    //----------------------------------------------------------
    userFetched.send(message, `> You have been unbanned from \`${message.guild.name}\`.
- **__Staff__**: \`${message.author.tag}\`.\n- **__Reason__**: \`${reason ?? "Unspecified"}\`.`).catch(() => {});

    message.guild.members.unban(userFetched.id, { reason: `${message.author.tag} - ${reason ?? "Unspecified"}.` });
    await reply(message, ev + `*\`${userFetched.tag}\` has been unbanned!*
- **__Reason__**: \`${reason ?? "Unspecified"}\`.`);
    //----------------------------------------------------------
    if(!message.guild.channels?.resolve(channel) || 
      !canal.permissionsFor(client.user.id).has(["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"])) return;

    canal.send({ embeds: [embed
      .setDescription(`➮ | Member:\n- **__ID__**: \`${userFetched.id}\`.
- **__Tag__**: \`${userFetched.tag}\`.\n\n➮ | Details:- **__Sanction__**: \`UnBan\`.
- **__Reason__**: \`${reason ?? "Unspecified"}\`.`)
      .setThumbnail(userFetched.displayAvatarURL())
    ] });
    //----------------------------------------------------------
  } else 
//------------------------------------------------------------------------
  if(guildC?.config?.lang == "es"){
      message.guild.bans.fetch().then(async bans => {
      if(bans.size == 0) return await reply(message, wrongEs + `\`Este servidor no tiene ningún ban activo\`.`);
      let userBanned = bans.find(e => e.user.id == userFetched);
      if(!userBanned) return await reply(message, wrongEs + `\`Debes mencionar a un usuario válido para unbanear\`.`)
      });
    //----------------------------------------------------------
    userFetched.send(message, `> Has sido desbaneado de \`${message.guild.name}\`.
- **__Staff__**: \`${message.author.tag}\`.\n- **__Motivo__**: \`${reason ?? "Sin especificar"}\`.`).catch(() => {});

    message.guild.members.unban(userFetched.id, { reason: `${message.author.tag} - ${reason ?? "Unspecified"}.` });
    await reply(message, ev + `*\`${userFetched.tag}\` ha sido desbaneado!*
- **__Motivo__**: \`${reason ?? "Sin especificar"}\`.`);
    //----------------------------------------------------------
    if(!message.guild.channels?.resolve(channel) ||
    !canal.permissionsFor(client.user.id).has(["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"])) return;

    canal.send({ embeds: [embed
      .setDescription(`➮ | Miembro:\n- **__ID__**: \`${userFetched.id}\`.
- **__Tag__**: \`${userFetched.tag}\`.\n\n➮ | Detalles:- **__Sanción__**: \`UnBan\`.
- **__Motivo__**: \`${reason ?? "Sin especificar"}\`.`)
      .setThumbnail(userFetched.displayAvatarURL())
    ] });
    //----------------------------------------------------------
  }
//------------------------------------------------------------------------
  }
}