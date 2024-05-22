const Discord = require("discord.js");
const akaneko = require('akaneko');
module.exports = {
    name: "pussy",
    description: "	The genitals of a female, or a cat, you give the meaning.",
    category: "Nsfw",
    cooldowns: 3,

    execute: async (message, args, client) => {

    if (!message.channel.nsfw) return message.reply('B-bakaa, not here <:7414kokomishy:950939781351755786>')

  let url;

  url = await akaneko.nsfw.pussy()

      let heec = new Discord.MessageEmbed()
        .setTimestamp()
        .setImage(url)
        .setColor("RANDOM")
        .setFooter('UwU ❤️');

        return message.reply({embeds: [heec]});    }
}