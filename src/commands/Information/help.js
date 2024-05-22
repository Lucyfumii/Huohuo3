const { MessageEmbed, MessageActionRow, MessageSelectMenu } = require("discord.js");
const i18n = require("../../utils/i18n");

module.exports = {
    name: "help",
    description: "Get the Command List",
    aliases: ["commands", "cmd", "h"],
    botPerms: ["EMBED_LINKS"],
    execute: async (message, args, client, prefix) => {
        if (args[0]) {
            let command = args[0];
            let cmd = client.commands.get(command);
        
            if (!cmd) {
			let thing = new MessageEmbed()
				.setColor("RED")
				.setDescription(`<:8227_report:876720848675954738> Lệnh không tồn tại, Hãy xem ${prefix}.help!`);
			return message.reply({embeds: [thing]})
            } else if (cmd) {
              let description = cmd.description ? cmd.description : "No description available.";
              let aliases = cmd.aliases ? cmd.aliases.join(", ") : "No aliases available.";
              let cooldown = cmd.cooldown ? cmd.cooldown : "No cooldown.";
        
              let helpEmbed = new MessageEmbed()
              .setTitle(`🔰 Help for **${cmd.name}**`)
              .addField("⌨️ Name", `${cmd.name}`, true)
              .addField("📋 Description", `${description}`, false)
              .addField("📎 Aliases", `${aliases}`, false)
              .addField("⏱️ Cooldown", `${cooldown}`, true)
              .setColor("GREEN")
        
              return message.channel.send({ embeds: [helpEmbed] })
            }
        
        } else if (!args[0]) {
const embed = new MessageEmbed()
.setAuthor(`HuoHuo Help`, client.user.displayAvatarURL({ dynamic: true }))
.setColor('#2F3136')
.setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
.setDescription(`Prefix của bot là: \`${prefix}\`\nDùng menu, hoặc dùng \`${prefix}help [category]\` để xem các lệnh dựa trên danh mục!\n\n`)
.addField('\`# THÔNG TIN :\`', '> **OWNER BOT**\n\`\`\`https://www.facebook.com/toiladahannn/\`\`\`', false)
.setTimestamp()
.setFooter({
  text: `Requested by ${message.author.username}`, 
  iconURL: message.author.displayAvatarURL()
});

//config
  const config = new MessageEmbed()
  .setAuthor(`Categories » Config`, client.user.displayAvatarURL({ dynamic: true }))
  .setColor('#2F3136')
  .addFields(
    { name: 'Setprefix'  , value: i18n.__("cmd.prefix.des"), inline: true }
  )
  .setTimestamp()
  .setFooter({
    text: `Requested by ${message.author.username}`, 
    iconURL: message.author.displayAvatarURL()
  });

//config
  const fun = new MessageEmbed()
  .setAuthor(`Categories » Fun`, client.user.displayAvatarURL({ dynamic: true }))
  .setColor('#2F3136')
  .addFields(
    { name: 'Meme'  , value: i18n.__("Gửi meme bất kì từ reddit"), inline: true },
    { name: 'Tic-Tac-Toe'  , value: i18n.__("Chơi X-O"), inline: true },
    { name: 'Race'  , value: i18n.__("Đua xe cùng bạn bè"), inline: true },

    )
  .setTimestamp()
  .setFooter({
    text: `Requested by ${message.author.username}`, 
    iconURL: message.author.displayAvatarURL()
  });

//information
  const information = new MessageEmbed()
  .setAuthor(`Categories » Information`, client.user.displayAvatarURL({ dynamic: true }))
  .setColor('#2F3136')
  .addFields(
    { name: 'Help'  , value: `<:kokomi1:950929222896074792> Danh Sách Lệnh`, inline: true },
    { name: 'Ping' , value: i18n.__("cmd.ping.des"), inline: true },
    { name: 'Banner' , value: "<:kokomi1:950929222896074792> Xem ảnh bìa", inline: true },
    { name: 'Avatar' , value: "<:kokomi1:950929222896074792> Xem ảnh đại diện", inline: true },
    { name: 'Weather' , value: "<:kokomi1:950929222896074792> Xem thời tiết", inline: true },
    { name: 'Snipe' , value: "<:kokomi1:950929222896074792> Xem lại tin nhắn đã xoá", inline: true },


    )
  .setTimestamp()
  .setFooter({
    text: `Requested by ${message.author.username}`, 
    iconURL: message.author.displayAvatarURL()
  });

//music
  const music = new MessageEmbed()
  .setAuthor(`Categories » Music`, client.user.displayAvatarURL({ dynamic: true }))
  .setColor('#2F3136')
  .addFields(
    { name: '247'  , value: i18n.__("cmd.247.des"), inline: true },
    { name: 'Autoplay' , value: i18n.__("cmd.autoplay.des"), inline: true },
    { name: 'Clearqueue' , value: i18n.__("cmd.clearqueue.des"), inline: true },
    { name: 'Filters' , value: i18n.__("cmd.filter.des"), inline: true },
    { name: 'Grab' , value: i18n.__("cmd.grab.des"), inline: true },
    { name: 'Join' , value: i18n.__("cmd.join.des"), inline: true },
    { name: 'Leave' , value: i18n.__("cmd.leave.des"), inline: true },
    { name: 'Loop' , value: i18n.__("cmd.loop.des"), inline: true },
    { name: 'Lyrics' , value: i18n.__("cmd.lyrics.des"), inline: true },
    { name: 'Nowplaying' , value: i18n.__("cmd.nowplaying.des"), inline: true },
    { name: 'Pause' , value: i18n.__("cmd.pause.des"), inline: true },
    { name: 'Play' , value: i18n.__("cmd.play.des"), inline: true },
    { name: 'Queue' , value: i18n.__("cmd.queue.des"), inline: true },
    { name: 'Remove' , value: i18n.__("cmd.remove.des"), inline: true },
    { name: 'Resume' , value: i18n.__("cmd.resume.des"), inline: true },
    { name: 'Search' , value: i18n.__("cmd.search.des"), inline: true },
    { name: 'Seek' , value: i18n.__("cmd.seek.des"), inline: true },
    { name: 'Shuffle' , value: i18n.__("cmd.shuffle.des"), inline: true },
    { name: 'Skip' , value: i18n.__("cmd.skip.des"), inline: true },
    { name: 'Skipto' , value: i18n.__("cmd.skipto.des"), inline: true },
    { name: 'Stop' , value: i18n.__("cmd.stop.des"), inline: true },
    { name: 'Volume' , value: i18n.__("cmd.vol.des"), inline: true },

    )
  .setTimestamp()
  .setFooter({
    text: `Requested by ${message.author.username}`, 
    iconURL: message.author.displayAvatarURL()
  });

//owner
  const owner = new MessageEmbed()
  .setAuthor(`Categories » Owner`, client.user.displayAvatarURL({ dynamic: true }))
  .setColor('#2F3136')
  .addFields(
    { name: 'Eval' , value: `Eval Code`, inline: true },
  )
  .setTimestamp()
  .setFooter({
    text: `Requested by ${message.author.username}`, 
    iconURL: message.author.displayAvatarURL()
  });

//playlist
  const playlist = new MessageEmbed()
  .setAuthor(`Categories » Playlist`, client.user.displayAvatarURL({ dynamic: true }))
  .setColor('#2F3136')
  .addFields(
    { name: 'Create'  , value: i18n.__("cmd.playlist.create.des"), inline: true },
    { name: 'Delete'  , value: i18n.__("cmd.playlist.delete.des"), inline: true },
	{ name: 'Info'  , value: i18n.__("cmd.playlist.info.des"), inline: true },
    { name: 'List'  , value: i18n.__("cmd.playlist.list.des"), inline: true },
    { name: 'Load'  , value: i18n.__("cmd.playlist.load.des"), inline: true },
    { name: 'Removetrack'  , value: i18n.__("cmd.playlist.removetrack.des"), inline: true },
    { name: 'Savecurrent'  , value: i18n.__("cmd.playlist.savecurrent.des"), inline: true },
    { name: 'Savequeue'  , value: i18n.__("cmd.playlist.save.des"), inline: true },

  )
  .setTimestamp()
  .setFooter({
    text: `Requested by ${message.author.username}`, 
    iconURL: message.author.displayAvatarURL()
  });

  //nsfw
  const nsfw = new MessageEmbed()
  .setAuthor(`Categories » Nsfw`, client.user.displayAvatarURL({ dynamic: true }))
  .setColor('#2F3136')
  .addFields(
    { name: 'Ass'  , value: `NSFW`, inline: true },
    { name: 'Bdsm'  , value: `NSFW`, inline: true },
    { name: 'Blowjob'  , value: `NSFW`, inline: true },
    { name: 'Cum'  , value: `NSFW`, inline: true },
    { name: 'Doujin'  , value: `NSFW`, inline: true },
    { name: 'Feet'  , value: `NSFW`, inline: true },
    { name: 'Femdom'  , value: `NSFW`, inline: true },
    { name: 'Foxgirl'  , value: `NSFW`, inline: true },
    { name: 'Gifs'  , value: `NSFW`, inline: true },
    { name: 'Glasses'  , value: `NSFW`, inline: true },
    { name: 'Hentai'  , value: `NSFW`, inline: true },
    { name: 'Maid'  , value: `NSFW`, inline: true },
    { name: 'Masturbation'  , value: `NSFW`, inline: true },
    { name: 'Netorare'  , value: `NSFW`, inline: true },
    { name: 'Orgy'  , value: `NSFW`, inline: true },
    { name: 'Panties'  , value: `NSFW`, inline: true },
    { name: 'Pussy'  , value: `NSFW`, inline: true },
    { name: 'School'  , value: `NSFW`, inline: true },
    { name: 'Succubus'  , value: `NSFW`, inline: true },
    { name: 'Thighs'  , value: `NSFW`, inline: true },
    { name: 'Yuri'  , value: `NSFW`, inline: true },
    { name: 'Gelbooru'  , value: `NSFW`, inline: true },
    { name: 'Danbooru'  , value: `NSFW`, inline: true },



  )
  .setTimestamp()
  .setFooter({
    text: `Requested by ${message.author.username}`, 
    iconURL: message.author.displayAvatarURL()
  });
  
  const components = (state) => [
    new MessageActionRow().addComponents(
        new MessageSelectMenu()
        .setCustomId("help-menu")
        .setPlaceholder("🌺 | Chọn mục bạn cần hỗ trợ!")
        .setDisabled(state)
        .addOptions([{
                label: `Config`,
                value: `config`,
                description: `Lệnh Config!`,
                emoji: `920082376342790195`
            },
            {
              label: `Fun`,
              value: `fun`,
              description: `Lệnh Fun!`,
              emoji: `920080894126084116`
          },
            {
                label: `Information`,
                value: `information`,
                description: `Lệnh Information!`,
                emoji: `920081443185647616`
            },
            {
                label: "Music",
                description: "Shows all the Music commands!",
                value: "music",
                emoji: "920917822626992148"
              },
              {
                label: "Owner",
                description: "Shows all the owner commands",
                value: "owner",
                emoji: "921185917379706911"
              },
              {
                label: "Playlist",
                description: "Shows all the playlist commands",
                value: "playlist",
                emoji: "920918516813680710"
              },
              {
                label: "Nsfw",
                description: "Shows all the nsfw commands",
                value: "nsfw",
                emoji: "950941660739682305"
              }
        ])
    ),
];

const initialMessage = await message.reply({ embeds: [embed], components: components(false) });

const filter = (interaction) => interaction.user.id === message.author.id;

        const collector = message.channel.createMessageComponentCollector(
            {
                filter,
                componentType: "SELECT_MENU",
                idle: 300000,
                dispose: true,
            });

        collector.on('collect', (interaction) => {
            if (interaction.values[0] === "config") {
                interaction.update({ embeds: [config], components: components(false) }).catch((e) => {});
            } else if (interaction.values[0] === "fun") {
              interaction.update({ embeds: [fun], components: components(false) }).catch((e) => {});
            } else if (interaction.values[0] === "information") {
                interaction.update({ embeds: [information], components: components(false) }).catch((e) => {});
            } else if (interaction.values[0] === "music") {
                interaction.update({ embeds: [music], components: components(false) }).catch((e) => {});
            } else if (interaction.values[0] === "owner") {
                interaction.update({ embeds: [owner], components: components(false) }).catch((e) => {});
            } else if (interaction.values[0] === "playlist") {
                interaction.update({ embeds: [playlist], components: components(false) }).catch((e) => {});
            } else if (interaction.values[0] === "nsfw") {
              interaction.update({ embeds: [nsfw], components: components(false) }).catch((e) => {});
          }
        });
        collector.on("end", (collected, reason) => {
            if (reason == "time") {
                initialMessage.edit({
                   content: "Collector Destroyed, Try Again!",
                   components: [],
                });
             }
        });
    }
}
}
