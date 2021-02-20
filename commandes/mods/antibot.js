const db = require("quick.db")
const fs = require("fs");
const Discord = require('discord.js')





module.exports.run = async (client, message, args) => {
    let dab = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")

  if(args[0] === "on") {
      message.channel.send("<a:emoji10:806652956258467840> Anti bot activé")
      db.set("ab_"+ message.guild.id , true)
  }
  if(args[0] === "off") {
    message.channel.send("<a:emoji10:806652956258467840> Anti bot désactivé")
    db.set("ab_"+ message.guild.id , null)

}

};


module.exports.help = {
    name: "antibot",
    aliases: ['ab' ],
    category: 'Administration',
    description: "Avoir quelque info sur le bot",
  };