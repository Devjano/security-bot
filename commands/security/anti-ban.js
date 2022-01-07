const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "antiban",
  aliases: ["anti-ban"],
  description: "Prevent others from mass banning your members",
  usage: ["e!antiban [number/on/off]"],
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
      guild.ban.onoff = "on";
      guild.save();
      const embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`**The AntiBan system is enabled correctly!** :white_check_mark:`);
      return message.channel.send(embed);
     } else if (args[1] === "off") {
       guild.ban.onoff = "off";
       guild.save();
      const embed1 = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`**The Antiban system is disabled correctly!** :x:`);
      return message.channel.send(embed1);
    }
    if (isNaN(num) || parseInt(num) < 1) {
      const embed2 = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`**Error :x: \n ${guild.prefix}antiban** \`[on,off,<number>]\` `
        );
      return message.channel.send(embed2);
    }
    guild.ban.lmite = num;
    guild.save();
    const embed3 = new Discord.MessageEmbed()
      .setColor(Color)
      .setDescription(`**Successfully antiban changed to** **${guild.ban.lmite}** <:emoji_54:922264932676931624>`);
    return message.channel.send(embed3);
 } 
};
