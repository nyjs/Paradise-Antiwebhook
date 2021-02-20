const { MessageEmbed } = require("discord.js") 
const fs = require("fs");

module.exports.run = async (client, message, messageReaction) => {
    if(!message.guild) return;

    let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
    let {lien } = require("./../../config.json")
    let config = require("./../../config.json")

    const embed = new MessageEmbed()
    .setColor(db.color)
      .setTimestamp()  
    .setThumbnail(client.user.displayAvatarURL({dynamic : true }))
      .setFooter(client.user.username,client.user.displayAvatarURL({dynamic : true }))
    .setTitle("Help Commands")
    .addField(`<a:emoji21:808742258857738251> Anti Raid:`,`[\`antiwebhook(on/off)\`](${lien}),[\`antipub(on/off)\`](${lien}),[\`antiping(on/off)\`](${lien}),[\`lock (on/off/all)\`](${lien}),[\`destroy\`](${lien}),[\`raidlogs\`](${lien}),[\`logsinfo\`](${lien}),[\`nuke\`](${lien}),[\`clear\`](${lien})`  )
    .addField(`<a:zique:811247412357890069> Général:`, `[\`help\`](${lien}),[\`ping\`](${lien}),[\`setcolor\`](${lien}),[\`setprefix\`](${lien}),[\`say\`](${lien}),[\`snipe\`](${lien}),` )
    .addField(`<a:emoji24:808743818727391244> Information:`, `[\`botinfo\`](${lien}),[\`invite\`](${lien}),`)
    .addField(`<a:emoji19:808741340800090173> Développeur:`, `[\`leave\`](${lien}),[\`shutdown\`](${lien}),[\`eval\`](${lien}),[\`reboot\`](${lien}),[\`serverlist\`](${lien})`) 

    message.channel.send(embed); 
    


};



module.exports.help = {
    name: "help",
    aliases: ['aide','commands'],
    category: 'Administration',
    description: " ",
  };