//=============================== - [ Consts ] - ===================================//
const inlinereply = require('discord-reply');
const Discord = require("discord.js");
const { MessageMenuOption, MessageMenu, MessageButton } = require("discord-buttons");
const bot = new Discord.Client(); 
require('discord-buttons')(bot);
const { Color, Image, Footer, Author } = require("./config.js");
const fs = require("fs"); 
const request = require("request");
const prefix = "e!";
const { Collection, MessageEmbed } = require("discord.js");
const { inspect } = require("util");
let dev = ["681553671364018196"];
const cmd = require("node-cmd");

bot.login("")
global.mongoose = require('mongoose')
mongoose.connect("", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
  console.log("✅ Connected to the database.");
}).catch((err) => {
  console.log("❎ Unable to connect to the Mongodb database. Error:" + err);
});
global.Guild = require("./data/guild.js");
global.User = require("./data/user.js");
//global.Prime = require("./data/prime.js");
global.Owner = require("./data/owner.js");
bot.commands = new Collection();
bot.aliases = new Collection();
bot.cooldowns = new Collection();
bot.catagories = fs.readdirSync("./commands/");
["command"].forEach(handler => {
  require(`./handler/${handler}`)(bot);
});
/**/
let util = require("util"),
  readdir = util.promisify(fs.readdir);

const init = async () => {
  // Then we load events, which will include our message and ready event.
  const evtFiles = await readdir("./events/");
  console.log(`Loading a total of ${evtFiles.length} events.`, "log");
  evtFiles.forEach(file => {
    const eventName = file.split(".")[0];
    console.log(`Loading Event: ${eventName}`);
    const event = new(require(`./events/${file}`))(bot);
    bot.on(eventName, (...args) => event.run(...args, bot));
    delete require.cache[require.resolve(`./events/${file}`)];
  });
};
init();

bot.on("ready", () => {
  console.log(`[!]-------------------------------------[!]`);
  console.log(`Display Name : ${bot.user.username}`);
  console.log(`Public Prefix : ${prefix}`);
  console.log(`Version : v2`);
  console.log(`[!]-------------------------------------[!]`);
});

bot.on("ready", async () => {
/* let channel = bot.channels.cache.get("890671956054122587");
  channel.send(new Discord.MessageEmbed().setColor(Color).setTimestamp().setThumbnail(bot.user.displayAvatarURL()).setTitle("Whoami Status").addField("Prefix", "`s!`").addField("Status", "<:enable:840230134899671060> Online").addField("Servers", `${bot.guilds.cache.size}`));*/
  await bot.user.setStatus("online");
  await bot.user.setActivity(`${prefix}help expert secuirty bot`, { type: "PLAYING" });
 
 
 });
///////////////
bot.on("message", async message => {
  let guild = await Guild.findOne({ guildID: message.guild.id })
  if (message.content.startsWith(`<@${bot.user.id}>`)) {
    return message.reply(`My prefix is \`${guild.prefix}\``);
  }
});
/////


////
/*bot.on("message", async message => {
if (message.content.startsWith(prefix + "menu")) {
   
        let option1 = new MessageMenuOption()
            .setLabel("General")        
            .setValue("Option 1")
            .setDescription("To show general commands!")
            .setDefault()
        let option2 = new MessageMenuOption()
            .setLabel("Moderation")
            .setValue("Option 2")
            .setDescription("To show moderation commands!")
            .setDefault()
        let option3 = new MessageMenuOption()
            .setLabel("Config")
            .setValue("Option 3")
            .setDescription("To show config commands!")
            .setDefault()
        let option4 = new MessageMenuOption()
            .setLabel("Security")
            .setValue("Option 4")
            .setDescription("To show security commands!")
            .setDefault()
        let selection = new MessageMenu()
            .setID("Selection")
            .setMaxValues(1)
            .setMinValues(1)
            .setPlaceholder("Click me to show help menu!")
            .addOption(option1)
            .addOption(option2)
            .addOption(option3)
            .addOption(option4)
        let embed = new Discord.MessageEmbed()
        .setColor(Color).setTitle(`<:AntiVandalism:879031706080911430> This is list for all commands`)
        let menumsg = await message.channel.send(embed, selection)
        function menuselection(menu) {
            switch(menu.values[0]) {
                case "Option 1": 
                    menu.reply.send(new Discord.MessageEmbed().setColor(Color).setTitle("General Section").setDescription(`**invite**: Use this command to get the invite link\n\n**support**: Use this command to get the server support link\n\n**stats**: Get more information about the bot\n\n**serverinfo**: Get more information about your server\n\n**ping**: To show ping bot\n\n**userinfo**: Get more information about yourself\n\n**bots**: Get list of the bots on your server,no hidden bots anymor\n\n**vote**: Use this command to get the vote link\n\n**premium**: Get more information premium commands`))
                break;
                case "Option 2": 
                    menu.reply.send(new Discord.MessageEmbed().setColor(Color).setTitle("Moderation Section").setDescription(`**ban**: You can ban a member, or multiple members using this command\n\n**kick**: You can kick a member, or multiple members using this command\n\n**bans**: Get list of the bans on your server\n\n**mute**: Mute mentioned member\n\n**purge**: To clear the text channel\n\n**lock**: Locks the current or selected text channels\n\n**unlock**: Unlocks the current or selected text channels\n\n**lockall**: Locks all text channels from your server\n\n**unlockall**: Unlocks all text channels from your server, not recommended\n\n**unbanall**: You can unban all the banned users`))
                break;
                case "Option 3": 
                    menu.reply.send(new Discord.MessageEmbed().setColor(Color).setTitle("Config Section").setDescription(`**setlang**: To change language\n\n**setprefix**: Change the prefix of the bot`))
                break;
                case "Option 4": 
                    menu.reply.send(new Discord.MessageEmbed().setColor(Color).setTitle("Security Section").setDescription(`**anti**: To show command limits the bot\n\n**settings**: Check your server settings\n\n**punishment**: Change the punishment type of the server\n\n**whitelist**: Security will ignore whitelist users\n\n**logs**: To show log server`))
                break;
            }
        }
        bot.on("clickMenu", (menu) => {
            if(menu.message.id == menumsg.id) {
                if(menu.clicker.user.id == message.author.id) menuselection(menu)
                else menu.reply.send("You are not allowed to pick something", true)
            }
        })
   }
})*/
////

