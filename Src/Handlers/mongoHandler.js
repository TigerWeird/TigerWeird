const { connect, connection } = require("mongoose");
const autoIncrement = require("mongoose-sequence");

const mongoHandler = async (Discord, client) => {
    connect(process.env.MONGO, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    .catch(err => {
        client.channels.cache.get(`> **__MongoDB connection error__**:\n\`\`\`js\n${err.stack}\`\`\``);
    });

    autoIncrement(connection);

    connection.on("open", () => {
        console.log(`» (M) - MongoDB successully conected.`);
    });

    connection.on("error", (err) => {
        console.log(`> **__MongoDB error__**:\n\`\`\`js\n${err.stack}\`\`\``);
    });
}
//---------------------------------- Export
module.exports = {
    mongoHandler
}