module.exports = {
    name: 'code',
    description: 'Sends KitPvP Codes!',
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#cc0000')
        .setTitle('**Kit PvP Codes**')
        .setDescription('\n\n**━━━━━━━━━━━━━━━**\n__*Kit PvP Discord Kit Code!*__\n\n **A**  B  C \n|━━━|\n  D  **E**  F \n|━━━|\n  G  **H**  I \n\n*In The Chest Labeled*\n**Discord Kit**\n*Press the Items Labeled:*\n**A/E/H**\n*Then Redeem your Kit!*\n\n__*KitPvP Realm Code*__\n\n**https://realms.gg/FgMd8nZrGcg**\n━━━━━━━━━━━━━━━')

        message.author.send(newEmbed);
    }

}