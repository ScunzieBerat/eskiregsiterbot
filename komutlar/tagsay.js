const Discord = require("discord.js");
var voiceChannels = voiceChannels
exports.run = function(client, message, args) {
let sunucu = '750982663497842730' //sunucu id
let yeskili= '750982663866810501' //yetkili id
  const mapping = {
  " ": "   ",
 "0": "<a:0_:751756995249307678>",
  "1": "<a:1_:751756990849744987>",
  "2": "<a:2_:751756994850979840>",
  "3": "<a:3_:751756994825682984>",
  "4": "<a:4_:751756993244561450>",
  "5": "<a:5_:751756995186655263>",
  "6": "<a:6_:751756996532764692>",
  "7": "<a:7_:751756994049867817>",
  "8": "<a:8_:751756997975605250>",
  "9": "<a:9_:751756996419649597>",
};
  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
let count = 0;
for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size; 
  let tag = "★" // tagınız
    const taglis = `${message.guild.members.filter(m => m.user.username.includes(tag)).size}`    
let afa = client.guilds.get(sunucu).memberCount
    let kel = message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "offline").size
      let i = message.guild.members.filter(m => !m.user.bot && m.user.presence.status !== "online").size
    let halil= client.guilds.get(sunucu).roles.get(yeskili)
    let rols = halil.members.size
let rolse =  
    `${rols}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
/*let keban =  
    `${ses}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")*/
      
let toplam =  
    `${afa}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")

let online =  
    `${kel}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
let sex =  
    `${i}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
let tagli =  
    `${taglis}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
let seslide =  
    `${count}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")      
let sunucures = `${message.guild.iconURL}`
const embed = new Discord.RichEmbed()
          .setColor("BLACK")
        .setDescription(`**Sunucumuzdaki Taglı Üye Sayısı ${tagli} Bulunmakta**`)        
 message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "tagsay",
  usage: "online",
  desscription: "online sayısı"
};
