
module.exports = {
    name: "avatar",
    aliases: ["pic", "pfp", "av"],
    required: true,
  
    execute: async (message, args, client, prefix) => {
    try {
        const color = "#F1C40F";
        if (!args[0]) return getAvatar(message.author.id);
  
        if (
          args[0].startsWith("<@") &&
          args[0].endsWith(">") &&
          args[0].length == 21 &&
          !isNaN(args[0].slice(2, 20))
        )
          return getAvatar(args[0].slice(2, 20));
        if (
          args[0].startsWith("<@!") &&
          args[0].endsWith(">") &&
          args[0].length == 22 &&
          !isNaN(args[0].slice(3, 21))
        )
          return getAvatar(args[0].slice(3, 21));
        if (!isNaN(args[0]) && args[0].length == 18) return getAvatar(args[0]);
        return getAvatar(message.author.id);
  
        function getAvatar(id) {
          client.users
            .fetch(id)
            .then(async (user) => {
              return sendEmbed(user);
            })
            .catch(() => {
              return sendEmbed(message.author);
            });
        }
        function sendEmbed(target) {
          const png = target.displayAvatarURL({ format: "png" });
          const jpg = target.displayAvatarURL({ format: "jpg" });
          const webp = target.displayAvatarURL({ format: "webp" });
          const embed = {
            author: {
              name: `${target.tag} Avatar`,
              icon_url: target.displayAvatarURL({ dynamic: true }),
            },
            description: `[png](${png}) \`|\` [jpg](${jpg}) \`|\` [webp](${webp})`,
            image: {
              url: target.displayAvatarURL({ dynamic: true, size: 512 }),
            },
            color: color,
            footer: {
                icon_url: `${message.author.displayAvatarURL()}`,
                text: `Request by ${message.author.tag}`
              },
            
          };
          return message.channel.send({
            embeds: [embed],
          });
        }
      } catch (err) {
        console.log(err);
      }
    },
  };