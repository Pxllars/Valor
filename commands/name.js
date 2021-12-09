module.exports = {
    name: 'name',
    description: 'Changes Realm Name',
    permissions: ['ADMINISTRATOR'],
    execute(message, args, Discord) {
        if (message.member.hasPermission('MANAGE_ROLES')) {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#cc0000')
                .setTitle('**Realm Name**')
                .setDescription('🔴 Hey! You either dont have these permissions\nor you have not linked your Xbox Account!\n\n')
                .addFields(
                    { name: '+Link', value: 'Links you and your Xbox Account' },
                    { name: '+Setup', value: 'Sends Realm Commands List' }
                )

            message.channel.send(newEmbed);
        }
    }
}