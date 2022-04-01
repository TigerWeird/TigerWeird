const fs = require("fs");
const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { SlashCommandBuilder } = require('@discordjs/builders');
require("dotenv").config();

const commands = [];
const clientId = "859873827374497823";
const guildId = "845076358908739624";

//------------------------------------------------------------------------
fs.readdirSync("../Commands").forEach(async(categorys) => {
    const commandFiles = fs.readdirSync(`../Commands/${categorys}`)
    .filter((archivo) => archivo.endsWith(".js"));
    for(const archivo of commandFiles) {
      const command = require(`../Commands/${categorys}/${archivo}`);
      commands.push(command.data instanceof SlashCommandBuilder ? command.data.toJSON() : command.data);
      console.log(`(/) ${archivo} fue subido correctamente.`);
    }
});

const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);
//---------------------------------------------

const createSlash = async () => {
    try {
        await rest.put(Routes.applicationGuildCommands(clientId, guildId),
            { body: commands });
        console.log("(-) Slashs subidos correctamente.");
    } catch(e){
        console.error(e);
    }
}

//------------------------------------------------------------------------
createSlash();