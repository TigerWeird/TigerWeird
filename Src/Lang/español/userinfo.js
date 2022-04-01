const userInfo = async (interaction, user, member, userFetched, badges, embed) => {
    let otherRoles = " ";
    let misRoles = " ";

    const myroles = async () => {
        let max = 125;
        let roles = await interaction.member.roles.cache.map(e => e).filter(a => a.id != interaction.guild.id).join(", ").slice(0, max);
        if(roles.length < h) return misRoles = roles
        if(roles.length <= 2) return misRoles = "\`Sin roles\`."
        while(!roles.endsWith(">")) {
            roles = await interaction.member.roles.cache.map(e => e).filter(a => a.id != interaction.guild.id).join(", ").slice(0, max++);
        }
        return misRoles = `${roles}...`;
    }
    if(!user) {
        await myroles()
        interaction.editReply({ embeds: [embed
            .setAuthor({ name: `${interaction.user.tag}`, iconURL: interaction.user.displayAvatarURL()})
            .addField(`➮ | General:`, `- **__ID__**: \`${interaction.user.id}\`.
- **__Nickname__**: ${interaction.member.nickname ?? "\`Sin nickname\`."}
- **__Creación__**: <t:${Math.floor(new Date(interaction.user.createdAt).getTime() / 1000)}:D> - (<t:${Math.floor(new Date(interaction.user.createdAt).getTime() / 1000)}:R>).`)
            .addField(`➮ | Servidor:`, `- **__Unión__**: <t:${Math.floor(new Date(interaction.member.joinedAt).getTime() / 1000)}:D> - (<t:${Math.floor(new Date(interaction.member.joinedAt).getTime() / 1000)}:R>).
- **__Roles__**: ${misRoles}`)
            .addField("➮ | Insignias", `${badges[interaction.user.flags.toArray()] ?? "\`Sin insignias\`."}`)
            .setThumbnail(interaction.user.displayAvatarURL())
            .setFooter({ text: `Que interesante información.` })
        ] })
    } else {
        if(interaction.guild.members?.resolve(member?.id)) {
            const roles = async () => {
                let max = 125;
                let roles = await member.roles.cache.map(e => e).filter(a => a.id != interaction.guild.id).join(", ").slice(0, max);
                if(roles.length < max) return otherRoles = roles
                if(roles.length <= 2) return otherRoles = "\`Sin roles\`."
                while(!roles.endsWith(">")) {
                    roles = await member.roles.cache.map(e => e).filter(a => a.id != interaction.guild.id).join(", ").slice(0, max++);
                }
                return otherRoles = `${roles}...`;
            }
            await roles()
            interaction.editReply({ embeds: [embed
                .setAuthor({ name: `${member.tag}`, iconURL: member.displayAvatarURL()})
                .addField(`➮ | General:`, `- **__ID__**: \`${member.id}\`.
- **__Nickname__**: ${userFetched.nickname ?? "\`Sin nickname.\`"}
- **__Creación__**: <t:${Math.floor(new Date(member.createdAt).getTime() / 1000)}:D> - (<t:${Math.floor(new Date(userFetched.createdAt).getTime() / 1000)}:R>).`)
                .addField(`➮ | Servidor:`, `- **__Unión__**: <t:${Math.floor(new Date(userFetched.joinedAt).getTime() / 1000)}:D> - (<t:${Math.floor(new Date(member.joinedAt).getTime() / 1000)}:R>).
- **__Roles__**: ${otherRoles}`)
                .addField("➮ | Insignias", `${badges[member.flags.toArray()] ?? "\`Sin insignias\`."}`)
                .setThumbnail(member.displayAvatarURL())
                .setFooter({ text: `Pedido por: ${interaction.user.tag}`, iconURL: interaction.user.avatarURL({ dynamic: true })})
            ] })
        } else {
            interaction.editReply({ embeds: [embed
                .setAuthor({ name: `${userFetched.tag}`, iconURL: userFetched.displayAvatarURL()})
                .addField(`➮ | General:`, `- **__ID__**: \`${userFetched.id}\`.
- **__Creación__**: <t:${Math.floor(new Date(userFetched.createdAt).getTime() / 1000)}:D> - (<t:${Math.floor(new Date(userFetched.createdAt).getTime() / 1000)}:R>).`)
                .addField("➮ | Insignias", `${badges[userFetched.flags.toArray()] ?? "\`Sin insignias\`."}`)
                .setThumbnail(userFetched.displayAvatarURL())
                .setFooter({ text: `Pedido por: ${interaction.user.tag}`, iconURL: interaction.user.avatarURL({ dynamic: true })})
            ] })
        }
    }
}
//--------------------------------------------------------------------------------   Export
module.exports = {
    userInfo
}