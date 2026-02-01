exports.run = (client, message, args) => {
    message.channel.send(`${message.author}`)
    message.channel.send({embeds: [{
		      color: 3447003,
		      title: `Help :`,
		      fields: [
			      { name: "Command", value: "--reload\n--ping\n--hello\n--help\n--pogo\n--minecraft\n--discord\n--update\n--redhat", inline: true},
			      { name: "Description", value: "Permet de recharger une commande.\nPermet de jouer au ping pong avec le bot.\nPermet de dire bonjour.\nListe des commandes.\nDiscord pokémon go d'ézanville et ses alentours\nInformations sur Minecraft\nInformations sur Discord\nNouveautées du bot\nRedHat information.", inline: true}
			            ]
		    }]
		  });
}
