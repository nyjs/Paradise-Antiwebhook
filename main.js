const message = require("./modules/client/message");
const MessageEmbed = require('discord.js')

// --  Formule pour déclarer les variables
getNow = () => { return { time: new Date().toLocaleString("en-GB", { timeZone: "Europe/Paris", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }), }; };
const
      config = require("./config.json"),
      { readdirSync } = require("fs"),
      { Client, Collection} = require("discord.js"),
      client = new Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] })
  
client.commands = new Collection()
bot = new Client();

console.clear()
console.log(`                                                                                                                     
        
                                         `.red + ` Bienvenue sur la version `.white + `${config.bot.version}`.green + ` du ` + `Wassminbot`.blue + `                       
                                   ___________________________________________________`.red)

const loadEvents = (dir = "./modules/") => {
  readdirSync(dir).forEach(dirs => {
  const events = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
                                  
  for (const event of events) {
  const evt = require(`${dir}/${dirs}/${event}`);
  const evtName = event.split(".")[0];
  client.on(evtName, evt.bind(null, client));
  console.log(`[EVENTS]`.red + ` Chargement de l'évènement >`.white + ` ${evtName}.js`.red);
  };
});
};
loadEvents()

const loadCommands = (dir = "./commandes/") => {
  readdirSync(dir).forEach(dirs => {
  const commands = readdirSync(`${dir}/${dirs}/`).filter(files => files.endsWith(".js"));
      
  for (const file of commands) {
  const getFileName = require(`${dir}/${dirs}/${file}`);
  client.commands.set(getFileName.help.name, getFileName);
  console.log(`[COMMANDS]`.red + ` Chargement de la commande >`.white + ` ${getFileName.help.name}.js`.red);
  };
});
};
loadCommands()


client.login(config.login.token).catch(e => { console.log(`[CRITICAL ERROR]`.red + ` Erreur rencontrée: ${e}`) });

client.on("ready", async (message) => {
  
  client.user.setActivity(`${client.guilds.cache.size} servers! / +help`, { type: "STREAMING", url: "https://www.twitch.tv/leaaa93"  })

 

  
  });
client.on("message", async (message , args) => {
  const fs = require('fs')
  let db = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
if (message.content.match(prefixMention)) {
 return message.channel.send(`<:emoji17:806653324958236712> **Mon Préfix**: \`${db.prefix}\` `) }})


 
// ANTI WEBHOOKS BY WASSIM

