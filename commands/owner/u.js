module.exports = {
  name: "users",
  enabled: true,
  memberPermissions: [ "SEND_MESSAGES" ],
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],
  ownerOnly: true,
  cooldown: 6000,
  run: async (bot, message, args) => {
   
message.channel.send(`${bot.guilds.cache.reduce((a, g) => a + g.memberCount, 0)} Users!`);
 
}
}
