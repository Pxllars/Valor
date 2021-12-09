module.exports = {
    name: 'setup',
    description: 'Sets up the Realm Webhook',
    permissions: ['ADMINISTRATOR'],
    execute(message, args, Discord) {
        if (message.member.hasPermission('MANAGE_ROLES')) {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#cc0000')
                .setTitle('**Setup**')
                .setDescription('🟢 Welcome to Setup, here we will be setting up or fixing your\n*Realm Name, Realm Errors, Debugs and More!*\n\n')
                .addFields(
                    { name: '+Name <New Name>', value: 'Changes Your Realm Name' },
                    { name: '+Error', value: 'Checks MCBE API for Insufficiencies' },
                    { name: '+Debug <Realm Name>', value: 'Checks for Realm Errors' },
                    { name: '+Patch', value: 'Sends Minecraft Patch Notes URL' },
                    { name: '+Run <Realm Name(s)>', value: 'Boots Up Your Realms' },
					{ name: '+Link', value: 'Links your Xbox Account to Discord' },
                    { name: '+Setup', value: 'Sends Realm Commands List' }
                )

            message.channel.send(newEmbed);
        }
    }
}