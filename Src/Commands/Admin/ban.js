const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ev, noPermsEn, noPermsEs, wrongEn, wrongEs } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ban")
    .setDescription("Ban a user.")
    .addUserOption(option => option.setName("target").setDescription("The user to be banned.").setRequired(true) )
    .addStringOption(option => option.setName("reason").setDescription("The reason for the ban") ),

async execute(client, interaction, guildC) {

    const member = interaction.options.getMember("target");
    const user = interaction.options.getUser("target");
    const reason = interaction.options.getString("reason");
    const userResolve = interaction.guild.members.resolve(user.id);
    const guildOwner = (await interaction.guild.fetchOwner());
    //---------------------------------
    const perms = interaction.member.permissions.has("BAN_MEMBERS");
    const botPerms = interaction.guild.me.permissions.has("BAN_MEMBERS");
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
    .setColor("RED")
    .setTimestamp()
    .setFooter({ text: `Staff ID: ${interaction.user.id}.` })

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        if(!perms) return interaction.reply({ content: noPermsEn.noPerms + `\`Ban Members\`.`, ephemeral: true });
        if(!botPerms) return interaction.reply({ content: noPermsEn.noBotPerms + `\`Ban Members\`.`, ephemeral: true });
        //----------------------------------------------------------
        if(interaction.user.id == guildOwner.user.id) {
            if(ownerPerms) return interaction.reply({ content: wrongEn + `\`You must mention a valid user to ban\`.`, ephemeral: true });
        } else {
            if(noOwnerPerms) return interaction.reply({ content: wrongEn + `\`You must mention a valid user to ban\`.`, ephemeral: true });
        }
        //----------------------------------------------------------
        user.send({ content: `> You have been banned from \`${interaction.guild.name}\`.
- **__Staff__**: \`${interaction.user.tag}\`.\n- **__Reason__**: \`${reason ?? "Unspecified"}\`.` }).catch(() => {});

        interaction.guild.members.ban(member, { reason: `${interaction.user.tag} - ${reason ?? "Unspecified"}.` }).catch(() => {});
        interaction.reply({ content: ev + `*\`${user.tag}\` has been banned from the server!*
- **__Reason__**: \`${reason ?? "Unspecified"}\`.` });
        //----------------------------------------------------------
        if(!interaction.guild.channels?.resolve(channel)) return;
        if(!canal.permissionsFor(client.user.id).has(["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"])) return;

        canal.send({ embeds: [embed
            .setDescription(`➮ | Member:\n- **__ID__**: \`${user.id}\`.
- **__Tag__**: \`${user.tag}\`.\n\n➮ | Details:- **__Sanction__**: \`Ban\`.
- **__Reason__**: \`${reason ?? "Unspecified"}\`.`)
            .setThumbnail(user.displayAvatarURL())
        ] });
        //----------------------------------------------------------
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        if(!perms) return interaction.reply({ content: noPermsEs.noPerms + `\`Ban Members\`.`, ephemeral: true });
        if(!botPerms) return interaction.reply({ content: noPermsEs.noBotPerms + `\`Ban Members\`.`, ephemeral: true });
        //----------------------------------------------------------
        if(interaction.user.id == guildOwner.user.id) {
            if(ownerPerms) return interaction.reply({ content: wrongEs + `\`Debes mencionar a un usuario válido para banear\`.`, ephemeral: true });
        } else {
            if(noOwnerPerms) return interaction.reply({ content: wrongEs + `\`Debes mencionar a un usuario válido para banear\`.`, ephemeral: true });
        }
        //----------------------------------------------------------
        user.send({ content: `> Has sido baneado de \`${interaction.guild.name}\`.
- **__Staff__**: \`${interaction.user.tag}\`.\n- **__Motivo__**: \`${reason ?? "Sin especificar"}\`.` }).catch(() => {});

        interaction.guild.members.ban(member, { reason: `${interaction.user.tag} - ${reason ?? "Sin especificar"}.` }).catch(() => {});
        interaction.reply({ content: ev + `*\`${user.tag}\` ha sido baneado del servidor!*
- **__Motivo__**: \`${reason ?? "Sin especificar"}\`.` });
        //----------------------------------------------------------
        if(!interaction.guild.channels?.resolve(channel) || 
            !canal?.permissionsFor(client.user.id)?.has(["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"])) return;

        canal.send({ embeds: [embed
          .setDescription(`➮ | Miembro:\n- **__ID__**: \`${user.id}\`.
- **__Tag__**: \`${user.tag}\`.\n\n➮ | Detalles:- **__Sanción__**: \`Ban\`.
- **__Motivo__**: \`${reason ?? "Sin especificar"}\`.`)
            .setThumbnail(user.displayAvatarURL())
        ] }).catch(() => {});
        //----------------------------------------------------------
    }
//------------------------------------------------------------------------
    }
}