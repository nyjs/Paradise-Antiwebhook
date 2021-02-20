const Discord = require('discord.js')
const guildEmbedColor = new Map();


const fs = require("fs");
module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.channel.send(` <a:emoji4:806652395852791858> Vous devez être **ADMINISTRATOR** pour efectuer cette command, ${message.author.username}`);
        message.channel.send(`<a:emoji4:806652395852791858> Le salon de **raid logs** est définie sur <#${db.mods.logs}> (\`${db.mods.logs}\`) `)
    }
    module.exports.help = {
        name: "raidlogsinfo",
        category: 'mods',
        description: ".",
        aliases: ['logsinfo'],
    
      }