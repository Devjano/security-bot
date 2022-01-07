const Discord = require("discord.js");
module.exports = class {
  async run(member) {
    try {
      member.guild.fetch().then(async (guild) => {
        const guildData = await Guild.findOne({ guildID: guild.id });
        if (!guildData) { Guild.create({ guildID: guild.id }); }
        if (member.user.bot && guildData.bot.onoff === "on") return member.kick("Anti bot");
      })
    } catch (err) {
      return;
    }
  };
}
