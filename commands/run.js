module.exports = {
    name: 'run',
    description: 'Attempts to Run Your Realm',
    permissions: ['ADMINISTRATOR'],
    execute(message, args, Discord) {
        if (message.member.hasPermission('MANAGE_ROLES')) {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#cc0000')
                .setTitle('**Running**')
                .setDescription('🟢 {Pluto Dev} has already been running!')

            message.channel.send(newEmbed);
        }
    }
}