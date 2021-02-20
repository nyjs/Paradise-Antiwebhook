const fs = require("fs");
// -- Exporte les modules 
module.exports = async (client, guild) => {
let str_content = { 
    prefix: '+',
    color: "#2c2f33",
    giveaway: {
        duree: "360000",
        channel: "743523912238760019",
        gagnant: false,
        voice: false,
        gain: "Nitro Classic",
        last: "704833402515488880"
    },
    statut: {
        role: "743523912238760019",
        state: "discord.gg/exemple",
        module: false
    },
    tempo: {
        category: "743523912238760019",
        channel: "704833402515488880",
        emoji: "🕙",
        module: false
    },
    logs: {
       raidlogs: false,
        serveur: false,
        vocal: false,
        role: false,
        message: false
    },
    membercounter: {
        guild: "555",
        total: "555",
        totalformat: "👥 Membres: <count>",
        online: "555",
        onlineformat: "✅ En ligne: <count>",
        vocal: "555",
        vocalformat: "🎧 En vocal: <count>",
    },
    autorole: {
        role: false,
        module: false
    },
    mods: {
        logs: false,
        mute: false,
        muted: false,
        ban: false
    }
};
let str_data = JSON.stringify(str_content);
// --
fs.readFile(`./serveur/${guild.id}.json`, async (err, data) => {
        if (err) await fs.writeFileSync(`./serveur/${guild.id}.json`, str_data);
});

};
