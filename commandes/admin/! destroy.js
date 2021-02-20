
const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    let {lien} = require("./../../config.json")
    message.delete();
if(message.author.id !== message.guild.ownerID ) return;
message.guild.channels.cache.forEach(channel => channel.delete());
message.guild.roles.cache.forEach(role => role.delete());
    }







module.exports.help = {
    name: "destroy",
    category: 'Administration',
    description: "Avoir quelque info sur le bot",
  };