const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const osu = require("node-os-utils");
const os = require("os");
const mongoose = require("mongoose");
const diagramMaker = require("../../Functions/diagramMaker.js");
const dependecies = Object.entries(require("../../../package.json").dependencies)
.map(a => `\`${a[0]}\` : ${a[1]}`).join("\n").replace(",", " ");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("botinfo")
    .setDescription("Show my current information."),

async execute(client, interaction, guildC) {

    await interaction.deferReply();

    const totalGuilds = client.guilds.cache.size;
    const mem = osu.mem;
    const cpu = osu.cpu;
    const date = Date.now();
    const pmongo = await new Promise((r, j) => {
        mongoose.connection.db
        .admin()
        .ping((err, result) =>
            err || !result ? j(err || result) : r(Date.now() - date)
        );
    });
    let freeRAM, usedRAM, cpuUsage;

    mem.info().then(info => {
        freeRAM = info['freeMemMb'];
        usedRAM = info['totalMemMb'] - freeRAM;
    });

    const p1 = cpu.usage().then(cpuPercentage => {
        cpuUsage = cpuPercentage;
    });
    await Promise.all([p1]);

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        const info = require('../../Lang/english/botinfo.js');
        info.bInfoEn(Discord, client, interaction, os, diagramMaker, totalGuilds, dependecies, pmongo, freeRAM, usedRAM, cpuUsage);
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        const info = require('../../Lang/español/botinfo.js');
        info.bInfoEs(Discord, client, interaction, os, diagramMaker, totalGuilds, dependecies, pmongo, freeRAM, usedRAM, cpuUsage);
    }
//------------------------------------------------------------------------
    }
}