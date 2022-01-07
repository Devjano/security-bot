const Discord = require("discord.js")
 module.exports = class {
 async run(guild, bot) {
 		const text = "Leaving guild **"+guild.name+"** guild member size **"+guild.members.cache.filter((m) => !m.user.bot).size+"** membres, guild bot size("+guild.members.cache.filter((m) => m.user.bot).size+" bots)";
                const logsEmbed = new Discord.MessageEmbed()
 			.setColor("#2c2f33")
 			.setDescription(text);
 		bot.channels.cache.get("681553671364018196").send(logsEmbed);     
 }};
