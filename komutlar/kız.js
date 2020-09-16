// Tirex
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  if (!message.member.roles.has("750982663866810501"))return message.channel.send(`**Bu komutu kullanabilmen için <@&750982663866810501> yetkiye sahip olman lazım.**<a:duyuru:698227097763840041>` );
  let kullanıcı = message.mentions.users.first();
  if (!kullanıcı)
    return message.channel.send(
      "Hey sen birini kayıt etmen için birisini etiketlemelisin bunu gözden kaçırma!<a:duyuru:698227097763840041> " 
    );
  let rol = message.mentions.roles.first();
  let member = message.guild.member(kullanıcı);
  member.addRole("750982663803895856"); //kız Rol İd
  member.removeRole("750982663762083899"); //Alınacak rol İf
  let embed = new Discord.RichEmbed().setColor("RANDOM").addField(
    `  <a:tac:743543171853713488> **Kaydı Yapan Kişi** : ${message.author.username} `,
    ` <a:tac:743543171853713488> **Kayıt İşlemi Sonucunda Verilen Rol** <@&750982663803895856> , <@&750982663816478781> <a:onay:743540528464920672>
     <a:tac:743543171853713488> **Kayıt İşlemi Sonucunda Alınan Rol** <@&750982663762083899> <a:onay:743540528464920672> `
  );
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "KULLANICI KOMUTLARI",
  permLevel: 0
};

exports.help = {
  name: "kdssadsadsa",
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: "kayıt isim yaş"
};

// Positive Sunar
