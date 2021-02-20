const { MessageEmbed } = require("discord.js"), 
fs = require("fs"), 
getNow = () => { return { time: new Date().toLocaleString("en-GB", { timeZone: "Europe/Paris", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }), }; };


module.exports.run = async (client, message, args) => {
    if(!message.guild) return;
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"))
    if(!message.member.hasPermission("ADMINISTRATOR")) return;
    message.channel.clone({reason: ` ${message.author.tag} (${message.author.id}) salon recréé`}).then(c => c.setPosition(message.channel.position) && c.send(`<a:emoji10:806652956258467840> ${message.author} salon recréé`))
    message.channel.delete() 
    message.guild.channels.cache.get(db.mods.logs).send(new MessageEmbed()
    .setAuthor(`[NUKE] ${message.author.tag}`, message.author.displayAvatarURL({dynamic : true }))
    .addField('Modérateur', message.author, true)
    .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))
        .setTimestamp()  
    .setColor(db.color)
    )
    };
    
module.exports.help = {
    name: "nuke",
    aliases: ['duplicate','renew'],
    category: 'Gestion de serveur',
    description: "- Duplique le salon et supprime l'ancien",
  };