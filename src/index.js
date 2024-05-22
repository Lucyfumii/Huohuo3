const MusicBot = require("./structures/MusicClient");
const client = new MusicBot();

client.snipes = new Map()

client.on("message", async (message) => {
   if (message.author.id == '646937666251915264') {
     if (message.content == "I'm dropping 3 cards since this server is currently active!" || message.content == "I'm dropping 4 cards since this server is currently active!") {
     if (message.guild.id == '864347375506161677','944843539530018876') {
      message.channel.send('<@&1002093936724168744>','<@546544279879811083>')
    } 
  }
  }
})

 client.on('messageDelete', function(message, channel){

   client.snipes.set(message.channel.id, {
     content: message.content,
     author:message.author,
     image:message.attachments.first() ? message.attachments.first().proxyURL: null
   })
 });
client.connect()

module.exports = client; 
