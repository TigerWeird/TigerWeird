const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const diagramMaker = require("../../Functions/diagramMaker.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("serverinfo")
    .setDescription("Displays the current server information."),

async execute(client, interaction, guildC) {

    const icon = interaction.guild.iconURL({ dynamic: true }) ?? " ";
    const banner = interaction.guild.bannerURL({ dynamic: true }) ?? " ";
    //-----------------------------------------------------------
    const guildChannels = interaction.guild.channels.cache;
    const boost = interaction.guild.premiumSubscriptionCount.toString();
    const chat = guildChannels.filter(c => c.type == `GUILD_TEXT`).size;
    const voz = guildChannels.filter(c => c.type == `GUILD_VOICE`).size;
    const total = guildChannels.filter(c => c.type == 'GUILD_TEXT' || c.type == 'GUILD_VOICE').size;
    //-----------------------------------------------------------
    const embed = new Discord.MessageEmbed()
    .setImage(banner)
    .setTimestamp()
    .setColor("PURPLE")
    .setThumbnail(icon)
    .setAuthor({ name: interaction.guild.name, iconURL: interaction.user.avatarURL() })

//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") {
        const lvl = { "NONE": "No Level", "1": "Level 1", "2": "Level 2", "3": "Level 3" }
        const verify = {
            "NONE": "- <:verification_none:959229662079381604> | **__Verification__**: \`None\`",
            "LOW": "- <:verification_low:959229661601206323> | **__Verification__**: \`Low\ ",
            "MEDIUM": "- <:verification_medium:959229661789966378> | **__Verification__**: \`Medium\` ",
            "HIGH": "- <:verification_high:959229661932568576> | **__Verification__**: \`High\` ",
            "VERY_HIGH": "- <:verification_very_high:959229661928378479> | **__Verification__**: \`Very High\`"
        }

        interaction.reply({ embeds: [embed
            .addField("➮ | General:", `- <:ID:959236371313209386> | **__ID__**: \`${interaction.guildId}\`.
- <:owner:959234304284696577> | **__Owner__**: \`${(await interaction.guild.fetchOwner()).user.tag}\`.
- <:settings:959237002891497492> | **__Creation__**: <t:${Math.floor(new Date(interaction.guild.createdTimestamp).getTime() / 1000)}:D> (<t:${Math.floor(new Date(interaction.guild.createdTimestamp).getTime() / 1000)}:R>).`, false)
            .addField("➮ | Stats:", `- <:members:959233234770755696> | **__Members__**: \`${interaction.guild.memberCount}\`.
- <:emojis:959233235173400586> | **__Emojis__**: \`${interaction.guild.emojis.cache.size}\`.
- <:roles:959233234955284480> | **__Roles__**: \`${interaction.guild.roles.cache.size}\`.`, true)
            .addField("➮ | Channels:", `- <:channels:959233235160801390> | **__Text__**: \`${chat}\`.
- <:voice:959233235089502230> | **__Voice__**: \`${voz}\`.
- <:total_channels:959233235097895012> | **__Total__**: \`${total}\`.`, true)
            .addField("➮ | Other:", `${verify[interaction.guild.verificationLevel]}.
- <:boost:959234098109497404> | **__Boost__**: ${diagramMaker(boost, 100)} (\`${boost} Boost\`) (\`${lvl[interaction.guild.premiumTier]}\`).`, false)
            .setFooter({ text: `Requested by: ${interaction.user.tag}` })
        ] });
    } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        const boostLevel = { "NONE": "Sin Nivel.", "1": "Nivel 1", "2": "Nivel 2", "3": "Nivel 3", }
        const verificationLevel = { "NONE": "Ninguno", "LOW": "Bajo", "MEDIUM": "Medio", "HIGH": "Alto", "VERY_HIGH": "Muy Alto" }

        interaction.reply({ embeds: [embed
            .addField("➮ | General:", `- **__ID__**: \`${interaction.guildId}\`.
- **__Owner__**: \`${(await interaction.guild.fetchOwner()).user.tag}\`. <:owner:848265994748297247>
- **__Creación__**: <t:${Math.floor(new Date(interaction.guild.createdTimestamp).getTime() / 1000)}:D> - (<t:${Math.floor(new Date(interaction.guild.createdTimestamp).getTime() / 1000)}:R>).`, false)
            .addField("➮ | Estadisticas:", `- **__Miembros__**: \`${interaction.guild.memberCount}\`. <:users:848269507797057539>
- **__Emojis__**: \`${interaction.guild.emojis.cache.size}\`.
- **__Roles__**: \`${interaction.guild.roles.cache.size}\`.`, true)
            .addField("➮ | Canales:", `- **__Chat__**: \`${chat}\`. <:text:848269508194861076>
- **__Voz__**: \`${voz}\`. <:voice:848269508102979585>
- **__Total__**: \`${total}\`. <:config:910793133221105686>`, true)
            .addField("➮ | Otros:", `- **__Verificación__**: \`${verificationLevel[interaction.guild.verificationLevel]}\`.
- **__Boost__**: \`\`\`${diagramMaker(boost, 100)} > ${boost} Boost (${boostLevel[interaction.guild.premiumTier]})\`\`\``, false)
            .setFooter({ text: `Solicitado por: ${interaction.user.tag}` })
        ] });
    }
//------------------------------------------------------------------------
    }
}