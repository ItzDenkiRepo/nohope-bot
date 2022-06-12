const { MessageEmbed } = require("discord.js");
const db = require('quick.db');
const afkData = new db.table('afkdata');
module.exports = {
  name: "afk",
  description: "afk",
  cooldown: 5,
  aliases: ["afk", "treo"],
  category: "🔰 Thông Tin",
  usage: "<PREFIX>afk",
  run: async (client, message, args) => {
    let userDb = afkData.get(message.author.id);
        if (!userDb) userDb = await afkData.set(message.author.id, { afk: false, loinhan: '' });
        if (userDb.afk == true) {
            await afkData.set(`${message.author.id}.afk`, false);
            message.channel.send('Bạn đã tắt chế độ afk');
        } else {
            let loinhan = args.join(' ');
            if (!loinhan) loinhan = 'Sẽ quay trở lại sau!';
            await afkData.set(message.author.id, { afk: true, loinhan: loinhan });
            message.channel.send('Bạn đã bật chế độ afk!');
        }
  },
};
