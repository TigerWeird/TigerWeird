const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const guildConfig = require("../../Models/guildConfig.js");
const { ev, noPermsEn, noPermsEs } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("lang")
    .setDescription("Choose Muka's language for the current server.")
    .addStringOption(option => option.setName("lang").setDescription("The language to put the server.").setRequired(true)
        .addChoice('español', 'es')
        .addChoice('english', 'en') ),

async execute(client, interaction, guildC) {

    const lang = interaction.options.getString("lang");
    const perms = interaction.member.permissions.has("MANAGE_CHANNELS");
    const newLangEn = new guildConfig({ guildID: interaction.guild.id, lang: "en" });
    const newLangEs = new guildConfig({ guildID: interaction.guild.id, lang: "es" });

    const setLang = async (noPerms) => {
        if(!perms) return interaction.reply({ content: noPerms + `\`Manage Channels\`.`, ephemeral: true });
        if(['english', 'en'].includes(lang)){
            guildC ? await guildConfig.updateOne({ guildID: interaction.guild.id }, { lang: "en" }) : await newLangEn.save();
            interaction.reply({ content: ev + `*Now my main language in this server is \`English\`! <3*` });
        } else
        if(['español', 'es'].includes(lang)){
            guildC ? await guildConfig.updateOne({ guildID: interaction.guild.id }, { lang: "es" }) : await newLangEs.save();
            interaction.reply({ content: ev + `*Ahora mi idioma principal en este servidor es \`Español\`! <3*` });
        }
    }
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        return setLang(noPermsEn.noPerms);
    } else 
//-----------------------------------
    if(guildC?.config?.lang == "es") {
        return setLang(noPermsEs.noPerms);
    }
//------------------------------------------------------------------------
    }
}