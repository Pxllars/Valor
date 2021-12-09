module.exports = {
    name: 'patch',
    description: 'Sends MCBE Latest Patch Notes',
    permissions: ['ADMINISTRATOR'],
    execute(message, args, Discord) {
        if (message.member.hasPermission('MANAGE_ROLES')) {
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#cc0000')
                .setTitle('**Patch Notes**')
                .setURL('https://feedback.minecraft.net/hc/en-us/articles/4411858037005-Minecraft-1-17-41-Bedrock')
                .setDescription('🟢 Click Patch Notes for the latest Changelogs!')

            message.channel.send(newEmbed);
        }
    }
}