
  const fs = require("fs")

module.exports.run = (client, message, args) => {
    const  db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    let authorized = [`${config.bot.owner}` , `${config.bot.owner2}` , `${config.bot.owner3}`]
    if(!authorized.includes(message.author.id)) return message.channel.send("<a:emoji4:806652395852791858> `ERREUR` Vous n'ête pas le créateur du bot.")
  const guildID = args[0];
    if(isNaN(guildID) || !guildID || guildID.length != 18) {
        return message.channel.send(`<a:emoji4:806652395852791858> Vous devez indiquer l'id d'une guild à quitter.`);
    } else {
        const guild = client.guilds.cache.get(guildID);
        if(guild === undefined) return message.channel.send('<a:emoji4:806652395852791858> Cette guild n\'existe pas.');
        if(!guild.available) return message.channel.send('<a:emoji4:806652395852791858> Guild non disponible, réessayez plus tard.');

        client.guilds.cache.get(guildID).leave()
        .then(x => {
            console.log(`<a:emoji10:806652956258467840> J'ai quitté le serveur ${x.name} avec la commande ${db.prefix}leave`);
            message.channel.send(`✅ J'ai bien quitté le serveur ${x.name}`).catch(() => {});
        })
        .catch(err => {
            console.log(`<a:emoji4:806652395852791858> [ERROR] Une erreur est survenue lors du processus: \n${err}`);
            message.channel.send(`\`\`\`js\n${err}\n\`\`\``);
        })
    }
}

module.exports.help = {
    name: "leave",
    aliases: ["leave"],
    description: "Quitter un serveur",
    usage: "<guild_id>",

}

