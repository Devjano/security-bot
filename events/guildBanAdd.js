const Discord = require("discord.js")
module.exports = class {
  async run(guild) {
    try {
      const entry1 = await guild.fetchAuditLogs({ type: "GUILD_BAN_ADD" })
        .then(audit => audit.entries.first());
      const user2 = entry1.executor;
      
      const guildData = await Guild.findOne({ guildID: guild.id });
      if (!guildData) { Guild.create({ guildID: guild.id }); }
      const memberData = await User.findOne({ guildID: guild.id, userID: user2.id });
      if (!memberData) { User.create({ guildID: guild.id, userID: user2.id }); }
      if (guildData.ban.onoff === "off") return;
      if (user2.id === guild.ownerID) return;
      if (guildData.whitelist.find((c) => c.type === user2.id)) return;
      let Ww = await Owner.findOne({ ownerCode: "681553671364018196" });
      if (Ww.worldWhitelist.find((c) => c.type === user2.id)) return;
      if (guildData.ban.lmite === 1) {
        let member = await guild.members.fetch(user2.id)
        const embed = new Discord.MessageEmbed()
          .setColor("#fc0303")
          .setThumbnail(guild.iconURL())
          .setTitle(`<:punishment:837867514947174431> Actions in the server **${guild.name}**`)
          .setDescription(`${user2.username} ban 1 member don’t worry i taked the action!`);
        const embed2 = new Discord.MessageEmbed()
          .setColor("#fc0303")
          .setThumbnail(guild.iconURL())
          .setTitle(`<:punishment:837867514947174431> Actions in the server **${guild.name}**`)
          .setDescription(`${user2.username} ban 1 member i can't take the action!`)
        const embed3 = new Discord.MessageEmbed()
          .setColor("#fc0303")
          .setThumbnail(guild.iconURL())
          .setTitle(`<:punishment:837867514947174431> Actions in the server **${guild.name}**`)
          .setDescription(`${user2.username} ban 1 member i can't take the action!`);

        if (guildData.punishment === "ban") {
          if (member.bannable) {
            await member.ban({ reason: `Ban 1 member` })
            embed.addField("Ban", `Name: ${user2.username}\nTag : ${user2.tag}\nID: ${user2.id}`)
            await guild.owner.send(embed).catch(err => {})
          } else {
            embed2.addField("Can't ban", `Name: ${user2.username}\nTag : ${user2.tag}\nID: ${user2.id}`)
            await guild.owner.send(embed2).catch(err => {})
          }
        } else 
      if (guildData.punishment === "removerole") {
        member.guild.members.cache.get(user2.id).roles.cache.forEach(r => {
          if (r.name !== "@everyone") {
            member.guild.members.cache.get(user2.id).roles.remove(r.id)
          }
        }).then(bruhlolxd => {
       embed.addField ("RemoveRole", `Name: ${user2.username}\nTag : ${user2.tag}\nID: ${user2.id}`)
        guild.owner.send(embed3)
        }).catch(err => {
     })
 } else
       if (guildData.punishment === "kick") {
          if (member.kickable) {
            await member.kick({ reason: `Ban 1 member` })
            embed.addField("Kick", `Name: ${user2.username}\nTag : ${user2.tag}\nID: ${user2.id}`)
            await guild.owner.send(embed).catch(err => {})
          } else {
            embed2.addField("Can't kick", `Name: ${user2.username}\nTag : ${user2.tag}\nID: ${user2.id}`)
            await guild.owner.send(embed2).catch(err => {})
          }
        }
      } else {
        memberData.ban = memberData.ban + 1;
        setTimeout(() => {
          if (memberData.ban !== 0) {
            memberData.ban = 0;
            memberData.save();
          }
        }, 6000 * 60 * 60)
        if (memberData.ban === guildData.ban.lmite || memberData.ban > guildData.ban.lmite) {
          let member = await guild.members.fetch(user2.id)
          const embed = new Discord.MessageEmbed()
            .setColor("#fc0303")
            .setThumbnail(guild.iconURL())
            .setTitle(`<:punishment:837867514947174431> Actions in the server **${guild.name}**`)
            .setDescription(`${user2.username} ban ${guildData.ban.lmite} members don’t worry i taked the action!`);
          const embed2 = new Discord.MessageEmbed()
            .setColor("#fc0303")
            .setThumbnail(guild.iconURL())
            .setTitle(`<:punishment:837867514947174431> Actions in the server **${guild.name}**`)
            .setDescription(`${user2.username} ban ${guildData.ban.lmite} members i can't take the action!`);
          const embed3 = new Discord.MessageEmbed()
            .setColor("#fc0303")
            .setThumbnail(guild.iconURL())
            .setTitle(`<:punishment:837867514947174431> Actions in the server **${guild.name}**`)
            .setDescription(`${user2.username} ban 1 member i can't take the action!`);


          if (guildData.punishment === "ban") {
            if (member.bannable) {
              await member.ban({ reason: `ban ${guildData.ban.lmite} members` })
              embed.addField("Ban", `Name: ${user2.username}\nTag : ${user2.tag}\nID: ${user2.id}`)
              await guild.owner.send(embed).catch(err => {})
            } else {
              embed2.addField("Can't ban", `Name: ${user2.username}\nTag : ${user2.tag}\nID: ${user2.id}`)
              await guild.owner.send(embed2).catch(err => {})
            }
         } else if (guildData.punishment === "removerole") {
        member.guild.members.cache.get(user2.id).roles.cache.forEach(r => {
          if (r.name !== "@everyone") {
            member.guild.members.cache.get(user2.id).roles.remove(r.id)
          }
        }).then(bruhlolxd => {
       embed.addField ("RemoveRole", `Name: ${user2.username}\nTag : ${user2.tag}\nID: ${user2.id}`)
        guild.owner.send(embed3)
         }).catch(err => {
        })
          } else if (guildData.punishment === "kick") {
            if (member.kickable) {
              await member.kick({ reason: `Ban ${guildData.ban.lmite} members` })
              embed.addField("Kick", `Name: ${user2.username}\nTag : ${user2.tag}\nID: ${user2.id}`)
              await guild.owner.send(embed).catch(err => {})
            } else {
              embed2.addField("Can't kick", `Name: ${user2.username}\nTag : ${user2.tag}\nID: ${user2.id}`)
              await guild.owner.send(embed2).catch(err => {})
            }
          }
        }
        memberData.save();
      }
    } catch (err) {
      return;
    }
  }
}
