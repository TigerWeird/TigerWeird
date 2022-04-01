const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ee, ev, npn, nps } = require("../../Json/used.json")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("poll")
    .setDescription("Do a survey for the members of your server.")
    .addStringOption(option => option.setName("pregunta").setDescription("Ask the survey question").setRequired(true) )
    .addStringOption(option => option.setName("option_a").setDescription("First choice of the survey").setRequired(true) )
    .addStringOption(option => option.setName("reaction_a").setDescription("First reaction of the survey").setRequired(true) )
    .addStringOption(option => option.setName("option_b").setDescription("Second choice of the survey").setRequired(true) )
    .addStringOption(option => option.setName("reaction_b").setDescription("Second survey reaction").setRequired(true) )
    .addStringOption(option => option.setName("option_c").setDescription("Third choice of the survey"))
    .addStringOption(option => option.setName("reaction_c").setDescription("Third survey reaction"))
    .addStringOption(option => option.setName("option_d").setDescription("Fourth survey option"))
    .addStringOption(option => option.setName("reaction_d").setDescription("Fourth survey reaction")),

async execute(client, interaction, guildC) {

// REVISAR COMANDO --------------------------<
// REVISAR COMANDO --------------------------<
// REVISAR COMANDO --------------------------<
// REVISAR COMANDO --------------------------<
// REVISAR COMANDO --------------------------<
// REVISAR COMANDO --------------------------<
// REVISAR COMANDO --------------------------<
// REVISAR COMANDO --------------------------<
// REVISAR COMANDO --------------------------<
// REVISAR COMANDO --------------------------<
// REVISAR COMANDO --------------------------<
// REVISAR COMANDO --------------------------<
// REVISAR COMANDO --------------------------<
// REVISAR COMANDO --------------------------<
// REVISAR COMANDO --------------------------<
// REVISAR COMANDO --------------------------<
// REVISAR COMANDO --------------------------<
/*
    const p = interaction.member.permissions.has("MANAGE_CHANNELS");
    const p1 = interaction.guild.me.permissions.has("VIEW_CHANNEL");
    const p2 = interaction.guild.me.permissions.has("SEND_MESSAGES");
    const p3 = interaction.guild.me.permissions.has("ATTACH_LINKS");
    const p4 = interaction.guild.me.permissions.has("ADD_REACTIONS");
    const encuesta = interaction.options.getString("pregunta");
    const option1 = interaction.options.getString("option_a");
    const reaction1 = interaction.options.getString("reaction_a");
    const option2 = interaction.options.getString("option_b");
    const reaction2 = interaction.options.getString("reaction_b");
    const option3 = interaction.options.getString("option_c");
    const reaction3 = interaction.options.getString("reaction_c");
    const option4 = interaction.options.getString("option_d");
    const reaction4 = interaction.options.getString("reaction_d");

    const english = async () => {
        if(!p) return interaction.reply({ content: npn, ephemeral: true })
        if(!p1) return interaction.reply({ content: ee + `I need permission \`View Channel\` to use this command. :(`, ephemeral: true });
        if(!p2) return interaction.reply({ content: ee + `I need permission \`Send Messages\` to use this command. :(`, ephemeral: true });
        if(!p3) return interaction.reply({ content: ee + `I need permission \`Embed Links\` to use this command. :(`, ephemeral: true });
        if(!p4) return interaction.reply({ content: ee + `I need permission \`Add Reactions\` to use this command. :(`, ephemeral: true });
        if(!/\p{Emoji}/gu.test(reaction1)) return interaction.reply({ content: ee + `\`${reaction1}\` Is not a valid emote.`, ephemeral: true});
        if(!/\p{Emoji}/gu.test(reaction2)) return interaction.reply({ content: ee + `\`${reaction2}\` Is not a valid emote.`, ephemeral: true});

        const e = new Discord.MessageEmbed()
        .setAuthor({ name: `| New poll:`, iconURL: client.user.displayAvatarURL() })
        .addField(`- **__Option 1__**: ${reaction1}`, `${option1}`)
        .addField(`- **__Option 2__**: ${reaction2}`, `${option2}`)
        .setTimestamp()
        .setFooter({ text: "Vote for your favorite option! <3" })
        .setColor("BLUE")

        if(!reaction3){
            if(reaction1 == reaction2) return interaction.reply({ content: ee + `You can't repeat the same reactions.`, ephemeral: true });
            interaction.channel.send({ content: `${encuesta}`, embeds: [e] }).then(msg => {
                msg.react(reaction1);
                msg.react(reaction2);
            })
        } else if(!reaction4){
            if(reaction1 == reaction2 || reaction1 == reaction3 || reaction2 == reaction3) return interaction.reply({ content: ee + `You can't repeat the same reactions.`, ephemeral: true });
            if(!/\p{Emoji}/gu.test(reaction3)) return interaction.reply({ content: ee + `\`${reaction3}\` Is not a valid emote.`, ephemeral: true});
            interaction.channel.send({ content: `${encuesta}`, embeds: [embed
                .addField(`- **__Option 3__**: ${reaction3}`, `${option3}`)] }).then(msg => {
                    msg.react(reaction1);
                    msg.react(reaction2);
                    msg.react(reaction3);
                })
        } else if(reaction4){
            if(reaction1 == reaction2 || reaction1 == reaction3 || reaction1 == reaction4 ||
                reaction2 == reaction3 || reaction2 == reaction4 || reaction3 == reaction4) return interaction.reply({ content: ee + `You can't repeat the same reactions.`, ephemeral: true });
            if(!/\p{Emoji}/gu.test(reaction3)) return interaction.reply({ content: ee + `\`${reaction3}\` Is not a valid emote.`, ephemeral: true});
            if(!/\p{Emoji}/gu.test(reaction4)) return interaction.reply({ content: ee + `\`${reaction4}\` Is not a valid emote.`, ephemeral: true});
            interaction.channel.send({ content: `${encuesta}`, embeds: [e
                .addField(`- **__Option 3__**: ${reaction3}`, `${option3}`)
                .addField(`- **__Option 4__**: ${reaction4}`, `${option4}`)] }).then(msg => {
                    msg.react(reaction1);
                    msg.react(reaction2);
                    msg.react(reaction3);
                    msg.react(reaction4);
                })
        }
    }
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "en") { return english(); } else 
//------------------------------------------------------------------------
    if(guildC?.config?.lang == "es"){
        if(!p) return interaction.reply({ content: npn, ephemeral: true })
        if(!p1) return interaction.reply({ content: ee + `Necesito el permiso \`View Channel\` para usar este comando. :(`, ephemeral: true });
        if(!p2) return interaction.reply({ content: ee + `Necesito el permiso \`Send Messages\` para usar este comando. :(`, ephemeral: true });
        if(!p3) return interaction.reply({ content: ee + `Necesito el permiso \`Embed Links\` para usar este comando. :(`, ephemeral: true });
        if(!p4) return interaction.reply({ content: ee + `Necesito el permiso \`Add Reactions\` para usar este comando. :(`, ephemeral: true });
        if(!/\p{Emoji}/gu.test(reaction1)) return interaction.reply({ content: ee + `\`${reaction1}\` No es un emoji válido.`, ephemeral: true});
        if(!/\p{Emoji}/gu.test(reaction2)) return interaction.reply({ content: ee + `\`${reaction2}\` No es un emoji válido.`, ephemeral: true});

        const e = new Discord.MessageEmbed()
        .setAuthor({ name: `| Nueva encuesta:`, iconURL: client.user.displayAvatarURL() })
        .addField(`- **__Opción 1__**: ${reaction1}`, `${option1}`)
        .addField(`- **__Opción 2__**: ${reaction2}`, `${option2}`)
        .setTimestamp()
        .setFooter({ text: "¡Vota por tu opción favorita! <3" })
        .setColor("BLUE")

        if(!reaction3){
            if(reaction1 == reaction2) return interaction.reply({ content: ee + `No puedes darme reacciones repetidas.`, ephemeral: true });
            interaction.channel.send({ content: `${encuesta}`, embeds: [e] }).then(msg => {
                msg.react(reaction1);
                msg.react(reaction2);
            })
        } else if(!reaction4){
            if(reaction1 == reaction2 || reaction1 == reaction3 || reaction2 == reaction3) return interaction.reply({ content: ee + `No puedes darme reacciones repetidas.`, ephemeral: true });
            if(!/\p{Emoji}/gu.test(reaction3)) return interaction.reply({ content: ee + `\`${reaction3}\` No es un emoji válido.`, ephemeral: true});
            interaction.channel.send({ content: `${encuesta}`, embeds: [embed
                .addField(`- **__Opción 3__**: ${reaction3}`, `${option3}`)] }).then(msg => {
                    msg.react(reaction1);
                    msg.react(reaction2);
                    msg.react(reaction3);
                })
        } else if(reaction4){
            if(reaction1 == reaction2 || reaction1 == reaction3 || reaction1 == reaction4 ||
                reaction2 == reaction3 || reaction2 == reaction4 || reaction3 == reaction4) return interaction.reply({ content: ee + `No puedes darme reacciones repetidas.`, ephemeral: true });
            if(!/\p{Emoji}/gu.test(reaction3)) return interaction.reply({ content: ee + `\`${reaction3}\` No es un emoji válido.`, ephemeral: true});
            if(!/\p{Emoji}/gu.test(reaction4)) return interaction.reply({ content: ee + `\`${reaction4}\` No es un emoji válido.`, ephemeral: true});
            interaction.channel.send({ content: `${encuesta}`, embeds: [e
                .addField(`- **__Opción 3__**: ${reaction3}`, `${option3}`)
                .addField(`- **__Opción 4__**: ${reaction4}`, `${option4}`)] }).then(msg => {
                    msg.react(reaction1);
                    msg.react(reaction2);
                    msg.react(reaction3);
                    msg.react(reaction4);
                })
        }
    }*/
//------------------------------------------------------------------------
    }
}