const fs = require("fs");
const Discord = require("discord.js")
const { MessageButton, MessageActionRow } = require("discord-buttons");
const { Color } = require("../../config.js");

module.exports = {
  name: "support",

  description: "Use this command to get the invite link",
  usage: ["e!support"],
  category: ["General"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 2000,
  run: async (bot, message, args, dev, data) => {
 

   let invite = new Discord.MessageEmbed()
   .setColor(Color)
   .setTitle(`<@${bot.user.id}>`)
   .setThumbnail(bot.user.displayAvatarURL())
   .setDescription(`Click Below On Link Server!`)

  let butn = new MessageButton()
  .setStyle('url')
  .setURL('https://discord.gg/69CEKvnEGY') 
  .setEmoji(`🗳`)
  .setLabel('Link Server')
 
let row = new MessageActionRow()
      .addComponents(butn)

   return message.channel.send(invite,row);
     }
 }
