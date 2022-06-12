const { Util, Collection, MessageEmbed, Structures } = require("discord.js");
const Logdata = require("../databases/models/auditlog.js");
class Auditlog {
  constructor() { }
  async fetch(client, guildID) {
    let ob;
    let guild = client.guilds.cache.get(guildID);
    if (!guild) return undefined;
    let data = await Logdata.findOne({
      guildId: guildID,
    });
    if (!data) {
      data = new Logdata({
        guildId: guild.id,
        guildName: guild.name,
        logchannel: "982896387899408394",
        ticketchannel: "982896423408373761",
        muterole: "939497238583971910",
        disable: false
      });
      data.save();
      ob = {
        guildId: data.guildId,
        guildName: data.guildName,
        logchannel: data.logchannel,
        ticketchannel: data.ticketchannel,
        muterole: data.muterole,
        disable: data.disable
      };
    } else {
      ob = {
        guildId: data.guildId,
        guildName: data.guildName,
        logchannel: data.logchannel,
        ticketchannel: data.ticketchannel,
        muterole: data.muterole,
        disable: data.disable
      };
    }
    return ob;
  }
  async setlogchannel(client, guildId, channelId) {
    let guild = client.guilds.cache.get(guildId);
    if (!guild) return undefined;
    let channel = guild.channels.cache.get(channelId)
    if (!channel) return undefined;
    let data = await Logdata.findOne({
      guildId: guildId,
    });
    if (!data) {
      data = new Logdata({
        guildId: guild.id,
        guildName: guild.name,
        logchannel: channelId,
        ticketchannel: "982896423408373761",
        muterole: "939497238583971910",
        disable: false
      });
      data.save();
    } else {
      data.logchannel = channelId
      data.save();
    }
  }
  async setticketchannel(client, guildId, channelId) {
    let guild = client.guilds.cache.get(guildId);
    if (!guild) return undefined;
    let channel = guild.channels.cache.get(channelId)
    if (!channel) return undefined;
    let data = await Logdata.findOne({
      guildId: guildId,
    });
    if (!data) {
      data = new Logdata({
        guildId: guild.id,
        guildName: guild.name,
        logchannel: "982896387899408394",
        ticketchannel: channelId,
        muterole: "939497238583971910",
        disable: false
      });
      data.save();
    } else {
      data.ticketchannel = channelId
      data.save();
    }
  }
  async setmuterole(client, guildId, roleId) {
    let guild = client.guilds.cache.get(guildId);
    if (!guild) return undefined;
    let role = guild.roles.cache.get(roleId)
    if (!role) return undefined;
    let data = await Logdata.findOne({
      guildId: guildId,
    });
    if (!data) {
      data = new Logdata({
        guildId: guild.id,
        guildName: guild.name,
        logchannel: "982896387899408394",
        ticketchannel: "982896423408373761",
        muterole: roleId,
        disable: false
      });
      data.save();
    } else {
      data.muterole = roleId
      data.save();
    }
  }
  async disable(client, guildId) {
    let guild = client.guilds.cache.get(guildId);
    if (!guild) return undefined;
    let data = await Logdata.findOne({
      guildId: guildId,
    });
    if (!data) {
      data = new Logdata({
        guildId: guild.id,
        guildName: guild.name,
        logchannel: "982896387899408394",
        ticketchannel: "982896423408373761",
        muterole: "939497238583971910",
        disable: true
      });
      data.save();
    } else {
      data.disable = true
      data.save();
    }
  }
  async enable(client, guildId) {
    let guild = client.guilds.cache.get(guildId);
    if (!guild) return undefined;
    let data = await Logdata.findOne({
      guildId: guildId,
    });
    if (!data) {
      data = new Logdata({
        guildId: guild.id,
        guildName: guild.name,
        logchannel: "982896387899408394",
        ticketchannel: "982896423408373761",
        muterole: "939497238583971910",
        disable: false
      });
      data.save();
    } else {
      data.disable = false
      data.save();
    }
  }
}
module.exports = Auditlog;
