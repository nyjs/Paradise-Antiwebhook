const { MessageEmbed } = require("discord.js"), 
fs = require("fs");
module.exports.run = (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")

    const Embed = new MessageEmbed()
      .setTitle("**Temps de réponse**")
      .addField('<a:test:810897736287125506> **Temps de réponse du bot**' , `${client.ws.ping}ms`)
      .addField('<a:test:810897736287125506> **Temps de réponse de l\'API**' , `${message.createdAt - message.createdAt + "ms"}`)
      .setTimestamp()  
      .setColor(db.color)  
      .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))
      message.channel.send(Embed)
};


module.exports.help = {
    name: "ping",
    category: 'utilitaires',
    description: "Donn le ping du bot et de l'api discord.",
  };