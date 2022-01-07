const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "whitelist",
  description: "Security will ignore whitelist users",
  usage: ["e!whitelist","e!whitelist [add/remove] [@User]"],
  category: ["Security"],
  enabled: true,
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  guilOwnerOnly: true,
  cooldown: 4000,
  run: async (bot, message, args, dev, data) => {
     
           let dataa = await Guild.findOne({ guildID: message.guild.id })
      if (args[1] === "add") {
        let user =
          message.guild.members.cache.get(args[2]) ||
          message.mentions.members.first();
        if (!user)
          return message.reply(new Discord.MessageEmbed().setColor(Color).setDescription(`Mention someone`));
        if(!dataa.whitelist.find((c) => c.type === user.id)){
        await Guild.findOneAndUpdate(
        {
          guildID: message.guild.id,
        },
        {
          $push: {
            whitelist: {
              type: user.id
            }
         },
        })     
        message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`${user.user.username} **Added to whitelist** :white_check_mark:`));
          } else {
          message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`**This man is whitelisted**`));
          }
      } else if (args[1] === "remove") {
        let user =
          message.guild.members.cache.get(args[2]) ||
          message.mentions.members.first();
        if (!user)
          return message.reply(new Discord.MessageEmbed().setColor(Color).setDescription(`**Mention someone**`));
        if(dataa.whitelist.find((c) => c.type === user.id)){
        await Guild.findOneAndUpdate(
        {
          guildID: message.guild.id,
        },
        {
          $pull: {
            whitelist: {
              type: user.id
            }
         },
        })
        message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`${user.user.username} **Removed in whitelist** :x:`));
        } else {
        message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`${user.user.username} **Not in whitelist** :x:`));
        };
      } else if (!args[1]) {
        if (dataa.whitelist.length === 0) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`**This man is whitelisted**`));
       let arrayOfCustomCommands = dataa.whitelist.map(w => `⇰ <@${w.type}> - ${w.type}`)
        
        let embed = new Discord.MessageEmbed()
      .setTitle("Whitelist Users")
      .setColor(Color)
      .setDescription(arrayOfCustomCommands.slice(0, 15).join('\n'));
      message.channel.send(embed);
      }
  }
};
