module.exports = {
    name: 'poll',
    description: "Creates a poll!",
    permissionError: 'You must be an administrator to use this command.',
    permissions: ['ADMINISTRATOR'],
    execute(message, args, Discord) {
        if (message.member.hasPermission('MANAGE_ROLES')) {
            const channel = message.guild.channels.cache.find(c => c.name === 'news');
            if (!channel) return message.channel.send('news channel does not exist!');

            let messageArgs = args.join(' ');
            const embed = new Discord.MessageEmbed()
                .setColor('#cc0000')
                .setTitle(messageArgs)
                .setDescription('Answer With 👍/👎');

            channel.send(embed).then((msg) => {
                msg.react('👍');
                msg.react('👎');
                message.delete();
            }).catch((err) => {
                throw err;
            });
        }
    }
}