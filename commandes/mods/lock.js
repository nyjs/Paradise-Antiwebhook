
const { MessageEmbed } = require("discord.js")
const fs = require("fs");
module.exports.run = async (client, message, args) => {
   let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"))
    let config = require("./../../config.json")
    if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.channel.send(` <a:emoji4:806652395852791858> Vous devez être **ADMINISTRATOR** pour efectuer cette command, ${message.author.username}`);
    logsmod = message.guild.channels.cache.find(c => c.id === db.mods.logs);
    if(!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send("<:720681441670725645:780539422479351809> \`ERREUR\` Vous n'avez pas la permission requise \`MANAGE_CHANNELS\`")
    const lockAllOn = args[0] == 'all' && args[1] == "on";
    const lockAllOff =  args[0] == 'all' && args[1] == "off";
    const on = args[0] == 'on';
    const off = args[0] == 'off';

    const channels = message.guild.channels.cache.filter(ch => ch.type != 'category')
    const ch = message.channel
    
    if(!args[0]){
        const hEmbed = new Discord.MessageEmbed()
            .setAuthor(`Informations lock`, client.user.displayAvatarURL({dynamic : true }))
            .setDescription(`[\`lock on\`](iroo.bot), [\`lock off\`](iroo.bot), [\`lock all on\`](iroo.bot), [\`lock alfl of\`](iroo.bot)`)
            .setFooter(`Informations lock`, client.user.displayAvatarURL({dynamic : true }))
            .setColor()
            .setTimestamp();
        return message.channel.send(hEmbed)
    }
    
    if(lockAllOn){
        channels.forEach(channel =>{
            channel.updateOverwrite(message.guild.roles.everyone,{
                SEND_MESSAGES : false
            })

        })
        message.channel.send("<a:emoji10:806652956258467840> \`SUCCÈS\` Tout les salons on été fermé.")


      
    }else if(lockAllOff){
        channels.forEach(channel =>{
            channel.updateOverwrite(message.guild.roles.everyone,{
                SEND_MESSAGES : true
            })

        })
        message.channel.send("<a:emoji10:806652956258467840> \`SUCCÈS\` Tout les salons on été ouvert.")

    }else if(on){
        console.log(message.guild.channels.cache)
        ch.updateOverwrite(message.guild.roles.everyone,{
            SEND_MESSAGES : false
        }).then(() =>{
            message.channel.send("<a:emoji10:806652956258467840> \`SUCCÈS\` La salon a été fermé.")
        })
    }else if(off){
        ch.updateOverwrite(message.guild.roles.everyone,{
            SEND_MESSAGES : true
        }).then(() =>{
            message.channel.send("<a:emoji10:806652956258467840> \`SUCCÈS\` Le salon a été ouvert.")
        })
    }
}

 




module.exports.help = {
    name: "lock",
    category: 'Fun',
    description: ".",
    aliases: ['lkall'],

  };
