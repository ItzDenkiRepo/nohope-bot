const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "work",
  aliases: ["wr", "w"],
  category: "🥑 TiềnBơ",
  description: "Làm Việc Chăm Chỉ",
  usage: "<PREFIX>work",
  cooldown: 20,
  clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
  run: async (client, message, args) => {
    //let author = await client.db.fetch(client, message.author.id);
    let randomb = ["Bạn Cắt <:nam_2:981924964343095297> Và Nhận Về", "Bạn Đã Xay Sinh Tố <:nam_2:981924964343095297> Và Nhận Về"];
    let amount = Math.floor(Math.random() * 250);
    let randomchat = [Math.floor(Math.random() * randomb.length)];
    let embed1 = new MessageEmbed()
      .setColor(client.config.botcolor)
      .setDescription(
        `${client.emoji.tick} ${randomb[randomchat]} **__${client.func.laysodep(amount)}__**`
      );
    message.reply({ embeds: [embed1] });

    await client.db.addmoney(client, message.author.id, amount);
  },
};
