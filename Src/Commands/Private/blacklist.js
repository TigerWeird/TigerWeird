const { SlashCommandBuilder } = require('@discordjs/builders');
const Discord = require("discord.js");
const { ee, ev, npn, nps } = require("../../Json/used.json");
const devConfig = require("../../Models/devConfig.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName("blacklist")
    .setDescription("Add a user to Muka's blacklist (Dev).")
    .addStringOption(option => option.setName("action").setDescription("Add/Remove a user from the blacklist.").setRequired(true) 
        .addChoice('add', 'add')
        .addChoice('remove', 'remove')
        .addChoice('info', 'info') )
    .addUserOption(option => option.setName("target").setDescription("User to add to the blacklist.").setRequired(true) )
    .addStringOption(option => option.setName("reason").setDescription("Reason for adding to blacklist.") ),

async execute(client, interaction, guildC) {
/*
    const devC = devConfig.findOne({ clientID: client.user.id });

    if(guildC?.config?.lang == "en") {
        if(devC?.config?.devList.includes(message.author.id)) return interaction.reply({ content: 
            wrongEn + `\`You are not allowed for use this command\`.`, ephemeral: true });
    } else 
    if(guildC?.config?.lang == "es") {
        if(devC?.config?.devList.includes(message.author.id)) return interaction.reply({ content: 
            wrongEs + `\`No estás autorizado a usar este comando\`.`, ephemeral: true });
    }
    const action = interaction.options.getString("action");
    const x = interaction.options.getUser("target");
    const reason = interaction.options.getString("reason") ?? "Sin una razón dada.";
    let bclist = new devConfig({ clientID: client.user.id }, { userID: x.id, bReason: reason, bTed: true, bAuthor: interaction.user.id })
    let bclist2 = new Blcklst({ userID: x.id, bReason: reason, bTed: "false", bAuthor: interaction.user.id })
    const tf = {
        "true": "Se encuentra en la blacklist",
        "false": "No se encuentra en la blacklist"
    }
//----------------------------------------------------------------------------------

    if(devC?.config?.devList.includes(x.id)) return interaction.reply({ content: ee + `No puedes meter a la blacklist a un dev.`, ephemeral: true })

    const bl = async () => {
        blacklist ? await Blcklst.updateOne({ userID: x.id }, { bReason: reason,
            bTed: "true",
            bAuthor: interaction.user.id }) : await bclist.save()
        interaction.reply({ content: ev + `Usuario agregado a la blacklist.
\`Usuario:\` ${x.tag} (\`${x.id}\`)
\`Motivo:\` ${reason}
\`Dev:\` ${interaction.user.tag} (\`${interaction.user.id}\`)` })
    }
    if(x.bot) return interaction.reply({ content: 
        ee + `No puedes interctuar con un bot en la blacklist.`, ephemeral: true })

//-------------------------------------------------- Add
    if(action == 'add'){
        if(!blacklist) { bl() } else if (blacklist.bTed == "false") { bl() } else if(!blacklist.bAuthor) { return bl() } else {
            return interaction.reply({ content: ee + `Este usuario ya se encuentra en la blacklist:
\`Usuario:\` ${x.tag} (\`${x.id}\`)
\`Motivo:\` ${blacklist.bReason}
\`Dev:\` ${client.users.cache.get(blacklist.bAuthor).id} (\`${client.users.cache.get(blacklist.bAuthor).tag}\`)`, ephemeral: true });
        }
    }
//-------------------------------------------------- Remove
    if(action == 'remove'){
        if(!blacklist) {
            return interaction.reply({ content: ee + `Este usuario nunca ha estado en la blacklist.`, ephemeral: true });
        } else if(blacklist.bTed == "false"){
            return interaction.reply({ content: ee + `Este usuario no se encuentra en la blacklist.`, ephemeral: true });
        } else {
            blacklist ? await Blcklst.updateOne({ userID: x.id }, { bReason: reason,
                bTed: "false",
                bAuthor: interaction.user.id }) : await bclist2.save()
                interaction.reply({ content: ev + `Usuario eliminado de la blacklist:
\`Usuario:\` ${x.tag} (\`${x.id}\`)
\`Motivo:\` ${reason}
\`Dev:\` ${interaction.user.tag} (\`${interaction.user.id}\`)` })
        }
    }
//-------------------------------------------------- info
    if(action == "info"){
        if(!blacklist) {
            return interaction.reply({ content: ee + `Este usuario nunca ha estado en la blacklist.`, ephemeral: true });
        } else {
            interaction.reply({ content: ev + `Información del blacklist:
\`Usuario:\` ${x.tag} (\`${x.id}\`)
\`Blacklisted:\` ${tf[blacklist.bTed]}
\`Motivo:\` ${blacklist.bReason}
\`Dev:\` ${interaction.user.tag} (\`${interaction.user.id}\`)` })
        }
    }*/
//----------------------------------------------------------------------------------
    }
}