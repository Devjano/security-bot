const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {  
    name: "settings",  
    description: "Check your server settings",
    usage: ["e!settings"],
    category: ["Security"],
    enabled: true,
    memberPermissions: [ "SEND_MESSAGES" ],			
    botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
    ownerOnly: false,			
    guilOwnerOnly: true,
    cooldown: 4000,
run: async (bot, message, args, dev) => {
   
  let data = await Guild.findOne({ guildID: message.guild.id })
      let embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setThumbnail(message.guild.iconURL())

      let falsee = `<:jano_64:924983392137773086>`;
      let truee = `<:jano_65:924983412215918592>`;
      let pun = `<:emoji_54:922264932676931624>`;
       
      embed.addField(`Prefix in the server`, `**${data.prefix}**`)
     
     
      if (data.ban.onoff === "on") {
        embed.addField(
          `> **AntiBan**`,
          `${truee} \`Enabled\` \n Punish at: **${data.ban.lmite}** ${pun}`
        );
      } else if (data.ban.onoff === "off") {
        embed.addField(
          `> **AntiBan**`,
          `${falsee} \`Disabled\` \n Punish at: **${data.ban.lmite}** ${pun}`
        );
      }

      if (data.kick.onoff === "on") {
        embed.addField(
          `> **AntiKick**`,
          `${truee} \`Enabled\` \n Punish at: **${data.kick.lmite}** ${pun}`
        );
      } else if (data.kick.onoff === "off") {
        embed.addField(
          `> **AntiKick**`,
          `${falsee} \`Disabled\` \n Punish at: **${data.kick.lmite}** ${pun}`
        );
      }

      if (data.role.onoff === "on") {
        embed.addField(
          `> **AntiRole**`,
          `${truee} \`Enabled\` \n Punish at: **${data.role.lmite}** ${pun}`
        );
      } else if (data.role.onoff === "off") {
        embed.addField(
          `> **AntiRole**`,
          `${falsee} \`Disabled\` \n Punish at: **${data.role.lmite}** ${pun}`
        );
      }

      if (data.channel.onoff === "on") {
        embed.addField(
          `> **AntiChannel**`,
          `${truee} \`Enabled\` \n Punish at: **${data.channel.lmite}** ${pun}`
        );
      } else if (data.channel.onoff === "off") {
        embed.addField(
          `> **AntiChannel**`,
          `${falsee} \`Disabled\` \n Punish at: **${data.channel.lmite}** ${pun}`
        );
      }
    


      let data3 = data.bot.onoff
      if (data3 === "on") {
        embed.addField(`> **AntiBot**`, `${truee} \`Enabled\` `);
      } else if (data3 === "off") {
        embed.addField(`> **AntiBot**`, `${falsee} \`Disabled\` `);
      }
      
      
      let data2 = data.spam.onoff
      if (data2 === "on") {
        embed.addField(`> **AntiSpam**`, `${truee} \`Enabled\` `);
      } else if (data2 === "off") {
        embed.addField(`> **AntiSpam**`, `${falsee} \`Disabled\` `);
      }

      if (data.punishment === "kick") {
        embed.addField(`> **Punishment**`, `<:kick:842560387295346688>\`Kick\` `);
      } else if (data.punishment === "ban") {
        embed.addField(`> **Punishment**`, `<:emoji_53:922264913873891338>\`Ban\` `);
      } else if (data.punishment === "removerole") {
        embed.addField(`> **Punishment**`, `<:emoji_53:922264913873891338>\`Remove Role\` `);
      }

      embed.setDescription(`**This is settings security and settings your server**`);

      message.channel.send(embed)
     }}
