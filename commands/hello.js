exports.run = (client, message, args) => {
    message.channel.send(`Bonjour à toi ! ${message.author} :hand_splayed:`).catch(console.error);
}
