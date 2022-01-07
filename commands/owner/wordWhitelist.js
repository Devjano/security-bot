const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "devs",
  enabled: true,			
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  cooldown: 10000,
  run: async (bot, message, args, dev) => {
    if (message.author.id === "681553671364018196") {
      let data = await Owner.findOne({ ownerCode: "681553671364018196" });
      if(!data) { Owner.create({ ownerCode: "681553671364018196" });} 
      /*
      worldWhitelist
      */
      
      if (args[1] === "add") {
        let user =
          message.guild.members.cache.get(args[2]) ||
          message.mentions.members.first();
        if (!user)
          return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(
            `<@${message.author.id}> Mention someone`
          ));
        if(!data.worldWhitelist.find((c) => c.type === user.id)){
        await Owner.findOneAndUpdate(
        {
          ownerCode: "681553671364018196",
        },
        {
          $push: {
            worldWhitelist: {
              type: user.id
            }
         },
        })     
        message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`<a:true:854842599444709386> ${user.user.username} Added to developer`));
          } else {
          message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`This man is whitelisted`));
          }
      } else if (args[1] === "remove") {
        let user =
          message.guild.members.cache.get(args[2]) ||
          message.mentions.members.first();
        if (!user)
          return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(
            `<@${message.author.id}> Mention someone`
          ));
        if(data.worldWhitelist.find((c) => c.type === user.id)){
        await Owner.findOneAndUpdate(
        {
          ownerCode: "681553671364018196",
        },
        {
          $pull: {
            worldWhitelist: {
              type: user.id
            }
         },
        })
        message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`<a:false:854842600351334440> ${user.user.username} Removed in developer`));
        } else {
        message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`<a:false:854842600351334440> ${user.user.username} Not in developer`));
        };
      } else if (!args[1]) {
        if (data.worldWhitelist.length === 0) return message.reply(new Discord.MessageEmbed().setColor(Color).setDescription(`No one developer!`));
       let arrayOfCustomCommands = data.worldWhitelist.map(w => `⇰ <@${w.type}>  - ${w.type}`)
        
        let embed = new Discord.MessageEmbed()
      .setTitle("Developer Bot")
      .setColor(Color)
      .setDescription(arrayOfCustomCommands.slice(0, 15).join('\n'));
      message.channel.send(embed);
      }
    }
  }
}
