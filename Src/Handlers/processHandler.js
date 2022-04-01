const processHandler = async (Discord, client) => {

    const logsChannel = client.channels.cache.get("857363044055908362");
    process.on("uncaughtException", async (err, origin) => {
        logsChannel.send(`> **__Uncaught Exception__**: \`\`\`js\n${origin} | ${err}\`\`\``);
    });
    process.on("unhandledRejection", async (reason, p) => {
        logsChannel.send(`> **__Unhandled Rejection__**: \`\`\`js\n${reason} | ${p}\`\`\``);
    });
    process.on("uncaughtExceptionMonitor", async (err, origin) => {
        logsChannel.send(`> **__Uncaught Exception Monitor__**: \`\`\`js\n${err} | ${origin}\`\`\``);
    });
    process.on("multipleResolves", async (type, promise, reason) => {
        logsChannel.send(`> **__Multiple Resolves__**: \`\`\`js\n${type} | ${promise} | ${reason}\`\`\``);
    });
}
//---------------------------------- Export
module.exports = {
  processHandler
}