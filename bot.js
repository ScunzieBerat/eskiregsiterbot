const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const weather = require('weather-js')
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const request = require('request');
const snekfetch = require('snekfetch');
const queue = new Map();
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');



 

///Tirex Code
///Tirex Code
///Tirex Code

const app = express();
app.get("/", (request, response) => {
console.log(` Botun az önce pinklendi. RİXNUX CODE.`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
///Tirex Code
///Tirex Code
///Tirex Code
///Tirex Code




var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};
///Tirex Code
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});
///Tirex Code
///Tirex Code
///Tirex Code
///Tirex Code

client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
///Tirex Code
///Tirex Code
///Tirex Code
///Tirex Code
///Tirex Code
//============

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.reply('**Aleyküm Selam Hoşgeldin. ** <a:kalpp:751756704890224670> ');
  }
});



  //==========


client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)]
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};
///Tirex Code
///Tirex Code
///Tirex Code
///Tirex Code
///Tirex Code
///Tirex Code
///Tirex Code
///Tirex Code

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});

client.login(ayarlar.token);


//tag aldı tag verdi falan
client.on('userUpdate', (o,n) => {
  var tag = "★";
  var sunucuid = "750982663497842730";
  var tagialanlaraverilecek = "750982663841513515"
  var mesajkanalid = "750982665490006032"
  const embed1 = new Discord.RichEmbed()
    .setTitle("Scunzie Developer")
    .setDescription(`${n} **Tagımızı Aldığın İçin Teşekkürler  <@&750982663841513515>** `)
    .setFooter("Scunzie Developer") //Değiştirme Lütfen 
    .setTimestamp()
    .setColor("GREEN")
  const embed2 = new Discord.RichEmbed()
    .setTitle("Alondor Family")
    .setDescription(`${n} **Tagımızı Çıkardın Ama Olsun Tekrar Bekleriz <@&750982663841513515> **`)
    .setFooter("Scunzie Developer") //Değiştirme Lütfen 
    .setTimestamp()
    .setColor("RED")

  if(n.username !== o.username) {
    if(n.username.includes(tag)) { //eğer kullanıcı tagı almışsa
      if(!client.guilds.get(sunucuid).members.get(n.id).roles.has(tagialanlaraverilecek)) { //ve crew rolü yoksa
        client.guilds.get(sunucuid).members.get(n.id).addRole(tagialanlaraverilecek) // crew rolü ver
        client.channels.get(mesajkanalid).send(embed1) // bildirim kanalına mesaj yolla
      }
    }
    if(!n.username.includes(tag)) { //eğer kullanıcı tagı çıkarmışsa
      if(client.guilds.get(sunucuid).members.get(n.id).roles.has(tagialanlaraverilecek)) { //ve crew rolü varsa
        client.guilds.get(sunucuid).members.get(n.id).removeRole(tagialanlaraverilecek) // crew rolünü al
        client.channels.get(mesajkanalid).send(embed2) //bildirim kanalına mesaj yolla
      }
    }
  }
})
//tag aldı tag verdi falan


//gelimiş giriş mesajı//

client.on('guildMemberAdd', async (member) => {

  let kayıt = client.guilds.get(`750982663497842730`).channels.get(`750982664047034402`)
  let user = client.users.get(member.id)
  let memberinfo = {}
  require("moment-duration-format");
  const kurulus = new Date().getTime() - user.createdAt.getTime();
  const gün = moment.duration(kurulus).format("D");
  var kontrol;
  if (gün < 7) kontrol = "Güvenilir Değil! <a:hyr:751756673454047322> ";
  if (gün > 7) kontrol = "Güvenilir Gözüküyor! <a:tik3:751756987880046622>  ";
  
  

  memberinfo.discord = moment.utc(member.guild.members.get(member.id).user.createdAt).format(`DD/MM/YYYY`)
  memberinfo.sunucu = moment.utc(member.guild.members.get(member.id).joinedAt).format(`DD/MM/YYYY`)

   let güvenli = new Discord.RichEmbed()
  .setColor(`#000001`)
.setTitle(` <a:elmas:751756693762867252> Welcome To Rivendell <a:elmas:751756693762867252> `)
  .setDescription(`** <a:tik5:751756817071341600> Sunucumuza Hoşgeldin, ${member.user}  \n\n <a:tik5:751756817071341600> Seninle Beraber ${member.guild.memberCount} Kişiyiz \n\n <a:tik5:751756817071341600> Kaydının Yapılması İçin Sesli Odalara Geçip Teyit Vermen Gerekli! \n\n <a:tik5:751756817071341600>  <@&750982663866810501> Rolündeki yetkililer sizinle ilgilenicektir**  \n\n <a:tik5:751756817071341600>  **Bu Hesap:** **${kontrol}** `)
  .addField(`  Hesap Oluşturma Tarihi:`, memberinfo.discord, true )
  .setImage("https://cdn.discordapp.com/attachments/745375348866285689/745888999973060658/ezgif-7-947fb5153307.gif")
  kayıt.send(güvenli)
});




client.on('guildMemberAdd', async member => {

member.guild.channels.get("750982664047034402").send(`**<a:tac:751756679246250006> <@&750982663866810501> Aramıza yeni bir arkadaşımız katıldı, lütfen ilgilenin!** `)
}) 


//gelimiş giriş mesajı/


//sunucuya giren kişinin isim değiştirmek 
client.on("guildMemberAdd", member => {
member.setNickname(" ★ İsim | Yaş");
 }); 


 /** Botu Sese Sokma Kodu. Tirex aittir. **/
client.on('ready', ()=>{
client.channels.get('750982665238216776').join()
})

client.on("message", msg => {
  if (msg.content.toLowerCase() === "tag") {
    msg.channel.send("**★**");
  }
});






// Çsssssssssssssssssssssssssssssssssssss





