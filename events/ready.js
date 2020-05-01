module.exports = async client => {
  // Log that the bot is online.
//  try {
    console.log(`${client.user.tag}, ready to serve ${client.users.size} users in ${client.guilds.size} servers.`, "ready");
    // Make the bot "play the game" which is the help command with default prefix.
    client.user.setActivity(`Confiné à la maison`, {type: "PLAYING"});
//  } catch (err) {
//    next(err);
//  }
};
