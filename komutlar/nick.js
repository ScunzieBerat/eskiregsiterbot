const Discord = require('discord.js');

module.exports.run = async(client, message, args) => {
if(!message.member.roles.has("750982663866810501")) return

let spell = message.mentions.members.first()
if(!spell) return

let isim = args[1]
if(!isim) return
let yaş = args[2]
if(!yaş) return

spell.setNickname("★ "+isim+" | "+yaş)
message.react('white_check_mark')
}
exports.conf = {
aliases: ["nick"]
}
exports.help = {
name: "nick"
}