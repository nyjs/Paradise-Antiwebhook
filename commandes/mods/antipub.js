const db = require("quick.db")
const fs = require("fs");
const Discord = require('discord.js')





module.exports.run = async (client, message, args) => {
    let dab = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.channel.send(` <a:emoji4:806652395852791858> Vous devez être **ADMINISTRATOR** pour efectuer cette command, ${message.author.username}`);
  if(args[0] === "on") {
      message.channel.send("<a:emoji10:806652956258467840> Antipub activé")
      db.set("al_"+ message.guild.id , true)
  }
  if(args[0] === "off") {
    message.channel.send("<a:emoji10:806652956258467840> Antipub désactivé")
    db.set("al_"+ message.guild.id , null)

}

};


module.exports.help = {
    name: "antipub",
    aliases: ['al' ],
    category: 'Administration',
    description: "Avoir quelque info sur le bot",
  };