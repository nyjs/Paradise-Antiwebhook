const { MessageEmbed } = require("discord.js") 
const fs = require("fs");

module.exports.run = async (client, message, messageReaction) => {
    if(!message.guild) return;

    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let {lien } = require("./../../config.json")
    let config = require("./../../config.json")
const embed = new MessageEmbed()
.setTitle('Lien')
.addField('Inviter le bot' , '[`Clique Ici`](https://discord.com/api/oauth2/authorize?client_id=810840472515903488&permissions=8&scope=bot)')
.addField('Support' , '[`Clique Ici`](https://discord.gg/RyrF43nvf4)')
.setColor(db.color)  
.setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))
message.channel.send(embed)
};



module.exports.help = {
    name: "invite",
    aliases: ['lien'],
    category: 'Administration',
    description: " ",
  };