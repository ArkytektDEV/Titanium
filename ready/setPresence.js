module.exports = function setPresence(client, config){
    x = parseInt(client.uptime) / 1000;
    seconds = x % 60;
    x /= 60;
    minutes = x % 60;
    x /= 60;
    hours = x % 24;
    x /= 24;
    days = x;

    client.user.setPresence({ activity: { name: config.prefix + 'help || uptime: ' 
    + parseInt(days) + 'D ' + parseInt(hours) + 'H ' + parseInt(minutes) + 'M ' + parseInt(seconds) + 'S' + ' || ' 
    + parseInt(client.ws.ping) + ' ping', type: 0 } });
  }