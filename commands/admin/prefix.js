const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "prefix",
  aliases: ["E!prefix"],
  description: "Change the prefix of the bot",
  usage: ["e!prefix [Prefix]"],
  category: ["Moderation"],
  enabled: true,            
  memberPermissions: [ "ADMINISTRATOR" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 10000,
  run: async (bot, message, args, dev, data) => {
        if(!args[1]) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`Type something!`));
        if(args[1].length > 5) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`**You need set prefix lower 5 length**`));
         
        let dataa = await Guild.findOne({ guildID: message.guild.id })

        let embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`New prefix in this guild is ⇏ ${args[1]}`)
        message.channel.send(embed)
        dataa.prefix = args[1];
        dataa.save();
    }};
