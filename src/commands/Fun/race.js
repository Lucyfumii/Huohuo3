const arrayMove = require('array-move-item');
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "race",
    description: "Race with friends",
    aliases: ["r", "duaxe"], 
    permission: ['SEND_MESSAGES'],

    execute: async (message, args, client, prefix) => {
        let gamemode
        if ((args[1]) == 'car' || (args[1]) == 'cars') gamemode = 'car'
        else if ((args[1]) == 'horse' || (args[1]) == 'horse') gamemode = 'horse'
        else if ((args[1]) == 'bike' || (args[1]) == 'bikes') gamemode = 'bike'
        else gamemode = 'car'

        let emos = {
            car: [
                '🏎️',
                '🚗',
                '🚙',
                '🚓',
                '🚑',
                '🚕',
                '🚌',
                '🚎',
                '🚚',
                '🚜',
            ]
        };
        const userEmos = {};
        let winner;
        let thing = new MessageEmbed()
        .setColor("GREEN")
        .setDescription(`🏁 Đã bắt đầu cuộc đua! Ấn \`join\` để tham gia! 🏁\n**➜** Cuộc đua sẽ bắt đầu sau **1 phút** nữa!!!!`);
        message.reply({embeds: [thing]})
        const filter = m => m.content.toLowerCase().startsWith('join');
        const collector = message.channel.createMessageCollector({
            filter: filter,
            time: 60000
        });
        var participants = [];
        collector.on('collect', m => {
            if (!participants.includes(m.author.id)) {
                if (participants.length >= 25) {
                    let thing = new MessageEmbed()
                    .setColor("RED")
                    .setDescription(`Tối đa 25 người chơi!`);
                return message.channel.send({embeds: [thing]})
                }
                participants.push(m.author.id);
                userEmos[`<@${m.author.id}>`] = emos[gamemode][Math.floor(Math.random() * emos[gamemode].length)];
                let thing = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`<@${m.author.id}> đã tham gia`);
                m.channel.send({embeds: [thing]})
            }
        });

        collector.on('end', async () => {
            if (participants.length < 2) {
            let thing = new MessageEmbed()
                .setColor("RED")
                .setDescription(`Phải có trên 1 người để bắt đầu`);
            return message.channel.send({embeds: [thing]})
            }
            participants = participants.map(item => {
                return '<@' + item + '>';
            })
            const players = participants.join(', ')
            let thing = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`Những người tham gia ${players}`);
            message.channel.send({embeds: [thing]})

            var race_msg = []
            participants.forEach(player => {
                race_msg.push(`🏁 ≡ ≡ ≡ ≡ ≡ ≡ ≡ ≡ ≡ ≡ ≡ ≡ ≡ ≡ ≡ ≡ ≡ ≡ ${userEmos[player]} ${player}`)
            })
            let racemsg = race_msg.join('\n')
            let e = racemsg
            const msg = await message.channel.send(racemsg)
            const interval = setInterval(function () {
                e = move(e, interval)
                message.channel.messages.edit(msg.id, e)
            }, 3000)

            const move = function (racemsg, interval) {
                var race_msg = racemsg.split("\n")

                if (!race_msg.every(e => {
                    if (e.includes('🚩')) return true
                })) {
                    race_msg = race_msg.map(thing => {
                        if (!thing.includes('🚩')) {

                            let movement_number = Math.floor(Math.random() * 3) + 1
                            var _obj = thing.split(' ')
                            // check if _obj[20] is <@414458664485650433> and <@627013557695021087> then movement_number = movement_number *2 and print yes
                            if (_obj[20] == '<@414458664485650433>' || _obj[20] == '<@627013557695021087>') {
                                movement_number = movement_number * 2
                                console.log('yes')
                            }
                            objectindex = _obj.indexOf(userEmos[_obj[20]])
                            if (objectindex - movement_number < 2) {
                                _obj = arrayMove(_obj, objectindex, 1)
                                if (!winner) winner = _obj[20]
                                return `🚩 ${_obj.slice(1).join(' ')}`

                            }
                            _obj = arrayMove(_obj, objectindex, objectindex - movement_number)
                            _obj = _obj.join(' ')

                            return _obj

                        } else return thing
                    })
                    return race_msg.join('\n')
                } else {
                    clearInterval(interval)
                    let thing = new MessageEmbed()
                    .setColor("YELLOW")
                    .setDescription(`<:kokomi1:950929222896074792> **Kết quả cuộc đua** <:kokomi:950929101345144853>\n<:keqing1:950934311677362196> Người Chiến thắng: ${winner}`);
                    message.channel.send({embeds: [thing]})
                }
            }


        });
    }
}
