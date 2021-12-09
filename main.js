const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();

const prefix = (process.env.PREFIX);


const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Valor is online!');
    client.user.setActivity("Valor Network", {
        type: "PLAYING",
        url: "https://www.twitch.tv/pxllmc"
    });
});


const embed = new Discord.MessageEmbed()

client.on('guildMemberAdd', member => {
    let embed = new Discord.MessageEmbed()
        .setTitle('Welcome to Valor Network!')
        .setThumbnail(member.user.displayAvatarURL())
        .setColor('#cc0000')
        .setDescription(member.user.username + ' has Joined!  We hope you have a great time!\nIf you get lost contact staff or remember to do +ticket!\n\n\n**Total Members:** ' + member.guild.memberCount)
    member.guild.channels.cache.get('911773581833306192').send(embed)
});


client.on('message', message => {
    if (message.content.startsWith(prefix + 'mute')) {
        if (message.member.hasPermission('MANAGE_ROLES')) {
            const Mute = message.guild.roles.cache.find(role => role.name === 'Mute');
            const Default = message.guild.roles.cache.find(role => role.name === 'Default');
            const member = message.mentions.members.first();
            member.roles.add(Mute);
            member.roles.remove(Default);
            message.channel.send(member + ' Has Been Muted');

        } else {
            message.channel.send("Please Mention Who To Mute")
        }
    }
})


client.on('message', message => {
    if (message.content.startsWith(prefix + 'unmute')) {
        if (message.member.hasPermission('MANAGE_ROLES')) {
            const Mute = message.guild.roles.cache.find(role => role.name === 'Mute');
            const Default = message.guild.roles.cache.find(role => role.name === 'Default');
            const member = message.mentions.members.first();
            member.roles.remove(Mute);
            member.roles.add(Default);
            message.channel.send(member + ' Has Been Unmuted');

        } else {
            message.channel.send("Please Mention Who To Unmute")
        }
    }
})


client.on('message', message => {


    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'clear') {
        client.commands.get('clear').execute(message, args);
    } else if (command === 'kick') {
        client.commands.get('kick').execute(message, args);
    } else if (command === 'ban') {
        client.commands.get('ban').execute(message, args);
    } else if (command === 'ticket') {
        client.commands.get('ticket').execute(message, args);
    } else if (command === 'help') {
        client.commands.get('help').execute(message, args, Discord);
    } else if (command === 'suggest') {
        client.commands.get('suggest').execute(message, args, Discord);
    } else if (command === 'poll') {
        client.commands.get('poll').execute(message, args, Discord);
    } else if (command === 'code') {
        client.commands.get('code').execute(message, args, Discord);
    } else if (command === 'add') {
        client.commands.get('add').execute(message, args);
    } else if (command === 'image') {
        client.commands.get('image').execute(message, args);
    } else if (command === 'staff') {
        client.commands.get('staff').execute(message, args, Discord);
    } else if (command === 'status') {
        client.commands.get('status').execute(message, args, Discord);
    } else if (command === 'setup') {
        client.commands.get('setup').execute(message, args, Discord);
    } else if (command === 'name') {
        client.commands.get('name').execute(message, args, Discord);
    } else if (command === 'error') {
        client.commands.get('error').execute(message, args, Discord);
    } else if (command === 'patch') {
        client.commands.get('patch').execute(message, args, Discord);
    } else if (command === 'debug') {
        client.commands.get('debug').execute(message, args, Discord);
    } else if (command === 'run') {
        client.commands.get('run').execute(message, args, Discord);
    } else if (command === 'link') {
        client.commands.get('link').execute(message, args, Discord);
    }
});

client.login(process.env.DISCORD_TOKEN);