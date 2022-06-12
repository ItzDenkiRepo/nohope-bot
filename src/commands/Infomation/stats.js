const os = require('os');
const { MessageEmbed } = require('discord.js');
const feroms = require('fero-ms');
module.exports = {
  name: "stats",
  description: "stats",
  cooldown: 5,
  aliases: ["thongso", "ts"],
  category: "🔰 Thông Tin",
  usage: "<PREFIX>stats",
  run: async (client, message, args) => {
    let uptime = client.uptime;
        let shortUptime = feroms.ms(uptime);
        let model = os.cpus()[0].model;
        let cores = os.cpus().length;
        let platform = os.platform();
        let nodejs = process.version;
        let djs = require('discord.js').version;
        let server = client.guilds.cache.size;
        let user = client.users.cache.size;
        let channel = client.channels.cache.size;

        let statsembed = new MessageEmbed()
        .addFields(
            {
                name: '<:pnv_logoonline:959377428365594695> Thời gian online',
                value: `\`\`\`${shortUptime}\`\`\``
            },
            {
                name: '<:globe:896718155416760340> Guilds',
                value: `\`${server}\``,
                inline: true
            },
            {
                name: '<:mention:896718358672707584> Users',
                value: `\`${user}\``,
                inline: true
            },
            {
                name: '<:channel:896717996326809641> Channels',
                value: `\`${channel}\``,
                inline: true
            },

            {
                name: '<:prime:896718399776886816> Arch',
                value: `\`${os.arch()}\``,
                inline: true
            },
            {
                name: '<:info:896718244461826140> Platform',
                value: `\`${platform}\``,
                inline: true
            },
            {
                name: '<:desktop:896718080821047346> Cores',
                value: `\`${cores}\``,
                inline: true
            },
            {
                name: '<a:Discord:896723328277024819> Discord.js Version',
                value: `\`v${djs}\``,
                inline: true
            },
            {
                name: '<:jss:896718571491704852> Node.js Version',
                value: `\`${nodejs}\``,
                inline: true
            },
            {
                name: '<:ram:896715172029276180> Ram Usage',
                value: `\`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB/ ${(os.totalmem() / 1024 / 1024).toFixed(2)}MB\``,
                inline: true
            },
            {
                name: '<:desktop:896718080821047346> CPU Model',
                value: `\`\`\`${model}\`\`\``
            }
        )
        .setTimestamp()
        await message.channel.send({ embeds: [statsembed] });
  },
};
