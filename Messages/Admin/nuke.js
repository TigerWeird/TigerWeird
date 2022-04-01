const Discord = require("discord.js");
const { ev, er } = require("../../Src/Json/used.json");

module.exports = {
  name: "nuke",
  alias: [],
  botPerms: ["MANAGE_CHANNELS"],
  userPerms: ["MANAGE_CHANNELS"],

async execute (client, message, args, guildC, reply, editReply, send) {

  const channelPosition = message.channel.position;
//---------------------------------
  const clone = async (msg) => {
    await message.channel.clone().then(async canal => {
      await canal.setPosition(channelPosition).catch(() => {});
      await message.channel.delete().catch(() => {});

      canal.send({ content: ev + `*${msg} \`${message.author.tag}\`*` }).catch(() => {});
    }).catch(() => {});
  }

//------------------------------------------------------------------------
  if(guildC?.config?.lang == "en") {
    await reply(message, er + "*All messages in the channel will be deleted in a few seconds!*");

    setTimeout(async () => {
      await clone("Channel nuked by").catch(() => {})
    }, 3000);
  } else 
//------------------------------------------------------------------------
  if(guildC?.config?.lang == "es"){
    await reply(message, er + "*Todos los mensajes del canal serán borrados en unos segundos!*");

    setTimeout(async () => {
      await clone("Canal nukeado por").catch(() => {})
    }, 3000);
  }
//------------------------------------------------------------------------
  }
}