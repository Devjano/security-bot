const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "anti",
  description: "To show command limits the bot",
  usage: ["e!anti"],
  category: ["Security"],
  enabled: true,            
  memberPermissions: [ "ADMINISTRATOR" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,
  cooldown: 2000,
  run: async (bot, message, args, dev) => {
  const embed = new Discord.MessageEmbed()
      .setColor(Color)
      .setTitle("List of all commands security")
      .setDescription(`**Type:** \`[on,off,<number>]\`\n\ **antichannel, antirole, antiban, antikick, antispam, antibot**`)
  message.channel.send(embed);
    }
}
