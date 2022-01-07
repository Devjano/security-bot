const Discord = require('discord.js')
const { Color } = require("../../config.js");

module.exports = {
    name: "ban",
    aliases: ["band"],
    description: "You can ban a member, or multiple members using this command",
    usage: ["e!ban [@User]"],
    category: ["Moderation"],
    enabled: true,
    memberPermissions: ["BAN_MEMBERS"],
    botPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "BAN_MEMBERS"],
    ownerOnly: false,
    cooldown: 6000,
    run: async (client, message, args, dev) => {
  
 let user = await message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(r => r.user.username == args[1]) || message.guild.members.cache.find(r => r.displayName == args[1]) || message.guild.members.cache.find(r => r.id == args[1]) || message.member;
///
    
    if (!user)
      return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`**Based on the role hierarchy, you cannot ban this user**`)).catch(console.error);

    if (user.id === client.user.id) {
      return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`**You can't kick yourself**`));
    }

    if (user.id === client.user.id) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`**I can't ban myself**`));

    if (message.guild.ownerID !== message.author.id && user.roles.highest.comparePositionTo(message.member.roles.highest) >= 0)
      return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`Usage: e!ban [@User]`));

    if (!message.guild.member(user).bannable) return message.channel.send(new Discord.MessageEmbed().setColor(Color).setDescription(`**I cannot ban the mentioned user**`));

  
    const embedBan = new Discord.MessageEmbed()
      .setColor(Color)
      .setDescription(`<:emoji_54:922264932676931624> **${user}** **banned from the server!**✈️`)

    message.channel.send(embedBan);
    user.ban({ reason: args[1] });
  }
}
