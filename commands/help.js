module.exports = {
    name: 'help',
    description: "This command provides a list of commands!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#cc0000')
        .setTitle('Valor Commands')
        .setURL('')
        .setDescription('__*10 Total Commands!*__\n\n')
        .addFields(
            {name: '+Code', value: 'Receive The Discord and Realm Code'},
            {name: '+Status', value: 'Checks Realm Status'},
            {name: '+Ticket', value: 'Opens a Ticket'},
            {name: '+Suggest <Suggestion>', value: 'Give a Suggestion'},
            {name: '+Help', value: 'Shows Command List'}
        )

        message.channel.send(newEmbed);
    }

}