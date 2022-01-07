const Discord = require('discord.js')
const { Color } = require("../../config.js");

module.exports = {
  name: "kick",
  aliases: ["kicked"],
  description: "You can kick a member, or multiple members using this command",
  usage: ["e!kick [@User]"],
  category: ["Moderation"],
  enabled: true,			  
  memberPermissions: [ "KICK_MEMBERS" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS","KICK_MEMBERS" ],		
  ownerOnly: false,			
  cooldown: 6000,
  run: async (client, message, args, dev) => {

let user = await message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(r => r.user.username == args[1]) || message.guild.members.cache.find(r => r.displayName == args[1]) || message.guild.members.cache.find(r => r.id == args[1]) || message.member;
///

    if (!user)
      return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`**Usage: e!kick [@User]**`)).catch(console.error);

    if (user.id === client.user.id) {
      return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`**can't kick myself**`));
    }

    if (user.id === message.author.id) {
      return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`**You can't kick yourself**`));
    }

    if (message.mentions.users.size < 1) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`**Mention 1 single user**`)).catch(console.error);


    if (!message.guild.member(user).kickable) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`**I can't kick the mentioned user**`));


    const embedKick = new Discord.MessageEmbed()
      .setColor(Color)
      .setDescription(`<:emoji_54:922264932676931624> **${user}** **kicked from the server! **`)

    message.channel.send(embedKick);
    user.kick();
    }
}
