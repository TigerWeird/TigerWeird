const ibutton = async (Discord, client, interaction, guildC, devC, err, ev, ee) => {
    if(interaction.isButton) {
        let msg;
        if(interaction.customId == "delete_eval") {
            msg = await interaction.channel.messages.fetch(interaction.targetId)
            if(!devC?.config?.devList.includes(interaction.user.id)) return;
            msg.delete().catch(() => {})
        }
        /*if(interaction.guild.id == "717240720758669363") {
        const db = require("megadb")
        const tabiertos = new db.crearDB("tabiertos")
        const tcount = new db.crearDB("tcount")
        const tinfo = new db.crearDB("tinfo")
        const tchannels = new db.crearDB("tchannels")
        const openeds = await tabiertos.obtener(interaction.user.id)
        const count = await tcount.obtener(interaction.guild.id)
        const coso = await tinfo.obtener(interaction.guild.id)
        const everyone = interaction.guild.roles.everyone;
        const category = interaction.guild.channels.cache.find(k => k.id == "857375999557238784" && k.type === "category");
      //-------------------------------------------------------------  Embeds
        const deleted = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("El ticket será eliminado en un momento...")
        //-------------------
        const reopen = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`Ticket reabierto por \`${interaction.user.tag}\``)
        //-------------------
        const closed = new Discord.MessageEmbed()
        .setDescription(`🔓 | ReOpen.\n⛔ | Delete.`)
        .setColor("YELLOW")
        //-------------------
        const row = new Discord.MessageActionRow()
        .addComponents(new Discord.MessageButton()
          .setCustomId("asd")
          .setStyle("DANGER")
          .setEmoji(""))
          //-----------------------------------------------
          if(interaction.customId == "verify") {
            if(!interaction.member.roles.cache.has("902623346745831485")) {
              await interaction.deferUpdate();
              return interaction.member.roles.add("902623346745831485").catch(() => {});
            } else {
              return interaction.reply({ content: ee + "Ya estás verificado.", ephemeral: true });
            }
          }
          //--------------------------------
          if(interaction.customId == "openT") {
            if(!tabiertos.has(user.id)){ tabiertos.establecer(user.id, 0) }
            if(!tchannels.tiene(interaction.guild.id)){ tchannels.establecer(interaction.guild.id, 1) }
            if(openeds > 1) return interaction.reply({ content: ee + "Ya excediste el máximo de tickets abiertos.", ephemeral: true })
            if(!category) return;
            let numero = "0001"
            if(count == "0"){
              numero = "0001"
            } else if(count < "10"){
              numero = "000" + count;
            } else if(count < 100){
              numero = "00" + count;
            } else if(count < 1000){
              numero = "0" + count;
            } else if(count < 10000){
              numero = "" + count;
            } else if(count > 10000){
              numero = "9999+";
            }
      
        interaction.guild.channels.create(`ticket-${numero}`, {
          type: "text",
          permissionOverwrites: [
            {
              id: everyone, 
              deny: ["VIEW_CHANNEL"]
            },
            {
              id: "853108616634302474",
              allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
            },
            {
              id: interaction.user.id,
              allow: ["VIEW_CHANNEL", "SEND_MESSAGES"]
            }
          ],
          parent: category.id
        }).then(canal => {
          canal.send({ contet: `Bienvenido ${user} a <#${canal.id}>, dentro de poco un <@&727666615176527913> te atenderá.`,
          embeds: [new Discord.MessageEmbed()
            .setAuthor({ name: ` | MukaBot - Ticket`, iconURL: client.user.displayAvatarURL() })
            .setDescription(`Bienvenido a nuestro sistema de soporte, dentro de poco uno de nuestros staff's te atenderá.
      Recuerda que abrir tickets sin ningún motivo puede ser sancionado.
      Para ser atendido de una forma más eficiente puedes contarnos cual es tu problema.`)
            .setColor("PURPLE")
            .setTimestamp()
          ] }).then(a => { 
            if(!tchannels.tiene("Tchannels")) {
              tchannels.establecer(`Tchannels.${canal.id}`, { channelid: a.channel.id, open: true, userId: interaction.user.id, ticketNumber: numero })
            } else {
              tchannels.push(`Tchannels`, { channelid: a.channel.id, open: true, userId: interaction.user.id, ticketNumber: numero })
            }
          })
        })
          tcount.sumar(reaction.message.guild.id, 1)
          tabiertos.sumar(user.id, 1)
        }
          //--------------------------------
          if(interaction.customId == "closeT") {
            const ticketinfo = tchannels.get(`Tchannels.${interaction.channel.id}`)
            ticketinfo.open = false
            interaction.channel.permissionOverwrites.set([
              {
                id: ticketinfo.userId,
                deny: ["VIEW_CHANNEL", "SEND_MESSAGES"]
              },
            ]);
            interactin.channel.setName("closed-" + ticketinfo.numero)
            interaction.reply({ embeds: [closed], components: [row] })
          }
          //--------------------------------
          if(interaction.customId == "reopenT") {
      
          }
          //-----------------------------------------------
        }*/
    }
}
module.exports = {
    ibutton
}