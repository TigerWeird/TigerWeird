const Discord = require("discord.js");
const devConfig = require("../../Src/Models/devConfig.js");
const { inspect } = require ('util');
const { ee, wrongEn, wrongEs } = require("../../Src/Json/used.json");

module.exports = {
  name: "eval",
  alias: ["e"],

async execute (client, message, args, guildC, reply, editReply, send) {

  const devC = devConfig.findOne({ clientID: client.user.id });

  if(guildC?.config?.lang == "en") {
    if(devC?.config?.devList.includes(message.author.id)) return reply(message, 
      wrongEn + `\`You are not allowed for use this command\`.`);
  } else 
  if(guildC?.config?.lang == "es") {
    if(devC?.config?.devList.includes(message.author.id)) return reply(message, 
      wrongEs + `\`No estás autorizado a usar este comando\`.`);
  }
  const command = args.join(" ");
  if(!command) return reply(message, ee + "¿Que deseas evaluar el día de hoy?");

  if(["token", "destroy"].includes(command)) return message.reply({ content: ee + "No puedo evaluar eso." }, { allowedMentions: { parse: [] } });
  const borrar = new Discord.MessageActionRow()
  .addComponents(new Discord.MessageButton()
    .setCustomId('delete_eval')
    .setStyle('SECONDARY')
    .setEmoji('946447100504317983'),
  );
//--------------------------------------------------------------------------
  try {
    const evaled = await eval(command)
    const result = inspect(evaled, { depth: 0 })
    const tipo = `- **__Type__**: \`${typeof(evaled)}\` (\`${client.ws.ping}ms\`)`

    if(`${result}`.length >= 975) {
      await reply(message, `${tipo} | \`See the console\`. \`\`\`js\n${result.slice(0, 975)}...\`\`\``);
      console.log(`- Type: ${typeof(evaled)} (${client.ws.ping}ms)\n\n${result}`);
    } else {
      await reply(message, `${tipo} \`\`\`js\n${result}\`\`\``);
    }
  } catch (error) {
    if(`${error}`.length >= 975) {
      await reply(message, `- **__Error__**: \`See the console\`. \`\`\`js\n${error.slice(0, 975)}...\`\`\``);
      console.log(`${error}`);
    } else {
      await reply(message, `- **__Error__**: \`\`\`js\n${error}\`\`\``);
    }
  }
//--------------------------------------------------------------------------
  }
}