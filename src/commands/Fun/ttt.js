const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js")
const xPlaying = new Set()

module.exports = {
    name: "tic-tac-toe",
    aliases: ["ttt", "xox"],
    description: "tic-tac-toe",
    execute: async (message, args, client, prefix) => {
        const opponent = message.mentions.members.first()

        if (!message.guild.me.permissions.has("ADMINISTRATOR")) return

        if (!opponent) {
            let thing = new MessageEmbed()
            .setColor("RED")
            .setDescription(`<:8227_report:876720848675954738> Tag một ai đó để thách đấu`);
        return message.reply({embeds: [thing]})
        }
        if (opponent.user.id === message.author.id) {
            let thing = new MessageEmbed()
            .setColor("RED")
            .setDescription(`<:8227_report:876720848675954738> Không thể đấu với chính bạn`);
        return message.reply({embeds: [thing]})
        }
        if (opponent.user.bot) {
            let thing = new MessageEmbed()
            .setColor("RED")
            .setDescription(`<:8227_report:876720848675954738> Không thể thách đấu với Bot`);
        return message.reply({embeds: [thing]})
        }

        if (xPlaying.has(message.author.id)) return message.reply(`Một người trong các bạn đã tham gia một trận đấu! Hoàn thành trận đấu đó trước để bắt đầu một trận đấu mới!`)
        if (xPlaying.has(opponent.user.id)) return message.reply(`Một người trong các bạn đã tham gia một trận đấu! Hoàn thành trận đấu đó trước để bắt đầu một trận đấu mới!`)

        xPlaying.add(message.author.id)
        xPlaying.add(opponent.user.id)

        let a1 = '⬜'
        let a2 = '⬜'
        let a3 = '⬜'
        let a4 = '⬜'
        let a5 = '⬜'
        let a6 = '⬜'
        let a7 = '⬜'
        let a8 = '⬜'
        let a9 = '⬜'

        const new1 = new MessageActionRow().addComponents(
            grey1 = new MessageButton()
                .setStyle("SECONDARY")
                .setCustomId("grey1")
                .setEmoji("➖"),

            grey2 = new MessageButton()
                .setStyle("SECONDARY")
                .setCustomId("grey2")
                .setEmoji("➖"),

            grey3 = new MessageButton()
                .setStyle("SECONDARY")
                .setCustomId("grey3")
                .setEmoji("➖"),
        )

        const new2 = new MessageActionRow().addComponents(
            grey4 = new MessageButton()
                .setStyle("SECONDARY")
                .setCustomId("grey4")
                .setEmoji("➖"),

            grey5 = new MessageButton()
                .setStyle("SECONDARY")
                .setCustomId("grey5")
                .setEmoji("➖"),

            grey6 = new MessageButton()
                .setStyle("SECONDARY")
                .setCustomId("grey6")
                .setEmoji("➖"),
        )

        const new3 = new MessageActionRow().addComponents(
            grey7 = new MessageButton()
                .setStyle("SECONDARY")
                .setCustomId("grey7")
                .setEmoji("➖"),

            grey8 = new MessageButton()
                .setStyle("SECONDARY")
                .setCustomId("grey8")
                .setEmoji("➖"),

            grey9 = new MessageButton()
                .setStyle("SECONDARY")
                .setCustomId("grey9")
                .setEmoji("➖"),
        )

        const embed = new MessageEmbed()
            .setAuthor({ name: `Tic-Tac-Toe Game!`, iconURL: message.guild.iconURL({ dynamic: true }) })
            .setDescription(`**${message.author.tag} đấu với ${opponent.user.tag}**`)
            .setColor("RANDOM")
            .setFooter({ text: `Game requested by ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })

        const initial = await message.reply({ embeds: [embed], components: [new1, new2, new3] }).catch((err) => { })



        const xcollector = initial.createMessageComponentCollector({
            componentType: "BUTTON",
        })

        xcollector.on("collect", async (interaction) => {
            if (xPlaying.has(message.author.id)) {
                if (interaction.user.id === message.author.id) {
                    if (interaction.customId === "grey1") {
                        new1.components[0].setStyle("PRIMARY").setEmoji("❌").setCustomId("x1").setDisabled(true)
                        a1 = "x"
                        interaction.update({ embeds: [embed], components: [new1, new2, new3] }).catch((err) => { })
                        xPlaying.delete(message.author.id)
                    } else if (interaction.customId === "grey2") {
                        new1.components[1].setStyle("PRIMARY").setEmoji("❌").setCustomId("x2").setDisabled(true)
                        a2 = "x"
                        interaction.update({ embeds: [embed], components: [new1, new2, new3] }).catch((err) => { })
                        xPlaying.delete(message.author.id)
                    } else if (interaction.customId === "grey3") {
                        new1.components[2].setStyle("PRIMARY").setEmoji("❌").setCustomId("x3").setDisabled(true)
                        a3 = "x"
                        interaction.update({ embeds: [embed], components: [new1, new2, new3] }).catch((err) => { })
                        xPlaying.delete(message.author.id)
                    } else if (interaction.customId === "grey4") {
                        new2.components[0].setStyle("PRIMARY").setEmoji("❌").setCustomId("x4").setDisabled(true)
                        a4 = "x"
                        interaction.update({ embeds: [embed], components: [new1, new2, new3] }).catch((err) => { })
                        xPlaying.delete(message.author.id)
                    } else if (interaction.customId === "grey5") {
                        new2.components[1].setStyle("PRIMARY").setEmoji("❌").setCustomId("x5").setDisabled(true)
                        a5 = "x"
                        interaction.update({ embeds: [embed], components: [new1, new2, new3] }).catch((err) => { })
                        xPlaying.delete(message.author.id)
                    } else if (interaction.customId === "grey6") {
                        new2.components[2].setStyle("PRIMARY").setEmoji("❌").setCustomId("x6").setDisabled(true)
                        a6 = "x"
                        interaction.update({ embeds: [embed], components: [new1, new2, new3] }).catch((err) => { })
                        xPlaying.delete(message.author.id)
                    } else if (interaction.customId === "grey7") {
                        new3.components[0].setStyle("PRIMARY").setEmoji("❌").setCustomId("x7").setDisabled(true)
                        a7 = "x"
                        interaction.update({ embeds: [embed], components: [new1, new2, new3] }).catch((err) => { })
                        xPlaying.delete(message.author.id)
                    } else if (interaction.customId === "grey8") {
                        new3.components[1].setStyle("PRIMARY").setEmoji("❌").setCustomId("x8").setDisabled(true)
                        a8 = "x"
                        interaction.update({ embeds: [embed], components: [new1, new2, new3] }).catch((err) => { })
                        xPlaying.delete(message.author.id)
                    } else if (interaction.customId === "grey9") {
                        new3.components[2].setStyle("PRIMARY").setEmoji("❌").setCustomId("x9").setDisabled(true)
                        a9 = "x"
                        interaction.update({ embeds: [embed], components: [new1, new2, new3] }).catch((err) => { })
                        xPlaying.delete(message.author.id)
                    }

                    if (a1 === "x" && a2 === "x" && a3 === "x") {
                        message.channel.send({ content: `${message.author} Thắng!` }).catch((err) => { })
                        xcollector.stop()
                        xPlaying.delete(opponent.user.id)
                        xPlaying.delete(message.author.id)
                    } else if (a4 === "x" && a5 === "x" && a6 === "x") {
                        message.channel.send({ content: `${message.author} Thắng!` }).catch((err) => { })
                        xcollector.stop()
                        xPlaying.delete(opponent.user.id)
                        xPlaying.delete(message.author.id)
                    } else if (a7 === "x" && a8 === "x" && a9 === "x") {
                        message.channel.send({ content: `${message.author} Thắng!` }).catch((err) => { })
                        xcollector.stop()
                        xPlaying.delete(opponent.user.id)
                        xPlaying.delete(message.author.id)
                    } else if (a1 === "x" && a4 === "x" && a7 === "x") {
                        message.channel.send({ content: `${message.author} Thắng!` }).catch((err) => { })
                        xcollector.stop()
                        xPlaying.delete(opponent.user.id)
                        xPlaying.delete(message.author.id)
                    } else if (a2 === "x" && a5 === "x" && a8 === "x") {
                        message.channel.send({ content: `${message.author} Thắng!` }).catch((err) => { })
                        xcollector.stop()
                        xPlaying.delete(opponent.user.id)
                        xPlaying.delete(message.author.id)
                    } else if (a3 === "x" && a6 === "x" && a9 === "x") {
                        message.channel.send({ content: `${message.author} Thắng!` }).catch((err) => { })
                        xcollector.stop()
                        xPlaying.delete(opponent.user.id)
                        xPlaying.delete(message.author.id)
                    } else if (a1 === "x" && a5 === "x" && a9 === "x") {
                        message.channel.send({ content: `${message.author} Thắng!` }).catch((err) => { })
                        xcollector.stop()
                        xPlaying.delete(opponent.user.id)
                        xPlaying.delete(message.author.id)
                    } else if (a3 === "x" && a5 === "x" && a7 === "x") {
                        message.channel.send({ content: `${message.author} Thắng!` }).catch((err) => { })
                        xcollector.stop()
                        xPlaying.delete(opponent.user.id)
                        xPlaying.delete(message.author.id)
                    } else if (a1 !== '⬜' &&
                        a2 !== '⬜' &&
                        a3 !== '⬜' &&
                        a4 !== '⬜' &&
                        a5 !== '⬜' &&
                        a6 !== '⬜' &&
                        a7 !== '⬜' &&
                        a8 !== '⬜' &&
                        a9 !== '⬜') {
                        message.channel.send("<:905506657700831303:920079363968466984> Hoà!")
                        xcollector.stop()
                        xPlaying.delete(opponent.user.id)
                        xPlaying.delete(message.author.id)
                    } else return
                } else if (interaction.user.id === opponent.user.id) {
                    interaction.reply({ content: "<:2621chibipaimonhesitating:950934291481755758> Đã đến lượt đâu mà ấn?", ephemeral: true }).catch((err) => { })
                } else {
                    interaction.reply({ content: "<:2013gawrguraconfused:920068000256757840> Có được mời chơi đâu mà ấn?", ephemeral: true }).catch((err) => { })
                }
            } else if (!xPlaying.has(message.author.id)) {
                if (interaction.user.id === message.author.id) {
                    interaction.reply({ content: "<:2621chibipaimonhesitating:950934291481755758> Đã đến lượt đâu mà ấn?", ephemeral: true }).catch((err) => { })
                } else if (interaction.user.id === opponent.user.id) {
                    if (interaction.customId === "grey1") {
                        new1.components[0].setStyle("PRIMARY").setEmoji("⭕").setCustomId("o1").setDisabled(true)
                        a1 = "o"
                        interaction.update({ embeds: [embed], components: [new1, new2, new3] }).catch((err) => { })
                        xPlaying.add(message.author.id)
                    } else if (interaction.customId === "grey2") {
                        new1.components[1].setStyle("PRIMARY").setEmoji("⭕").setCustomId("o2").setDisabled(true)
                        a2 = "o"
                        interaction.update({ embeds: [embed], components: [new1, new2, new3] }).catch((err) => { })
                        xPlaying.add(message.author.id)
                    } else if (interaction.customId === "grey3") {
                        new1.components[2].setStyle("PRIMARY").setEmoji("⭕").setCustomId("o3").setDisabled(true)
                        a3 = "o"
                        interaction.update({ embeds: [embed], components: [new1, new2, new3] }).catch((err) => { })
                        xPlaying.add(message.author.id)
                    } else if (interaction.customId === "grey4") {
                        new2.components[0].setStyle("PRIMARY").setEmoji("⭕").setCustomId("o4").setDisabled(true)
                        a4 = "o"
                        interaction.update({ embeds: [embed], components: [new1, new2, new3] }).catch((err) => { })
                        xPlaying.add(message.author.id)
                    } else if (interaction.customId === "grey5") {
                        new2.components[1].setStyle("PRIMARY").setEmoji("⭕").setCustomId("o5").setDisabled(true)
                        a5 = "o"
                        interaction.update({ embeds: [embed], components: [new1, new2, new3] }).catch((err) => { })
                        xPlaying.add(message.author.id)
                    } else if (interaction.customId === "grey6") {
                        new2.components[2].setStyle("PRIMARY").setEmoji("⭕").setCustomId("o6").setDisabled(true)
                        a6 = "o"
                        interaction.update({ embeds: [embed], components: [new1, new2, new3] }).catch((err) => { })
                        xPlaying.add(message.author.id)
                    } else if (interaction.customId === "grey7") {
                        new3.components[0].setStyle("PRIMARY").setEmoji("⭕").setCustomId("o7").setDisabled(true)
                        a7 = "o"
                        interaction.update({ embeds: [embed], components: [new1, new2, new3] }).catch((err) => { })
                        xPlaying.add(message.author.id)
                    } else if (interaction.customId === "grey8") {
                        new3.components[1].setStyle("PRIMARY").setEmoji("⭕").setCustomId("o8").setDisabled(true)
                        a8 = "o"
                        interaction.update({ embeds: [embed], components: [new1, new2, new3] }).catch((err) => { })
                        xPlaying.add(message.author.id)
                    } else if (interaction.customId === "grey9") {
                        new3.components[2].setStyle("PRIMARY").setEmoji("⭕").setCustomId("o9").setDisabled(true)
                        a9 = "o"
                        interaction.update({ embeds: [embed], components: [new1, new2, new3] }).catch((err) => { })
                        xPlaying.add(message.author.id)
                    }


                    if (a1 === "o" && a2 === "o" && a3 === "o") {
                        message.channel.send({ content: `${opponent.user} Thắng!` }).catch((err) => { })
                        xcollector.stop()
                        xPlaying.delete(opponent.user.id)
                        xPlaying.delete(message.author.id)
                    } else if (a4 === "o" && a5 === "o" && a6 === "o") {
                        message.channel.send({ content: `${opponent.user} Thắng!` }).catch((err) => { })
                        xcollector.stop()
                        xPlaying.delete(opponent.user.id)
                        xPlaying.delete(message.author.id)
                    } else if (a7 === "o" && a8 === "o" && a9 === "o") {
                        message.channel.send({ content: `${opponent.user} Thắng!` }).catch((err) => { })
                        xcollector.stop()
                        xPlaying.delete(opponent.user.id)
                        xPlaying.delete(message.author.id)
                    } else if (a1 === "o" && a4 === "o" && a7 === "o") {
                        message.channel.send({ content: `${opponent.user} Thắng!` }).catch((err) => { })
                        xcollector.stop()
                        xPlaying.delete(opponent.user.id)
                        xPlaying.delete(message.author.id)
                    } else if (a2 === "o" && a5 === "o" && a8 === "o") {
                        message.channel.send({ content: `${opponent.user} Thắng!` }).catch((err) => { })
                        xcollector.stop()
                        xPlaying.delete(opponent.user.id)
                        xPlaying.delete(message.author.id)
                    } else if (a3 === "o" && a6 === "o" && a9 === "o") {
                        message.channel.send({ content: `${opponent.user} Thắng!` }).catch((err) => { })
                        xcollector.stop()
                        xPlaying.delete(opponent.user.id)
                        xPlaying.delete(message.author.id)
                    } else if (a1 === "o" && a5 === "o" && a9 === "o") {
                        message.channel.send({ content: `${opponent.user} Thắng!` }).catch((err) => { })
                        xcollector.stop()
                        xPlaying.delete(opponent.user.id)
                        xPlaying.delete(message.author.id)
                    } else if (a3 === "o" && a5 === "o" && a7 === "o") {
                        message.channel.send({ content: `${opponent.user} Thắng!` }).catch((err) => { })
                        xcollector.stop()
                        xPlaying.delete(opponent.user.id)
                        xPlaying.delete(message.author.id)
                    } else if (a1 !== '⬜' &&
                        a2 !== '⬜' &&
                        a3 !== '⬜' &&
                        a4 !== '⬜' &&
                        a5 !== '⬜' &&
                        a6 !== '⬜' &&
                        a7 !== '⬜' &&
                        a8 !== '⬜' &&
                        a9 !== '⬜') {
                        message.channel.send("<:905506657700831303:920079363968466984> Hoà!")
                        xcollector.stop()
                        xPlaying.delete(opponent.user.id)
                        xPlaying.delete(message.author.id)
                    } else return
                } else {
                    interaction.reply({ content: "Có được mời chơi đâu mà ấn?", ephemeral: true }).catch((err) => { })
                }
            }
        })
    }
}
