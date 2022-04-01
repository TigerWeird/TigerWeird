const Discord = require("discord.js")
module.exports = new Discord.MessageActionRow()
.addComponents(new Discord.MessageSelectMenu()
    .setCustomId("menu_help")
    .setMinValues(1)
    .setMaxValues(1)
    .addOptions([
{   
    label: "Vista rápida",
    description: "Click para una vista rápida de todos los comandos.",
    value: "1",
    emoji: "🍃"
},
{   
    label: "Antiraid",
    description: "Click para ver los comandos antiraid.",
    value: "2",
    emoji: "✨"
},
{   
    label: "Configuración",
    description: "Click para ver los comandos de configuración.",
    value: "3",
    emoji: "🎑"
},
{   
    label: "Diversión",
    description: "Click para ver los comandos de diversión.",
    value: "4",
    emoji: "🌾"
},
{   
    label: "Moderación",
    description: "Click para ver los comandos de moderación.",
    value: "5",
    emoji: "🍂"
},
{   
    label: "Útil",
    description: "Click para ver los comandos útiles.",
    value: "6",
    emoji: "🫒"
},
])
)