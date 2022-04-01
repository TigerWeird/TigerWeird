const fs = require("fs");

const commandHandler = async (Discord, client) => {

  const logsChannel = client.channels.cache.get("857363044055908362");
  client.commands = new Discord.Collection();
  client.cmds = new Discord.Collection();
  client.context = new Discord.Collection();
  const context = [];

  // console.log(`[-]--------------------------------------------`)
  console.log(`>|-----------------------------------------------------------|`);
//---------------------------------- (!) Handler
  fs.readdirSync("../../Messages").forEach(async(categorys) => {
    const commandFiles = fs.readdirSync(`../../Messages/${categorys}`)
    .filter((archivo) => archivo.endsWith(".js"));
    for(const archivo of commandFiles) {
      const cmd = require(`../../Messages/${categorys}/${archivo}`);
      client.cmds.set(cmd.name, cmd);
      console.log(`» (!) - ${archivo} loaded successfully.`);
    }
  });
  console.log(`>|-----------------------------------------------------------|`);
//---------------------------------- (/) Handler
  fs.readdirSync("../Commands").forEach(async(categorys) => {
    const commandFiles = fs.readdirSync(`../Commands/${categorys}`)
    .filter((archivo) => archivo.endsWith(".js"));
    for(const archivo of commandFiles) {
      const command = require(`../Commands/${categorys}/${archivo}`);
      client.commands.set(command.data.name, command);
      console.log(`» (/) - ${archivo} loaded successfully.`);
    }
  });
  console.log(`>|-----------------------------------------------------------|`);
//---------------------------------- (C) Handler
  fs.readdirSync("../Context").forEach(async(categorys) => {
    const commandFiles = fs.readdirSync(`../Context/${categorys}`)
    .filter((archivo) => archivo.endsWith(".js"));
    for(const archivo of commandFiles) {
      const ctx = require(`../Context/${categorys}/${archivo}`);
      client.context.set(ctx.name, ctx);
      context.push(ctx);
      console.log(`» (C) - ${archivo} loaded successfully.`);
    }
  })
  console.log(`>|-----------------------------------------------------------|`);
  client.on("ready", async () => {
    await client.application.commands.set(context);
  });
//---------------------------------- (E) Handler
  fs.readdirSync("../Events").forEach(async(category) => {
    const eventFiles = fs.readdirSync(`../Events/${category}`)
    .filter((file) => file.endsWith(".js"));
    for(const file of eventFiles) {
      let fileName = file.substring(0, file.length - 3);
      let fileContents = require(`../Events/${category}/${file}`);
      client.on(fileName, fileContents.bind(null, client));
      console.log(`» (E) - ${file} loaded successfully.`);
    }
  });
  console.log(`>|-----------------------------------------------------------|`);
}
//---------------------------------- Export
module.exports = {
  commandHandler
}