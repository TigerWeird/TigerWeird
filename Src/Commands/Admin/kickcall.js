const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ev, noPermsEn, noPermsEs, wrongEn, wrongEs } = require("../../Json/used.json");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("kickcall")
    .setDescription("Kick a user from their call.")
    .addUserOption(option => option.setName("target").setDescription("User to be kicked out of the call.").setRequired(true))
    .addUserOption(option => option.setName("reason").setDescription("Motivo para sacarlo de la llamada.")),

async execute(client, interaction, guildC) {

    const member = interaction.options.getMember("target");
    const user = interaction.options.getUser("target");
    const reason = interaction.options.getString("reason");
    const userResolve = interaction.guild.members.resolve(user.id);
    const guildOwner = (await interaction.guild.fetchOwner());
    //---------------------------------
    const perms = interaction.member.permissions.has("KICK_MEMBERS");
    const botPerms = interaction.guild.me.permissions.has("KICK_MEMBERS");
    //---------------------------------
    const channel = guildC?.config?.sanctions;
    const canal = client.channels.cache.get(channel);
    const userVoiceChannel = member.voice.channel?.id
    //---------------------------------
    const ownerPerms = !userResolve || user.id == interaction.user.id || user.id == client.user.id || 
    interaction.guild.members.cache.get(client.user.id).roles.highest.rawPosition <= member.roles.highest.rawPosition || 
    !member.voice.channel;
    //---------------------------------
    const noOwnerPerms = ownerPerms || user.id == guildOwner.user.id || 
    interaction.member.roles.highest.rawPosition <= member.roles.highest.rawPosition;
    //---------------------------------
    const embed = new Discord.MessageEmbed()
    .setAuthor({ name: interaction.user.tag, iconURL: interaction.user.displayAvatarURL()})
    .setColor("YELLOW")
    .setTimestamp()
    .setFooter({ text: `Staff ID: ${interaction.user.id}.` })

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        if(!perms) return interaction.reply({ content: noPermsEn.noPerms + `\`Move Members\`.`, ephemeral: true });
        if(!botPerms) return interaction.reply({ content: noPermsEn.noBotPerms + `\`Move Members\`.`, ephemeral: true });
        //----------------------------------------------------------
        if(interaction.user.id == guildOwner.user.id) {
            if(ownerPerms) return interaction.reply({ content: 
                wrongEn + `\`You must mention a valid user to kick from their voice channel\`.`, ephemeral: true });
        } else {
            if(noOwnerPerms) return interaction.reply({ content: 
                wrongEn + `\`You must mention a valid user to kick from their voice channel\`.`, ephemeral: true });
        }
        //----------------------------------------------------------
        user.send({ content: `> You have been kicked from your voice channel in \`${interaction.guild.name}\`.
- **__Staff__**: \`${interaction.user.tag}\`.\n- **__Reason__**: \`${reason ?? "Unspecified"}\`.` }).catch(() => {});

        member.voice.disconnect(`${interaction.user.tag} - ${reason ?? "Unspecified"}.`).catch(() => {});
        interaction.reply({ content: ev + `*\`${user.tag}\` has been kicked from <#${userVoiceChannel}>.*
- **__Reason__**: \`${reason ?? "Unspecified"}\`.` });
        //----------------------------------------------------------
        if(!interaction.guild.channels?.resolve(channel) || 
            !canal?.permissionsFor(client.user.id)?.has(["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"])) return;

        canal.send({ embeds: [embed
            .setDescription(`➮ | Member:\n- **__ID__**: \`${user.id}\`.
- **__Tag__**: \`${user.tag}\`.\n\n➮ | Details:- **__Sanction__**: \`Voice Kick\`.
- **__Reason__**: \`${reason ?? "Unspecified"}\`.`)
            .setThumbnail(user.displayAvatarURL())
        ] });
        //----------------------------------------------------------
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        if(!perms) return interaction.reply({ content: noPermsEs.noPerms + `\`Move Members\`.`, ephemeral: true });
        if(!botPerms) return interaction.reply({ content: noPermsEs.noBotPerms + `\`Move Members\`.`, ephemeral: true });
        //----------------------------------------------------------
        if(interaction.user.id == guildOwner.user.id) {
            if(ownerPerms) return interaction.reply({ content: 
                wrongEs + `\`Debes mencionar a un usuario válido para expulsar de su canal de voz\`.`, ephemeral: true });
        } else {
            if(noOwnerPerms) return interaction.reply({ content: 
                wrongEs + `\`Debes mencionar a un usuario válido para expulsar de su canal de voz\`.`, ephemeral: true });
        }
        //----------------------------------------------------------
        user.send({ content: `> Has sido expulsado de tu canal de voz en \`${interaction.guild.name}\`.
- **__Staff__**: \`${interaction.user.tag}\`.\n- **__Motivo__**: \`${reason ?? "Sin especificar"}\`.` }).catch(() => {});

        member.voice.disconnect(`${interaction.user.tag} - ${reason ?? "Sin especificar"}.`).catch(() => {});
        interaction.reply({ content: ev + `*\`${user.tag}\` ha sido expulsado de <#${userVoiceChannel}>.*
- **__Motivo__**: \`${reason ?? "Sin especificar"}\`.` });
        //----------------------------------------------------------
        if(!interaction.guild.channels?.resolve(channel) || 
            !canal?.permissionsFor(client.user.id)?.has(["VIEW_CHANNEL", "SEND_MESSAGES", "EMBED_LINKS"])) return;

        canal.send({ embeds: [embed
            .setDescription(`➮ | Miembro:\n- **__ID__**: \`${user.id}\`.
- **__Tag__**: \`${user.tag}\`.\n\n➮ | Detalles:- **__Sanción__**: \`Voice Kick\`.
- **__Motivo__**: \`${reason ?? "Sin especificar"}\`.`)
            .setThumbnail(user.displayAvatarURL())
        ] });
        //----------------------------------------------------------
    }
//------------------------------------------------------------------------
    }
}