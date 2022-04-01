const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const Logs = require("../../Models/setlogs.js");
const { ee, ev, npn, nps } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("setlogs")
    .setDescription("Establece los logs")
    .addChannelOption(option => option.setName("channel").setDescription("canal") ),

async execute(client, interaction, guildC) {

    if(interaction.user.id != "295250573937344514") return;
    const channel = interaction.options.getChannel("channel");
    const lgs = await Logs.findOne({ guildID: interaction.guild.id });
    const ifilter = i => i.user.id == interaction.user.id;

//------------------------------------------------------------------------ Funciones
    const change = async (log) => {
        if(log == true) { return false; } else 
        if(log == false) { return true; }
    }
    const sub = async (log, type, en, dis) => {
        if(log == true) { en.push(`- <:enabled:950586152103079967> **|** ${type}`); } else 
        if(log == false) { dis.push(`- <:disabled:950586152069525575> **|** ${type}`); }
    }
    const cateconfirm = async (cate) => {
        if(cate == "channels") {
            const clogs = [lgs.channels.channelC, lgs.channels.channelD, lgs.channels.channelU, lgs.channels.stageC, 
                lgs.channels.stageD, lgs.channels.stageU]
            if(!clogs.includes(false)) { return "<:all_enabled:950959981975453727> **|**" }
            if(!clogs.includes(true)) { return "<:all_disabled:950959981702811688> **|**" }
            if(clogs.includes(false) && clogs.includes(true)) { return "<:enabled_and_disabled:950959981539262474> **|**" }
        } else if(cate == "guild") {
            const glogs = [lgs.guild.emojisU, lgs.guild.integrationsU, lgs.guild.stickersU, lgs.guild.guildU, 
                lgs.guild.inviteC, lgs.guild.inviteD, lgs.guild.voiceServerU, lgs.guild.voiceStateU, lgs.guild.webhooksU]
            if(!glogs.includes(false)) { return "<:all_enabled:950959981975453727> **|**" } else
            if(!glogs.includes(true)) { return "<:all_disabled:950959981702811688> **|**" } else 
            if(glogs.includes(false) && glogs.includes(true)) { return "<:enabled_and_disabled:950959981539262474> **|**" }
        } else if(cate == "members") {
            const mmlogs = [lgs.members.banA, lgs.members.banR, lgs.members.memberA, lgs.members.memberR, lgs.members.memberU]
            if(!mmlogs.includes(false)) { return "<:all_enabled:950959981975453727> **|**" } else
            if(!mmlogs.includes(true)) { return "<:all_disabled:950959981702811688> **|**" } else 
            if(mmlogs.includes(false) && mmlogs.includes(true)) { return "<:enabled_and_disabled:950959981539262474> **|**" }
        } else if(cate == "messages") {
            const mlogs = [lgs.messages.msgD, lgs.messages.msgU, lgs.messages.msgDBulk]
            if(!mlogs.includes(false)) { return "<:all_enabled:950959981975453727> **|**" } else
            if(!mlogs.includes(true)) { return "<:all_disabled:950959981702811688> **|**" } else 
            if(mlogs.includes(false) && mlogs.includes(true)) { return "<:enabled_and_disabled:950959981539262474> **|**" }
        } else if(cate == "roles") {
            const rlogs = [lgs.roles.roleC, lgs.roles.roleD, lgs.roles.roleU]
            if(!rlogs.includes(false)) { return "<:all_enabled:950959981975453727> **|**" } else
            if(!rlogs.includes(true)) { return "<:all_disabled:950959981702811688> **|**" } else 
            if(rlogs.includes(false) && rlogs.includes(true)) { return "<:enabled_and_disabled:950959981539262474> **|**" }
        }
    }
//------------------------------------------
    const all = async (s) => {
        //-------------------------
        let cen = []; let cdis = [];
        let c1 = `\`Channel Create\`.`; let c2 = `\`Channel Delete\`.`; let c3 = `\`Channel Update\`.`;
        let c4 = `\`Stage Create\`.`; let c5 = `\`Stage Delete\`.`; let c6 = `\`Stage Update\`.`;
        //-------------------------
        let gen = []; let gdis = [];
        let g1 = `\`Emojis Update\`.`; let g2 = `\`Integrations Update\`.`; let g3 = `\`Stickers Update\`.`;
        let g4 = `\`Guild Update\`.`; let g5 = `\`Invite Create\`.`; let g6 = `\`Invite Delete\`.`;
        let g7 = `\`Voice Server Update\`.`; let g8 = `\`Voice State Update\`.`; let g9 = `\`WebHooks Update\`.`;
        //-------------------------
        let mmen = []; let mmdis = [];
        let mm1 = `\`Ban Add\`.`; let mm2 = `\`Ban Remove\`.`; let mm3 = `\`Member Add\`.`;
        let mm4 = `\`Member Remove\`.`; let mm5 = `\`Member Update\`.`;
        //-------------------------
        let men = []; let mdis = [];
        let m1 = `\`Message Delete\`.`; let m2 = `\`Message Update\`.`; let m3 = `\`Message Bulk Delete\`.`;
        //-------------------------
        let ren = []; let rdis = [];
        let r1 = `\`Role Create\`.`; let r2 = `\`Role Delete\`.`; let r3 = `\`Role Update\`.`;
        //---------------------------
        const array = async (en, dis) => {
            if(en.length <= 0 && dis.length <= 0) { return "\`\`\`diff\n- Error\`\`\`"; } else 
            if(en.length >= 1 && dis.length <= 0) { return `➮ **| __Enabled__**:\n${en.join("\n")}`; } else 
            if(en.length <= 0 && dis.length >= 1) { return `➮ **| __Disabled__**:\n${dis.join("\n")}`; } else 
            if(en.length >= 1 && dis.length >= 1) { return `➮ **| __Enabled__**:\n${en.join("\n")}\n\n➮ **| __Disabled__**:\n${dis.join("\n")}`; }
        }
    //-----------------------------------------------------------
    if(s == "channels") {
        await sub(lgs.channels.channelC, c1, cen, cdis); await sub(lgs.channels.channelD, c2, cen, cdis);
        await sub(lgs.channels.channelU, c3, cen, cdis); await sub(lgs.channels.stageC, c4, cen, cdis);
        await sub(lgs.channels.stageD, c5, cen, cdis); await sub(lgs.channels.stageU, c6, cen, cdis);
        return array(cen, cdis);
    } else if(s == "guild") {
        await sub(lgs.guild.emojisU, g1, gen, gdis); await sub(lgs.guild.integrationsU, g2, gen, gdis);
        await sub(lgs.guild.stickersU, g3, gen, gdis); await sub(lgs.guild.guildU, g4, gen, gdis);
        await sub(lgs.guild.inviteC, g5, gen, gdis); await sub(lgs.guild.inviteD, g6, gen, gdis);
        await sub(lgs.guild.voiceServerU, g7, gen, gdis); await sub(lgs.guild.voiceStateU, g8, gen, gdis);
        await sub(lgs.guild.webhooksU, g9, gen, gdis);
        return array(gen, gdis);
    } else if(s == "members") {
        await sub(lgs.members.banA, mm1, mmen, mmdis); await sub(lgs.members.banR, mm2, mmen, mmdis);
        await sub(lgs.members.memberA, mm3, mmen, mmdis); await sub(lgs.members.memberR, mm4, mmen, mmdis);
        await sub(lgs.members.memberU, mm5, mmen, mmdis);
        return array(mmen, mmdis);
    } else if(s == "messages") {
        await sub(lgs.messages.msgD, m1, men, mdis); await sub(lgs.messages.msgU, m2, men, mdis);
        await sub(lgs.messages.msgDBulk, m3, men, mdis);
        return array(men, mdis);
    } else if(s == "roles") {
        await sub(lgs.roles.roleC, r1, ren, rdis); await sub(lgs.roles.roleD, r2, ren, rdis);
        await sub(lgs.roles.roleU, r3, ren, rdis);
        return array(ren, rdis);
    }
    //-----------------------------------------------------------
    }
//------------------------------------------------------------------------
    const english = async () => {
    //------------------------------------------------
    interaction.deferReply({ ephemeral: true })
    if(!channel && !lgs) return interaction.editReply({ content: ee + "Este servidor no tiene ningún canal de logs establecido, debes darme uno." })
    if(channel) {
        if(!channel.isText()) return interaction.editReply({ content: ee + "Debes darme un canal válido.", })
        if(!channel.permissionsFor(client.user.id).has(
          ["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"])) return interaction.editReply({ content: ee + "No tengo suficientes permisos para mandar mensajes en ese canal.", })
        if(!lgs) {
            const doclgs = new Logs({ guildID: interaction.guild.id, channelID: channel.id,
                channels: { channelC: false, channelD: false, channelU: false, stageC: false, stageD: false, stageU: false, },
                guild: { emojisU: false, integrationsU: false, stickersU: false, guildU: false, inviteC: false, inviteD: false, voiceServerU: false, voiceStateU: false, webhooksU: false, },
                members: { banA: false, banR: false, memberA: false, memberR: false, memberU: false, },
                messages: { msgD: false, msgU: false, msgDBulk: false, },
                roles: { roleC: false, roleD: false, roleU: false, } });
            await doclgs.save();
            setTimeout(async() => {
                interaction.editReply({ content: `<a:rueditatm:847318816832749599> | Procesando...`})
            }, 2000)
        } else { lgs.channelID = channel.id; await lgs.save(); }
    }
//------------------------------------------------------------------------
    const row = new Discord.MessageActionRow()
    .addComponents(new Discord.MessageSelectMenu()
        .setCustomId("cate_logs")
        .setMinValues(1)
        .setMaxValues(1)
        .addOptions([
            {   label: "Channels Logs",
            description: "asd.",
            value: "channels", },
            {   label: "Guild Logs",
            description: "asd.",
            value: "guild", },
            {   label: "Members Logs",
            description: "asd.",
            value: "members", },
            {   label: "Messages Logs",
            description: "asd.",
            value: "messages", },
            {   label: "Roles Logs",
            description: "asd2.",
            value: "roles", },
        ])
    );
//-----------------------------------
    const rowend = new Discord.MessageActionRow()
    .addComponents(new Discord.MessageSelectMenu()
        .setCustomId("info_end")
        .setDisabled(true)
        .addOptions([
            {   label: "Main Menu",
            description: "Click to see my main menu.",
            value: "1", },
        ])
    );
//-----------------------------------
    const embed = new Discord.MessageEmbed()
    .setTitle("<:confg:910793168100950046> | Configure Logs.")
    .setThumbnail(interaction.guild.iconURL())
    .setTimestamp()
    .setColor("PURPLE")
//-----------------------------------
    const rowchannels = new Discord.MessageActionRow()
    .addComponents(new Discord.MessageSelectMenu()
        .setCustomId("xd")
        .setMinValues(1)
        .setMaxValues(6)
        .addOptions([
            {   label: "Channel Create",
            description: "canal creao.",
            value: "channelC", },
            {   label: "Channel Delete",
            description: "canal borrao.",
            value: "channelD", },
            {   label: "Channel Update",
            description: "canal actualizao.",
            value: "channelU", },
            {   label: "Stage Create",
            description: "canal creao.",
            value: "stageC", },
            {   label: "Stage Delete",
            description: "canal borrao.",
            value: "stageD", },
            {   label: "Stage Update",
            description: "canal actualizao.",
            value: "stageU", },
        ])
    );
//-----------------------------------
    const rowguild = new Discord.MessageActionRow()
    .addComponents(new Discord.MessageSelectMenu()
        .setCustomId("xd")
        .setMinValues(1)
        .setMaxValues(9)
        .addOptions([
            {   label: "Emojis Update",
            description: "Rol creao.",
            value: "emojisU", },
            {   label: "Integrations Update",
            description: "Rol creao.",
            value: "integrationsU", },
            {   label: "Stickers Update",
            description: "Rol creao.",
            value: "stickersU", },
            {   label: "Guild Update",
            description: "Rol creao.",
            value: "guildU", },
            {   label: "Invite Create",
            description: "Rol creao.",
            value: "inviteC", },
            {   label: "Invite Delete",
            description: "Rol creao.",
            value: "inviteD", },
            {   label: "voice Server Update",
            description: "Rol creao.",
            value: "voiceServerU", },
            {   label: "Voice State Update",
            description: "Rol creao.",
            value: "voiceStateU", },
            {   label: "WebHooks Update",
            description: "Rol creao.",
            value: "webhooksU", },
        ])
    );
//-----------------------------------
    const rowmembers = new Discord.MessageActionRow()
    .addComponents(new Discord.MessageSelectMenu()
        .setCustomId("xd")
        .setMinValues(1)
        .setMaxValues(6)
        .addOptions([
            {   label: "Ban Add",
            description: "Usuario Baneao.",
            value: "banA", },
            {   label: "Ban Remove",
            description: "Usuario UnBaneao.",
            value: "banR", },
            {   label: "Member Add",
            description: "Usuario Nuevo.",
            value: "memberA", },
            {   label: "Member Remove",
            description: "Usuario Fuido.",
            value: "memberR", },
            {   label: "Member Update",
            description: "Usuario Actualizado.",
            value: "memberU", },
        ])
    );
//-----------------------------------
    const rowmsg = new Discord.MessageActionRow()
    .addComponents(new Discord.MessageSelectMenu()
        .setCustomId("asd")
        .setMinValues(1)
        .setMaxValues(3)
        .addOptions([
            {   label: "Message Delete",
            description: "Mensaje borrao.",
            value: "msgD", },
            {   label: "Message Update",
            description: "Mensaje editao.",
            value: "msgU", },
            {   label: "Message Delete Bulk",
            description: "clear xd.",
            value: "msgDBulk", },
        ])
    );
//-----------------------------------
    const rowroles = new Discord.MessageActionRow()
    .addComponents(new Discord.MessageSelectMenu()
        .setCustomId("xd")
        .setMinValues(1)
        .setMaxValues(3)
        .addOptions([
            {   label: "Role Create",
            description: "Rol creao.",
            value: "roleC", },
            {   label: "Role Delete",
            description: "Rol borrao.",
            value: "roleD", },
            {   label: "Role Update",
            description: "Rol updateao xd.",
            value: "roleU", },
        ])
    );
//------------------------------------------------------------------------
setTimeout(async () => {
    const m = await interaction.editReply({ content: " ", embeds: [embed
        .setDescription(`El canal de logs fue establecido en <#${lgs.channelID}>.
Estas son las categorías que puedes configurar con el menú de este embed.\n
> ${await cateconfirm("channels")} | \`Channels\`.
> ${await cateconfirm("guild")} | \`Guild\`.
> ${await cateconfirm("members")} | \`Members\`.
> ${await cateconfirm("messages")} | \`Messages\`.
> ${await cateconfirm("roles")} | \`Roles\`.`)
    ], components: [row] })
    const collector = m.createMessageComponentCollector({ filter: ifilter, time: 60000 })
    collector.on("collect", async i => {
//------------------------------------------------------------------------
    if(i.values[0] == "channels"){ await i.deferUpdate();
        const sm = await interaction.followUp({ embeds: [embed
            .setDescription(`Switchea los logs de canales:\n\n${await all("channels")}`)
        ], components: [rowchannels], ephemeral: true });

        const scltr = sm.createMessageComponentCollector({ filter: ifilter, time: 60000 });
        scltr.on("collect", async i => { await i.deferUpdate();
            i.editReply({ content: `<a:rueditatm:847318816832749599> | Procesando...`, embeds: [], components: [] });
            if(i.values.includes("channelC")) { lgs.channels.channelC = await change(lgs.channels.channelC) }
            if(i.values.includes("channelD")) { lgs.channels.channelD = await change(lgs.channels.channelD) }
            if(i.values.includes("channelU")) { lgs.channels.channelU = await change(lgs.channels.channelU) }
            if(i.values.includes("stageC")) { lgs.channels.stageC = await change(lgs.channels.stageC) }
            if(i.values.includes("stageD")) { lgs.channels.stageD = await change(lgs.channels.stageD) }
            if(i.values.includes("stageU")) { lgs.channels.stageU = await change(lgs.channels.stageU) }
            lgs.save()

            setTimeout(async () => {
                i.editReply({ content: " ", embeds: [embed
                    .setDescription(`Switchea los logs de canales:\n\n${await all("channels")}`)
                ], components: [rowchannels] });
            }, 2000);
        });

        scltr.on('end', x => { interaction.editReply({ components: [rowend] }); });
    }
//------------------------------------------------------------------------
    if(i.values[0] == "guild"){ await i.deferUpdate();
        const sm = await interaction.followUp({ embeds: [embed
            .setDescription(`Switchea los logs de guild:\n\n${await all("guild")}`)
        ], components: [rowguild], ephemeral: true });

        const scltr = sm.createMessageComponentCollector({ filter: ifilter, time: 60000 });
        scltr.on("collect", async i => { await i.deferUpdate();
            i.editReply({ content: `<a:rueditatm:847318816832749599> | Procesando...`, embeds: [], components: [] });
            if(i.values.includes("emojisU")) { lgs.guild.emojisU = await change(lgs.guild.emojisU) }
            if(i.values.includes("integrationsU")) { lgs.guild.integrationsU = await change(lgs.guild.integrationsU) }
            if(i.values.includes("stickersU")) { lgs.guild.stickersU = await change(lgs.guild.stickersU) }
            if(i.values.includes("guildU")) { lgs.guild.guildU = await change(lgs.guild.guildU) }
            if(i.values.includes("inviteC")) { lgs.guild.inviteC = await change(lgs.guild.inviteC) }
            if(i.values.includes("inviteD")) { lgs.guild.inviteD = await change(lgs.guild.inviteD) }
            if(i.values.includes("voiceServerU")) { lgs.guild.voiceServerU = await change(lgs.guild.voiceServerU) }
            if(i.values.includes("voiceStateU")) { lgs.guild.voiceStateU = await change(lgs.guild.voiceStateU) }
            if(i.values.includes("webhooksU")) { lgs.guild.webhooksU = await change(lgs.guild.webhooksU) }
            lgs.save()

            setTimeout(async () => {
                i.editReply({ content: " ", embeds: [embed
                    .setDescription(`Switchea los logs de guild:\n\n${await all("guild")}`)
                ], components: [rowguild] });
            }, 2000);
        });

        scltr.on('end', x => { interaction.editReply({ components: [rowend] }); });
    }
//------------------------------------------------------------------------
    if(i.values[0] == "members"){ await i.deferUpdate();
        const sm = await interaction.followUp({ embeds: [embed
            .setDescription(`Switchea los logs de members:\n\n${await all("members")}`)
        ], components: [rowmembers], ephemeral: true });

        const scltr = sm.createMessageComponentCollector({ filter: ifilter, time: 60000 });
        scltr.on("collect", async i => { await i.deferUpdate();
            i.editReply({ content: `<a:rueditatm:847318816832749599> | Procesando...`, embeds: [], components: [] });
            if(i.values.includes("banA")) { lgs.members.banA = await change(lgs.members.banA) }
            if(i.values.includes("banR")) { lgs.members.banR = await change(lgs.members.banR) }
            if(i.values.includes("memberA")) { lgs.members.memberA = await change(lgs.members.memberA) }
            if(i.values.includes("memberR")) { lgs.members.memberR = await change(lgs.members.memberR) }
            if(i.values.includes("memberU")) { lgs.members.memberU = await change(lgs.members.memberU) }
            lgs.save()

            setTimeout(async () => {
                i.editReply({ content: " ", embeds: [embed
                    .setDescription(`Switchea los logs de members:\n\n${await all("members")}`)
                ], components: [rowmembers] });
            }, 2000);
        });

        scltr.on('end', x => { interaction.editReply({ components: [rowend] }); });
    }
//------------------------------------------------------------------------
    if(i.values[0] == "messages"){ await i.deferUpdate();
        const sm = await interaction.followUp({ embeds: [embed
            .setDescription(`Switchea los logs de msg:\n\n${await all("messages")}`)
        ], components: [rowmsg], ephemeral: true });

        const scltr = sm.createMessageComponentCollector({ filter: ifilter, time: 60000 });
        scltr.on("collect", async i => { await i.deferUpdate();
            i.editReply({ content: `<a:rueditatm:847318816832749599> | Procesando...`, embeds: [], components: [] });
            if(i.values.includes("msgD")) { lgs.messages.msgD = await change(lgs.messages.msgD) }
            if(i.values.includes("msgU")) { lgs.messages.msgU = await change(lgs.messages.msgU) }
            if(i.values.includes("msgDBulk")) { lgs.messages.msgDBulk = await change(lgs.messages.msgDBulk) }
            lgs.save()

            setTimeout(async () => {
                i.editReply({ content: " ", embeds: [embed
                    .setDescription(`Switchea los logs de msg:\n\n${await all("messages")}`)
                ], components: [rowmsg] });
            }, 2000);
        });

        scltr.on('end', x => { interaction.editReply({ components: [rowend] }); });
    }
    //-------------------------------
    if(i.values[0] == "roles"){ await i.deferUpdate();
        const sm = await interaction.followUp({ embeds: [embed
            .setDescription(`Switchea los logs de roles:\n\n${await all("roles")}`)
        ], components: [rowroles], ephemeral: true })

        const scltr = sm.createMessageComponentCollector({ filter: ifilter, time: 60000 });
        scltr.on("collect", async i => { await i.deferUpdate(); 
            i.editReply({ content: `<a:rueditatm:847318816832749599> | Procesando...`, embeds: [], components: [] });
            if(i.values.includes("roleC")) { lgs.roles.roleC = await change(lgs.roles.roleC) }
            if(i.values.includes("roleD")) { lgs.roles.roleD = await change(lgs.roles.roleD) }
            if(i.values.includes("roleU")) { lgs.roles.roleU = await change(lgs.roles.roleU) }
            lgs.save()

            setTimeout(async () => {
                i.editReply({ content: " ", embeds: [embed
                    .setDescription(`Switchea los logs de roles:\n\n${await all("roles")}`)
                ], components: [rowroles] });
            }, 2000);
        });

        scltr.on('end', x => { interaction.editReply({ components: [rowend] }); });
    }
//------------------------------------------------------------------------
    })
    collector.on('end', x => { interaction.editReply({ components: [rowend] }); })

}, 3000);
}
//------------------------------------------------------------------------
    return english();
//------------------------------------------------------------------------
    }
}