const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "clear",
  aliases: ["e!clear"],
  description: "To clear the text channel",
  usage: ["e!clear [0/100]"],  
  category: ["Moderation"],
  enabled: true,			
  memberPermissions: [ "MANAGE_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS", "MANAGE_MESSAGES" ],		
  ownerOnly: false,			
  cooldown: 6000,
  run: async (bot, message, dev) => {
  message.delete()

///       
let args = message.content.split(" ").slice(1);
    let messagecount = parseInt(args);
    if (args > 100) {
      args = 100
    }
    if (!messagecount) args = "100";
    message.channel.bulkDelete(messagecount)
    message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`**I have cleared **${args}** messages.**`))
      .then(msg => msg.delete({timeout:1500})); 
   
}
}
