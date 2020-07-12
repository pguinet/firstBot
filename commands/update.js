exports.run = (client, message, args) => {
    message.channel.send({embed: {
	    color: 3447003,
	    title: "Update du 12/07/2020",
	    fields: [
		 { name : "Ajouts :", value: "Ajout du --redhat", inline: true},
		 { name : "Modifications :", value: "Modification du --help\nModification du --pogo\nModification du --hello\nModification du --minecraft\nModification du --discord", inline: true},
	    ]
    }
       });
}
