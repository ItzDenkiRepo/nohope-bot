const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const disbut = require("discord.js");
const fs = require("fs");

module.exports = {
  name: "help",
  category: "🔰 Thông Tin",
  usage: "<PREFIX>help",
  description: "Hiển thị tất cả lệnh",
  run: async (client, message, args) => {
    message.reply(`
    **  Developer**
    - addemoji, addmoney, adminCaptcha, ao, blacklist, dm, eval, reload, removeblacklist, removemoney, transfer
    **Giveaway**
    - deletega, end, reroll, start
    **Minigames**
    - baucua, coinflip, random, slot, taixiu
    **Moderator**
    - ban, kick, lock, setmodlog, unban, unlock
    **Infomation**
    - avatar, afk, esnipe, feedback, help, love, math, pick, ping, report, snipe, userinfo, uptime, stats
    **Economy**
    - cash, daily, giaonam, give, leaderboard, weekly, work, thamngan
    `)
  },
};