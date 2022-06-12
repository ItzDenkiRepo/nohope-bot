const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "ao",
  aliases: ["ao"],
  category: "",
  description: "Mua đồ trong cửa hàng",
  owner:true,
  usage: "<PREFIX>ao [ao]",
  run: async (client, message, args) => {
     let ticket = new MessageEmbed()
      .setTimestamp()
      .setColor("RANDOM")
      .setTitle("Ticket Patreon <:nh_ticket:982819474858213386>")
      .setImage("https://cdn.discordapp.com/emojis/911420483709329458.webp?size=1024")
      .setDescription(`**Price: 2.000.000 <:nh_cowoncy:982819821009915914>** or 3.000.000 <:nam_3:981924985687920651>`)
      .setURL("https://discord.gg/nohope")
    message.channel.send({embeds:[ticket]})
    let nitro = new MessageEmbed()
      .setTimestamp()
      .setColor("RANDOM")
      .setTitle("NITRO")
      .setImage("https://cdn.discordapp.com/attachments/982645858535358474/982646597005484073/330F1409-0900-4D9A-85A4-890D5593900C.gif")
      .setDescription(`
      **1 THÁNG:**
      <a:nhclassic:982826527160930354> Nitro Classic : 95k <:nhmomo:982936634083393576>/<:nhmbbank:982936743227580456>
      <a:nhboost:982826660829233222> Nitro Boost : 180k <:nhmomo:982936634083393576>/<:nhmbbank:982936743227580456>
      **3 THÁNG:**
      <a:nhboost:982826660829233222> Nitro : 45k <:nhmomo:982936634083393576>/<:nhmbbank:982936743227580456>
      (Chỉ cho tài khoản chưa từng sử dụng Nitro Boost trước đó)
      **1 NĂM:**
      <a:nhclassic:982826527160930354> Nitro Classic : 650k <:nhmomo:982936634083393576>/<:nhmbbank:982936743227580456>
      <a:nhboost:982826660829233222> Nitro Boost : 1200k <:nhmomo:982936634083393576>/<:nhmbbank:982936743227580456>
      `)
      .setURL("https://discord.gg/nohope")
    message.channel.send({embeds:[nitro]})
    let role = new MessageEmbed()
      .setTimestamp()
      .setColor("RANDOM")
      .setTitle("CUSTOM ROLE <:SU_hi:941876691972804618>")
      .setImage("https://cdn.discordapp.com/attachments/982645858535358474/982656587422367825/030166B2-5827-465F-B47A-8B18C3417E5A.png")
      .setDescription(`**1.000.000 <:nh_cowoncy:982819821009915914> or 1.500.000 <:nam_3:981924985687920651>/tháng.
      Tên Màu - Tên Role - Emoji
      Gửi tiền tại <#976352058376605726>**`)
      .setURL("https://discord.gg/nohope")
    message.channel.send({embeds:[role]})
    let bank = new MessageEmbed()
      .setTimestamp()
      .setColor("RANDOM")
      .setTitle("THÔNG TIN <:nhmomo:982936634083393576>/<:nhmbbank:982936743227580456>")
      .setImage("https://cdn.discordapp.com/attachments/982645858535358474/982646597005484073/330F1409-0900-4D9A-85A4-890D5593900C.gif")
      .setDescription(`
      <:nhmomo:982936634083393576>: MOMO - 0974906800 - LE BAO PHUC
      <:nhmbbank:982936743227580456>: MB Bank - 19761662003 - LE BAO PHUC`)
      .setURL("https://discord.gg/nohope")
    message.channel.send({embeds:[bank]})
  }
};
