
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")


  
    let tosay = args.join(" ")
    if(!tosay) return message.channel.send("Tu veux me faire dire quoi ...")
    if(tosay.includes("@everyone")&& !message.member.hasPermission("MENTION_EVERYONE")|| tosay.includes("@here")&& !message.member.hasPermission("MENTION_EVERYONE")) return message.channel.send(`<a:emoji18:808469005249151037> Vous devez avoir le \`MENTION_EVERYONE\` permission de mentionner tout le monde!`)
    message.delete();
    message.channel.send(tosay)
}




module.exports.help = {
    name: "say",
    category: 'Fun',
    description: ".",
    aliases: [''],

  };
