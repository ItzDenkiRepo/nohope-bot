const cooldown = new Set();
const wait = require('util').promisify(setTimeout);
const emojis = [
  "<:nh_ca1:949204873470160906>", 
  "<:nh_cua1:949204816977100830>", 
  "<:nh_bau1:949204910384226335>", 
  "<:nh_nai1:949204977174343680>",
  "<:nh_ga1:949204956647424020>", 
  "<:nh_tom1:949204848539234334>",
  "<:nh_ca1:949204873470160906>", 
  "<:nh_cua1:949204816977100830>", 
  "<:nh_bau1:949204910384226335>", 
  "<:nh_nai1:949204977174343680>",
  "<:nh_ga1:949204956647424020>", 
  "<:nh_tom1:949204848539234334>",
  "<:nh_ca1:949204873470160906>", 
  "<:nh_cua1:949204816977100830>", 
  "<:nh_bau1:949204910384226335>", 
  "<:nh_nai1:949204977174343680>",
  "<:nh_ga1:949204956647424020>", 
  "<:nh_tom1:949204848539234334>",
];
const bacuaa = [
  "Tôm",
  "Nai",
  "Gà",
  "Cua",
  "Cá",
  "Bầu",
]
module.exports = {
  name: "baucua",
  category: "🎯 Minigames",
  aliases: ["bc", "baucua"],
  cooldown: 7,
  usage: "<PREFIX>baucua",
  description: "Đơn Giản Là Bầu Cua ",
  run: async (client, message, args) => {
      /*if (
      !message.member.roles.cache.some((r) => r.name === "Lắc Bầu Cua")
    ) {
      return message.channel.send(
        "<:like:866504743479541780> | **Bạn Không Đủ Điều Kiện Để Lắc Bầu Cua! | Bạn Cần Phải Có Role Tên: Lắc Bầu Cua **"
      );  
    } 
   await baucua(message, emojis)*/
   let res = []
  r1 = Math.floor(Math.random() * (emojis.length - 1)) + 0;
  r2 = Math.floor(Math.random() * (emojis.length - 1)) + 0;
  r3 = Math.floor(Math.random() * (emojis.length - 1)) + 0;
  message.channel.send("**Đợi chút lắc nè**")
  let msg = await message.channel.send("**<a:nh_lacbaucua1:949204728833794098> <a:nh_lacbaucua1:949204728833794098> <a:nh_lacbaucua1:949204728833794098>**")
  await wait(3000)
  msg.edit(`**${emojis[r1]} <a:nh_lacbaucua1:949204728833794098> <a:nh_lacbaucua1:949204728833794098>**`)
  await wait(3000)
  msg.edit(`**${emojis[r1]} ${emojis[r2]} <a:nh_lacbaucua1:949204728833794098>**`)
  await wait(3000)
  msg.edit(`**${emojis[r1]} ${emojis[r2]} ${emojis[r3]}**`)
  await wait(100)
  //msg.edit(`${emojis[r1]}${emojis[r2]}${emojis[r3]}`)
  //res.push(bacuaa[r1])
  //res.push(bacuaa[r2])
  //res.push(bacuaa[r3])
  if(emojis[r1] == `<:nh_tom1:949204848539234334>`) textanimal1 = "Tôm";
  if(emojis[r1] == `<:nh_bau1:949204910384226335>`) textanimal1 = "Bầu";
  if(emojis[r1] == `<:nh_nai1:949204977174343680>`) textanimal1 = "Nai";
  if(emojis[r1] == `<:nh_ga1:949204956647424020>`) textanimal1 = "Gà";
  if(emojis[r1] == `<:nh_ca1:949204873470160906>`) textanimal1 = "Cá";
  if(emojis[r1] == `<:nh_cua1:949204816977100830>`) textanimal1 = "Cua";

  if(emojis[r2] == `<:nh_tom1:949204848539234334>`) textanimal2 = "Tôm";
  if(emojis[r2] == `<:nh_bau1:949204910384226335>`) textanimal2 = "Bầu";
  if(emojis[r2] == `<:nh_nai1:949204977174343680>`) textanimal2 = "Nai";
  if(emojis[r2] == `<:nh_ga1:949204956647424020>`) textanimal2 = "Gà";
  if(emojis[r2] == `<:nh_ca1:949204873470160906>`) textanimal2 = "Cá";
  if(emojis[r2] == `<:nh_cua1:949204816977100830>`) textanimal2 = "Cua";

  if(emojis[r3] == `<:nh_tom1:949204848539234334>`) textanimal3 = "Tôm";
  if(emojis[r3] == `<:nh_bau1:949204910384226335>`) textanimal3 = "Bầu";
  if(emojis[r3] == `<:nh_nai1:949204977174343680>`) textanimal3 = "Nai";
  if(emojis[r3] == `<:nh_ga1:949204956647424020>`) textanimal3 = "Gà";
  if(emojis[r3] == `<:nh_ca1:949204873470160906>`) textanimal3 = "Cá";
  if(emojis[r3] == `<:nh_cua1:949204816977100830>`) textanimal3 = "Cua";

  message.channel.send("Kết quả: " + " • " + textanimal1 + " • " + textanimal2 + " • " + textanimal3)
  //return res
  }
};

/*async function baucua(message, emojis) {
  let res = []
  r1 = Math.floor(Math.random() * (emojis.length - 1)) + 0;
  r2 = Math.floor(Math.random() * (emojis.length - 1)) + 0;
  r3 = Math.floor(Math.random() * (emojis.length - 1)) + 0;
  let msg = await message.channel.send("**Đợi Chút Lắc Nè, <a:lacne:869295144602583080> <a:lacne:869295144602583080> <a:lacne:869295144602583080>**")
  await wait(3000)
  msg.edit(`**Đợi Chút Lắc Nè, ${emojis[r1]} <a:lacne:869295144602583080> <a:lacne:869295144602583080>**`)
  await wait(3000)
  msg.edit(`**Đợi Chút Lắc Nè, ${emojis[r1]} ${emojis[r2]} <a:lacne:869295144602583080>**`)
  await wait(3000)
  msg.edit(`**Bạn Đã Lắc Được, ${emojis[r1]} ${emojis[r2]} ${emojis[r3]}**`)
  await wait(100)
  msg.edit(`${emojis[r1]}${emojis[r2]}${emojis[r3]}`)
  res.push(bacuaa[r1])
  res.push(bacuaa[r2])
  res.push(bacuaa[r3])
  message.channel.send(`${bacuaa[r1]} ${bacuaa[r2]} ${bacuaa[r3]}`)
  return res
}
*/
