module.exports = function(msg, Discord, client, command, args, config) {
    embed = new Discord.MessageEmbed()
   .setAuthor("HELP REQUESTED", client.user.avatarURL())
   .setColor(0x333333)
   .setThumbnail(client.user.avatarURL())
   .setTimestamp()
   .addField('‌‌ ',
   '**' + 'HELP SENT :white_check_mark:' + '**' + `\n` + 'Help has been sent to: ' + msg.author.tag)
   .setFooter("Sent by: " + client.user.tag, client.user.avatarURL());
 
   
   msg.channel.send({embed});
 
 
 
 embed = new Discord.MessageEmbed()
   .setAuthor("HELP MENU", client.user.avatarURL())
   .setColor(0x333333)
   .setThumbnail(client.user.avatarURL())
   .setTimestamp()

   // GENERAL COMMANDS

   .addField('‌‌ ',
   '**' + 'GENERAL COMMANDS' + '\n' + '--------------------' + '**' + `\n` + '')

   .addField('‌‌ ',
   '**' + config.prefix + 'help' + '**' + `\n` + '► Pulls up this general help menu.')

   .addField('‌‌ ',
   '**' + config.prefix + 'info [user]' + '**' + `\n` + '► Gives you info on a specified user.')

   .addField('‌‌ ',
   '**' + config.prefix + 'ping' + '**' + `\n` + '► Gets the latency of the bot in milliseconds.')

   .addField('‌‌ ',
   '**' + config.prefix + 'status' + '**' + `\n` + '► Gets all performance statistics of the bot.')


   .setFooter("Sent by: " + client.user.tag, client.user.avatarURL());
 
   
   msg.author.send({embed});
 }