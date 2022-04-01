const Discord = require("discord.js")
module.exports = new Discord.MessageEmbed()
.setTitle("<:arrowtm:897892368311779359> | Comandos de Moderación.")
.setDescription(`\`ban\`: Comando para banear a un usuario que está rompiendo las reglas.
\`clear\`: Con esto podrás borrar varios mensajes sin necesidad de hacerlos manualmente.
\`kick\`: Comando para expulsar a un usuario del servidor.
\`kickcall\`: Podrás expulsar a un usuario de una sala de voz para que no moleste a otros.
\`nuke\`: Este comando sirve para borrar todos los mensajes de un canal *(Con esto se borran mensajes fijados, etc)*.
\`slowmode\`: Con este comando podrás activar o desactivar el modo lento en un canal.
\`unban\`: Sirve para desbanear a una persona baneada, con esto le darás otra oportundad`)
.setColor("PURPLE")
.setTimestamp()
.setFooter("No olvides usar los comandos en los canales correspondientes!")