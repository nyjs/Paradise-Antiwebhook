var fs = require("fs"),
getNow = () => { return { time: new Date().toLocaleString("en-GB", { timeZone: "Europe/Paris", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }), }; };

module.exports.run = (client, message, args) => {
    if(!message.guild) return;
    var config = require("../../config.json"),
    db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.channel.send(`<a:emoji18:808469005249151037> Vous devez être **ADMINISTRATOR** pour efectuer cette command, ${message.author.username}`);
       if (args.length) {
        let str_content = args.join(" ")
        db.color = str_content
        message.channel.send(`<a:emoji10:806652956258467840> ${message.author}, Vous avez définis la couleur des embeds de cette guilde en \`${str_content}\`.`);
    } else {
        message.channel.send(`<a:emoji18:808469005249151037> ${message.author}, Vous n'avez fournie aucune valeur, veuillez refaire la commande en incluant un prefixe.`);
    }


    
fs.writeFile(`./serveur/${message.guild.id}.json`, JSON.stringify(db), (x) => {
    if (x) console.error(x)
  });
};


module.exports.help = {
    name: "color",
    aliases: ['setcolor','theme'],
    category: 'Administration',
    description: "Permet de changer la couleur des embeds du serveur",
  };