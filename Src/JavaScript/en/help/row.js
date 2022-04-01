const Discord = require("discord.js")
module.exports = new Discord.MessageActionRow()
.addComponents(new Discord.MessageSelectMenu()
    .setCustomId("menu_help")
    .setMinValues(1)
    .setMaxValues(1)
    .addOptions([
{   
    label: "Quick View",
    description: "Click for a quick view of all the commands.",
    value: "1",
    emoji: "🍃"
},
{   
    label: "Antiraid",
    description: "Click to see the antiraid commands.",
    value: "2",
    emoji: "✨"
},
{   
    label: "Setting",
    description: "Click to see the configuration commands.",
    value: "3",
    emoji: "🎑"
},
{   
    label: "Fun",
    description: "Click to see the fun commands.",
    value: "4",
    emoji: "🌾"
},
{   
    label: "Moderation",
    description: "Click to see the moderation commands.",
    value: "5",
    emoji: "🍂"
},
{   
    label: "Useful",
    description: "Click to see useful commands.",
    value: "6",
    emoji: "🫒"
},
])
)