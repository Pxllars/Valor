module.exports = {
    name: 'debug',
    description: 'Debugs Your Realm',
    permissions: ['ADMINISTRATOR'],
    execute(message, args, Discord) {
        if (message.member.hasPermission('MANAGE_ROLES')) {

            const newEmbed = new Discord.MessageEmbed()
                .setColor('#cc0000')
                .setTitle('**Debug**')
                .setDescription('🟢 {Pluto Dev} is Online!')

            message.channel.send(newEmbed);
        }
    }
}