const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { wrongEn, wrongEs } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("8ball")
    .setDescription("Ask the 8-ball a question.")
    .addStringOption(option => option.setName("question").setDescription("The question you want to ask the 8 ball.").setRequired(true) ),

async execute(client, interaction, guildC) {

    const mensaje = interaction.options.getString("question");
    const respuestaEn = ["In my opinion, yes","It's true","It is decidedly so","Probably","Good forecast","Everything points to yes","Undoubtedly","Yes","Yes - definitely","You must trust it","Vague answer","Retry","Ask another time","I better not tell you now","I can't predict it now","Concentrate and ask again","Can be","Do not count on it","My answer is no","My sources tell me no","The prospects are not good","Very doubtful"];
    const respuestaEs = ["En mi opinion, si","Es cierto","Es decididamente así","Probablemente","Buen pronostico","Todo apunta a que si","Sin duda","Si","Si - definitivamente","Debes confiar en ello","Respuesta vaga","Vuelve a intentarlo","Pregunta en otro momento","Será mejor que no te lo diga ahora","No puedo predecirlo ahora","Concentrate y vuelve a preguntar","Puede ser","No cuentes con ello","Mi respuesta es no","Mis fuentes me dicen que no","Las perspectivas no son buenas","Muy dudoso"];
    const embed = new Discord.MessageEmbed()
    .setTitle(`🎱 | MukaBot - 8ball.`)
    .setColor("RANDOM")
    .setTimestamp()
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        if(mensaje.length >= 1024) return interaction.reply({ content: wrongEn + "You cannot send more than 1024 characters. :(", ephemeral: true })
        interaction.reply({ embeds: [embed
            .addField(`\`${interaction.user.username}\` ask:`, `\`\`\`diff\n+ ${mensaje}\`\`\``)
            .addField('My answer is:', `\`\`\`diff\n+ ${respuestaEn[(Math.floor(Math.random() * respuestaEn.length))]}.\`\`\``)
            .setFooter({ text: "Confía en la bola 8." })
        ] })
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        if(mensaje.length >= 1024) return interaction.reply({ content: wrongEs + "No puedes enviar más de 1024 caracteres. :(", ephemeral: true })
        interaction.reply({ embeds: [embed
            .addField(`\`${interaction.user.username}\` pregunta:`, `\`\`\`diff\n+ ${mensaje}\`\`\``)
            .addField('Mi respuesta es:', `\`\`\`diff\n+ ${respuestaEs[(Math.floor(Math.random() * respuestaEs.length))]}.\`\`\``)
            .setFooter({ text: "Confía en la bola 8." })
        ] })
    }
//------------------------------------------------------------------------
    }
}