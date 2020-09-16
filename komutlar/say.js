const Discord = require("discord.js");
const { oneLine, stripIndents } = require('common-tags');
module.exports.run = async (client, message, args) => {

  if (!message.member.roles.has("750982663866810501") && !message.member.hasPermission("MANAGE_MESSAGES") ) //Komudu Kullanabilecek Rol ID
   return message.channel.send(hata).then(m =>m.delete(10000))
    let guild = "750982663497842730"; //Sunucu ID
    const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;
    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
  var msg = message;
  var üyesayısı = msg.guild.members.size.toString().replace(/ /g, "    ")
  var üs = üyesayısı.match(/([0-9])/g)
  üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs) {
    üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:0_:751756995249307678>`,
    '1': `<a:1_:751756990849744987>`,
    '2': `<a:2_:751756994850979840>`,
    '3': `<a:3_:751756994825682984>`,
    '4': `<a:4_:751756993244561450>`,                       
    '5': `<a:5_:751756995186655263>`,
    '6': `<a:6_:751756996532764692>`,
    '7': `<a:7_:751756994049867817>`,
    '8': `<a:8_:751756997975605250>`,
    '9': `<a:9_:751756996419649597>`}[d];
      })
    }
  var sessayı = count.toString().replace(/ /g, "    ")
  var üs2 = sessayı.match(/([0-9])/g)
  sessayı = sessayı.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs2) {
    sessayı = sessayı.replace(/([0-9])/g, d => {
      return {
  '0': `<a:0_:751756995249307678>`,
    '1': `<a:1_:751756990849744987>`,
    '2': `<a:2_:751756994850979840>`,
    '3': `<a:3_:751756994825682984>`,
    '4': `<a:4_:751756993244561450>`,                       
    '5': `<a:5_:751756995186655263>`,
    '6': `<a:6_:751756996532764692>`,
    '7': `<a:7_:751756994049867817>`,
    '8': `<a:8_:751756997975605250>`,
    '9': `<a:9_:751756996419649597>`}[d];
      })
    }

  var tagdakiler = 0;
  let tag = "★"; //Tagınız
  message.guild.members.forEach(member => {
    if(member.user.username.includes(tag)) {
      tagdakiler = tagdakiler+1
    }  
  })
  var tagdakilerr = tagdakiler.toString().replace(/ /g, "    ")
  var üs3 = tagdakilerr.match(/([0-9])/g)
  tagdakilerr = tagdakilerr.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs3) {
    tagdakilerr = tagdakilerr.replace(/([0-9])/g, d => {
      return {
  '0': `<a:0_:751756995249307678>`,
    '1': `<a:1_:751756990849744987>`,
    '2': `<a:2_:751756994850979840>`,
    '3': `<a:3_:751756994825682984>`,
    '4': `<a:4_:751756993244561450>`,                       
    '5': `<a:5_:751756995186655263>`,
    '6': `<a:6_:751756996532764692>`,
    '7': `<a:7_:751756994049867817>`,
    '8': `<a:8_:751756997975605250>`,
    '9': `<a:9_:751756996419649597>`}[d];
      })
    }

  var cevrimici = message.guild.members.filter(m => m.presence.status !== "offline").size.toString().replace(/ /g, "    ")
  var üs4= cevrimici.match(/([0-9])/g)
  cevrimici = cevrimici.replace(/([a-zA-Z])/g, "bilinmiyor").toLowerCase()
  if(üs4) {
    cevrimici = cevrimici.replace(/([0-9])/g, d => {
      return {
  '0': `<a:0_:751756995249307678>`,
    '1': `<a:1_:751756990849744987>`,
    '2': `<a:2_:751756994850979840>`,
    '3': `<a:3_:751756994825682984>`,
    '4': `<a:4_:751756993244561450>`,                       
    '5': `<a:5_:751756995186655263>`,
    '6': `<a:6_:751756996532764692>`,
    '7': `<a:7_:751756994049867817>`,
    '8': `<a:8_:751756997975605250>`,
    '9': `<a:9_:751756996419649597>`}[d];
      })
    }

const emoji1 = client.emojis.get('751756817071341600') //Embedde Yazıların Başındaki Emoji ID
 const embed1 = new Discord.RichEmbed()
 .setColor('000000')
 .setAuthor('★ Rivendell')
 .setDescription(` <a:tik5:751756817071341600> **Sunucumuzda Toplam ** ${üyesayısı} **Üye bulunmakta.** \n\n <a:tik5:751756817071341600> **Sunucumuzda Toplam** ${cevrimici} **Çevrimiçi üye bulunmakta.** \n\n <a:tik5:751756817071341600> **Ses kanallarında Toplam** ${sessayı} **Üye bulunmakta.** \n\n <a:tik5:751756817071341600> **Tagımızda Toplam ** ${tagdakilerr} **Kişi bulunmakta.**`)
 .setFooter(`Komutu Kullanan Yetkili: ${message.author.username}`)
 
     const hata = new Discord.RichEmbed()
    .setColor('000000')
    .setAuthor(`Başarısız`)
    .setDescription(`**Bu komutu kullanmak için yeterli yetkiye sahip değilsin!**`)
 
  msg.channel.send(embed1);
  
  client.setInterval(() => {
  let channel = client.channels.get(""); //Kanal ID
  channel.setTopic(`Toplam üye: _${üyesayısı.toString()}_ - Çevrimiçi üye: ${cevrimici}`); //Kanal Açıklamasına Yazar
}, 10000);
  }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["total",'toplam','say','info'],
  permLevel: 0
};
exports.help = {
  name: 'say'
}