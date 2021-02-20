var fs = require("fs"),
getNow = () => { return { time: new Date().toLocaleString("en-GB", { timeZone: "Europe/Paris", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }), }; };

module.exports.run = (client, message, args) => {
    if(!message.guild) return;
    const  db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    let authorized = [`${config.bot.owner}` , `${config.bot.owner2}` , `${config.bot.owner3}`]
    if(!authorized.includes(message.author.id)) return message.channel.send("<a:emoji4:806652395852791858> `ERREUR` Vous n'ête pas le créateur du bot.")

       if (args.length) {
        let str_content = args.join(" ")
client.user.setPresence({ activity: { name: str_content, type: "LISTENING" }, status: 'idle' })
.then(p => message.channel.send(`<a:emoji10:806652956258467840> ${message.author}, Vous avez définis le statut de votre bot en \`${str_content}\`.`))
.catch(e => { message.channel.send(`<a:emoji4:806652395852791858> ${message.author}, Une erreur a été rencontré. \n **Plus d'informations:** \`🔻\` \`\`\`${e}\`\`\``); });

} else {
        message.channel.send(`<a:emoji18:808469005249151037> ${message.author}, Vous avez fournie aucune valeur, veuillez recommencer cette commande en ajoutant ce que vous souhaitez que votre bot ais comme statut`);
    }
};


module.exports.help = {
    name: "listen",
    aliases: [],
    category: 'Administration',
    description: "Permet de changer le statut du Bot",
  };