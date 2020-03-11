const Discord = require('discordjs');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Started : ${client.user.tag}!`);
});
