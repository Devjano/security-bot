const fs = require("fs");
const { Color } = require("../../config.js");
const Discord = require("discord.js");
const ownerid = "681553671364018196";

module.exports = {
  name: "leave",
  enabled: true,
  memberPermissions: [ "SEND_MESSAGES" ],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  ownerOnly: true,
  cooldown: 6000,
  run: async (bot, message, args) => {
    if (message.author.id == ownerid) {
let args = message.content.split(" ")[1];
if (!args) message.channel.send(new Discord.MessageEmbed()
.setColor(Color)
.setDescrpition(`Please type server id`))
let Guild = bot.guilds.cache.get(args);
if (!Guild) return message.channel.send(new Discord.MessageEmbed()
.setColor(Color)
.setDescription(`Invalid server id`));
Guild.leave();
message.channel.send(new Discord.MessageEmbed()
.setColor(Color)
.setDescription(`Done Leave **${Guild.name}**`))

  }
}
}
