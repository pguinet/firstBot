#!/usr/bin/node
# This is a very simple Discord bot on js.
# It only needs Discord libraries.
# Bot authentication token has to placed onto config.json file.

const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
	if(message.content == 'ping') {
//message.reply('pong');
		message.channel.send('Tu es joueur !');
	}
});

bot.on('guildMemberAdd', member => {
	  member.createDM().then(channel => {
		      return channel.send('Bienvenue sur le serveur Pokémon GO Ezanville et environs' + member.displayName)
		    }).catch(console.error)
})

bot.login(config.token);


