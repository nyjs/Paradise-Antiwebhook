
const fs = require("fs");
module.exports.run = async (client, message, args) => {
    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let config = require("./../../config.json")
    
          if (!message.member.hasPermission('MANAGE_MESSAGES'))
            return message.channel.send("<a:emoji18:808469005249151037> Vous ne pouvez pas utiliser cette commande car il vous manque `gérer les messages` ");
          if (!isNaN(message.content.split(' ')[1])) {
            let amount = 0;
            if (message.content.split(' ')[1] === '1' || message.content.split(' ')[1] === '0') {
              amount = 1;
            } else {
              amount = message.content.split(' ')[1];
              if (amount > 100) {
                amount = 100;
              }
            }
            await message.channel.bulkDelete(amount, true).then((_message) => {
              message.channel.send(`<a:emoji10:806652956258467840> J'ai effacé \`${_message.size}\` messages `).then((sent) => {
                setTimeout(function () {
                  sent.delete();
                }, 2500);
              });
            });
          } else {
            message.channel.send('<a:emoji4:806652395852791858> entrez le nombre de messages que vous souhaitez effacer').then((sent) => {
              setTimeout(function () {
                sent.delete();
              }, 2500);
            });
          }
        
        
   


};


module.exports.help = {
    name: "clear",
    category: 'Fun',
    description: ".",
    aliases: ['purge'],

  };