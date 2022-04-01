const Discord = require("discord.js");
const { ev, wrongEn, wrongEs } = require("../../Src/Json/used.json");

module.exports = {
  name: "kick",
  alias: ["kickear", "expulsar"],
  botPerms: ["KICK_MEMBERS"],
  userPerms: ["KICK_MEMBERS"],

async execute (client, message, args, guildC, reply, editReply, send) {

  const member = message.mentions.members.first();
  const user = message.mentions.users.first();
  const reason = args.slice(1).join(" ");
  const userResolve = message.guild.members?.resolve(user?.id);
  const guildOwner = (await message.guild.fetchOwner());
  //---------------------------------
  const channel = guildC?.config?.sanctions;
  const canal = client.channels.cache.get(channel);
  //---------------------------------
  const ownerPerms = !userResolve || user?.id == message.author.id || user?.id == client.user.id || 
  message.guild.members.cache.get(client.user.id).roles.highest.rawPosition <= member?.roles?.highest?.rawPosition;
  //---------------------------------
  const noOwnerPerms = ownerPerms || user?.id == guildOwner.user.id || 
  message.member.roles.highest.rawPosition <= member?.roles?.highest?.rawPosition;
  //---------------------------------
  const embed = new Discord.MessageEmbed()
  .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL()})
  .setColor("ORANGE")
  .setTimestamp()
  .setFooter({ text: `Staff ID: ${message.author.id}.` })

//------------------------------------------------------------------------
  if(guildC?.config?.lang == "en") {
    if(interaction.user.id == guildOwner.user.id) {
      if(ownerPerms) return await reply(message, wrongEn + `\`You must mention a valid user to kick\`.`);
    } else {
      if(noOwnerPerms) return await reply(message, wrongEn + `\`You must mention a valid user to kick\`.`);
    }
    //----------------------------------------------------------
    user.send({ content: `> You have been kicked from \`${interaction.guild.name}\`.
- **__Staff__**: \`${interaction.user.tag}\`.\n- **__Reason__**: \`${reason ?? "Unspecified"}\`.` }).catch(() => {});

    interaction.guild.members.kick(member, { reason: `${interaction.user.tag} - ${reason ?? "Unspecified"}.` }).catch(() => {});
    await reply(message, ev + `*\`${user.tag}\` has been kicked from the server!*
- **__Reason__**: \`${reason ?? "Unspecified"}\`.`);
    //----------------------------------------------------------
    if(!interaction.guild.channels?.resolve(channel) || 
      !canal?.permissionsFor(client.user.id)?.has(["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"])) return;

    canal.send({ embeds: [embed
      .setDescription(`➮ | Member:\n- **__ID__**: \`${user.id}\`.
- **__Tag__**: \`${user.tag}\`.\n\n➮ | Details:- **__Sanction__**: \`Kick\`.
- **__Reason__**: \`${reason ?? "Unspecified"}\`.`)
      .setThumbnail(user.displayAvatarURL())
    ] }).catch(() => {});
    //----------------------------------------------------------
  }
//------------------------------------------------------------------------
  if(guildC?.config?.lang == "es"){
    if(interaction.user.id == guildOwner.user.id) {
      if(ownerPerms) return await reply(message, wrongEs + `\`Debes mencionar a un usuario válido para expulsar\`.`);
    } else {
      if(noOwnerPerms) return await reply(message, wrongEs + `\`Debes mencionar a un usuario válido para expulsar\`.`);
    }
    //----------------------------------------------------------
    user.send({ content: `> Has sido expulsado de \`${interaction.guild.name}\`.
- **__Staff__**: \`${interaction.user.tag}\`.\n- **__Motivo__**: \`${reason ?? "Sin especificar"}\`.` }).catch(() => {});

    message.guild.members.kick(member, { reason: `${interaction.user.tag} - ${reason ?? "Sin especificar"}.` }).catch(() => {});
    await reply(message, ev + `*\`${user.tag}\` ha sido expulsado del servidor!*
- **__Motivo__**: \`${reason ?? "Sin especificar"}\`.`);
    //----------------------------------------------------------
    if(!interaction.guild.channels?.resolve(channel) || 
      !canal?.permissionsFor(client.user.id)?.has(["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"])) return;

    canal.send({ embeds: [embed
      .setDescription(`➮ | Miembro:\n- **__ID__**: \`${user.id}\`.
- **__Tag__**: \`${user.tag}\`.\n\n➮ | Detalles:- **__Sanción__**: \`Kick\`.
- **__Motivo__**: \`${reason ?? "Sin especificar"}\`.`)
      .setThumbnail(user.displayAvatarURL())
    ] }).catch(() => {});
    //----------------------------------------------------------
  }
//------------------------------------------------------------------------
 }
}