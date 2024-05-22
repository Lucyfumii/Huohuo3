const { Message, Client, MessageEmbed } = require("discord.js");
const weather = require("weather-js")
module.exports = {
    name: "weather",
    aliases: ["weather"],
    description: 'weather info',
    
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
     execute: async (message, args, client, prefix) => {
        let city = args.join(" ");
    if(!city) {
        let thing = new MessageEmbed()
        .setColor("RED")
        .setDescription(`<:8227_report:876720848675954738> Vui lòng ghi tên thành phố`);
    return message.reply({embeds: [thing]})
    }

    weather.find({ search: city, degreeType: "C" }, function (err, result) {

        if (err) return msg.channel.send(err);
        if(!args[0]) {            
        let thing = new MessageEmbed()
            .setColor("RED")
            .setDescription(`<:8227_report:876720848675954738> Vui lòng ghi một vị trí`);
        return message.reply({embeds: [thing]})
    }

        if(result === undefined || result.length === 0) {
            let thing = new MessageEmbed()
            .setColor("RED")
            .setDescription(`<:8227_report:876720848675954738> không tìm được địa điểm này`);
        return message.reply({embeds: [thing]})
        }

        var current = result[0].current;
        var location = result[0].location;

        const weatherembed = new MessageEmbed()
        .setColor('#F1C40F')
        .setAuthor(`Dự báo thời tiết cho ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setDescription(`**${current.skytext}**`)
        .addField('Múi giờ', `UTC+${location.timezone}`, true)
        .addField('Nhiệt độ', `${current.temperature}˚`, true)
        .addField('Gió', `${current.winddisplay}`, true)
        .addField('Feels Like', `${current.feelslike}˚`, true)
        .addField('Độ ẩm', `${current.humidity}%`, true)
        message.reply({ embeds: [weatherembed] })

        })
    }
}