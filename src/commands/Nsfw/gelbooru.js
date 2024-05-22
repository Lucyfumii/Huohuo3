const Discord = require('discord.js');
const booru = require('booru');

module.exports = {
    name: "gelbooru",
    category: "Nsfw",
    description: "Searches rule34",
    execute: async (message, args, client) => {
      if (!message.channel.nsfw) return message.reply('B-bakaa, not here <:7414kokomishy:950939781351755786>')

  if (message.content.toUpperCase().includes('LOLI') || message.content.toUpperCase().includes('GORE') || message.content.toUpperCase().includes('SHOTA')) {
    let thing = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(`That kind of stuff is not allowed! Not even in NSFW channels!`);
return message.reply({embeds: [thing]})
  }
    var query = message.content.split(/\s+/g).slice(1).join(" ");
    booru.search('gb', [query], {random: true })
                .then(booru.commonfy)
                .then(images => {
                    for (let image of images) {
                        const embed = new Discord.MessageEmbed()
                        .setTitle("Gelbooru:")
                        .setImage(image.common.file_url)
                        .setColor('#FF0000')
                        .setFooter(`Tags: ${query}`)
                        .setURL(image.common.file_url);
                        return message.reply({embeds: [embed]});
                    }
          

      }).catch(err => {
          if (err.name === 'booruError') {
            let thing = new MessageEmbed()
            .setColor("RED")
            .setDescription(`No results found for **${query}**!`);
        return message.reply({embeds: [thing]})
            } else {
                let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription(`No results found for **${query}**!`);
            return message.reply({embeds: [thing]})
                } 
})
  }
  };