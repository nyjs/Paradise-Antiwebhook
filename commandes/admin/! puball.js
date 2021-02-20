const Discord = require("discord.js");
const fs = require("fs");



// Chargement des nodes modules

module.exports.run = async (guild , client, message , args) => {
    let config = require("./../../config.json")
    let {lien} = require("./../../config.json")
let MSG = message.content.split(`${db.prefix}puball`).join("");
if (!MSG)
  return message.channel.send(`Vous n'avez pas spécifié votre message à envoyer!`);
  let embed = new Discord.MessageEmbed()
    .setAuthor(`Salut ! 😋`)
    .setDescription(MSG)
    .setColor('#2c2f33')
    .setFooter("Ce message a été envoyé à tout les membres du serveur");
    guild.members.cache.forEach((member) => {
    member.send(embed).catch(() => {});
});
message.reply("messages envoyés !");



    }







module.exports.help = {
    name: "puball",
    category: 'Administration',
    description: "Avoir quelque info sur le bot",
  };