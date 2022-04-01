const Discord = require("discord.js")
module.exports = new Discord.MessageEmbed()
.setTitle("<:arrowtm:897892368311779359> | Comandos de Configuración.")
.setDescription(`\`confeschannel\`: Con este comando podrás establecer el canal de confesiones para poder ser usado.
\`lang\`: Sirve para establecer el ídioma en tu servidor *(Español o ingles)*.
\`reportschannel\`: Este comando sirve para establecer el canal a donde se enviarán los reportes a usuarios.
\`sancionchannel\`: Comando para establecer el canal a donde se enviarán todas las sanciones dadas por el staff.
\`sugchannel\`: Con este comando establecerás el canal a donde se enviarán las sugerencias.`)
.setColor("PURPLE")
.setTimestamp()
.setFooter("No olvides usar los comandos en los canales correspondientes!")