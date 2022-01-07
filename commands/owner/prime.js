const moment = require("moment-timezone");
const parseInt = require("ms")
const day = require("dayjs")
module.exports = {
  name: "prime",
  enabled: false,			
  memberPermissions: [ "SEND_MESSAGES" ],			
  botPermissions: [ "SEND_MESSAGES" ],		
  ownerOnly: true,			
  cooldown: 1000,
  prime: false,
  run: async (bot, message, args, dev) => {

    if (args[1] === "time") {
      let data = await Prime.findOne({Guild: message.guild.id });
      if (data) {
        if (data.log === "enable") {
        let time = day(data.time);
       if(!data.time) return message.channel.send(`Your srrver don't have prime bot`)

        
      message.channel.send(`Prime bot in this server end in ${time}`)
    
          } else {
            message.channel.send(`This server don't have a prime bot`)
          }
        }
      if (!data) {
          message.channel.send(`This server don't have a prime bot`)
        }
    } else
      
      if (args[1] === "add") {
     if (!args[2]) return message.channel.send(`Please specify guild id`)
       if(!bot.guilds.cache.has(args[2])) return message.channel.send(`Your guild id is invalid`)
    
      
    let time = day(args[3]).valueOf();;
              let data = await Prime.findOne({ Guild: args[2]});
      if (data) {
        data.time = 0;
        data.log = "enable";
        data.save()
      }
      if(!data) { Prime.create({
        Guild: args[2],
        time: time,
        log: "enable",
        Permanent: false
      }); } 
        let time0 = day(time)

      message.channel.send(`Prime bot in this server ${time0}`)
      
      } else if (args[1] === "remove") {
      if (!args[2]) return message.channel.send(`Pleade give me a guild id`)
        
        let data = await Prime.findOne({ Guild: args[2]})
      
        if(data) {
         
          data.log = "enable";
          data.delete()
        }
  message.channel.send(`Prime bot on server removed`)
      }
  
  }
}
