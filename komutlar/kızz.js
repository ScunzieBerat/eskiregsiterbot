const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.roles.has("750982663866810501"))  return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!') .setColor("BLACK"));

  let member = message.mentions.members.first();
  let isim = args[1];
  let yas = args[2]
  if (!member) return message.channel.send("Kimseyi etiketlemedin!");
  if (!isim) return message.channel.send(" Geçerli bir isim yaş yazmalısın!");
  member.setNickname(`★ ${isim} ' ${yas}`);
  member.removeRole('750982663762083899')
  member.addRole('750982663803895856')
const embed = new Discord.RichEmbed()

      .setColor("BLACK")
    .setThumbnail("https://cdn.discordapp.com/attachments/709509236517896243/710092849886003270/Denemee.gif")
       .setDescription(` <a:tik3:751756987880046622> **${member.user}** **Kullanıcısına <@&750982663803895856>   Rolü  Verildi.** \n\n <a:tik3:751756987880046622> **Kullanıcı Adı \`★ ${isim} ' ${yas}\` Olarak Ayarlandı.** \n\n <a:tik3:751756987880046622> **Komutu kullanan yetkili** : **${message.author.username}**`)
      .setTimestamp()
message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: "k",
  description: "Kayıt Sistemi",
  usage: "-kadın @kullanıcı <isim> <yaş>"
};
 