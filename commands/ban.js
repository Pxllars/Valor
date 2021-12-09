module.exports = {
    name: 'ban',
    description: "This command bans a member!",
    permissionError: 'You must be an administrator to use this command.',
    permissions: ['ADMINISTRATOR'],
    execute(message, args) {
        if (message.member.hasPermission('MANAGE_ROLES')) {
            const target = message.mentions.users.first();
            if (target) {
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.ban();
                message.channel.send("User has been banned");
            } else {
                message.channel.send(`You coudn't ban that member!`);
            }
        }
    }
}