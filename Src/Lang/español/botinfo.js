const moment = require("moment");
require("moment-duration-format");

const bInfoEs = async (Discord, client, interaction, os, diagramMaker, totalGuilds, dependecies, pmongo, freeRAM, usedRAM, cpuUsage) => {

    const row = new Discord.MessageActionRow()
    .addComponents(new Discord.MessageSelectMenu()
        .setCustomId("info_tecnica")
        .setMinValues(1)
        .setMaxValues(1)
        .addOptions([
            {
                label: "Menú Principal",
                description: "Click para ver mi menú principal.",
                value: "1",
                emoji: "📁"
            },
            {
                label: "Información Tecnica",
                description: "Click para ver mi información tecnica.",
                value: "2",
                emoji: "💻"
            },
            {
                label: "Contribuidores",
                description: "Click para ver a mis contribuidores.",
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
                label: "Menú Principal",
                description: "Click para ver mi menú principal.",
                value: "1",
                emoji: "📁"
            },
        ])
    )

    const inicio = new Discord.MessageEmbed()
    .setAuthor({ name: " | MukaBot - Información General", iconURL: client.user.avatarURL() })
    .setThumbnail(client.user.avatarURL())
    .setDescription(`¡Hola! Soy \`${client.user.username}\`, un bot multifuncional creado con el propósito de intentar ayudar a tu servidor con estas categorías:
> **Antiraid** ✨
> **Diversión** 🌾
> **Utilidad** 🌿
> **Moderación** 🍂
> **Configuración** 🎑
Si quieres saber más sobre mi esta es mi información actual:`)
    .addField("➮ | General:", `- **__Comandos__ (k!)**: \`${client.commands.size}\`. 🌵
- **__Comandos__ (/)**: \`${client.cmds.size}\`. 🎈
- **__Servidores__**: \`${totalGuilds}\`. 🍃`, true)
    .addField("➮ | Creación: ", `- **__Por__**: \`TigerWeird#1198\` <:dev:899849804270694501>
- **__Fecha__**: \`${moment(client.user.createdAt).format(`DD MMM YYYY HH:mma`)}\``, true)
    .addField("➮ | Rendimiento:", "```" + `- ${diagramMaker(cpuUsage, 100 - cpuUsage)} ${Math.round(cpuUsage)}% CPU. 📊
- ${diagramMaker(usedRAM, freeRAM)} ${Math.round((100 * usedRAM) / (usedRAM + freeRAM))}% RAM. 📊` + "```", false)
    .setColor("PURPLE")
    .setTimestamp()
    .setFooter({ text: "¡Esta es mi información actual! <3" })

    const tecnica = new Discord.MessageEmbed()
    .setAuthor({ name: " | MukaBot - Información Tecnica", iconURL: client.user.avatarURL() })
    .setThumbnail(client.user.avatarURL())
    .setDescription(`- **__Sistema operativo__**: \`${os.type} ${os.release} ${os.arch}\`.
- **__Uptime__**: \`${moment.duration(client.uptime).format(`D [Días], H [Horas], m [Minutos], s [Segundos]`)}\`.
- **__Ping__**:
> API: \`${client.ws.ping}ms\`.
> Bot: \`${Math.round((Date.now() - interaction.createdTimestamp) / 1000)}ms\`.
> MongoDB: \`${pmongo}ms\`.`)
    .addField("- **__Dependencias__**:", `${dependecies}`, false)
    .setColor("PURPLE")
    .setTimestamp()
    .setFooter({ text: "¡Esta es mi información actual! <3" })

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
    .setAuthor({ name: " | MukaBot - Contribuidores", iconURL: client.user.avatarURL() })
    .setThumbnail(client.user.avatarURL())
    .setDescription(`Estas son las personas que contribuyeron con la creación de \`${client.user.username}\`. <3

> \`Developer\`:
- **${taiger.tag}**

> \`Traductores\`:
${traductores.join("\n")}

> \`Publicistas\`:
${publicistas.join("\n")}

> \`Designer\`:
${designers.join("\n")}

> \`Host\`:
- **[DanBot Hosting](https://discord.gg/g4VzrF247S)**`)
    .setColor("PURPLE")
    .setTimestamp()
    .setFooter({ text: "¡Esta es mi información actual! <3" })

    if(Math.floor(Math.random() * 100) == 4) {
        interaction.editReply({ content: "<a:rueditatm:847318816832749599> | Buscando novia..." })
    } else {
        interaction.editReply({ content: "<a:rueditatm:847318816832749599> | Obteniendo información..." })
    }
    setTimeout(async() => {
        const ifilter = i => i.user.id == interaction.user.id
        const m = await interaction.editReply({ content: ' ', embeds: [inicio], components: [row] })
        const collector = m.createMessageComponentCollector({ filter: ifilter, time: 60000 })
    
        collector.on("collect", async i => {
            if(i.values[0] == "1"){
                await i.deferUpdate();
                i.editReply({ embeds: [inicio], components: [row] });
            }
            if(i.values[0] == "2"){
                await i.deferUpdate();
                i.editReply({ embeds: [tecnica], components: [row] });
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
    bInfoEs
}