exports.run = (client, message, args) => {
    message.channel.send("Pong du bot ! :ping_pong:").catch(console.error);
}
