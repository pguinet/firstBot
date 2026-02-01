exports.run = (client, message, args) => {
    message.channel.send({embeds: [{
	    color: 3447003,
	    title: "Update du 01/02/2026",
	    fields: [
		 { name : "Ajouts :", value: "Support Node.js 24\ndiscord.js v14", inline: true},
		 { name : "Modifications :", value: "Migration complète du bot\nSuppression d'Enmap\nNouvelle syntaxe des embeds", inline: true},
	    ]
    }]
       });
}
