const Discord = require("discord.js");
const akaneko = require('akaneko');
module.exports = {
    name: "succubus",
    description: "Spooky Succubus, oh I'm so scared~ Totally don't suck me~",
    category: "Nsfw",
    cooldowns: 3,

    execute: async (message, args, client) => {

    if (!message.channel.nsfw) return message.reply('B-bakaa, not here <:7414kokomishy:950939781351755786>')

  let url;

  url = await akaneko.nsfw.succubus()

      let heec = new Discord.MessageEmbed()
        .setTimestamp()
        .setImage(url)
        .setColor("RANDOM")
        .setFooter('UwU ❤️');

        return message.reply({embeds: [heec]});    }
}