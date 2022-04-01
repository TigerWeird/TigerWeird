const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
  .setName("avatar")
  .setDescription("Show your avatar or someone else's.")
  .addUserOption(option => option.setName("target").setDescription("The user whose avatar you want to see.")),

async execute(client, interaction, guildC) {

  const user = interaction.options.getUser('target');
  const embed = new Discord.MessageEmbed()
  .setColor("#ff47d4")
  .setTimestamp()

//------------------------------------------------------------------------
  if(guildC?.config?.lang == "en") {
    if(!user) {
      return interaction.reply({ embeds: [embed
        .setFooter({ text: `Nice avatar. <3` })
        .setAuthor({ name: `[This is your avatar](${interaction.user.displayAvatarURL()}).`, iconURL: interaction.user.displayAvatarURL() })
        .setImage(interaction.user.displayAvatarURL({ dynamic: true, size: 1024 }))
      ] });
    } else {
      const userFetched = await client.users?.fetch(user?.id);
      return interaction.reply({ embeds: [embed
        .setFooter({ text: `Request by: ${interaction.user.tag}` })
        .setAuthor({ name: `Avatar of [${userFetched?.tag}](${userFetched?.displayAvatarURL()})`, iconURL: interaction.user.displayAvatarURL() })
        .setImage(userFetched.displayAvatarURL({ dynamic: true, size: 1024 }))
    ] });
  }
} else 
//------------------------------------------------------------------------
  if(guildC?.config?.lang == "es"){
    if(!user) {
      return interaction.reply({ embeds: [embed
        .setFooter({ text: `Que bonito avatar. <3` })
        .setAuthor({ name: `[Acá tienes tu avatar](${interaction.user.displayAvatarURL()}).`, iconURL: interaction.user.displayAvatarURL()})
        .setImage(interaction.user.displayAvatarURL({ dynamic: true, size: 1024 }))
      ] });
    } else {
      const userFetched = await client.users?.fetch(user?.id);
      return interaction.reply({ embeds: [embed
        .setFooter({ text: `Pedido por: ${interaction.user.tag}` })
        .setAuthor({ name: `Avatar de [${userFetched?.tag}](${userFetched?.displayAvatarURL()})`, iconURL: interaction.user.displayAvatarURL() })
        .setImage(userFetched.displayAvatarURL({ dynamic: true, size: 1024 }))
      ] });
    }
  }
//------------------------------------------------------------------------
  }
}