module.exports = {
    name: 'link',
    description: 'Sends MCBE Latest Patch Notes',
    permissions: ['ADMINISTRATOR'],
    execute(message, args, Discord) {
        if (message.member.hasPermission('MANAGE_ROLES')) {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#cc0000')
                .setTitle('**Link Xbox Account**')
                .setURL('https://discord.com/connections/xbox?code=M.R3_BAY.d68d0c1d-a639-182a-d560-ce5471c8559b&state=0364e170c16f529e28f9c5e7a0e1f986')
                .setDescription('🟢 Click [Link Xbox Account] To Use +Setup!')

            message.channel.send(newEmbed);
        }
    }
}