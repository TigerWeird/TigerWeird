const Discord = require("discord.js");
const { ev, wrongEn, wrongEs } = require("../../Src/Json/used.json")

module.exports = {
  name: "kickcall",
  alias: ["voicekick", "kickvoice"],
  botPerms: ["MOVE_MEMBERS"],
  userPerms: ["MOVE_MEMBERS"],

async execute (client, message, args, guildC, reply, editReply, send) {

  const member = message.mentions.members.first();
  const user = message.mentions.users.first();
  const reason = args.slice(1).join(" ");
  const userResolve = message.guild.members?.resolve(user?.id);
  const guildOwner = (await message.guild.fetchOwner());
  //---------------------------------
  const channel = guildC?.config?.sanctions;
  const canal = client.channels.cache.get(channel);
  const userVoiceChannel = member.voice.channel?.id
  //---------------------------------
  const ownerPerms = !userResolve || user.id == message.author.id || user.id == client.user.id || 
  message.guild.members.cache.get(client.user.id).roles.highest.rawPosition <= member.roles.highest.rawPosition || 
  !member.voice.channel;
  //---------------------------------
  const noOwnerPerms = ownerPerms || user.id == guildOwner.user.id || 
  message.member.roles.highest.rawPosition <= member.roles.highest.rawPosition;
  //---------------------------------
  const embed = new Discord.MessageEmbed()
  .setAuthor({ name: message.author.tag, iconURL: message.author.displayAvatarURL()})
  .setColor("YELLOW")
  .setTimestamp()
  .setFooter({ text: `Staff ID: ${message.author.id}.` })

//------------------------------------------------------------------------
  if(guildC?.config?.lang == "en") {
    if(message.author.id == guildOwner.user.id) {
      if(ownerPerms) return await reply(message, 
        wrongEn + `\`You must mention a valid user to kick from their voice channel\`.`);
    } else {
      if(noOwnerPerms) return await reply(message, 
        wrongEn + `\`You must mention a valid user to kick from their voice channel\`.`);
    }
    //----------------------------------------------------------
    user.send(message, `> You have been kicked from your voice channel in \`${message.guild.name}\`.
- **__Staff__**: \`${message.author.tag}\`.\n- **__Reason__**: \`${reason ?? "Unspecified"}\`.`).catch(() => {});

    member.voice.disconnect(`${message.author.tag} - ${reason ?? "Unspecified"}.`).catch(() => {});
    await reply(message, ev + `*\`${user.tag}\` has been kicked from <#${userVoiceChannel}>.*
- **__Reason__**: \`${reason ?? "Unspecified"}\`.` );
    //----------------------------------------------------------
    if(!message.guild.channels?.resolve(channel) || 
    !canal.permissionsFor(client.user.id).has(["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"])) return;

    canal.send({ embeds: [embed
      .setDescription(`➮ | Member:\n- **__ID__**: \`${user.id}\`.
- **__Tag__**: \`${user.tag}\`.\n\n➮ | Details:- **__Sanction__**: \`Voice Kick\`.
- **__Reason__**: \`${reason ?? "Unspecified"}\`.`)
      .setThumbnail(user.displayAvatarURL())
    ] });
    //----------------------------------------------------------
  } else 
//------------------------------------------------------------------------
  if(guildC?.config?.lang == "es"){
    if(message.author.id == guildOwner.user.id) {
      if(ownerPerms) return await reply(message, 
        wrongEs + `\`Debes mencionar a un usuario válido para expulsar de su canal de voz\`.`);
    } else {
      if(noOwnerPerms) return await reply(message, 
        wrongEs + `\`Debes mencionar a un usuario válido para expulsar de su canal de voz\`.`);
    }
    //----------------------------------------------------------
    user.send(message, `> Has sido expulsado de tu canal de voz en \`${message.guild.name}\`.
- **__Staff__**: \`${message.author.tag}\`.\n- **__Motivo__**: \`${reason ?? "Sin especificar"}\`.` ).catch(() => {});

    member.voice.disconnect(`${message.author.tag} - ${reason ?? "Sin especificar"}.`).catch(() => {});
    await reply(message, ev + `*\`${user.tag}\` ha sido expulsado de <#${userVoiceChannel}>.*
- **__Motivo__**: \`${reason ?? "Sin especificar"}\`.` );
    //----------------------------------------------------------
    if(!message.guild.channels?.resolve(channel) || 
    !canal.permissionsFor(client.user.id).has(["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"])) return;

    canal.send({ embeds: [embed
      .setDescription(`➮ | Miembro:\n- **__ID__**: \`${user.id}\`.
- **__Tag__**: \`${user.tag}\`.\n\n➮ | Detalles:- **__Sanción__**: \`Voice Kick\`.
- **__Motivo__**: \`${reason ?? "Sin especificar"}\`.`)
      .setThumbnail(user.displayAvatarURL())
    ] });
    //----------------------------------------------------------
  }
//------------------------------------------------------------------------
  }
}