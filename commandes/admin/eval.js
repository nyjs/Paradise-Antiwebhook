
const Discord = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    const  db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    let authorized = [`${config.bot.owner}` , `${config.bot.owner2}` , `${config.bot.owner3}`]
    if(!authorized.includes(message.author.id)) return message.channel.send("<a:emoji4:806652395852791858> `ERREUR` Vous n'ête pas le créateur du bot.")

    const content = message.content.split(" ").slice(1).join(" ");
    const result = new Promise((resolve) => resolve(eval(content)));

    return result.then((output) => {
        if (typeof output !== "string") {
            output = require("util").inspect(output, {
                depth: 0
            });
        }
        if (output.includes(client.token)) {
            output = output.replace(client.token, "T0K3N");
        }
        message.channel.send(output, {
            code: "js"
        });
    }).catch((err) => {
        err = err.toString();
        if (err.includes(client.token)) {
            err = err.replace(client.token, "T0K3N");
        }
        message.channel.send(err, {
            code: "js"
    })})}



module.exports.help = {
    name: "eval",
    category: 'Fun',
    description: ".",
    aliases: [''],

  };