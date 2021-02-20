
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    const  db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    let authorized = [`${config.bot.owner}` , `${config.bot.owner2}` , `${config.bot.owner3}`]
    if(!authorized.includes(message.author.id)) return message.channel.send("<a:emoji4:806652395852791858> `ERREUR` Vous n'ête pas le créateur du bot.")


    message.channel.send(`<a:emoji10:806652956258467840> **[${client.user.tag}]** - Arrêt du bot par ${message.author}`).then(() => {
        process.exit(0)
    })
},


module.exports.help = {
    name: "down",
    category: 'Fun',
    description: ".",
    aliases: ['shutdown'],

  };