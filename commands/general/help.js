const fs = require("fs");
const Discord = require("discord.js");
const { MessageButton, MessageActionRow } = require("discord-buttons");
const { Color, Image, Footer, Author } = require("../../config.js");
module.exports = {
  name: "help",
  aliases: ["e!help","e!help <command>" , "e!h"],
  description: "To show you all command of the bot",
  usage: ["e!help","e!help <command>"],
  category: ["General"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 1000,
  run: async (bot, message, args, dev, data) => {
   
    if (!args[1]) {
  let help = new Discord.MessageEmbed()
    .setColor(Color)
    .setAuthor(Author)
    .setImage(Image)
    
    .setDescription(`<@${bot.user.id}> a security bot to protection your server please use **e!!help** followed by a command name to get more additional information on a command. For example: **e!help**`)
    .addField("🛡️ || Security" , "`settings` , `antiban` , `antikick` , `antichannel` , `antirole` , `antispam` , `antibot` , `antiwebhook` , `punishment` , `whitelis` , `anti`")
    .addField("⚙️ || Admin" , "`ban` , `kick` , `unbanall` , `clear` , `lock` , `unlock` , `lockall` , `unlockall` , `prefix`")
    .addField("<:jano_66:925613617938849812> || General" , "`invite` , `stats` , `serverinfo` , `userinfo`")
    .setFooter(Footer)

      let button1 = new MessageButton()
       .setStyle('url')
       .setURL('https://discord.com/api/oauth2/authorize?client_id=733287493041913877&permissions=8&scope=bot') 
       .setEmoji(`🌍`)
       .setLabel('Invite')

      //////////////
      let button2 = new MessageButton()
       .setStyle('url')
       .setURL('https://discord.gg/69CEKvnEGY') 
       .setEmoji(`💢`)
       .setLabel('Support')

  
     
      let row1 = new MessageActionRow()
      .addComponents(button1, button2)

   return message.channel.send(help,row1);
       } else {
      let  command = args[1]
      if (bot.commands.has(command) || 
      bot.aliases.has(command)) {  
      
      command = bot.commands.get(command) || bot.aliases.get(command);
        let ccmd = "<:disable:840230135046471711> Disabled"
        if ( command.enabled ) {
        ccmd = "<:enable:840230134899671060> Enabled"
        }
      let help1 = new Discord.MessageEmbed()
     .setColor(Color) 
     .setThumbnail(message.author.avatarURL())
     .setTitle("**Help**")
     .setDescription(command.description || command.name + " this command don't have a description")
     .addField("**Usage**", "" + command.usage.join(", ") + "" )
     .addField("**Category**", "" + command.category.join(", ") + "" )
     .addField("**Command is**", ccmd);
      message.channel.send(help1)
        }
    }
  }};
