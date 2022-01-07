const fs = require("fs");
const Discord = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "punishment",
  aliases: ["push","Punish"],
  description: "Change the punishment type of the server",
  usage: ["e!punishment [kick/ban]"],
  category: ["Security"],
  enabled: true,
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],		
  ownerOnly: false,			
  guilOwnerOnly: true,
  cooldown: 4000,
  run: async (bot, message, args, dev) => {
   
    const embed1 = new Discord.MessageEmbed()
      .setColor(Color)
      .setDescription(`**Choose punishment** \`RemoveRole\` & \`Ban\` & \`Kick\` `);
      if (!args[1])
        return message.channel.send(embed1);
      let data = await Guild.findOne({ guildID: message.guild.id })
      if (args[1] === "kick" || args[1] === "ban" || args[1] === "removerole") {
        data.punishment = args[1];
        const embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setDescription(`**Successfully changed the Punishment to** **${data.punishment}** <:emoji_54:922264932676931624>`)
        message.channel.send(embed);
      data.save();
      } else {
        const embed2 = new Discord.MessageEmbed()
          .setColor(Color)
          .setDescription(`**Error  \n ${guild.prefix}punishment** \`[\`kick\`,\`ban\`]\` :x:`
        );
      return message.channel.send(embed2);
       }
    }};
