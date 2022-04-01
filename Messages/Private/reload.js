const Discord = require("discord.js");

module.exports = {
  name: "reload",
  alias: [],

execute (client, message, args){

    if(!"295250573937344514".includes(message.author.id)) return message.reply({ content: "You are no allowed to use this." });

    if (!args.length) return message.reply(`Dame un comando p ctm`);
    const commandName = args[0].toLowerCase();
    const cate = args[1].toLowerCase();
    const command = client.cmds.get(commandName) || client.cmds.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command) return message.reply(`No encontré ningún comando llamado \`${commandName}\`.`);
    delete require.cache[require.resolve(`../${cate}/${command.name}.js`)];

    try {
        const newCommand = require(`../${cate}/${command.name}.js`);
        client.cmds.set(newCommand.name, newCommand);
        message.reply(`\`${commandName}\` Relodiao coretamete.`);
    } catch (error) {
        message.reply({ content: `Algo malió sal\n\`\`\`js\n${error}\`\`\``});
    }
//-------------------------
    }

}