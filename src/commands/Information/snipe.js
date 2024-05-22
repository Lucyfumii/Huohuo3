const { Client, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'snipe',
    description: "Xem lại tin nhắn đã xoá",
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
     execute: async (message, args, client, prefix) => {

      const msg = client.snipes.get(message.channel.id)

      if(!msg) {        
    let thing = new MessageEmbed()
      .setColor("RED")
      .setDescription(`<:8227_report:876720848675954738> Không thấy tin nhắn nào`);
  return message.reply({embeds: [thing]})
}

      const snipeEmbed = new MessageEmbed()
      .setAuthor(`${msg.author.tag}`, msg.author.displayAvatarURL())
      .setColor(`#F1C40F`)
      .setDescription(msg.content)
            .setTimestamp()


      if(msg.image)snipeEmbed.setImage(msg.image)
      message.reply({ embeds: [snipeEmbed]})
    },
};