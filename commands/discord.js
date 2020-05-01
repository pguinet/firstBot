exports.run = (client, message, args) => {
    message.channel.send({embed: {
	    color: 3447003,
	    title: "Discord",
	    fields: [
		 { name : "Discord", value: "Discord est une application de discussion\nOn peut y faire des lives pour partager notre expérience de jeu avec nos amis", inline: true},
	    ]
    }
       });
}
