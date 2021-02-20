const db = require("quick.db")
const fs = require("fs");
const Discord = require('discord.js')





module.exports.run = async (client, message, args) => {
    let dab = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    if(message.author.id !== message.guild.ownerID ) return message.channel.send("<a:emoji4:806652395852791858> `ERREUR` Vous n'êtes pas l'owner du serveur.")

  if(args[0] === "on") {
      message.channel.send("<a:emoji10:806652956258467840> Anti webhook on")
      db.set("antiwb_"+ message.guild.id , true)
  }
  if(args[0] === "off") {
    message.channel.send("<a:emoji10:806652956258467840> Anti webhook off")
    db.set("antiwb_"+ message.guild.id , null)

}

};


module.exports.help = {
    name: "antiwebhook",
    aliases: ['antiwb' ],
    category: 'Administration',
    description: "Avoir quelque info sur le bot",
  };