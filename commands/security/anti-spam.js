const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "antispam",
  aliases: ["Antispam","AntiSpam"],
  description: "With our new spam detect system, prevent anyone from trying to raid your server",
  usage: ["e!antispam [on/off]"],
  category: ["Security"],
  enabled: true,
  memberPermissions: ["MANAGE_MESSAGES"],
  botPermissions: ["MANAGE_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  guilOwnerOnly: true,
  cooldown: 3000,
  prime: false,
  run: async (bot, message, args) => {
  
   let guild = await Guild.findOne({ guildID: message.guild.id });
     let num = args[1];
    if (args[1] === "on") {
      guild.spam.onoff = "on";
      guild.save();
      const embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`**The AntiSpam system is enabled correctly!** :white_check_mark:`);
     return message.channel.send(embed);
     } else if (args[1] === "off") {
        guild.spam.onoff = "off";
        guild.save();
      const embed1 = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`**The AntiSpam system is disabled correctly!** :x:`);
     return message.channel.send(embed1);
    }
    const embed2 = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`**Error :x: \n ${guild.prefix}antispam** \`[on,off]\` `
        );
      return message.channel.send(embed2);
  }
};
