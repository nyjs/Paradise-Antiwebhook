
const Discord = require("discord.js");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
  const  db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
  let config = require("./../../config.json")
  let authorized = [`${config.bot.owner}` , `${config.bot.owner2}` , `${config.bot.owner3}`]


    if(!authorized.includes(message.author.id)) {
        if (!message.guild.me.hasPermission("ADMINISTRATOR"))
          return message.channel
            .send("😎")
            .then(msg => msg.delete({ timeout: 5000 }));
  
        let i0 = 0;
        let i1 = 10;
        let page = 1;
  
        let description =
        `Total Serveur - **${bot.guilds.cache.size.toLocaleString()}**\nTotal Membres - **${bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}**\n\n` +
        bot.guilds.cache
            .sort((a, b) => b.memberCount - a.memberCount)
            .map(r => r)
            .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Membres\nID - ${r.id}`)
            .slice(0, 10)
            .join("\n");
  
        let embed = new Discord.MessageEmbed()
          .setAuthor(
            message.author.tag,
            message.author.displayAvatarURL({ dynamic: true })
          )
          .setColor(db.color)
          .setFooter(bot.user.username)
          .setTitle(`Page - ${page}/${Math.ceil(bot.guilds.cache.size / 10)}`)
          .setDescription(description);
  
        let msg = await message.channel.send(embed);
  
        await msg.react("⬅");
        await msg.react("➡");
        await msg.react("<a:emoji18:808469005249151037>");
  
        let collector = msg.createReactionCollector(
          (reaction, user) => user.id === message.author.id
        );
  
        collector.on("collect", async (reaction, user) => {
          if (reaction._emoji.name === "⬅") {
            // Updates variables
            i0 = i0 - 10;
            i1 = i1 - 10;
            page = page - 1;
  
            // if there is no guild to display, delete the message
            if (i0 + 1 < 0) {
              console.log(i0)
              return msg.delete();
            }
            if (!i0 || !i1) {
              return msg.delete();
            }
  
            description =
            `Total Serveur - **${bot.guilds.cache.size.toLocaleString()}**\nTotal Membres - **${bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}**\n\n` +
            bot.guilds.cache
                .sort((a, b) => b.memberCount - a.memberCount)
                .map(r => r)
                .map(
                  (r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Membres`
                )
                .slice(i0, i1)
                .join("\n");
  
            // Update the embed with new informations
            embed
              .setTitle(
                `Page - ${page}/${Math.round(bot.guilds.cache.size / 10 + 1)}`
              )
              .setDescription(description);
  
            // Edit the message
            msg.edit(embed);
          }
  
          if (reaction._emoji.name === "➡") {
            // Updates variables
            i0 = i0 + 10;
            i1 = i1 + 10;
            page = page + 1;
  
            // if there is no guild to display, delete the message
            if (i1 > bot.guilds.cache.size + 10) {
              return msg.delete();
            }
            if (!i0 || !i1) {
              return msg.delete();
            }
  
            description =
        `Total Serveur - **${bot.guilds.cache.size.toLocaleString()}**\nTotal Membres - **${bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}**\n\n` +
            bot.guilds.cache
                .sort((a, b) => b.memberCount - a.memberCount)
                .map(r => r)
                .map(
                  (r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Membres`
                )
                .slice(i0, i1)
                .join("\n");
  
            // Update the embed with new informations
            embed
              .setTitle(
                `Page - ${page}/${Math.round(bot.guilds.cache.size / 10 + 1)}`
              )
              .setDescription(description);
  
            // Edit the message
            msg.edit(embed);
          }
  
          if (reaction._emoji.name === "<a:emoji18:808469005249151037>") {
            return msg.delete();
          }
  
          // Remove the reaction when the user react to the message
          await reaction.users.remove(message.author.id);
        });
      } else {
        return message.channel.send("<a:emoji4:806652395852791858> `ERREUR` Vous n'êtes pas le créateur du bot.")
      }

};


module.exports.help = {
    name: "serverlist",
    category: 'Fun',
    description: ".",
    aliases: ['slt'],

  };