const Discord = require("discord.js");
const akaneko = require('akaneko');
const sagiri = require('sagiri');
const isImageUrl = require('is-image-url');

module.exports = {
    name: "sauce",
    description: "NSFW",
    category: "Nsfw",
    cooldowns: 3,

    execute: async (message, args, client) => {

    if (!message.channel.nsfw) return message.reply('B-bakaa, not here <:7414kokomishy:950939781351755786>')
    
     const user = message.mentions.users.first() || message.author
  var image;
  if (message.content.includes('media.discordapp.net/attachments') || message.content.includes('cdn.discordapp.com/avatars')) {
  image = args[1]
  } else {
  if (message.attachments.first()) {
    image = message.attachments.first().url 
    } else {
    image = user.displayAvatarURL({size: 2048,dynamic: true})
  } 
  }
   const search = sagiri('dc2e4031ad96f37a17f508f8272bac8536bef1db')
   const result = await search(image)
   if (result) {
     var data = result[0]
      for (i in data.raw.data.ext_urls) {
        console.log(data.raw.data.ext_urls[i])
      }
     var args;
     if (data.site) {
        args = '**Site:** ['+data.site
     }
     if (data.raw.data.title) {
       args += ' - '+data.raw.data.title 
     }
     if (data.similarity) {
       args += ' ( '+data.similarity+'% match )]('+data.url+')'
     }
     if (data.authorName) {
       args += '\n**Creator:** ['+data.authorName+']('+data.authorUrl+')'
     }
     const embed = new Discord.MessageEmbed()
     .setTitle('Info')
     .setDescription(args)
     .setImage(data.thumbnail)
     //.addField('[Creator: '+data.authorName+']('+data.authorUrl+')',true)
     if (data.raw.data.source) {
       embed.addField('Name',data.raw.data.source,false)
     }
     if (data.raw.data.part) {
       embed.addField('Episode',data.raw.data.part,false)
     }
     if (data.raw.data.est_time) {
       embed.addField('Timestamp',data.raw.data.est_time,false)
     }
     if (data.raw.data.year) {
       var num = String(data.raw.data.year).length
       var release
       var complete
       if (num >= 8) {
       release = String(data.raw.data.year).slice(0,-5)
       complete = String(data.raw.data.year).slice(5,9)
       } else {
         release = data.raw.data.year
       }
       console.log(release,complete)
       if (release) {
         args += '\n**Released in: **'+release
       }
       if (complete) {
         args += '\n**Status:** Completed ( '+complete+' )'
       } else {
         args += '\n**Status:** In progess'
       }
       embed.setDescription(args)
     }
      message.reply({embeds: [embed]})
      } else {
        message.reply('No Results found!');
     }
   }
}
