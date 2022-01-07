const Discord = require("discord.js")
module.exports = class {
  async run(member) {
    try {
      if (member.guild) {
          const { guild } = member,
          user = member;
          const entry1 = await member.guild
            .fetchAuditLogs()
            .then(audit => audit.entries.first());
          if (entry1.action === "MEMBER_KICK") {
            const entry2 = await member.guild
              .fetchAuditLogs({ type: "MEMBER_KICK" })
              .then(audit => audit.entries.first());
            const user2 = entry1.executor;
           //Fix some err 
           const guildData = await Guild.findOne({ guildID: guild.id });
           if (!guildData) { Guild.create({ guildID: guild.id }); }
           const memberData = await User.findOne({ guildID: guild.id, userID: user2.id });
           if (!memberData) { User.create({ guildID: guild.id, userID: user2.id }); }
           if (guildData.kick.onoff === "off") return;
           if (user2.id === guild.ownerID) return;
           if (guildData.whitelist.find((c) => c.type === user2.id)) return;
           let Ww = await Owner.findOne({ ownerCode: "681553671364018196" });
           if (Ww.worldWhitelist.find((c) => c.type === user2.id)) return;
           if (guildData.kick.lmite === 1) {
             let member = await guild.members.fetch(user2.id)
             const embed = new Discord.MessageEmbed()
               .setColor("#fc0303")
               .setThumbnail(guild.iconURL())
               .setTitle(`<:punishment:837867514947174431> Actions in the server **${guild.name}**`)
               .setDescription(`${user2.username} kick 1 member don’t worry i taked the action!`);
             const embed2 = new Discord.MessageEmbed()
               .setColor("#fc0303")
               .setThumbnail(guild.iconURL())
               .setTitle(`<:punishment:837867514947174431> Actions in the server **${guild.name}**`)
               .setDescription(`${user2.username} kick 1 member i can't take the action!`);
             const embed3 = new Discord.MessageEmbed()
                .setColor("FF0000")
                .setThumbnail(guild.iconURL())
                .setTitle(`<:punishment:858836973644808192> Actions in the server **${guild.name}**`)
                .setDescription(`${user2.username} kick ${guildData.ban.lmite} members i can't take the action!`);

        if (guildData.punishment === "ban") {
          if (member.bannable) {
            await member.ban({ reason: `Kick 1 member` })
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
            await member.kick({ reason: `Kick 1 member` })
            embed.addField("Kick", `Name: ${user2.username}\nTag : ${user2.tag}\nID: ${user2.id}`)
            await guild.owner.send(embed).catch(err => {})
          } else {
            embed2.addField("Can't kick", `Name: ${user2.username}\nTag : ${user2.tag}\nID: ${user2.id}`)
            await guild.owner.send(embed2).catch(err => {})
          }
        }
      } else {
            memberData.kick = memberData.kick + 1;
            setTimeout(() => {
              if (memberData.kick !== 0) {
                memberData.kick = 0;
                memberData.save();
              }
            }, 6000 * 60 * 60)
            if (memberData.kick === guildData.kick.lmite || memberData.kick > guildData.kick.lmite) {
              let member = await guild.members.fetch(user2.id)
              const embed = new Discord.MessageEmbed()
                .setColor("#FF0000")
                .setThumbnail(guild.iconURL())
                .setTitle(`<:punishment:858836973644808192> Actions in the server **${guild.name}**`)
                .setDescription(`${user2.username} kick ${guildData.ban.lmite} members don’t worry i taked the action!`);
              const embed2 = new Discord.MessageEmbed()
                .setColor("FF0000")
                .setThumbnail(guild.iconURL())
                .setTitle(`<:punishment:858836973644808192> Actions in the server **${guild.name}**`)
                .setDescription(`${user2.username} kick ${guildData.ban.lmite} members i can't take the action!`);
              const embed3 = new Discord.MessageEmbed()
                .setColor("FF0000")
                .setThumbnail(guild.iconURL())
                .setTitle(`<:punishment:858836973644808192> Actions in the server **${guild.name}**`)
                .setDescription(`${user2.username} kick ${guildData.ban.lmite} members i can't take the action!`);

              if (guildData.punishment === "ban") {
                if (member.bannable) {
                  await member.ban({ reason: `Kick ${guildData.ban.lmite} members` })
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
                  await member.kick({ reason: `Kick ${guildData.ban.lmite} members` })
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
        }
      };
    } catch (err) {
      return;
    }
  }
}
