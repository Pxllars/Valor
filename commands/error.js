module.exports = {
    name: 'error',
    description: 'Tests Realm for Errors',
    permissions: ['ADMINISTRATOR'],
    execute(message, args, Discord) {
        if (message.member.hasPermission('MANAGE_ROLES')) {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#cc0000')
                .setTitle('**Realm Error**')
                .setDescription('🟢 MCBE Realm Servers have been Online and Ready for {46 Hours}')

            message.channel.send(newEmbed);
        }
    }
}