const Discord = require("discord.js");
const { Color } = require("../../config.js");
const { MessageEmbed } = require('discord.js');

const moment = require('moment');

const filterLevels = {

	DISABLED: 'Off',

	MEMBERS_WITHOUT_ROLES: 'No Role',

	ALL_MEMBERS: 'Everyone'

};

const verificationLevels = {

	NONE: 'None',

	LOW: 'Low',

	MEDIUM: 'Medium',

	HIGH: '(╯°□°）╯︵ ┻━┻',

	VERY_HIGH: '┻━┻ ﾐヽ(ಠ益ಠ)ノ彡┻━┻'

};


module.exports = {
  name: "serverinfo",

  description: "Get more information about your server",
  usage: ["e!serverinfo"],
  category: ["General"],
  enabled: true,
  memberPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  ownerOnly: false,
  cooldown: 3000,
  run: async (bot, message, args, dev, data) => {

		const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());

               // const prime = await Prime.findOne({Guild: message.guild.id})
                //const premium = prime.prime
       
		const members = message.guild.members.cache;

	        let guild = await Guild.findOne({ guildID: message.guild.id });
		
                const channel = message.guild.channels.cache.size;
	       
                const channels = message.guild.channels.cache;

		const emojis = message.guild.emojis.cache;

		const embed = new MessageEmbed()
                        .setTitle("Guild information")
			.setColor(Color)
			.setThumbnail(message.guild.iconURL({ dynamic: true }))
			.addField("Name", `${message.guild.name}`)
                        .addField("ID", `${message.guild.id}`)
                        .addField("Owner", `<@${message.guild.ownerID}>`)
                        .addField("Explicit Filter", `${filterLevels[message.guild.explicitContentFilter]}`)
                        .addField("Verification Level", `${verificationLevels[message.guild.verificationLevel]}`)
                        .addField("Time Created", `${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} ${moment(message.guild.createdTimestamp).fromNow()}`)
                        .addField("Role Count", `${roles.length}`)
                        .addField("Boost Count", `${message.guild.premiumSubscriptionCount || '0'}`)
                        .addField("Member Count", `${message.guild.memberCount}`)
                        .addField("Bots", `${members.filter(member => member.user.bot).size}`)
                        .addField(`Channels (${channel})`, `${channels.filter(channel => channel.type === 'text').size} Text | ${channels.filter(channel => channel.type === 'voice').size} Voice`)
                        .addField("Emoji Count", `${emojis.size}`)


	      message.channel.send(embed);

	}

};
