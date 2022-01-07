const fs = require("fs");
const Discord = require("discord.js");
const { MessageButton, MessageActionRow } = require("discord-buttons");
const { Color } = require("../../config.js");
const ms = require('ms');
const moment = require("moment"); 
require("moment-duration-format"); 
const os = require('os') 
const si = require('systeminformation'); 

module.exports = {
  name: "stats",
  aliases: ["botinfo"],
  description: "Get more information about the bot",
  usage: ["s!stats"],
  category: ["General"],
  enabled: true,            
  memberPermissions: [ "SEND_MESSAGES" ],            
  botPermissions: [ "SEND_MESSAGES", "EMBED_LINKS" ],        
  ownerOnly: false,            
  cooldown: 2000,
  run: async (bot, message, args, dev) => {
 


 const created = moment(bot.user.createdAt).format("YYYY-MM-DD");

const duration1 = moment.duration(message.client.uptime).format(" D [days], H [hrs], m [mins], s [secs]"); 

const cpu = await si.cpu(); 
 


const stats = new Discord.MessageEmbed() 

.setColor(Color) 
.setThumbnail(bot.user.displayAvatarURL()) 
.setTitle("Expert Stats")
.setDescription(`**Statistics**\n\nServers: ${bot.guilds.cache.size}\nBot Id: ${bot.user.id}\nCommands Count: 19\nBot Created At: ${created}\nPing: ${Math.round(bot.ws.ping)}ms\nUptime: ${duration1}\n\nTotal Memory: ${(os.totalmem() / 1024 / 1024).toFixed(2)} Mbps\nFree Memory: ${(os.freemem() / 1024 / 1024).toFixed(2)} Mbps\nHeap Total: ${(process.memoryUsage().heapTotal / 1024 / 1024).toFixed(2)} Mbps\nHeap Usage: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} Mbps 
`)

   
      let button1 = new MessageButton()
       .setStyle('url')
       .setURL('https://discord.com/api/oauth2/authorize?client_id=733287493041913877&permissions=8&scope=bot') 
       .setLabel('Click Here To Invite Expert')

      
      let row1 = new MessageActionRow()
      .addComponents(button1)

   return message.channel.send(stats,row1);
    
    
          let button2 = new MessageButton()
       .setStyle('url')
       .setURL('https://discord.gg/69CEKvnEGY') 
       .setLabel('My Server')

      
      let row2 = new MessageActionRow()
      .addComponents(button2)

   return message.channel.send(stats,row2);
    }
}
