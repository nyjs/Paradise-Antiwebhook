const     { readdirSync } = require("fs")
const     { Client, Collection, GuildMember} = require("discord.js")
const     figlet = require('figlet')
const     colors = require('colors')
const     client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] }),
readline = require('readline');
client.commands = new Collection()     
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    const  db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    let authorized = [`${config.bot.owner}` , `${config.bot.owner2}` , `${config.bot.owner3}`]
    if(!authorized.includes(message.author.id)) return message.channel.send("<a:emoji4:806652395852791858> `ERREUR` Vous n'ête pas le créateur du bot.")
    message.channel.send("<a:emoji10:806652956258467840> \`SUCCÈS\` Je vais être redémarré dans quelque instants !")
    client.destroy(); 
 
    
    client.login(config.login.token).catch(e => { console.log(`[CRITICAL ERROR]`.red + ` Erreur rencontrée: ${e}`) })
};


module.exports.help = {
    name: "reboot",
    category: 'Fun',
    description: ".",
    aliases: ['rbt'],

  };
