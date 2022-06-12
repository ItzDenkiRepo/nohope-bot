const random = require("random-number-csprng");
const taixiu = [
  "<:nh_xucxac1:949208091583471657>",
  "<:nh_xucxac2:949208128996659221>",
  "<:nh_xucxac3:949208467829325824>",
  "<:nh_xucxac4:949208506760851477>",
  "<:nh_xucxac5:949208528873193502>",
  "<:nh_xucxac6:949208571931922472>"
]
function wait(ms) {
  let start = new Date().getTime();
  let end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}
const { MessageEmbed } = require('discord.js')
module.exports = {
  name: "taixiu",
  category: "🎯 Minigames",
  aliases: ["tx"],
  cooldown: 5,
  usage: "<PREFIX>taixiu",
  description: "Game tài xỉu",
  run: async (bot, message, args) => {

    const emo = '<a:nh_taixiu:949207657661751336>'
    let r1 = await random(0, taixiu.length-1)
    let r2 = await random(0, taixiu.length-1)
    let r3 = await random(0, taixiu.length-1)
    const i1 = taixiu[r1]
    const i2 = taixiu[r2]
    const i3 = taixiu[r3]
    const diem = (r1 + 1) + (r2 + 1) + (r3 + 1) 
    const message1 = await message.channel.send(`**Đang lắc tài xỉu**`)
    const msg = await message.channel.send(` ${emo}  ${emo}  ${emo}`)
    await wait(2000)
    await msg.edit(` ${i1}  ${emo}  ${emo}`)
    await wait(2000)
    await msg.edit(` ${i1}  ${i2}  ${emo}`)
    await wait(2000)
    await msg.edit(` ${i1}  ${i2}  ${i3}`)
    let taixiuu
    if(diem >= 1 && diem <=10) {
      taixiuu = "Xỉu"
    }else if (diem > 10 && diem <= 18) {
      taixiuu = "Tài"
    }
    let chanle = diem%2 == 0 ? "Chẵn" : "Lẻ"
    await message.channel.send(`Bạn đã lắc được: **${diem} điểm • ${chanle} • ${taixiuu}**`)

  }
};
