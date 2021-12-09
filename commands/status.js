module.exports = {
    name: 'status',
    description: 'Tests Realm Modules!',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#cc0000')
        .setTitle('**Valor Status**')
        .setDescription('🟢 https://realms.gg/FgMd8nZrGcg\nIs currently online \n\n**The Name Does Not Match Valor**\n\nDoes this need fixed?\n\n*Please Type* __**+setup**__ to setup')

        message.channel.send(newEmbed);
    }

}