const Discord = require('discord.js');
const token = require('../config/config.js');

const client = new Discord.Client();

client.on('ready', () => {
  client.user.setActivity('with Javascript');
  console.log(`Started : ${client.user.tag}!`);
});

client.login(token.token);
