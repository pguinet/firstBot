exports.run = (client, message, args) => {
    message.channel.send({embeds: [{
	    color: 3447003,
	    title: "Minecraft :",
	    fields: [
		 { name : "Minecraft", value: "Minecraft est un jeu de cube\nCrée par Notch en 2009\nou Markus Person\nPremier nom : Cave Game", inline: true},
	    ]
    }]
        });
}
