const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ee, ev } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("say")
    .setDescription("I will repeat what you tell me.")
    .addStringOption(option => option.setName("message").setDescription("The message you want me to say.").setRequired(true) ),

async execute(client, interaction, guildC) {

    const msg = interaction.options.getString("message");
    const linksRegex = /((?:(http|https|Http|Https|rtsp|Rtsp):\/\/(?:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,64}(?:\:(?:[a-zA-Z0-9\$\-\_\.\+\!\*\'\(\)\,\;\?\&\=]|(?:\%[a-fA-F0-9]{2})){1,25})?\@)?)?((?:(?:[a-zA-Z0-9][a-zA-Z0-9\-]{0,64}\.)+(?:(?:aero|arpa|asia|a[cdefgilmnoqrstuwxz])|(?:biz|b[abdefghijmnorstvwyz])|(?:cat|com|coop|c[acdfghiklmnoruvxyz])|d[ejkmoz]|(?:edu|e[cegrstu])|f[ijkmor]|(?:gov|g[abdefghilmnpqrstuwy])|h[kmnrtu]|(?:info|int|i[delmnoqrst])|(?:jobs|j[emop])|k[eghimnrwyz]|l[abcikrstuvy]|(?:mil|mobi|museum|m[acdghklmnopqrstuvwxyz])|(?:name|net|n[acefgilopruz])|(?:org|om)|(?:pro|p[aefghklmnrstwy])|qa|r[eouw]|s[abcdeghijklmnortuvyz]|(?:tel|travel|t[cdfghjklmnoprtvwz])|u[agkmsyz]|v[aceginu]|w[fs]|y[etu]|z[amw]))|(?:(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9])\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[1-9]|0)\.(?:25[0-5]|2[0-4][0-9]|[0-1][0-9]{2}|[1-9][0-9]|[0-9])))(?:\:\d{1,5})?)(\/(?:(?:[a-zA-Z0-9\;\/\?\:\@\&\=\#\~\-\.\+\!\*\'\(\)\,\_])|(?:\%[a-fA-F0-9]{2}))*)?(?:\b|$)/gi;

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        if(linksRegex.test(msg)) return reply({ content: wrongEn + `\`I can't send links\`.` });
        if(msg.length >= 1024) return interaction.reply({ content: ee + "\`You cannot send more than 1024 characters\`.", ephemeral: true });
        interaction.reply({ content: msg, allowedMentions: { parse: ["users"] } });
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        if(linksRegex.test(msg)) return interaction.reply({ content: wrongEn + `\`No puedo enviar links\`.` });
        if(msg.length >= 1024) return interaction.reply({ content: ee + "\`You cannot send more than 1024 characters\`.", ephemeral: true });
        interaction.reply({ content: msg, allowedMentions: { parse: ["users"] } });
    }
//------------------------------------------------------------------------
    }
}