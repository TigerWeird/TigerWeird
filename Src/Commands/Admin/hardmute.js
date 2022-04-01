const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
// const { ee, ev, npn, nps } = require("../../Json/used.json")
const ms = require("ms")
const hm = require("quick.db")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("hardmute")
    .setDescription("Hardmutea a alguien.")
    .addUserOption(option => option.setName("target").setDescription("Usuario a hardmutear.").setRequired(true) )
    .addStringOption(option => option.setName("duration").setDescription("Tiempo del hardmutear."))
    .addStringOption(option => option.setName("reason").setDescription("Motivo del hardmutear.")),

async execute(client, interaction, guildC) {
/*
    let x = interaction.options.getMember("target");
    let xu = interaction.options.getUser("target");
    let time = interaction.options.getString("duration");
    let reason = interaction.options.getString("reason");
    let reges = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i
    if(!reges.test(time)) return interaction.reply({ content: ee + `oe rctm vivo te crees?`, ephemeral: true });
    time = new Date(interaction.createdAt).getTime() + ms(time);
    if(!reason) { reason = "No especificado." }
    const hmrole = "902623346745831485"
//------------------------------------------------------------------------------
    const onof = hm.get(`${interaction.guildId}.${xu.id}.uMuted`)
    if(onof == true) return interaction.reply({ content: ee + `${xu.tag} ya está muteado.`, ephemeral: true })
    const rles = interaction.member.roles.cache
        .filter(s => s.id !== interaction.guild.id)
        .map(roles => roles.id);

    hm.set(`${interaction.guildId}.${xu.id}`, {
        uMuted: true,
        mReason: reason,
        mTimestamp: interaction.createdTimestamp,
        uRoles: rles
    });

    setTimeout(() => {
        rles.forEach((a) => x.roles.remove(`${a}`).catch(() => {}));
    }, 1000)

    setTimeout(() => {
        x.roles.add(`${hmrole}`).catch(() => {});
    }, 2000)

    interaction.reply({ content: ev + `\`${xu.tag}\` Fue muteado.
\`Motivo:\` ${reason}.
\`Unmute:\` <t:${Math.floor(new Date(time).getTime() / 1000)}:D>` });
//-------------------------------------------   UnMute
    setTimeout(() => {
        setTimeout(() => {
            x.roles.remove(`${hmrole}`).catch(() => {});
        }, 1000)
    
        setTimeout(() => {
            rles.forEach((s) => x.roles.add(`${s}`).catch(() => {}));
        }, 2000)

        hm.set(`${interaction.guildId}.${xu.id}`, { uMuted: false })
        hm.set(`${interaction.guildId}.${xu.id}`, { mTimestamp: " " })
        hm.set(`${interaction.guildId}.${xu.id}`, { uRoles: [] })

        interaction.channel.send({ content: ev + `\`${xu.tag}\` Fue unmuteado.
\`Motivo:\` Mute acabado.` })
    }, time - interaction.createdTimestamp)
//------------------------------------------------------------------------------
*/
    }
}