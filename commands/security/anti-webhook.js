const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "antiwebhook",
  aliases: ["antiWebhook","AntiWebhook"],
  description: "Prevent others from crating or deleting webhooks",
  usage: ["e!antiwebhook [number/on/off]"],
  category: ["Security"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  guilOwnerOnly: true,
  cooldown: 3000,
  run: async (bot, message, args) => {
 
   let guild = await Guild.findOne({ guildID: message.guild.id });
     let num = args[1];
    if (args[1] === "on") {
      guild.webhook.onoff = "on";
      guild.save();
      const embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`**The AntiWebhook system is enabled correctly!** :white_check_mark:`);
     return message.channel.send(embed);
     } else if (args[1] === "off") {
        guild.webhook.onoff = "off";
        guild.save();
      const embed1 = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`**The AntiWebhook system is disabled correctly!** :x:`);
     return message.channel.send(embed1);
    }
    const embed2 = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`**Error :x: \n ${guild.prefix}antiwebhook** \`[on,off]\` `
        );
      return message.channel.send(embed2);
  }
};
