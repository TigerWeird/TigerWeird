const Discord = require("discord.js")
module.exports = new Discord.MessageEmbed()
.setTitle("<:arrowtm:897892368311779359> | Configuration Commands.")
.setDescription(`\`confeschannel\`: With this command you will be able to establish the confession channel to be able to be used.
\`lang\`: Used to set the language on your server *(Español or English)*.
\`reportschannel\`: This command is used to establish the channel where the reports will be sent to users.
\`sancionchannel\`: Command to establish the channel where all the sanctions given by the staff will be sent.
\`sugchannel\`: With this command you will establish the channel where the suggestions will be sent.`)
.setColor("PURPLE")
.setTimestamp()
.setFooter("Do not forget to use the commands in the corresponding channels!")