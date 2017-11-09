const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
	if(message.content == 'ping') {
//message.reply('pong');
		message.channel.sendMessage('Tu es joueur !');
	}
});

bot.login('Mzc3NTQ1MTU4MzAxODQzNDg3.DOOf2g.CSpnjWHO2HBbR9i_s7hoyYMFFIo');


