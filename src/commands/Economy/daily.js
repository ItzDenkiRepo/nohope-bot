const { MessageEmbed } = require("discord.js");
const ms = require("ms");
function laysodep(num) {
  const pattern = /\B(?=(\d{3})+(?!\d))/g;
  return num.toString().replace(pattern, ',');
}
module.exports = {
  name: "daily",
  aliases: ["day"],
  category: "🥑 TiềnBơ",
  description: "Cung cấp cho bạn 5000 mỗi Tuan",
  usage: "<PREFIX>weekly ",
  run: async (client, message, args) => {
    let user = message.author;
    let timeout = 86400000;
    let amount = 500;
    let userdatas = await client.db.fetch(client, message.author.id);
    if (userdatas.daily !== null && timeout - (Date.now() - userdatas.daily) > 0) {
      let time = timeout - (Date.now() - userdatas.daily);
      return client.func.error(`${client.emoji.x} Bạn đã nhận phần thưởng hàng ngày của mình rồi!\nThu thập lại trong: **${secondsToDhms(time / 1000)}**`, message.channel);
    } else {
      let moneyEmbed = new MessageEmbed()
        .setColor(client.config.botcolor)
        .setDescription(`${client.emoji.tick}  Bạn đã nhận được phần thưởng hàng ngày của mình là **__${laysodep(amount)}__** ${client.emoji.money}`)
        .setTimestamp();
      message.channel.send({ embeds: [moneyEmbed] })
      await client.db.addmoney(client, message.author.id, amount);
      await client.db.setdaily(client, message.author.id);

    }
  }
}

function secondsToDhms(seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);

  var dDisplay = d > 0 ? d + (d == 1 ? " ngày, " : " ngày, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " giờ, " : " giờ, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " phút, " : " phút, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " giây" : " giây") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
}