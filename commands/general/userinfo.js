const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "userinfo",
  description: "Get more information about yourself",
  usage: ["e!userinfo"],
  category: ["General"],
  enabled: true,			    
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  cooldown: 2000,
  run: async (bot, message, args) => {

let member = await message.mentions.members.first() || message.guild.members.cache.get(args[1]) || message.guild.members.cache.find(r => r.user.username == args[1]) || message.guild.members.cache.find(r => r.displayName == args[1]) || message.guild.members.cache.find(r => r.id == args[1]) || message.member;
///
let nickname = member.nickname !== undefined && member.nickname !== null ? member.nickname : "None";
///
const bots = member.user.bot ? "True" : "False";
///
/*if (member.premiumSince) {
    boost = "Yes"
  } else {
    boost = "No"
  }*/
///

     
      const embed = new MessageEmbed()
      .setColor(Color)
      .setThumbnail(member.user.displayAvatarURL())
      .addField("Username", `${member.user.tag}`, true)
      .addField("Nickname", `${nickname}`, true)
      .addField("User Id", `${member.id}`, true)
      .addField("Is Bot", `${bots}`, true)
      .addField("Join", member.joinedAt.toDateString())
      .addField("Creation", member.user.createdAt.toDateString())
      .addField("Roles", `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).length} Roles: <@&${member._roles.join('> <@&')}>`)

  message.channel.send(embed);
 }
}
