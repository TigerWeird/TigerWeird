const moment = require("moment");
require("moment-duration-format");

const bInfoEn = async (Discord, client, interaction, os, diagramMaker, totalGuilds, dependecies, pmongo, freeRAM, usedRAM, cpuUsage) => {

    const row = new Discord.MessageActionRow()
    .addComponents(new Discord.MessageSelectMenu()
        .setCustomId("info_tecnica")
        .setMinValues(1)
        .setMaxValues(1)
        .addOptions([
            {
                label: "Main Menu",
                description: "Click to see my main menu.",
                value: "1",
                emoji: "📁"
            },
            {
                label: "Technical Information",
                description: "Click to see my technical information.",
                value: "2",
                emoji: "💻"
            },
            {
                label: "Contributors",
                description: "Click to see my contributors.",
                value: "3",
                emoji: "👨‍🔧"
            },
        ])
    );
    const rowend = new Discord.MessageActionRow()
    .addComponents(new Discord.MessageSelectMenu()
        .setCustomId("info_end")
        .setDisabled(true)
        .addOptions([
            {
                label: "Main Menu",
                description: "Click to see my main menu.",
                value: "1",
                emoji: "📁"
            },
        ])
    )

    const main = new Discord.MessageEmbed()
    .setAuthor({ name: " | MukaBot - General information", iconURL: client.user.avatarURL() })
    .setThumbnail(client.user.avatarURL())
    .setDescription(`Hi! I'm \`${client.user.username}\`, a multifunctional bot created for the purpose of trying to help your server with these categories:
> **Antiraid** ✨
> **Fun** 🌾
> **Useful** 🌿
> **Moderation** 🍂
> **Configuration** 🎑
If you want to know more about me this is my current information:`)
    .addField("➮ | General:", `- **__Commands__ (k!)**: \`${client.commands.size}\`. 🌵
- **__Commands__ (/)**: \`${client.cmds.size}\`. 🎈
- **__Servers__**: \`${totalGuilds}\`. 🍃`, true)
    .addField("➮ | Creation: ", `- **__By__**: \`TigerWeird#1198\` <:dev:899849804270694501>
- **__Date__**: \`${moment(client.user.createdAt).format(`DD MMM YYYY HH:mma`)}\``, true)
    .addField("➮ | Performance:", "```" + `- ${diagramMaker(cpuUsage, 100 - cpuUsage)} ${Math.round(cpuUsage)}% CPU. 📊
- ${diagramMaker(usedRAM, freeRAM)} ${Math.round((100 * usedRAM) / (usedRAM + freeRAM))}% RAM. 📊` + "```", false)
    .setColor("PURPLE")
    .setTimestamp()
    .setFooter({ text: "This is my current information! <3" })

    const tecnical = new Discord.MessageEmbed()
    .setAuthor({ name: " | MukaBot - Technical information", iconURL: client.user.avatarURL() })
    .setThumbnail(client.user.avatarURL())
    .setDescription(`- **__Operating system__**: \`${os.type} ${os.release} ${os.arch}\`.
- **__Uptime__**: \`${moment.duration(client.uptime).format(`D [Days], H [Hours], m [Minutes], s [Seconds]`)}\`.
- **__Ping__**:
> API: \`${client.ws.ping}ms\`.
> Bot: \`${Math.round((Date.now() - interaction.createdTimestamp) / 1000)}ms\`.
> MongoDB: \`${pmongo}ms\`.`)
    .addField("- **__Dependencies__**:", `${dependecies}`, false)
    .setColor("PURPLE")
    .setTimestamp()
    .setFooter({ text: "This is my current information! <3" })

    const mukasGuild = client.guilds.cache.get("717240720758669363")
    const taiger = await client.users.fetch("295250573937344514")

    let traductores = []; publicistas = []; designers = [];
    const perRole = async (rol, array) => {
        const filter = mukasGuild.members.cache.filter(f => f.roles.cache.has(rol))
        if(filter.size <= 0) array.push(`- **Soon...**`);
        filter.forEach(async e => {
            const userFetched = await client.users.fetch(e.id);
            array.push(`- **${userFetched.tag}**`);
        })
    }
    await perRole("940834184803545089", traductores)
    await perRole("941503082129412156", publicistas)
    await perRole("941502922318049320", designers)

    const contributors = new Discord.MessageEmbed()
    .setAuthor({ name: " | MukaBot - Contributors", iconURL: client.user.avatarURL() })
    .setThumbnail(client.user.avatarURL())
    .setDescription(`These are the people who contributed to the creation of \`${client.user.username}\`. <3

> \`Developer\`:
- **${taiger.tag}**

> \`Translators\`:
${traductores.join("\n")}

> \`Advertising\`:
${publicistas.join("\n")}

> \`Designer\`:
${designers.join("\n")}

> \`Host\`:
- **[DanBot Hosting](https://discord.gg/g4VzrF247S)**`)
    .setColor("PURPLE")
    .setTimestamp()
    .setFooter({ text: "This is my current information! <3" })

    interaction.editReply({ content: "<a:rueditatm:847318816832749599> | Obtaining information..." })
    setTimeout(async() => {
        const ifilter = i => i.user.id == interaction.user.id
        const m = await interaction.editReply({ content: ' ', embeds: [main], components: [row] })
        const collector = m.createMessageComponentCollector({ filter: ifilter, time: 60000 })
    
        collector.on("collect", async i => {
            if(i.values[0] == "1"){
                await i.deferUpdate();
                i.editReply({ embeds: [main], components: [row] });
            }
            if(i.values[0] == "2"){
                await i.deferUpdate();
                i.editReply({ embeds: [tecnical], components: [row] });
            }
            if(i.values[0] == "3"){
                await i.deferUpdate();
                i.editReply({ embeds: [contributors], components: [row] });
            }
        })
        collector.on('end', x => {
            interaction.editReply({ components: [rowend] });
        })
    }, 3000);

}
//--------------------------------------------------------------------------------   Export
module.exports = {
    bInfoEn
}