const Discord = require('discord.js')
const { laysodep } = require('../util/util')
module.exports = async (client, newguild) => {
  let guildowner = await client.users.fetch(newguild.ownerId)
  const embed = new Discord.MessageEmbed()
    .setDescription(`Now bot in ${client.guilds.cache.size} guilds`)
    .setTitle("New Server Joined")
    .addField('Guild Name: ', `${newguild.name}`, true)
    .addField('Guild ID: ', `${newguild.id}`, true)
    .addField('Guild members: ', `${newguild.memberCount}`, true)
    .addField("Owner server: ", guildowner.tag, true)
    .setFooter(`OwnerID: ${newguild.ownerId}`)
    .setColor("#00CD00");
  client.channels.cache.get('982905241773166633').send({ embeds: [embed] });
}