/*bot.on('ready', () => {
let channel = bot.channels.cache.get("890671934826758145");
    if (channel) channel.join();
});*/

////

bot.on("clickButton", async (button) => {
 console.log(button.id);
});

//=============================== - [ ghostping ] - ===================================//

/*
bot.on("message", (message) => {});
bot.on("messageDelete", (message) => {
if (message.mentions.users.first()) {
    message.channel.send(new Discord.MessageEmbed().setColor(Color) .setTitle("Ghost Ping Detected!")
            .setDescription(`**${message.author}** just pinged **${
         message.mentions.users.first().username
       }** and then someone deleted the message!`)
            .addField("Deleted message content", `||**${
         message.mentions.users.first().username
       }**||`));
   }
});
bot.on("messageUpdate", (message, newMessage) => {
 if (message.mentions.users.first()) {
    if (newMessage.mentions.users.first()) return;
    message.channel.send(new Discord.MessageEmbed().setColor(Color).setTitle("Ghost Ping Detected!")
            .setDescription(`Ghost Ping Found!\n${message.author} just pinged ${
         message.mentions.users.first().username
       } and then someone deleted the message!`)
            .addField("Deleted message content", `||${
         message.mentions.users.first().username
       }||`));
    }
});*/

//=============================== - [ antimention ] - ===================================//

/*bot.on('webhookUpdate', async (channel) => {
  if (message.author.bot) return;
  let guild = await Guild.findOne({ guildID: message.guild.id });
   if (!guild) { Guild.create({ guildID: message.guild.id }); }
   if (guild) {
     if (guild.webhook.onoff === "off") return;
    
     if (message.author.id === message.guild.ownerID) return console.log("owner");
     if (guild.whitelist.find((c) => c.type === message.author.id))
       return console.log("whitelist");
    
    channel.guild.fetchAuditLogs({limit: 1, type: "WEBHOOK_CREATE"}).then(data => {
        const value = data.entries.first();
        if (value && value.executor) {
            const member = channel.guild.members.cache.get(value.executor.id);
            if (member)
                member.kick().catch(reason => console.error(reason.message)).then(() => console.log(`${member.user.tag} kicked because of webhook created !`));
        }
    }).catch(err => console.error(err.message))
    channel.fetchWebhooks().then(webs => webs.each(w => w.delete().catch(reason => console.error(reason.message)).then(() => console.log('Webhook deleted successfully')))).catch(error => console.error(error.message))
}
})
*/
/////
/*bot.on('message', message => {
  let non = ['@here','@everyone']
  if(non.some(w => message.content.includes(w))) {
    if(message.deletable) {
      message.delete()
    }
}
})*/
//=============================== - [ antispam ] - ===================================//
const usersMap = new Map();
 const LIMIT = 5;
 const TIME = 6000;
 const DIFF = 7000;

 bot.on("message", async message => {
   if (!message.channel.guild) return;
   let guild = await Guild.findOne({ guildID: message.guild.id });
   if (!guild) { Guild.create({ guildID: message.guild.id }); }
   if (guild) {
     if (guild.spam.onoff === "off") return;
     let Ww = await Owner.findOne({ ownerCode: "681553671364018196" });
     if (Ww.worldWhitelist.find((c) => c.type === message.author.id)) return;
     if (message.author.id === message.guild.ownerID) return console.log("owner");
     if (guild.whitelist.find((c) => c.type === message.author.id))
       return console.log("whitelist");
     let pun = guild.punishment;
     if (message.author.bot) return;
     if (usersMap.has(message.author.id)) {
       const userData = usersMap.get(message.author.id);
       const { lastMessage, timer } = userData;
       const difference = message.createdTimestamp - lastMessage.createdTimestamp;
       let msgCount = userData.msgCount;
       if (difference > DIFF) {
         clearTimeout(timer);
         userData.msgCount = 1;
         userData.lastMessage = message;
         userData.timer = setTimeout(() => {
           usersMap.delete(message.author.id);
         }, TIME);
         usersMap.set(message.author.id, userData);
       } else {
         ++msgCount;
         if (parseInt(msgCount) >= LIMIT) {
           if (pun === "") {
             if (!message.member.bannable) return console.log(``);
             message.channel.guild.members.cache
               .get(message.author.id)
               .ban()
             message.channel.bulkDelete(msgCount, true);
           } else {
             message.channel.guild.members.cache
               .get(message.author.id)
               .kick()
               .then(k => {
                 k.guild.owner.send(new Discord.MessageEmbed()
          .setColor(Color)
         .setDescription(`**${message.author.username}** kicked because spaming in channel!`));
               });
             message.channel.bulkDelete(msgCount, true);
           }
         } else {
           userData.msgCount = msgCount;
           usersMap.set(message.author.id, userData);
            } 
         }
        } else {
       let fn = setTimeout(() => {
         usersMap.delete(message.author.id);
       }, TIME);
       usersMap.set(message.author.id, {
         msgCount: 1,
         lastMessage: message,
         timer: fn
       });
     }
 }
 });
