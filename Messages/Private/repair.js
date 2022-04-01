const Discord = require("discord.js");

module.exports = {
  name: "repair",
  alias: ["rr"],

async execute (client, message, args, guildC, reply, editReply, send) {

  if(message.author.id != "295250573937344514") return;
  if(!message.guild.me.hasPermission("ADMINISTRATOR")) return;
  const emjs = ["⚡", "☄️", "💥", "🌟", "🌿", "🌵", "🌲", "🍁", "✨", "🎑", "🎐", "🎏", "🎋", "🍓", "❄️",
  "🌸", "🥀", "🍄", "🎍", "🍃", "💐", "🌷", "🌴", "🌳", "🌱", "🌼", "🌻", "🌺", "🌾", "💫", "🍇", "🎈",
  "🏮", "🎉", "🔅", "🧺", "🎁", "🎀", "🎎", "🧧", "🕯️", "🌁", "🌇", "🌄", "🛤️", "🌌", "🍒", "☘️", "🍂",
  "🐚", "🧸"]
  const impor = ["bienvenidas", "anuncios", "spoilers", "sorteos"]
  const gen = ["chat", "multimedia", "comandos", "confesiones"]
  const vc = ["General 1", "General 2", "Priv 1", "Priv 2"]
  const er = emjs[(Math.floor(Math.random() * emjs.length))]
  const everyone = message.guild.roles.everyone
  message.guild.channels.cache.forEach(a => {
    a.delete().catch(() => {})
  })
//-----------------------------------------------------------------  Important
  message.guild.channels.create(`${er}・Important`, {
    type: "category",
    permissionOverwrites: [
      {
        id: everyone,
        allow: ["VIEW_CHANNEL"],
        deny: ["SEND_MESSAGES"]
      }
    ]
  })
  .then(a => {
    for(var i = 0; i < impor.length; i++){
      message.guild.channels.create(`${er}・${impor[i]}`, {
        type: "text",
        permissionOverwrites: [
          {
            id: everyone,
            allow: ["VIEW_CHANNEL"],
            deny: ["SEND_MESSAGES"]
          }
        ],
      parent: `${a.id}`
    })
  }
})
//-----------------------------------------------------------------  General
  message.guild.channels.create(`${er}・General`, {
    type: "category",
    permissionOverwrites: [
      {
        id: everyone,
        allow: ["VIEW_CHANNEL"], deny: ["SEND_MESSAGES"]
      }
    ]
  })
  .then(x => {
    for(var i = 0; i < gen.length; i++){
      message.guild.channels.create(`${er}・${gen[i]}`, {
        type: "text",
        permissionOverwrites: [
          {
            id: everyone,
            allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
          }
        ],
      parent: `${x.id}`
    })
  }
})
//-----------------------------------------------------------------  General
  message.guild.channels.create(`${er}・Voice`, {
    type: "category",
    permissionOverwrites: [
      {
        id: everyone,
        allow: ["VIEW_CHANNEL", "CONNECT", "SPEAK"]
      }
    ]
  })
  .then(x => {
    for(var i = 0; i < vc.length; i++){
      message.guild.channels.create(`${er}・${vc[i]}`, {
        type: "voice",
        permissionOverwrites: [
          {
            id: everyone,
            allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
          }
        ],
      parent: `${x.id}`
    })
  }
})

 }

}