client.snipes = new Map()
client.on('messageDelete', function(message, channel){
  
  client.snipes.set(message.channel.id, {
    content:message.content,
    author:message.author,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  })
  
})

  
client.on('webhookUpdate', async (channel ,message) => {
  const db = require("quick.db")
  const Discord = require("discord.js");
  const fs = require('fs')
  let dab = JSON.parse(fs.readFileSync(`./serveur/${channel.guild.id}.json`, "utf8"));
 

                          
  getNow = () => { return { time: new Date().toLocaleString("en-GB", { timeZone: "Europe/Paris", hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }), }; };

  channel.guild.fetchAuditLogs({limit: 1, type: "WEBHOOK_CREATE"}).then(data => {
let link = db.fetch(`antiwb_${channel.guild.id}`)
 
 if(link === null) {
   return           

 }
 if(link === true){

  const chanPosition = channel.position;
  channel.delete().then(() => {
      channel.clone().then(value => {
          value.setPosition(chanPosition).then(() => {
            
            const value = data.entries.first();
            if (value && value.executor) {
                const member = channel.guild.members.cache.get(value.executor.id);
                if (member)
                    member.kick().catch(reason => console.error(reason.message)).then(() => 
                    console.log(`j'ai suprimmé tout les webhooks :)`),
                    channel.guild.channels.cache.get(dab.mods.logs).send(`\`${getNow().time}\` **${member.user.tag}** a été kick pour avoir essayer de crée un webhook ! j'ai renew le channel: \`${channel.name}\` :)`)               
          )} }).catch(err => console.error(err.message))

                  }).catch(err => console.error(err))
          }).catch(err => console.error(err))
 }})

     
    
     
 
       
 
      // ANTI WEBHOOKS BY WASSIM
 
     })
  //ANTI WEBHOOKS BY WASSIM

  client.on('guildMemberAdd', async (member , message) => {
           

    const Discord = require("discord.js");
    const { CanvasSenpai } = require("canvas-senpai")
    const canva = new CanvasSenpai();
        const channel = member.guild.channels.cache.find(ch => ch.name === '🦸・welcome');
        if (!channel) return;
     
       let data = await canva.welcome(member, { link: "https://wallpapercave.com/wp/wp5128415.jpg" })
     
        const attachment = new Discord.MessageAttachment(
          data,
          "welcome-image.png"
        );
     
        channel.send(
          `Bienvenue sur le serveur, ${member}!`,
          attachment
        );   
       });
  
  

                                
  
  



    client.on("message", async (message , args) => {
      const db = require("quick.db")
     const Discord = require("discord.js");
     const fs = require('fs')
     let dab = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));

     const pub = [
      "discord.me",
      "discord.io",
      "discord.gg",
      "invite.me",
      "discordapp.com/invite",
      ".gg"
  ];
                             
   
     if (pub.some(word => message.content.includes(word))) {
      if (message.member.hasPermission("ADMINISTRATOR")) {
          return;
      } 
 let link = db.fetch(`al_${message.guild.id}`)
    
    if(link === null) {
      return;
    }
    if(link === true){

      message.channel.guild.channels.cache.get(dab.mods.logs).send(`\`${getNow().time}\` **${message.author.tag}** a essayer de pub un serveur ! je l'ai bloquer dans ${message.channel} (Anti Pub on) :)`)               
      message.delete()
      const droit = new Discord.MessageEmbed()
      .setDescription(` <a:emoji18:808469005249151037> Désolé mais nous n'acceptons pas la pub ici ${message.author}`)
      .setFooter('Anti pub on!')
      .setTimestamp() 
.setColor(dab.color)
message.channel.send(droit)
    }}
    
  })
  client.on("message", async (message , args) => {
    const db = require("quick.db")
   const Discord = require("discord.js");
   const fs = require('fs')
   let dab = JSON.parse(fs.readFileSync(`./serveur/${message.guild.id}.json`, "utf8"));
   let authorized = [`${config.bot.owner}` , `${config.bot.owner2}` , `${config.bot.owner3}` , `${message.guild.ownerID}`]

   const pub = [
    "@everyone",
    "@",
    "@here",

];
                           
 
   if (pub.some(word => message.content.includes(word))) {
    if (message.member.hasPermission("ADMINISTRATOR")) {
        return;
    } 
let link = db.fetch(`al_${message.guild.id}`)
  
  if(link === null) {
return;  }
  if(link === true){

    message.channel.guild.channels.cache.get(dab.mods.logs).send(`\`${getNow().time}\` **${message.author.tag}** a essayer de ping ! je l'ai bloquer dans ${message.channel} (Anti ping on) :)`)               
    message.delete()
    const droit = new Discord.MessageEmbed()
    .setDescription(` <a:emoji18:808469005249151037> Désolé mais vous n'avez pas le droit de ping \`@membre,@here,@everyone\` sur le serveur ${message.author}`)
    .setFooter('Anti ping  on!')
    .setTimestamp() 
.setColor(dab.color)
message.channel.send(droit)
  }}})

  


  client.on("guildMemberAdd", (member , message , guild) => {
    const db = require("quick.db")
    const Discord = require("discord.js");
    const fs = require('fs')
    let dab = JSON.parse(fs.readFileSync(`./serveur/${member.guild.id}.json`, "utf8"));
    let link = db.fetch(`ab_${member.guild.id}`)
    if(link === null) {
      return;  }
        if(link === true){
    if(member.user.bot) member.kick().catch(e=>console.log(e))    

        }
})