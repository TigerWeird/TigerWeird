const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("userinfo")
    .setDescription("Displays the information of a user.")
    .addUserOption(option => option.setName("target").setDescription("The user whose information you want to see.")),

async execute(client, interaction, guildC) {

    await interaction.deferReply()
    const user = interaction.options.getUser("target")
    const member = interaction.options.getMember("target")
    const userFetched = client.users?.fetch(user?.id)
    const embed = new Discord.MessageEmbed()
    .setColor("BLUE")
    .setTimestamp()
    const badges = {
        "DISCORD_EMPLOYEE": "<:employee:899849804807548938>",
        "PARTNERED_SERVER_OWNER": "<:partner:899849804220342333>",
        "BUGHUNTER_LEVEL_1": "<:bug_hunter:899849804643975258>",
        "HOUSE_BRAVERY": "<:bravery:899849804455243816>",
        "HOUSE_BRILLIANCE": "<:brillance:899849804404904006>",
        "HOUSE_BALANCE": "<:balance:899849804132270111>",
        "EARLY_SUPPORTER": "<:early_support:899849804597825606>",
        "BUGHUNTER_LEVEL_2": "<:bug_hunter2:899849804694294528>",
        "EARLY_VERIFIED_BOT_DEVELOPER": "<:dev:899849804270694501>",
        "DISCORD_CERTIFIED_MODERATOR": "<:discord_mod:908337218257551390>",
        "HYPESQUAD_EVENTS": "<:hypesquad_events:908339355859431496>",
        "VERIFIED_BOT": "<:verified_bot:908339205187465226>",
        "TEAM_USER": "<:users:848269507797057539>"
    }
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        const info = require('../../Lang/english/userinfo.js');
        info.userInfo(interaction, user, member, userFetched, badges, embed);
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        const info = require('../../Lang/español/userinfo.js');
        info.userInfo(interaction, user, member, userFetched, badges, embed);
    }
//------------------------------------------------------------------------
    }
}