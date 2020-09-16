// Tirex
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  if (!message.member.roles.has("743533870665826444"))return message.channel.send(`Bu komutu kullanabilmen için <@&743533870665826444> yetkiye sahip olman lazım.` );
  let kullanıcı = message.mentions.users.first();
  if (!kullanıcı)
    return message.channel.send(
      "**Hey sen birini kayıt etmen için birisini etiketlemelisin bunu gözden kaçırma! <a:ate:698227036954689646>** "
    );
  let rol = message.mentions.roles.first();
  let member = message.guild.member(kullanıcı);
  member.addRole("743533903574335539"); //Erkek Rol İd
  member.removeRole("743533904463527956"); //Alınacak rol İd
  let embed = new Discord.RichEmbed().setColor("RANDOM").addField(
    `   <a:tac:743543171853713488> **Kaydı Yapan Kişi** : @${message.author.username} `,
    ` <a:tac:743543171853713488> **Kayıt İşlemi Sonucunda Verilen Rol** <@&743533903574335539> <a:onay:743540528464920672> 
    <a:tac:743543171853713488> **Kayıt İşlemi Sonucunda Alınan Rol** <@&743533904463527956> <a:onay:743540528464920672> ` 
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
  name: "esssssss",
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: "kayıt isim yaş"
};

// Positive Sunar
