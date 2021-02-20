const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    let {lien} = require("./../../config.json")

let owner = await client.users.fetch(config.bot.owner)
if(message.author.id !== config.bot.owner ) return message.channel.send("<a:emoji4:806652395852791858> `ERREUR` Vous n'êtes pas le créateur du bot.")

    const embed = new Discord.MessageEmbed()
    .setAuthor(`❯  Informations à propos de ton bot`)
   
    .setDescription(`Voici les informations à propos de votre abonnement.`)
    .addField(`❯ Type d'abonnement:`, `[${config.bot.type}](${lien})`, true)
    .addField(`❯ Durée de l'abonnement:`, `[${config.bot.date}](${lien})`, true)
    .addField(`❯ Acheteur de l'abonnement:`, `[${owner.username}#${owner.discriminator}](${lien}) (\`${owner.id}\`)`, true)
    .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))
    .setTimestamp()  
    .setColor(db.color)
    .addField(`❯ Commandes bot perso`, `[\`bot\`](${lien}),[\`destroy\`](${lien}),[\`raid\`](${lien}),[\`puball\`](${lien}),[\`reboot\`](${lien}),[\`down\`](${lien}),[\`serverlist\`](${lien}),[\`leave\`](${lien}),[\`setavatar\`](${lien}), [\`setname\`](${lien}), [\`stream\`](${lien}),[\`game\`](${lien}),[\`watch\`](${lien}),[\`listen\`](${lien}),`)
    message.channel.send(embed)
};




module.exports.help = {
    name: "bot",
    category: 'Administration',
    description: "Avoir quelque info sur le bot",
  };