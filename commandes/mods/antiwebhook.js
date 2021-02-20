const db = require("quick.db")
const fs = require("fs");
const Discord = require('discord.js')





module.exports.run = async (client, message, args) => {
    let dab = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    let authorized = [`${config.bot.owner}` , `${config.bot.owner2}` , `${config.bot.owner3}` , `${message.guild.ownerID}`]
    if(!authorized.includes(message.author.id)) return message.channel.send("<a:emoji4:806652395852791858> `ERREUR` Vous n'avez pas la couronne du serveur.")

  if(args[0] === "on") {
      message.channel.send("<a:emoji10:806652956258467840> Anti webhook activé")
      db.set("antiwb_"+ message.guild.id , true)
  }
  if(args[0] === "off") {
    message.channel.send("<a:emoji10:806652956258467840> Anti webhook désactivé")
    db.set("antiwb_"+ message.guild.id , null)

}

};


module.exports.help = {
    name: "antiwebhook",
    aliases: ['antiwb' ],
    category: 'Administration',
    description: "Avoir quelque info sur le bot",
  };