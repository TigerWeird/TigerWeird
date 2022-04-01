const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ev, noPermsEn, noPermsEs, wrongEn, wrongEs } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("unban")
    .setDescription("Command to unban a user.")
    .addStringOption(option => option.setName("target").setDescription("User to unban.").setRequired(true) )
    .addStringOption(option => option.setName("reason").setDescription("Reason for the unban.")),

async execute(client, interaction, guildC) {

    const user = interaction.options.getUser("target");
    const reason = interaction.options.getString("reason");
    const userFetched = await client.users?.fetch(user);
    //---------------------------------
    const perms = interaction.member.permissions.has("BAN_MEMBERS");
    const botPerms = interaction.guild.me.permissions.has("BAN_MEMBERS");
    //---------------------------------
    const channel = guildC?.config?.sanctions;
    const canal = client.channels.cache.get(channel);
    //---------------------------------
    const embed = new Discord.MessageEmbed()
    .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL()})
    .setColor("GREEN")
    .setTimestamp()
    .setFooter({ text: `Staff ID: ${interaction.user.id}.` })

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        if(!perms) return interaction.reply({ content: noPermsEn.noPerms + `\`Ban Members\`.`, ephemeral: true });
        if(!botPerms) return interaction.reply({ content: noPermsEn.noBotPerms + `\`Ban Members\`.`, ephemeral: true });
        //----------------------------------------------------------
        interaction.guild.bans.fetch().then(bans => {
            if(bans.size == 0) return interaction.reply({ content: wrongEn + `\`This server has no active bans\`.`, ephemeral: true });
            let userBanned = bans.find(e => e.user.id == userFetched);
            if(!userBanned) return interaction.reply({ content: wrongEn + `\`You must mention a valid user to unban\`.`, ephemeral: true });
        });
        //----------------------------------------------------------
        userFetched.send({ content: `> You have been unbanned from \`${interaction.guild.name}\`.
- **__Staff__**: \`${interaction.user.tag}\`.\n- **__Reason__**: \`${reason ?? "Unspecified"}\`.` }).catch(() => {});

        interaction.guild.members.unban(userFetched.id, { reason: `${interaction.user.tag} - ${reason ?? "Unspecified"}.` });
        interaction.reply({ content: ev + `*\`${userFetched.tag}\` has been unbanned!*
- **__Reason__**: \`${reason ?? "Unspecified"}\`.` });
        //----------------------------------------------------------
        if(!interaction.guild.channels?.resolve(channel) || 
        !canal.permissionsFor(client.user.id).has(["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"])) return;

        canal.send({ embeds: [embed
            .setDescription(`➮ | Member:\n- **__ID__**: \`${userFetched.id}\`.
- **__Tag__**: \`${userFetched.tag}\`.\n\n➮ | Details:- **__Sanction__**: \`UnBan\`.
- **__Reason__**: \`${reason ?? "Unspecified"}\`.`)
            .setThumbnail(userFetched.displayAvatarURL())
        ] });
        //----------------------------------------------------------
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        if(!perms) return interaction.reply({ content: noPermsEs.noPerms + `\`Ban Members\`.`, ephemeral: true });
        if(!botPerms) return interaction.reply({ content: noPermsEs.noBotPerms + `\`Ban Members\`.`, ephemeral: true });
        //----------------------------------------------------------
        interaction.guild.bans.fetch().then(bans => {
            if(bans.size == 0) return interaction.reply({ content: wrongEs + `\`Este servidor no tiene ningún ban activo\`.`, ephemeral: true });
            let userBanned = bans.find(e => e.user.id == userFetched);
            if(!userBanned) return interaction.reply({ content: wrongEs + `\`Debes mencionar a un usuario válido para unbanear\`.`, ephemeral: true });
        });
        //----------------------------------------------------------
        userFetched.send({ content: `> Has sido desbaneado de \`${interaction.guild.name}\`.
- **__Staff__**: \`${interaction.user.tag}\`.\n- **__Motivo__**: \`${reason ?? "Sin especificar"}\`.` }).catch(() => {});

        interaction.guild.members.unban(userFetched.id, { reason: `${interaction.user.tag} - ${reason ?? "Unspecified"}.` });
        interaction.reply({ content: ev + `*\`${userFetched.tag}\` ha sido desbaneado!*
- **__Motivo__**: \`${reason ?? "Sin especificar"}\`.` });
        //----------------------------------------------------------
        if(!interaction.guild.channels?.resolve(channel) || 
        !canal.permissionsFor(client.user.id).has(["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"])) return;

        canal.send({ embeds: [embed
            .setDescription(`➮ | Miembro:\n- **__ID__**: \`${userFetched.id}\`.
- **__Tag__**: \`${userFetched.tag}\`.\n\n➮ | Detalles:- **__Sanción__**: \`UnBan\`.
- **__Motivo__**: \`${reason ?? "Sin especificar"}\`.`)
            .setThumbnail(userFetched.displayAvatarURL())
        ] });
        //----------------------------------------------------------
    }
//------------------------------------------------------------------------
    }
}