const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "antibot",
  aliases: ["Antibot", "AntiBot"],
  description: "Prevent others from adding bots to your server",
  usage: ["e!antibot [on/off]"],
  category: ["Security"],
  enabled: true,			
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  guilOwnerOnly: true,
  cooldown: 3000,
  run: async (bot, message, args) => {
  
   let guild = await Guild.findOne({ guildID: message.guild.id });
     let num = args[1];
    if (args[1] === "on") {
      guild.bot.onoff = "on";
      guild.save();
        const embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`**The AntiBot system is enabled correctly!** :white_check_mark:`);
     return message.channel.send(embed);
     } else if (args[1] === "off") {
         guild.bot.onoff = "off";
         guild.save();
        const embed1 = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`**The AntiBot system is disabled correctly!** :x:`);
     return message.channel.send(embed1);
    }
    const embed2 = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`**Error :x: \n ${guild.prefix}antibot** \`[on,off]\` `
        );
      return message.channel.send(embed2);
  }
};
