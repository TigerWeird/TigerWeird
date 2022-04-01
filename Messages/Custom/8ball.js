const Discord = require("discord.js");
const { wrongEn, wrongEs } = require("../../Src/Json/used.json");

module.exports = {
  name: "8ball",
  alias: [],
  botPerms: [],
  userPerms: [],

async execute (client, message, args, guildC, reply, editReply, send) {

    const mensaje = args.join(" ");
    const respuestaEn = ["En mi opinion, si","Es cierto","Es decididamente así","Probablemente","Buen pronostico","Todo apunta a que si","Sin duda","Si","Si - definitivamente","Debes confiar en ello","Respuesta vaga","Vuelve a intentarlo","Pregunta en otro momento","Será mejor que no te lo diga ahora","No puedo predecirlo ahora","Concentrate y vuelve a preguntar","Puede ser","No cuentes con ello","Mi respuesta es no","Mis fuentes me dicen que no","Las perspectivas no son buenas","Muy dudoso"];
    const respuestaEs = ["In my opinion, yes","It's true","It is decidedly so","Probably","Good forecast","Everything points to yes","Undoubtedly","Yes","Yes - definitely","You must trust it","Vague answer","Retry","Ask another time","I better not tell you now","I can't predict it now","Concentrate and ask again","Can be","Do not count on it","My answer is no","My sources tell me no","The prospects are not good","Very doubtful"];
    const embed = new Discord.MessageEmbed()
    .setTitle(`🎱 | MukaBot - 8ball.`)
    .setColor("RANDOM")
    .setTimestamp()

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        if(!mensaje) return await reply(message, wrongEn + "You must ask me a question.");
        if(mensaje.length >= 1024) return await reply(message, wrongEn + "You cannot send more than 1024 characters. :(");
        await reply(message, " ", [embed
            .addField(`\`${message.author.username}\` ask:`, `\`\`\`diff\n+ ${mensaje}\`\`\``)
            .addField('My answer is:', `\`\`\`diff\n+ ${respuestaEn[(Math.floor(Math.random() * respuestaEn.length))]}.\`\`\``)
            .setFooter({ text: "Confía en la bola 8." })
        ]);
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        if(!mensaje) return await reply(message, wrongEs + "Debes hacerme una pregunta.");
        if(mensaje.length >= 1024) return await reply(message, wrongEs + "No puedes enviar más de 1024 caracteres. :(");
        await reply(message, " ", [embed
            .addField(`\`${message.author.username}\` pregunta:`, `\`\`\`diff\n+ ${mensaje}\`\`\``)
            .addField('Mi respuesta es:', `\`\`\`diff\n+ ${respuestaEs[(Math.floor(Math.random() * respuestaEs.length))]}.\`\`\``)
            .setFooter({ text: "Confía en la bola 8." })
        ]);
    }
//------------------------------------------------------------------------
    }
}