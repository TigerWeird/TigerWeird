const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ev, noPermsEn, noPermsEs, wrongEn, wrongEs } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("kick")
    .setDescription("Kick a user from the server.")
    .addUserOption(option => option.setName("target").setDescription("User to be expelled.").setRequired(true) )
    .addStringOption(option => option.setName("reason").setDescription("Reason for expulsion.")),

async execute(client, interaction, guildC) {

    const member = interaction.options.getMember("target");
    const user = interaction.options.getUser("target");
    const reason = interaction.options.getString("reason");
    const userResolve = interaction.guild.members.resolve(user.id);
    //---------------------------------
    const perms = interaction.member.permissions.has("KICK_MEMBERS");
    const botPerms = interaction.guild.me.permissions.has("KICK_MEMBERS");
    //---------------------------------
    const channel = guildC?.config?.sanctions;
    const canal = client.channels.cache.get(channel);
    //---------------------------------
    const ownerPerms = !userResolve || user.id == interaction.user.id || user.id == client.user.id || 
    interaction.guild.members.cache.get(client.user.id).roles.highest.rawPosition <= member.roles.highest.rawPosition;
    //---------------------------------
    const noOwnerPerms = ownerPerms || user.id == guildOwner.user.id || 
    interaction.member.roles.highest.rawPosition <= member.roles.highest.rawPosition;
    //---------------------------------
    const embed = new Discord.MessageEmbed()
    .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL()})
    .setColor("ORANGE")
    .setTimestamp()
    .setFooter({ text: `Staff ID: ${interaction.user.id}.` })

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        if(!perms) return interaction.reply({ content: noPermsEn.noPerms + `\`Kick Members\`.`, ephemeral: true });
        if(!botPerms) return interaction.reply({ content: noPermsEn.noBotPerms + `\`Kick Members\`.`, ephemeral: true });
        //----------------------------------------------------------
        if(interaction.user.id == guildOwner.user.id) {
            if(ownerPerms) return interaction.reply({ content: wrongEn + `\`You must mention a valid user to kick\`.`, ephemeral: true });
        } else {
            if(noOwnerPerms) return interaction.reply({ content: wrongEn + `\`You must mention a valid user to kick\`.`, ephemeral: true });
        }
        //----------------------------------------------------------
        user.send({ content: `> You have been kicked from \`${interaction.guild.name}\`.
- **__Staff__**: \`${interaction.user.tag}\`.\n- **__Reason__**: \`${reason ?? "Unspecified"}\`.` }).catch(() => {});

        interaction.guild.members.kick(member, { reason: `${interaction.user.tag} - ${reason ?? "Unspecified"}.` }).catch(() => {});
        interaction.reply({ content: ev + `*\`${user.tag}\` has been kicked from the server!*
- **__Reason__**: \`${reason ?? "Unspecified"}\`.` });
        //----------------------------------------------------------
        if(!interaction.guild.channels?.resolve(channel) || 
            !canal?.permissionsFor(client.user.id)?.has(["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"])) return;

        canal.send({ embeds: [embed
            .setDescription(`➮ | Member:\n- **__ID__**: \`${user.id}\`.
- **__Tag__**: \`${user.tag}\`.\n\n➮ | Details:- **__Sanction__**: \`Kick\`.
- **__Reason__**: \`${reason ?? "Unspecified"}\`.`)
            .setThumbnail(user.displayAvatarURL())
        ] });
        //----------------------------------------------------------
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        if(!perms) return interaction.reply({ content: noPermsEs.noPerms + `\`Kick Members\`.`, ephemeral: true });
        if(!botPerms) return interaction.reply({ content: noPermsEs.noBotPerms + `\`Kick Members\`.`, ephemeral: true });
        //----------------------------------------------------------
        if(interaction.user.id == guildOwner.user.id) {
            if(ownerPerms) return interaction.reply({ content: wrongEs + `\`Debes mencionar a un usuario válido para expulsar\`.`, ephemeral: true });
        } else {
            if(noOwnerPerms) return interaction.reply({ content: wrongEs + `\`Debes mencionar a un usuario válido para expulsar\`.`, ephemeral: true });
        }
        //----------------------------------------------------------
        user.send({ content: `> Has sido expulsado de \`${interaction.guild.name}\`.
- **__Staff__**: \`${interaction.user.tag}\`.\n- **__Motivo__**: \`${reason ?? "Sin especificar"}\`.` }).catch(() => {});

        interaction.guild.members.kick(member, { reason: `${interaction.user.tag} - ${reason ?? "Sin especificar"}.` }).catch(() => {});
        interaction.reply({ content: ev + `*\`${user.tag}\` ha sido expulsado del servidor!*
- **__Motivo__**: \`${reason ?? "Sin especificar"}\`.` });
        //----------------------------------------------------------
        if(!interaction.guild.channels?.resolve(channel) || 
        !canal?.permissionsFor(client.user.id)?.has(["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"])) return;

        canal.send({ embeds: [embed
            .setDescription(`➮ | Miembro:\n- **__ID__**: \`${user.id}\`.
- **__Tag__**: \`${user.tag}\`.\n\n➮ | Detalles:- **__Sanción__**: \`Ban\`.
- **__Motivo__**: \`${reason ?? "Sin especificar"}\`.`)
            .setThumbnail(user.displayAvatarURL())
        ] });
        //----------------------------------------------------------
    }
//------------------------------------------------------------------------
    }
}