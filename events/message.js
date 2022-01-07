const Discord = require("discord.js")
/**/
module.exports = class {
async run(message,bot) {
  const data = {};
  const argsr = {};
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;
  let guild = await Guild.findOne({ guildID: message.guild.id });
  if(!guild) { Guild.create({ guildID: message.guild.id }); }
  data.guild = guild;
  let user = await User.findOne({ guildID: message.guild.id, userID: message.author.id });
  if(!user) { User.create({ guildID: message.guild.id, userID: message.author.id });} 
  data.user = user;
  //let prime = await Prime.findOne({ guildID: message.guild.id });
 // if (prime && prime.log === "enable") return;// message.channel.send({ content: `You don't have Premium version` });

 if (guild) {
  if (!message.content.toLowerCase().startsWith(guild.prefix.toLowerCase()) && !message.content.toLowerCase().startsWith("<@828270556758540348>")) return;
  let args = message.content.split(" ");
  if (message.content.toLowerCase().startsWith(guild.prefix.toLowerCase())) {
  const argsrP = await message.content
    .slice(guild.prefix.length)
    .trim()
    .split(/ +/g);
  argsr.prefix = argsrP;
  } else if (message.content.toLowerCase().startsWith("<@828270556758540348>")) {
  const argsrM = await message.content
    .slice("<@828270556758540348>".length)
    .trim()
    .split(/ +/g);
  argsr.prefix = argsrM;
  };
  const cmd = await argsr.prefix.shift().toLowerCase();
  if (cmd.length === 0) return message.channel.send(`Hello **${message.author.username}**, my prefix on this server is \`${guild.prefix.toLowerCase()}\` Use \`${guild.prefix.toLowerCase()}help\` to get the list of the commands!`);
  let command = bot.commands.get(cmd);
  if (!command) command = bot.commands.get(bot.aliases.get(cmd));
  if(command) {
//if(command.prime) {
 /* let data = await Prime.findOne({Guild: message.guild.id})
  if(!data) return message.channel.send(`This is a premium only command, type s!premium for more info`)
    
  if(!data.Permanent && Date.now() > data.time){
    data.delete();
  return message.channel.send(`Prime bot on your server ended for buy mor join support server`)
      }}*/
 
  if (!message.channel.permissionsFor(bot.user).has("SEND_MESSAGES")) return;
  if (!command.enabled) return await message.channel.send(`This command is **Disable** for now`)
  let Ww = await Owner.findOne({ ownerCode: "681553671364018196" });
  data.ww = Ww;
  if (command.ownerOnly && !Ww.worldWhitelist.find((c) => c.type === message.author.id)) return await message.channel.send(`This command is only for owner the bot`);
  if (command.guilOwnerOnly) {
      if (message.author.id !== message.guild.ownerID &&
       !Ww.worldWhitelist.find((c) => c.type === message.author.id)
      ) return message.channel.send(`This command is only for guildOwner`)
	  }
  let neededPermissions = [];
	  if(!command.botPermissions.includes("EMBED_LINKS")){
		  command.botPermissions.push("EMBED_LINKS");
	  }
	  command.botPermissions.forEach((perm) => {
		  if(!message.channel.permissionsFor(bot.user).has(perm)){
			  neededPermissions.push(perm);
		  }
	  });
	 if(neededPermissions.length > 0){
		  return message.channel.send(`I don't have a ${neededPermissions.map((p) => `\`${p}\``).join(", ")} permissions`);
	  }
	  neededPermissions = [];
	  command.memberPermissions.forEach((perm) => {
		  if(!message.channel.permissionsFor(message.member).has(perm)){
			  neededPermissions.push(perm);
		  }
	  });
	  if(neededPermissions.length > 0){
		  return message.channel.send(`You don't have a ${neededPermissions.map((p) => `\`${p}\``).join(", ")} permissions`);
	 }
	  if (!bot.cooldowns.has(command.name)) {
		  bot.cooldowns.set(command.name, new Discord.Collection());
	  }
       
          const now = Date.now();
	  const timestamps = bot.cooldowns.get(command.name);
	  const cooldownAmount = (command.cooldown || 7000); 
	  if (timestamps.has(message.author.id)) {
	const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
	if (now < expirationTime) {
		const timeLeft = (expirationTime - now)/ 1000;
		return message.channel.send(`Please wait **${timeLeft.toFixed(0)}** second`).then(msg=> msg.delete({ timeout:timeLeft.toFixed(1)*1000 }));
	}
	  }
	  timestamps.set(message.author.id, now);
	  let prefix = guild.prefix;
	  if (command) command.run(bot, message, args, prefix, data, cmd, command);
          if (!command) return message.channel.send(`I don't have command like this`)
          setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

  }
  }
}
}
