module.exports = {
    name: 'staff',
    description: "This command provides a list of commands!",
    permissions: ['ADMINISTRATOR'],
    execute(message, args, Discord) {
        if (message.member.hasPermission('MANAGE_ROLES')) {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#cc0000')
                .setTitle('Staff Help')
                .setURL('')
                .setDescription('__*6 Total Commands!*__\n\n')
                .addFields(
                    { name: '+Clear <Amount>', value: 'Clears <Amount> of Messages' },
                    { name: '+Kick <@User>', value: 'Kicks a User' },
                    { name: '+Ban <@User>', value: 'Bans a User' },
                    { name: '+Mute <@User>', value: 'Mutes a User' },
                    { name: '+Unmute <@User>', value: 'Unmutes a User' },
                    { name: '+Poll <Poll>', value: 'Make a Poll!' },
					{ name: '+Link', value: 'Links your Xbox Account to Discord' },
                    { name: '+Setup', value: 'Main Realm Editor' },
                    { name: '+Staff', value: 'Shows Staff Commands' }
                )

            message.channel.send(newEmbed);
        }
    }
}