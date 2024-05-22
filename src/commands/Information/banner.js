module.exports = {
    name: "banner",
    required: true,
  
    execute: async (message, args, client, prefix) => {
        try {
        const color = "#F1C40F";
        if (!args[0]) return getBanner(message.author.id);
  
        if (
          args[0].startsWith("<@") &&
          args[0].endsWith(">") &&
          args[0].length == 21 &&
          !isNaN(args[0].slice(2, 20))
        )
          return getBanner(args[0].slice(2, 20));
        if (
          args[0].startsWith("<@!") &&
          args[0].endsWith(">") &&
          args[0].length == 22 &&
          !isNaN(args[0].slice(3, 21))
        )
          return getBanner(args[0].slice(3, 21));
        if (!isNaN(args[0]) && args[0].length == 18) return getBanner(args[0]);
        return getBanner(message.author.id);
  
        function getBanner(id) {
          client.users
            .fetch(id)
            .then(async (user) => {
              return sendEmbed(user);
            })
            .catch(() => {
              return sendEmbed(message.author);
            });
        }
        async function sendEmbed(target) {
          const fetchedUser = await target.fetch();
          png = fetchedUser.bannerURL({ format: "png", size: 4096 });
          jpg = fetchedUser.bannerURL({ format: "jpg", size: 4096 });
          webp = fetchedUser.bannerURL({ format: "webp", size: 4096 });
          gif = fetchedUser.bannerURL({ format: "gif", size: 4096 });
          if (fetchedUser.banner) {
            const embed = {
                author: {
                    name: `${fetchedUser.tag} Banner`,
                    icon_url: fetchedUser.displayAvatarURL({ dynamic: true }),
                },
                  description: `[png](${png}) \`|\` [jpg](${jpg}) \`|\` [webp](${webp}) \`|\` [gif](${gif})`,
                  image: {
                    url: fetchedUser.bannerURL({ dynamic: true, size: 4096 }),
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
          const embed = {
            author: {
              name: `${fetchedUser.tag}`,
              icon_url: fetchedUser.displayAvatarURL({ dynamic: true }),
            },
            description: "Không có banner để hiển thị",
            color: "RED",
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
  